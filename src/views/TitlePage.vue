<template>
  <div>
    <div
      class="layout-full-width mobile-tb-left button-stroke no-content-padding header-transparent header-fw minimalist-header sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center"
    >
      <div id="Wrapper">
        <header
          :optionMenu="optionMenu"
          :name-site="dataSite.name"
          :slug-site="dataSite.slug"
          :show-title-description="false"
        ></header>
        <container
          :slides="imagesArray"
          :about-site="dataSite.summary"
          :constribuitors="dataContributors"
          :videos="dataVideos"
          :url-videos="this.urlVideoPage"
          :contact="this.dataContact"
          :details-site="sites"
        ></container>
        <footer></footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Container from '../components/Container-TitlePage';
import Footer from '../components/Footer';

import GlobalFunction from '../mixins/globalFunctions';

export default {
  name: 'TitlePage',
  components: {
    Header,
    Container,
    Footer,
  },
  mixins: [GlobalFunction],
  data() {
    return {
      detailsSite: [],
      imagesArray: [],
      dataContributors: [],
      dataVideos: [],
      dataContact: {},
    };
  },
  mounted() {
    this.getAllAboutSite()
      .then(() => {
        this.buildMenu()
          .then(() => {
            this.buildCarousel()
              .then(() => {
                this.buildBodyPage();

                this.getAllSites('no');
              })
              .catch((error) => {
                // eslint-disable-next-line no-console
                console.log('error construyendo el carousel de imagenes');
                // eslint-disable-next-line no-console
                console.log(error);
              });
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log('error construyendo el menu');
            // eslint-disable-next-line no-console
            console.log(error);
          });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error obteniendo datos del sitio');
        // eslint-disable-next-line no-console
        console.log(error);
      });
  },
  methods: {
    async buildBodyPage() {
      const quantity_page = 3;
      let urlCollaborators = '';
      let urlVideos = '';
      let urlContact;
      let responseCollaborators;
      let responseVideos;
      let responseContact;
      urlCollaborators = `${this.$domainOmeka}api/item_sets?resource_class_id=97&site_id=${this.dataSite.id}`;
      urlVideos = `${this.$domainOmeka}api/items?site_id=${this.dataSite.id}&per_page=${quantity_page}&resource_class_id=38`;
      urlContact = `${this.$domainOmeka}api/item_sets?resource_class_id=101&site_id=${this.dataSite.id}`;

      [
        responseCollaborators,
        responseVideos,
        responseContact,
      ] = await this.$axios.all([
        this.$axios.get(urlCollaborators),
        this.$axios.get(urlVideos),
        this.$axios.get(urlContact),
      ]);
      const MAX_VIDEOS = 3;
      const collaborators = responseCollaborators.data;
      const videos = responseVideos.data;
      const contact = responseContact.data;
      let id;
      let counter = 0;
      // recorremos los datos de colaboradores del sitio
      for (const data of collaborators) {
        const url_item_set = data['o:items']['@id'];
        const detail = await this.$axios.get(url_item_set);
        const url_media = detail.data[0]['o:media'][0]['@id'];
        const media_item = await this.$axios.get(url_media);

        this.dataContributors.push({
          img: this.getEmptyStringOrValue(media_item.data, 'o:original_url'),
          description: this.getAttribEmptyOrFilled(
            detail.data[0],
            'dcterms:description'
          ),
          list: this.getAttribEmptyOrFilled(
            detail.data[0],
            'bibo:contributorList'
          ).split('\n'),
        });
      }

      // recorremos los datos de contacto del sitio
      for (const data of contact) {
        const url_item = data['o:items']['@id'];
        const detail = await this.$axios.get(url_item);

        this.dataContact = {
          title: this.getAttribEmptyOrFilled(detail.data[0], 'dcterms:title'),
          description: this.getAttribEmptyOrFilled(
            detail.data[0],
            'dcterms:description'
          ),
          email: this.getAttribEmptyOrFilled(detail.data[0], 'foaf:mbox'),
          phone: this.getAttribEmptyOrFilled(detail.data[0], 'foaf:phone'),
        };
      }

      // recorremos 3 videos del sitio
      for (const video of videos) {
        for (const media of video['o:media']) {
          const url_media = media['@id'];
          const media_data = await this.$axios.get(url_media);
          const type = this.getTypeMedia(media_data.data);
          switch (type) {
            case 'video':
              this.dataVideos.push({
                id: this.getEmptyStringOrValue(video, 'o:id'),
                title: this.getAttribEmptyOrFilled(video, 'dcterms:title'),
                type,
                img_large: this.urlImageVideo,
                img_medium: this.urlImageVideo,
                url: this.getEmptyStringOrValue(
                  media_data.data,
                  'o:original_url'
                ),
              });
              counter++;
              break;
            case 'youtube':
            case 'vimeo':
              id = media_data.data.data.id;
              this.dataVideos.push({
                id: this.getEmptyStringOrValue(media_data.data, 'o:id'),
                title: this.getAttribEmptyOrFilled(
                  media_data.data,
                  'dcterms:title'
                ),
                type,
                img_large: media_data.data['o:thumbnail_urls'].large,
                img_medium: media_data.data['o:thumbnail_urls'].medium,
                url: this.buildUrlVimeoYoutube(type, id),
              });
              counter++;
              break;
          }
        }
        if (counter === MAX_VIDEOS) {
          break;
        }
      }
    },
    async buildCarousel() {
      const url_item_set = `${this.$domainOmeka}api/item_sets?resource_class_label=slider&site_id=${this.dataSite.id}`;
      const item_set = await this.$axios.get(url_item_set);
      if (localStorage.getItem('carousel') === null) {
        for (const data of item_set.data) {
          const url_detail_item_set = data['o:items']['@id'];
          const detailItem = await this.$axios.get(url_detail_item_set);
          for (const item of detailItem.data) {
            const url_media = item['o:media'][0]['@id'];
            const media_item = await this.$axios.get(url_media);
            this.imagesArray.push({
              title: this.getAttribEmptyOrFilled(item, 'dcterms:title'),
              description: this.getAttribEmptyOrFilled(
                item,
                'dcterms:description'
              ),
              media_url: this.getMediaEmptyOrFilled(media_item.data).original,
            });
          }
        }
        localStorage.setItem(
          'carousel',
          JSON.stringify({
            idPage: this.dataSite.id,
            data: this.imagesArray,
          })
        );
      } else {
        const images = JSON.parse(localStorage.getItem('carousel'));

        if (images.id === this.dataSite.id) {
          this.imagesArray = images.data;
        } else {
          localStorage.removeItem('carousel');
          this.buildCarousel();
        }
      }
    },
  },
};
</script>

<template>
  <div
    class="single single-post single-format-standard with_aside aside_right layout-full-width mobile-tb-left button-stroke header-transparent header-fw minimalist-header sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center"
  >
    <div id="Wrapper">
      <header
        :optionMenu="optionMenu"
        :name-site="dataSite.name"
        :slug-site="dataSite.slug"
        :title="detailsItem.title"
        :show-title-description="true"
      ></header>
      <container :details-item="detailsItem" :sites="sites"></container>
      <footer></footer>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Container from '../components/Container-Detail';
import Footer from '../components/Footer';
import GlobalFunction from '../mixins/globalFunctions';

export default {
  name: 'DetailView',
  components: {
    Header,
    Container,
    Footer,
  },
  mixins: [GlobalFunction],
  data() {
    return {
      detailsItem: {
        title: '',
        author: '',
        description: '',
        abstract: '',
        date: '',
        source: '',
        provenance: '',
        images: [],
        videos: [],
        audios: [],
        documents: [],
        coordinates: [],
      },
    };
  },
  mounted() {
    this.getAllAboutSite()
      .then(() => {
        this.buildMenu()
          .then(() => {
            const idItem = this.$route.params.iditem;
            this.$axios(`${this.$domainOmeka}api/items/${idItem}`).then(
              (detailItem) => {
                const { data } = detailItem;
                /* metodo para obtener las imagenes,videos, audios, documentos y coordenadas */
                this.getArrayMedia(data).then((media) => {
                  this.detailsItem.title = this.getAttribEmptyOrFilled(
                    data,
                    'dcterms:title'
                  );
                  this.detailsItem.description = this.getAttribEmptyOrFilled(
                    data,
                    'dcterms:description'
                  );
                  this.detailsItem.abstract = this.getAttribEmptyOrFilled(
                    data,
                    'dcterms:abstract'
                  );
                  this.detailsItem.date = this.getAttribEmptyOrFilled(
                    data,
                    'dcterms:date'
                  );
                  this.detailsItem.source = this.getAttribEmptyOrFilled(
                    data,
                    'dcterms:source'
                  );
                  this.detailsItem.provenance = this.getAttribEmptyOrFilled(
                    data,
                    'dcterms:provenance'
                  );
                  this.detailsItem.images = media[0];
                  this.detailsItem.videos = media[1];
                  this.detailsItem.audios = media[2];
                  this.detailsItem.documents = media[3];
                  this.detailsItem.coordinates = media[4];
                  this.detailsItem.author = this.getAttribEmptyOrFilled(
                    data,
                    'bibo:citedBy'
                  );
                });
              }
            );
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

    this.getAllSites('no');
  },
};
</script>

<template>
    <div>
        <div class="layout-full-width mobile-tb-left button-stroke no-content-padding header-transparent header-fw minimalist-header
         sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center">
            <div id="Wrapper">
                <Header v-bind:optionMenu="optionMenu"
                        v-bind:name-site="dataSite.name"
                        v-bind:slug-site="dataSite.slug"
                        v-bind:show-title-description="false"></Header>
                <Container v-bind:slides="imagesArray"
                           v-bind:aboutSite="dataSite.summary"
                           v-bind:constribuitors="dataContribuitors"
                           v-bind:videos="dataVideos"
                           v-bind:urlVideos="urlVideoPage"
                           v-bind:details-site="detailsSite"></Container>
                <Footer></Footer>
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
        name: "TitlePage",
        mixins: [GlobalFunction],
        components: {
            Header,
            Container,
            Footer
        },
        data() {
            return {
                detailsSite: [],
                urlListItem: this.$domainOmeka + 'api/items?item_set_id=',
                urlImage: this.$domainOmeka + 'api/media/',
                imagesArray: [],
                dataContribuitors: [],
                dataVideos: [],
            }
        },
        mounted() {
            this.getAllAboutSite()
                .then(() => {
                    this.buildMenu()
                        .then(() => {
                            this.buildCarousel()
                                .then(() => {
                                    this.buildBodyPage();
                                })
                                .catch((error) => {
                                    // eslint-disable-next-line no-console
                                    console.log('error construyendo el carousel de imagenes');
                                    // eslint-disable-next-line no-console
                                    console.log(error);
                                })
                        })
                        .catch((error) => {
                            // eslint-disable-next-line no-console
                            console.log('error construyendo el menu');
                            // eslint-disable-next-line no-console
                            console.log(error);
                        })
                })
                .catch((error) => {
                    // eslint-disable-next-line no-console
                    console.log('error obteniendo datos del sitio');
                    // eslint-disable-next-line no-console
                    console.log(error);
                })


            // this.getItemsSetId()
            //     .then((response) => {
            //         let itemSet = response;
            //         this.getDetailsSite(itemSet)
            //             .then((responseData => {
            //                 this.detailsSite = responseData[0];
            //                 this.buildMenu(responseData[1])
            //                     .then((dataSite) => {
            //                         this.buildBodyPage(dataSite);
            //                     });
            //             }))
            //     });
        },
        methods: {
            getItemsSetId() {
                return new Promise((resolve) => {
                    let item_set_id = [];
                    this.$axios(this.$domainOmeka + 'api/item_sets?resource_class_id=27')
                        .then((response) => {
                            //recorro los items
                            response.data.forEach((item) => {

                                this.$axios(item['o:items']['@id'])
                                    .then((response2) => {

                                        this.$axios(response2.data[0]['o:media'][0]['@id'])
                                            .then((response3) => {
                                                item_set_id.push({
                                                    id_item_set: item['o:id'],
                                                    url_img_site: response3.data['o:original_url'],
                                                });
                                                resolve(item_set_id);
                                            });

                                    });

                            });

                        });
                })
            },
            async buildBodyPage() {

                let urlColaboradores = '', urlVideos = '', responseColaborares, responseVideos;
                urlColaboradores = this.$domainOmeka + 'api/item_sets?resource_class_id=97&site_id=' + this.dataSite.id;
                urlVideos = this.$domainOmeka + 'api/item_sets?resource_class_id=38&site_id=' + this.dataSite.id;


                [responseColaborares, responseVideos] = await this.$axios.all([
                    this.$axios.get(urlColaboradores),
                    this.$axios.get(urlVideos),
                ]);

                let colaboradores = responseColaborares.data;
                let videos = responseVideos.data;
                //recorremos los colaboradores
                for (const data of colaboradores) {
                    let url_item_set = data['o:items']['@id'];
                    let detail = await this.$axios.get(url_item_set);
                    let url_media = detail.data[0]['o:media'][0]['@id'];
                    let media_item = await this.$axios.get(url_media);

                    this.dataContribuitors.push({
                        img: this.getEmptyStringOrValue(media_item.data, 'o:original_url'),
                        description: this.getAttribEmptyOrFilled(detail.data[0], 'dcterms:description'),
                        list: this.getAttribEmptyOrFilled(detail.data[0], 'bibo:contributorList').split('\n'),
                    });
                }

            },
            async buildCarousel() {
                let url_item_set = this.$domainOmeka + 'api/item_sets?resource_class_label=slider&site_id=' + this.dataSite.id;
                const item_set = await this.$axios.get(url_item_set);
                if (localStorage.getItem('carousel') === null) {
                    for (const data of item_set.data) {
                        let url_detail_item_set = data['o:items']['@id'];
                        let detailItem = await this.$axios.get(url_detail_item_set);
                        for (const item of detailItem.data) {
                            let url_media = item['o:media'][0]['@id'];
                            let media_item = await this.$axios.get(url_media);
                            this.imagesArray.push({
                                title: this.getAttribEmptyOrFilled(item, 'dcterms:title'),
                                description: this.getAttribEmptyOrFilled(item, 'dcterms:description'),
                                media_url: this.getMediaEmptyOrFilled(media_item.data),
                            });
                        }
                    }
                    localStorage.setItem('carousel', JSON.stringify(this.imagesArray));
                } else {
                    let images;
                    images = JSON.parse(localStorage.getItem('carousel'));
                    this.imagesArray = images;
                }
            }
        }
    }
</script>
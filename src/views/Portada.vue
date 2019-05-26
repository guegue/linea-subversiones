<template>
    <div>
        <div class="layout-full-width mobile-tb-left button-stroke no-content-padding header-transparent header-fw minimalist-header
         sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center">
            <div id="Wrapper">
                <Header v-bind:optionMenu="optionMenu"></Header>
                <Container v-bind:slides="containerImgs"
                           v-bind:aboutSite="aboutSite"
                           v-bind:constribuitors="dataContribuitors"
                           v-bind:videos="dataVideos"></Container>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header';
    import Container from '../components/Container';
    import Footer from '../components/Footer';

    export default {
        name: "Portada",
        components: {
            Header,
            Container,
            Footer
        },
        data() {
            return {
                optionMenu: [],
                pageSites: [],
                urlSite: this.$domainOmeka + 'api/sites/',
                urlItem: this.$domainOmeka + 'api/item_sets/',
                urlListItem: this.$domainOmeka + 'api/items?item_set_id=',
                urlImage: this.$domainOmeka + 'api/media/',
                id_items: [],
                containerImgs: [],
                aboutSite: '',
                dataContribuitors: [],
                dataVideos: []
            }
        },
        mounted() {
            this.buildMenu();
        },
        methods: {
            buildMenu() {
                let idSite = 13;
                this.$axios(this.urlSite + idSite)
                    .then((response) => {
                        if (response.data['o:page'] !== undefined) {
                            let pages = response.data['o:page'];
                            let items = response.data['o:item_pool'];
                            this.aboutSite = response.data['o:summary'].replace(/\r/g, '').split('\n');

                            pages.forEach((page) => {
                                this.pageSites.push(page['@id']);
                            });

                            items.item_set_id.forEach((id) => {
                                this.id_items.push(id);
                            })
                        }
                        this.buildCarousel(this.id_items);

                        if (this.pageSites.length > 0) {
                            this.pageSites.forEach((page) => {
                                this.$axios(page)
                                    .then((response) => {
                                        let dataResponse = response.data;

                                        let pageData = {
                                            id: dataResponse['o:ID'],
                                            url: dataResponse['@id'],
                                            slug: dataResponse['o:slug'],
                                            title: dataResponse['o:title'],
                                        };

                                        this.optionMenu.push(pageData)
                                    })
                            })
                        }
                    });
            },
            buildCarousel(id_items) {
                //recorremos los ids de los items
                id_items.forEach((id_item) => {
                    //consultamos a una url para obtener detalles de cada item que es recorrido
                    this.$axios(this.urlItem + id_item)
                        .then((response) => {

                            let dataItem = response.data;//almacenamos la respuesta


                            //validamos si la propiedad 'o:resource_class' existe previamente
                            if (dataItem['o:resource_class'] !== null) {

                                this.$axios(this.urlListItem + id_item)
                                    .then((response2) => {
                                        response2.data.forEach((dataResponse) => {
                                            // console.log(dataResponse);
                                            this.$axios(dataResponse['o:media'][0]['@id'])
                                                .then((response3) => {
                                                    // 27 = InteractiveResource, 38 = AudioVisualDocument
                                                    if (dataItem['o:resource_class']['o:id'] === 27) {
                                                        let dataImage = {
                                                            id: dataResponse['o:media'][0]['o:id'],
                                                            title: dataResponse['dcterms:title'][0]['@value'],
                                                            description: dataResponse['dcterms:description'][0]['@value'],
                                                            mediaurl: response3.data['o:original_url'],
                                                        };
                                                        this.containerImgs.push(dataImage);
                                                    } else if (dataItem['o:resource_class']['o:id'] === 38) {
                                                        let dataVideo = {
                                                            id: response3.data['o:item']['o:id'],
                                                            title: dataResponse['dcterms:title'][0]['@value'],
                                                            mediaurl: response3.data['o:original_url'],
                                                            typefile: response3.data['o:media_type'],
                                                            typeUpload: response3.data['o:ingester'].toLowerCase(),
                                                        };
                                                        this.dataVideos.push(dataVideo);
                                                    } else {
                                                        if (dataResponse['bibo:contributorList'] !== undefined) {
                                                            let dataContribuitors = {
                                                                img: response3.data['o:original_url'],
                                                                descripcion: dataResponse['dcterms:description'][0]['@value'],
                                                                list: dataResponse['bibo:contributorList'][0]['@value'].split('\n'),
                                                            };
                                                            this.dataContribuitors.push(dataContribuitors);
                                                        }

                                                    }
                                                });
                                        })
                                    });

                            }

                        })


                })
            }
        }
    }
</script>
<template>
    <div>
        <div class="layout-full-width mobile-tb-left button-stroke no-content-padding header-transparent header-fw minimalist-header
         sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center">
            <div id="Wrapper">
                <Header v-bind:optionMenu="optionMenu"
                        v-bind:name-site="nameSite"
                        v-bind:slug-site="slugSite"></Header>
                <Container v-bind:slides="containerImgs"
                           v-bind:aboutSite="aboutSite"
                           v-bind:constribuitors="dataContribuitors"
                           v-bind:videos="dataVideos"
                           v-bind:details-site="detailsSite"></Container>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header';
    import Container from '../components/Container';
    import Footer from '../components/Footer';

    import GlobalFuncion from '../mixins/globalFunctions';

    export default {
        name: "Portada",
        mixins: [GlobalFuncion],
        components: {
            Header,
            Container,
            Footer
        },
        data() {
            return {
                optionMenu: [],
                detailsSite: [],
                urlSite: this.$domainOmeka + 'api/sites/',
                urlItem: this.$domainOmeka + 'api/item_sets/',
                urlListItem: this.$domainOmeka + 'api/items?item_set_id=',
                urlImage: this.$domainOmeka + 'api/media/',
                id_items: [],
                containerImgs: [],
                dataContribuitors: [],
                dataVideos: []
            }
        },
        mounted() {
            this.getItemsSetId()
                .then((response) => {
                    this.getDetailsSite(response)
                        .then((responseData => {
                            this.detailsSite = responseData[0];
                            this.buildMenu(responseData[1])
                                .then((dataSite) => {
                                    this.buildBodyPage(dataSite);
                                });
                        }))
                });
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
            buildBodyPage(id_items) {
                //recorremos los ids de los items
                id_items.forEach((id_item) => {

                    this.$axios(this.urlItem + id_item)
                        .then((response) => {
                            let dataItem = response.data;

                            //validamos si la propiedad 'o:resource_class' existe previamente
                            if (dataItem['o:resource_class'] !== null) {
                                this.$axios(this.urlListItem + id_item)
                                    .then((response2) => {

                                        response2.data.forEach((dataResponse) => {

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
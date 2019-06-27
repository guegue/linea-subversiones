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
        name: "Portada",
        mixins: [GlobalFunction],
        components: {
            Header,
            Container,
            Footer
        },
        data() {
            return {
                detailsSite: [],
                urlItem: this.$domainOmeka + 'api/item_sets/',
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
            buildBodyPage(id_items_set) {

                let urlColaboradores='',urlVideos='';
                urlColaboradores = this.$domainOmeka + 'api/item_sets?resource_class_id=97&site_id=' + this.dataSite.id;
                urlVideos = this.$domainOmeka + 'api/item_sets?resource_class_id=38&site_id=' + this.dataSite.id;
                // this.$axios.all([
                //     this.$axios.get(urlColaboradores),
                //     this.$axios.get(urlVideos),
                // ])
                //     .then(this.$axios.spread(responseColaborares,responseVideos)=>{
                //
                // })

                // for (const id_item of id_items_set) {
                //     this.$axios(this.urlListItem + id_item)
                //         .then((response) => {
                //             let dataItem = response.data;
                //             // for (const item of dataItem) {
                //             // console.log(item);
                //             // }
                //             // if (dataItem['o:resource_class'] !== null) {
                //             //     console.log(dataItem['o:resource_class']);
                //             // }
                //         });
                //
                // }
                //recorremos los ids de los items
                // id_items.forEach((id_item) => {
                //
                //     this.$axios(this.urlItem + id_item)
                //         .then((response) => {
                //             let dataItem = response.data;
                //
                //             //validamos si la propiedad 'o:resource_class' existe previamente
                //             if (dataItem['o:resource_class'] !== null) {
                //                 this.$axios(this.urlListItem + id_item)
                //                     .then((response2) => {
                //                         let counter = 0;
                //                         console.log(response2);
                //
                //                         response2.data.forEach((dataResponse) => {
                //                             // console.log(dataResponse['o:media']);
                //                             this.$axios(dataResponse['o:media'][0]['@id'])
                //                                 .then((response3) => {
                //                                     // console.log(response3);
                //                                     // 27 = InteractiveResource, 38 = AudioVisualDocument
                //                                     if (dataItem['o:resource_class']['o:id'] === 27) {
                //                                         let dataImage = {
                //                                             id: dataResponse['o:media'][0]['o:id'],
                //                                             title: this.getAttribEmptyOrFilled(dataResponse, 'dcterms:title'),
                //                                             description: this.getAttribEmptyOrFilled(dataResponse, 'dcterms:description'),
                //                                             media_url: this.getMediaEmptyOrFilled(response3.data),
                //                                         };
                //                                         this.containerImgs.push(dataImage);
                //                                     } else if (dataItem['o:resource_class']['o:id'] === 38 && counter <= 6) {
                //                                         let url_media = '';
                //                                         let media_type = this.getTypeMedia(response3.data);
                //                                         let urls_images = {
                //                                             large: this.urlImageVideo,
                //                                             medium: this.urlImageVideo,
                //                                         };
                //                                         if (response3.data['o:original_url'] !== null) {
                //                                             url_media = response3.data['o:original_url']
                //                                         } else {
                //                                             let id_video = response3.data['data']['id'];
                //                                             urls_images.large = response3.data['o:thumbnail_urls']['large'];
                //                                             urls_images.me = response3.data['o:thumbnail_urls']['medium'];
                //                                             url_media = this.buildUrlVimeoYoutube(media_type, id_video);
                //                                         }
                //
                //                                         let dataVideo = {
                //                                             id: response3.data['o:item']['o:id'],
                //                                             title: this.getAttribEmptyOrFilled(dataResponse, 'dcterms:title'),
                //                                             url: url_media,
                //                                             type: media_type,
                //                                             img_large: urls_images.large,
                //                                             img_medium: urls_images.medium,
                //                                         };
                //                                         this.dataVideos.push(dataVideo);
                //                                         console.log(this.dataVideos);
                //                                         counter++;
                //                                     } else {
                //                                         if (dataResponse['bibo:contributorList'] !== undefined) {
                //                                             let dataContribuitors = {
                //                                                 img: this.getEmptyStringOrValue(response3.data, 'o:original_url'),
                //                                                 description: this.getAttribEmptyOrFilled(dataResponse, 'dcterms:description'),
                //                                                 list: this.getAttribEmptyOrFilled(dataResponse, 'bibo:contributorList').split('\n'),
                //                                             };
                //                                             this.dataContribuitors.push(dataContribuitors);
                //                                         }
                //
                //                                     }
                //                                 });
                //
                //                         })
                //                     });
                //
                //             }
                //
                //         })
                //
                //
                // })
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
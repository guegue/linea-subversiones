<template>
    <div class="blog layout-full-width mobile-tb-left button-stroke header-transparent header-fw minimalist-header
    sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center">
        <div id="Wrapper">
            <div class="background-loading"></div>
            <Header v-bind:optionMenu="optionMenu"
                    v-bind:name-site="dataSite.name"
                    v-bind:slug-site="dataSite.slug"
                    v-bind:show-title-description="(title.length > 0)"
                    v-bind:title="title"></Header>
            <Container v-bind:contents="contents"
                       v-bind:related_content="relatedContent"
                       v-bind:summary="summary"
                       v-bind:names="names"
                       v-bind:descriptions="descriptions"></Container>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>

    import GlobalFunction from '../mixins/globalFunctions';
    import Header from '../components/Header';
    import Container from '../components/Container-ListView';
    import Footer from '../components/Footer';

    export default {
        name: "Videos",
        mixins: [GlobalFunction],
        components: {
            Header,
            Container,
            Footer,
        },
        data() {
            return {
                names: {
                    site: null,
                    page: null,
                },
                contents: [],
                title: '',
                summary: '',
                descriptions: [],
                relatedContent: [],
                littleArray: [],
                quantity_page: 1,
                itemsShow: [],
                flag: false,
            }
        },
        mounted() {
            this.flag = true;
            this.initData();
            this.$eventBus.$on('empty', () => {

                if (!this.flag) {
                    this.initData();
                }

            });
        },
        methods: {
            initData() {

                this.clearVariables();
                this.getAllAboutSite()
                    .then(() => {
                        this.buildMenu()
                            .then(() => {
                                this.names.page = this.$route.params.namepage;
                                for (const option of this.optionMenu) {
                                    if (option.slug === this.names.page) {
                                        this.title = option.title;
                                        this.names.site = this.$route.params.namesite;
                                        this.getContentFromPage(option.url);
                                    }
                                }
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
                    });
            },
            async getContentFromPage(urlPage) {
                this.$loading('Wrapper');
                const answer = await this.$axios(urlPage);
                let counter = 0, counter_page = 0, limit_array = 10;
                this.flag = false;
                /* *
                 * valido si la propiedad o:block cuando la opcion de menu es una pagina y sino es item set
                 * para luego obtener la informacion dentro de esa pagina o item set
                * */
                if (answer.data['o:block'] != null) {
                    for (const detail of answer.data['o:block']) {
                        let typeLayout = detail['o:layout'].toLowerCase();
                        let size_item_set = 0, url_item = '';
                        let responseItem, responseMedia;
                        if (typeLayout === 'itemwithmetadata') {
                            size_item_set = detail['o:attachment'].length;
                            //recorro los items relacionados a una pagina
                            for (const data of detail['o:attachment']) {
                                let url_media = data['o:media']['@id'];
                                url_item = data['o:item']['@id'];

                                [responseItem, responseMedia] = await this.$axios.all([
                                    this.$axios.get(url_item),
                                    this.$axios.get(url_media),
                                ]);
                                this.littleArray.push({
                                    id: responseItem.data['o:id'],
                                    title: this.getAttribEmptyOrFilled(responseItem.data, 'dcterms:title'),
                                    description: this.getAttribEmptyOrFilled(responseItem.data, 'dcterms:description'),
                                    url_img: this.getMediaEmptyOrFilled(responseMedia.data, 'o:original_url').original,
                                    url_img_large: responseMedia.data['o:thumbnail_urls'].large,
                                    date: this.getAttribEmptyOrFilled(responseItem.data, 'dcterms:date'),
                                    author: this.getAttribEmptyOrFilled(responseItem.data, 'bibo:citedBy'),
                                });
                                counter++;

                                if ((counter === size_item_set) || (counter % limit_array === 0)) {
                                    counter_page++;
                                    this.contents.push({
                                        id_page: counter_page,
                                        content: this.littleArray,
                                    });

                                    this.littleArray = [];
                                }
                            }
                        } else if (typeLayout === 'itemshowcase') {
                            size_item_set = detail['o:attachment'].length;
                            //recorro los items relacionados a una pagina
                            for (const data of detail['o:attachment']) {
                                url_item = data['o:item']['@id'];

                                responseItem = await this.$axios.get(url_item);

                                let media = await  this.getFirstImageFound(responseItem.data);
                                this.littleArray.push({
                                    id: responseItem.data['o:id'],
                                    title: this.getAttribEmptyOrFilled(responseItem.data, 'dcterms:title'),
                                    description: this.getAttribEmptyOrFilled(responseItem.data, 'dcterms:description'),
                                    url_img: media.original,
                                    url_img_large: media.large,
                                    date: this.getAttribEmptyOrFilled(responseItem.data, 'dcterms:date'),
                                    author: this.getAttribEmptyOrFilled(responseItem.data, 'bibo:citedBy'),
                                });
                                counter++;

                                if ((counter === size_item_set) || (counter % limit_array === 0)) {
                                    counter_page++;
                                    this.contents.push({
                                        id_page: counter_page,
                                        content: this.littleArray,
                                    });
                                    this.littleArray = [];
                                }
                            }
                        } else if (typeLayout === 'html') {
                            //agregamos las descripciones de una pagina a un arreglo de descripciones que estan en html
                            this.descriptions.push(detail['o:data']['html'])
                        }
                    }
                } else {
                    let itemSetUrl = answer.data['o:items']['@id'];
                    let dataItemSet = await this.$axios(itemSetUrl);

                    //guardo la descripcion del conjunto de items
                    this.summary = this.getAttribEmptyOrFilled(answer.data, 'dcterms:description');
                    let size_item_set = dataItemSet.data.length;

                    //recorro todos los registros que me trae la consulta de itemSetUrl
                    for (const data of dataItemSet.data) {
                        //valido si la propiedad o:media existe, para obtener una imagen que represente a cada contenido
                        if (data['o:media'] !== null) {
                            let image = await this.getFirstImageFound(data);
                            this.littleArray.push({
                                id: data['o:id'],
                                title: this.getAttribEmptyOrFilled(data, 'dcterms:title'),
                                description: this.getAttribEmptyOrFilled(data, 'dcterms:description'),
                                url_img: image.original,
                                url_img_large: image.large,
                                date: this.getAttribEmptyOrFilled(data, 'dcterms:date'),
                                author: this.getAttribEmptyOrFilled(data, 'bibo:citedBy'),
                            });
                        }
                        counter++;

                        if ((counter === size_item_set) || (counter % limit_array === 0)) {
                            counter_page++;
                            this.contents.push({
                                id_page: counter_page,
                                content: this.littleArray,
                            });
                            this.littleArray = [];
                        }
                    }

                    if (answer.data['dcterms:isPartOf'] !== undefined) {
                        for (const related of answer.data['dcterms:isPartOf']) {
                            let type_resource = related['value_resource_name'];
                            let url = '';
                            let id_resource = related['value_resource_id'];
                            if (type_resource === 'item_sets') {
                                url = this.$domainOmeka + `api/items?item_set_id=${id_resource}`;
                                const item_set = await this.$axios(url);
                                for (const item of item_set.data) {
                                    this.relatedContent.push({
                                        id: item['o:id'],
                                        title: this.getAttribEmptyOrFilled(item, 'dcterms:title'),
                                        description: this.getAttribEmptyOrFilled(item, 'dcterms:description'),
                                        author: this.getAttribEmptyOrFilled(item, 'bibo:citedBy'),
                                    });
                                }
                            } else {
                                url = this.$domainOmeka + `api/items/${id_resource}`;
                                const item = await this.$axios(url);
                                this.relatedContent.push({
                                    id: item.data['o:id'],
                                    title: this.getAttribEmptyOrFilled(item.data, 'dcterms:title'),
                                    description: this.getAttribEmptyOrFilled(item.data, 'dcterms:description'),
                                    date: this.getAttribEmptyOrFilled(item.data, 'dcterms:date'),
                                    author: this.getAttribEmptyOrFilled(item.data, 'bibo:citedBy'),
                                });
                            }
                        }
                    }
                }
                this.$removeLoading('Wrapper');
            },
            clearVariables() {
                this.contents = [];
                this.title = '';
                this.summary = '';
                this.descriptions = [];
                this.relatedContent = [];
                this.littleArray = [];
                this.quantity_page = 1;
                this.itemsShow = [];
            }
        }
    }
</script>

<style scoped>

</style>

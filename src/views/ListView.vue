<template>
    <div class="blog layout-full-width mobile-tb-left button-stroke header-transparent header-fw minimalist-header
    sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center">
        <div id="Wrapper">
            <Header v-bind:optionMenu="optionMenu"
                    v-bind:name-site="nameSite"
                    v-bind:slug-site="slugSite"
                    v-bind:show-title-description="(title.length > 0)"
                    v-bind:title="title"></Header>
            <Container v-bind:contents="contents"
                       v-bind:related_content="relatedContent"
                       v-bind:summary="summary"
                       v-bind:url-path="urlPath"
                       v-bind:descriptions="descriptions"></Container>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>

    import GlobalFunction from '../mixins/globalFunctions';
    import Header from '../components/Header';
    import Container from '../components/Container-Article';
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
                namePage: null,
                contents: [],
                title: '',
                summary: '',
                descriptions: [],
                urlPath: '',
                relatedContent: [],
            }
        },
        mounted() {
            this.namePage = this.$route.params.namepage.toLowerCase();
            this.getDetailsSite([])
                .then((response) => {
                    let idSite = response[1];
                    this.buildMenu(idSite)
                        .then(() => {
                            this.$nextTick(() => {
                                this.optionMenu.forEach((option) => {
                                    if (option.slug === this.namePage) {
                                        this.title = option.title;
                                        this.urlPath = '/' + this.$route.params.namesite + '/page/' + this.$route.params.namepage + '/detail/';
                                        this.getContentFromPage(option.url);
                                    }
                                })
                            })

                        })
                });
        },
        methods: {
            async getContentFromPage(urlPage) {
                const answer = await this.$axios(urlPage);
                /* *
                 * valido si la propiedad o:block cuando la opcion de menu es una pagina y sino es item set
                 * para luego obtener la informacion dentro de esa pagina o item set
                * */
                if (answer.data['o:block'] != null) {
                    for (const detail of answer.data['o:block']) {
                        let typeLayout = detail['o:layout'].toLowerCase();
                        if (typeLayout === 'itemwithmetadata') {
                            //recorro los items relacionados a una pagina
                            for (const data of detail['o:attachment']) {
                                //consultamos a url para obtener los detalles del item
                                const item = await this.$axios(data['o:item']['@id']);
                                //consultamos a url de media que trae un item
                                const media = await this.$axios(data['o:media']['@id']);

                                this.contents.push({
                                    id: '',
                                    title: this.getAttribEmptyOrFilled(item.data, 'dcterms:title'),
                                    description: this.getAttribEmptyOrFilled(item.data, 'dcterms:description'),
                                    url_img: this.getMediaEmptyOrFilled(media.data, 'o:original_url'),
                                    alternative: this.getAttribEmptyOrFilled(item.data, 'dcterms:alternative'),
                                    date: this.getAttribEmptyOrFilled(item.data, 'dcterms:date'),
                                    provenance: this.getAttribEmptyOrFilled(item.data, 'dcterms:provenance'),
                                    source: this.getAttribEmptyOrFilled(item.data, 'dcterms:source'),
                                    author: this.getAttribEmptyOrFilled(item.data, 'bibo:citedBy'),
                                });
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

                    //recorro todos los registros que me trae la consulta de itemSetUrl
                    for (const data of dataItemSet.data) {
                        //valido si la propiedad o:media existe, para obtener una imagen que represente a cada contenido
                        if (data['o:media'] !== null) {
                            this.getFirstImageFound(data)
                                .then((image) => {
                                    this.contents.push({
                                        id: data['o:id'],
                                        title: this.getAttribEmptyOrFilled(data, 'dcterms:title'),
                                        description: this.getAttribEmptyOrFilled(data, 'dcterms:description'),
                                        url_img: image,
                                        alternative: this.getAttribEmptyOrFilled(data, 'dcterms:alternative'),
                                        date: this.getAttribEmptyOrFilled(data, 'dcterms:date'),
                                        provenance: this.getAttribEmptyOrFilled(data, 'dcterms:provenance'),
                                        source: this.getAttribEmptyOrFilled(data, 'dcterms:source'),
                                        author: this.getAttribEmptyOrFilled(data, 'bibo:citedBy'),
                                    });
                                });
                        }
                    }
                    console.log(this.contents);

                    if (answer.data['dcterms:isPartOf'] !== undefined) {
                        for (const related of answer.data['dcterms:isPartOf']) {
                            let type_resource = related['value_resource_name'];
                            if (type_resource === 'item_sets') {
                                let url = this.$domainOmeka + 'api/items?item_set_id=' + related['value_resource_id'];
                                let item_set = await this.$axios(url);
                                for (const item of item_set.data) {
                                    if (item['o:media'] !== null) {
                                        this.getFirstImageFound(item)
                                            .then((image) => {
                                                this.relatedContent.push({
                                                    id: item['o:id'],
                                                    title: this.getAttribEmptyOrFilled(item, 'dcterms:title'),
                                                    description: this.getAttribEmptyOrFilled(item, 'dcterms:description'),
                                                    date: this.getAttribEmptyOrFilled(item, 'dcterms:date'),
                                                    source: this.getAttribEmptyOrFilled(item, 'dcterms:source'),
                                                    url_img: image,
                                                    author: this.getAttribEmptyOrFilled(item, 'bibo:citedBy'),
                                                });
                                            })
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
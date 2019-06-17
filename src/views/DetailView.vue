<template>
    <div class="single single-post single-format-standard with_aside aside_right layout-full-width mobile-tb-left button-stroke header-transparent header-fw
    minimalist-header sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center">
        <div id="Wrapper">
            <Header v-bind:optionMenu="optionMenu"
                    v-bind:name-site="nameSite"
                    v-bind:slug-site="slugSite"
                    v-bind:title="detailsItem.title"
                    v-bind:show-title-description="true"></Header>
            <Container v-bind:details-item="detailsItem"
                       v-bind:back-page="urlPath"></Container>
            <Footer></Footer>
        </div>
    </div>

</template>

<script>
    import Header from '../components/Header';
    import Container from '../components/Container-Detail';
    import Footer from '../components/Footer';
    import GlobalFunction from '../mixins/globalFunctions';

    export default {
        name: "DetailView",
        mixins: [GlobalFunction],
        components: {
            Header,
            Container,
            Footer
        },
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
                urlPath: '',
            }
        },
        mounted() {
            this.getDetailsSite([])
                .then((response) => {
                    let idSite = response[1];
                    this.buildMenu(idSite)
                        .then(() => {
                            let idItem = this.$route.params.id;
                            this.urlPath = '/' + this.$route.params.namesite + '/page/' + this.$route.params.namepage;
                            this.$axios(this.$domainOmeka + 'api/items/' + idItem)
                                .then((detailItem) => {
                                    let data = detailItem.data;
                                    this.getArrayMedia(data['o:media'])
                                        .then((media) => {
                                            this.detailsItem.title = this.getAttribEmptyOrFilled(data, 'dcterms:title');
                                            this.detailsItem.description = this.getAttribEmptyOrFilled(data, 'dcterms:description');
                                            this.detailsItem.abstract = this.getAttribEmptyOrFilled(data, 'dcterms:abstract');
                                            this.detailsItem.date = this.getAttribEmptyOrFilled(data, 'dcterms:date');
                                            this.detailsItem.source = this.getAttribEmptyOrFilled(data, 'dcterms:source');
                                            this.detailsItem.provenance = this.getAttribEmptyOrFilled(data, 'dcterms:provenance');
                                            this.detailsItem.images = media[0];
                                            this.detailsItem.videos = media[1];
                                            this.detailsItem.audios = media[2];
                                            this.detailsItem.documents = media[3];
                                            this.detailsItem.coordinates = this.getCoordinatesMapArray(data['o-module-mapping:marker']);
                                            this.detailsItem.author = this.getAttribEmptyOrFilled(data, 'bibo:citedBy');
                                        });

                                })

                        })
                });
        }
    }
</script>

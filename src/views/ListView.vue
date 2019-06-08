<template>
    <div class="blog layout-full-width mobile-tb-left button-stroke header-transparent header-fw minimalist-header
    sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center">
        <div id="Wrapper">
            <Header v-bind:optionMenu="optionMenu"
                    v-bind:name-site="nameSite"
                    v-bind:slug-site="slugSite"></Header>
            <Container v-bind:contents="contents"></Container>
            <Footer></Footer>

        </div>
    </div>
</template>

<script>

    import GlobalFuncion from '../mixins/globalFunctions';
    import Header from '../components/Header';
    import Container from '../components/Container-Article';
    import Footer from '../components/Footer';

    export default {
        name: "Videos",
        mixins: [GlobalFuncion],
        components: {
            Header,
            Container,
            Footer,
        },
        data() {
            return {
                namePage: null,
                contents: [],
            }
        },
        mounted: function () {
            this.namePage = this.$route.params.namepage.toLowerCase();
            this.getDetailsSite([])
                .then((response) => {
                    let idSite = response[1];
                    this.buildMenu(idSite)
                        .then(() => {
                            this.$nextTick(() => {
                                this.optionMenu.forEach((option) => {
                                    if (option.slug === this.namePage) {
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
                for (const detail of answer.data['o:block']) {
                    if (detail['o:layout'].toLowerCase() === 'itemwithmetadata') {
                        for (const data of detail['o:attachment']) {
                            const item = await this.$axios(data['o:item']['@id']);
                            const media = await this.$axios(data['o:media']['@id']);

                            this.contents.push({
                                title: this.getAttribEmptyOrFilled(item.data, 'dcterms:title'),
                                description: this.getAttribEmptyOrFilled(item.data, 'dcterms:description'),
                                url_img: this.getMediaEmptyOrFilled(media.data,'o:original_url'),
                                alternative: this.getAttribEmptyOrFilled(item.data, 'dcterms:alternative'),
                                date: this.getAttribEmptyOrFilled(item.data, 'dcterms:date'),
                                provenance: this.getAttribEmptyOrFilled(item.data, 'dcterms:provenance'),
                                source: this.getAttribEmptyOrFilled(item.data, 'dcterms:source'),
                                author: this.getAttribEmptyOrFilled(item.data, 'bibo:citedBy'),
                            });
                        }
                    }
                }
            },
            getAttribEmptyOrFilled(objectArray, attribName) {
                return (objectArray[attribName] !== undefined) ? objectArray[attribName][0]['@value'] : ''
            },
            getMediaEmptyOrFilled(objectArray, attribName){
                return (objectArray[attribName] !== undefined) ? objectArray[attribName] : 'images/home_space_blog3-1200x800.jpg'

            }
        }
    }
</script>

<style scoped>

</style>
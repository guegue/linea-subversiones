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
                typeImgs: [
                    'image/jpeg',
                    'image/png',
                ]
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
                if (answer.data['o:block'] != null) {
                    for (const detail of answer.data['o:block']) {
                        let typeLayout = detail['o:layout'].toLowerCase();
                        if (typeLayout === 'itemwithmetadata') {
                            for (const data of detail['o:attachment']) {
                                const item = await this.$axios(data['o:item']['@id']);
                                const media = await this.$axios(data['o:media']['@id']);

                                this.contents.push({
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
                        }
                    }
                } else {
                    let itemSetUrl = answer.data['o:items']['@id'];
                    let dataItemSet = await this.$axios(itemSetUrl);
                    for (const data of dataItemSet.data) {
                        let media = '';
                        if (data['o:media'] !== null) {
                            for (const dataMedia of data['o:media']) {
                                let imgData = await this.$axios(dataMedia['@id']);
                                let mediaType = imgData.data['o:media_type'];
                                if (this.typeImgs.indexOf(mediaType) >= 0 && imgData.data['o:original_url'] !== null) {
                                    media = this.getMediaEmptyOrFilled(imgData.data, 'o:original_url');
                                    break;
                                }
                            }
                        }
                        this.contents.push({
                            title: this.getAttribEmptyOrFilled(data, 'dcterms:title'),
                            description: this.getAttribEmptyOrFilled(data, 'dcterms:description'),
                            url_img: media,
                            alternative: this.getAttribEmptyOrFilled(data, 'dcterms:alternative'),
                            date: this.getAttribEmptyOrFilled(data, 'dcterms:date'),
                            provenance: this.getAttribEmptyOrFilled(data, 'dcterms:provenance'),
                            source: this.getAttribEmptyOrFilled(data, 'dcterms:source'),
                            author: this.getAttribEmptyOrFilled(data, 'bibo:citedBy'),
                        });


                    }
                }
            },
            getAttribEmptyOrFilled(objectArray, attribName) {
                return (objectArray[attribName] !== undefined) ? objectArray[attribName][0]['@value'] : '';
            },
            getMediaEmptyOrFilled(objectArray, attribName) {
                return (objectArray[attribName] !== undefined) ? objectArray[attribName] : '';

            }
        }
    }
</script>

<style scoped>

</style>
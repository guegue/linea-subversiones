<template>
    <div class="blog layout-full-width mobile-tb-left button-stroke header-transparent header-fw minimalist-header
    sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center">
        <div id="Wrapper">
            <Header v-bind:optionMenu="optionMenu"
                    v-bind:name-site="nameSite"
                    v-bind:slug-site="slugSite"></Header>
            <Container></Container>
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
                data: null
            }
        },
        mounted() {
            this.getDetailsSite([])
                .then((response) => {
                    let idSite = response[1];
                    this.buildMenu(idSite)
                        .then(() => {
                            let a = [];
                            a.push({
                                a:1,
                                b:2
                            });
                            a.push({
                                a:1,
                                b:2
                            });
                            console.log(a);
                            // console.log(this.$route.params);

                            // for (let option in this.optionMenu) {
                            //     console.log(this.optionMenu[option]);
                            // }

                        })
                });
        }
    }
</script>

<style scoped>

</style>
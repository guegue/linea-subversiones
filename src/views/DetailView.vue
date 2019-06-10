<template>
    <div class="single single-post single-format-standard with_aside aside_right layout-full-width mobile-tb-left button-stroke header-transparent header-fw
    minimalist-header sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center">
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
        },mounted() {
            this.getDetailsSite([])
                .then((response) => {
                    let idSite = response[1];
                    this.buildMenu(idSite)
                        .then(() => {


                        })
                });
        }
    }
</script>

<style scoped>

</style>
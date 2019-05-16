<template>
    <div>
        <div class="layout-full-width mobile-tb-left button-stroke no-content-padding header-transparent header-fw minimalist-header
         sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center">
            <div id="Wrapper">
                <Header></Header>
                <Container></Container>
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
        }
    }
</script>

<style scoped>

</style>
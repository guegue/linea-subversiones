<template>
    <div>
        <pre>
<!--            {{window.localStorage.getItem('data')}}-->
        </pre>
        <Header></Header>
    </div>
</template>

<script>

    import GlobalFuncion from '../mixins/globalFunctions';
    import Header from '../components/Header';

    export default {
        name: "Videos",
        mixins: [GlobalFuncion],
        components: {
            Header
        },
        data() {
            return {
                data: null
            }
        },
        mounted() {
            this.getDetailsSite([])
                .then((response) => {
                    console.log(response);
                });
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <Header v-bind:optionMenu="optionMenu" v-bind:name-site="nameSite"></Header>
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
                .then((respose) => {
                console.log(respose);
            })
        }
    }
</script>

<style scoped>

</style>
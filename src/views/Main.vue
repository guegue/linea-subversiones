<template>
    <div class="text-center m-3">
        <ul>
            <li v-for="site in sites" :key="site.id">
                <a :href="'/'+site.slug">{{site.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import GlobalFunction from '../mixins/globalFunctions'

    export default {
        name: "Main",
        mixins: [GlobalFunction],
        mounted() {
            this.getAllSites()
        }
    }
</script>

<style scoped>

</style>
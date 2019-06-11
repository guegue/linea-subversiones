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
    export default {
        name: "Main",
        data() {
            return {
                sites: []
            }
        },
        mounted() {
            this.$axios(this.$domainOmeka + 'api/sites')
                .then((response) => {
                    let data_sites = response.data;
                    data_sites.forEach((site) => {
                        this.sites.push({
                            id: site['o:id'],
                            slug: site['o:slug'],
                            title: site['o:title']
                        })
                    })
                })
        }
    }
</script>

<style scoped>

</style>
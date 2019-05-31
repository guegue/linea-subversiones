<template>
    <div class="section no-margin equal-height">
        <div class="section_wrapper clearfix">
            <div class="column one column_column">
                <carousel :paginationEnabled="true">
                    <slide class="card" v-for="site in detailsSite" :key="site.id_item_set" v-if="site.exist_img">
                        <a :href="'/'+site.slug">
                            <img :src="site.url_img_site" alt="site.title_site" width="200" height="200">
                        </a>
                        <h4 class="name_site"><a :href="'/'+site.slug">{{site.title_site}}</a></h4>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>

    import {Carousel, Slide} from 'vue-carousel';

    export default {
        name: "CarouselSites",
        props: [
            'detailsSite'
        ],
        components: {
            Carousel,
            Slide
        }

    }
</script>

<style scoped>
    .card {
        height: 300px;
        margin: 30px;
        flex-basis: 22em;
    }

    .card img {
        width: 300px;
        height: 300px !important;
        object-fit: cover !important;
        border-radius: 5px;
    }

    .card .name_site {

        /*position: absolute;*/
        /*bottom: 0;*/
    }
</style>
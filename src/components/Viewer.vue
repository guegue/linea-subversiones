<template>
    <div class="section">
        <div class="section_wrapper clearfix">
            <!--Imagenes-->
            <div class="column one-fourth single-photo-wrapper " style="height: 170px" id="div-images"
                 v-for="(image,index) in images" :key="index">
                <a :href="image.url" :data-sub-html="image.title">
                    <img :src="image.url" class="square-size-image" :alt="image.title"/>
                    <div class="caption text-justify">
                        <h5>{{image.title}}</h5>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Viewer",
        props: ['images'],
        methods:{

        },
        mounted() {
            this.$nextTick(() => {
                if (this.images.length > 0) {
                    window.lightGallery(document.getElementById('div-images'), {
                        thumbnail: true,
                    });

                }

            });
        }
    }
</script>

<template>
    <div class="column one">
        <h4>Imagenes</h4>
        <!--Imagenes-->
        <div class="column one-fourth single-photo-wrapper" id="div-images"
             v-for="(image,index) in images" :key="index">
            <a :href="image.url" data-sub-html=".caption">
                <img :src="image.url" :alt="image.title"/>
                <div class="caption">
                    <h5>{{image.title}}</h5>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Viewer",
        props:['images'],
        updated() {
            this.$nextTick(() => {
                window.lightGallery(document.getElementById('div-images'), {
                    thumbnail: true,
                });

            });
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="column one">
        <h4>Videos</h4>
        <!-- Hidden video div -->
        <div class="d-none" v-for="(video,index) in videos" :key="index">
            <div v-if="video.type === 'video'" :id="'video'+index">
                <video class="lg-video-object lg-html5" controls
                       preload="none">
                    <source :src="video.url" :type="video.extension">
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div v-else-if="video.type === 'vimeo'" :id="'video'+index">
                <iframe class="lg-video-object lg-vimeo" width="560" height="315"
                        :src="video.url" frameborder="0"
                        webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="">
                </iframe>
            </div>

            <div v-else-if="video.type === 'youtube'" :id="'video'+index">
                <iframe class="lg-video-object lg-youtube" width="560" height="315"
                        :src="video.url"
                        frameborder="0" allowfullscreen=""></iframe>
            </div>
        </div>

        <!--Videos-->
        <div>
            <ul id="div-videos" class="video list-unstyled w-video">
                <li class="m-1 column one-third video-square video" v-for="(video,index) in videos" :key="index"
                    :data-poster="video.img_large"
                    :data-sub-html="video.title" :data-html="'#video'+index">
                    <a href="" onclick="return false">
                        <img class="img-responsive img-video"
                             :src="video.img_large" :alt="video.title"/>
                        <div class="video_item_section video_item_stats clearfix">
                            <span class="pb-1"> {{video.title}}</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VideoPlayer",
        props: ['videos'],
        updated() {
            this.$nextTick(() => {
                window.lightGallery(document.getElementById('div-videos'), {
                    videojs: true,
                });
            });
        }
    }
</script>

<style scoped>
    .img-video {
        width: 260px !important;
        height: 200px !important;
        object-fit: cover;
    }
</style>
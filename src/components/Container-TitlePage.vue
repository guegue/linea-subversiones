<template>
    <!--    Main Content -->
    <div id="Content">
        <div class="content_wrapper clearfix">
            <div class="sections_group">
                <div class="entry-content">
                    <div class="section full-screen full-width highlight-right section-border-bottom"
                         style="padding-top:0;">
                        <div class="section_wrapper clearfix">
                            <div class="items_group clearfix">
                                <div id="slider">
                                    <transition-group tag="div" :name="transitionName" class="slides-group">
                                        <div v-if="slides.length > 0" :key="current" class="slide">
                                            <div class="cuadro-img-size">
                                                <img :src="slides[current].media_url" alt=""
                                                     class="img-size">
                                            </div>
                                            <div class="cuadro">
                                                <div class="cuadro-carousel">
                                                    <hr class="no_line hrmargin_b_30"/>
                                                    <h2 style="padding: 15px;text-align: justify">
                                                        {{slides[current].title}}
                                                    </h2>
                                                    <div style="position: relative; margin-left: -15%;"><img
                                                            class="scale-with-grid"
                                                            src="@/assets/content/space/images/home_space_hr.png"
                                                            alt="">
                                                    </div>
                                                    <hr class="no_line hrmargin_b_30"/>

                                                    <h6>
                                                        {{slides[current].description}}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </transition-group>
                                    <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
                                        &#10094;
                                    </div>
                                    <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
                                        &#10095;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section equal-height p-top90-bot50">
                        <div class="section_wrapper clearfix">
                            <div class="items_group clearfix">
                                <!--One Second (1/2) Column -->
                                <div class="column one-second column_column ">
                                    <div class="column_attr p-8">
                                        <hr class="no_line" style="margin: 0 auto 50px;"/>
                                        <h3>Sobre el sitio</h3>
                                        <div v-for="(paragraph,index) in aboutSite" :key="index">
                                            <p v-if="paragraph !== '' ">{{paragraph}}</p>
                                            <hr v-if="paragraph !== '' " class="no_line hrmargin_b_30"/>
                                        </div>

                                    </div>
                                </div>

                                <!-- One Second (1/2) Column -->
                                <div class="column one-second column_column space-border">
                                    <div v-for="(contribuitor,index) in constribuitors" :key="index"
                                         class="column_attr p-9"
                                         style=" ">
                                        <hr class="no_line hrmargin_b_40"/>
                                        <div class="image_frame image_item no_link scale-with-grid alignnone no_border">
                                            <div class="image_wrapper">
                                                <img class="scale-with-grid" :src="contribuitor.img"
                                                     alt="" width="442" height="313"/>
                                            </div>
                                        </div>
                                        <hr class="no_line hrmargin_b_30"/>
                                        <ul class="list_check" style="font-size: 13px;">
                                            <li v-for="(person,index) in contribuitor.list" :key="index"
                                                class="icons-list">
                                                {{person}}
                                            </li>
                                        </ul>
                                        <hr class="no_line hrmargin_b_20"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Timeline Portada-->
                    <Timeline></Timeline>
                    <!--Timeline Portada-->
                    <div v-for="(video,index) in videos" :key="'a'+index">
                        <div v-if="video.typeUpload === 'upload'" class="d-none" :id="'video'+index">
                            <video class="lg-video-object lg-html5 video-js vjs-default-skin" controls preload="none">
                                <source :src="video.media_url"
                                        :type="video.typefile">
                                Your browser does not support HTML5 video.
                            </video>
                        </div>

                        <div v-else-if="video.typeUpload === 'vimeo'" class="d-none" :id="'video'+index">
                             <iframe class="lg-video-object lg-vimeo" width="560" height="315"
                                     :src="video.mediaurl" frameborder="0"
                                     webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="">
                             </iframe>
                        </div>

                           <div v-else-if="video.typeUpload === 'youtube'" class="d-none" :id="'video'+index">
                              <iframe class="lg-video-object lg-youtube" width="560" height="315"
                                      :src="video.mediaurl"
                                      frameborder="0" allowfullscreen=""></iframe>
                          </div>
                    </div>
                    <!--Video Section-->
                    <div class="section" style="padding-top:90px; padding-bottom:50px; " v-if="videos.length >0">
                        <div class="section_wrapper clearfix">
                            <div class="items_group clearfix">
                                <!--One Fourth (1/4) Column -->
                                <div class="column one-fourth column_column ">
                                    <div class="column_attr p-8">
                                        <hr class="no_line hrmargin_b_40"/>
                                        <h3>Videos</h3>
                                        <hr class="no_line hrmargin_b_30"/>
                                        <a class="button button_large button_theme button_js"
                                           :href="urlVideos"><span
                                                class="button_label">Ver m&aacute;s</span></a>
                                    </div>
                                </div>
                                <!-- Three Fourth (3/4) Column -->
                                <div class="column three-fourth column_column space-border">
                                    <div class="column_attr p-8">
                                        <hr class="no_line hrmargin_b_40"/>
                                        <!--square of videos-->
                                        <div >
                                            <ul id="video-gallery" class="video list-unstyled">
                                                <li class="column one-third video"
                                                    v-for="(video,index) in videos"
                                                    :key="index"
                                                    data-poster="@/assets/content/space/images/home_space_staff1.jpg"
                                                    :data-sub-html="video.title"
                                                    :data-html="'#video'+index">
                                                    <a href="" onclick="return false">
                                                        <img src="@/assets/content/space/images/home_space_staff1.jpg"
                                                             alt="">
                                                        <div class="demo-gallery-poster">
                                                            <img src="http://sachinchoolur.github.io/lightgallery.js/static/img/play-button.png"
                                                                 alt="">
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Sites Details-->
                    <div class="section no-margin equal-height background-document"
                         style="">
                        <div class="section_wrapper clearfix">
                            <div class="items_group clearfix">
                                <!-- One Second (1/2) Column -->
                                <div class="column one-second column_column ">

                                    <div class="column_attr">
                                        <div class="img-background-document">
                                            <h4>Otros Sitios Relacionados:</h4>
                                            <scrolly class="foo" style="width: 100%;height: 100%;" >
                                                <scrolly-viewport>
                                                    <div v-for="site in detailsSite" :key="site.id_item_set">
                                                        <div v-if="site.exist_img">
                                                            <div class="list_item lists_2 clearfix">
                                                                <div class="list_left list_image">
                                                                    <a :href="'/'+site.slug"><img
                                                                            :src="site.url_img_site"
                                                                            alt="Tincidunt mauris" class="scale-with-grid"
                                                                            width="150" height="150"/>
                                                                    </a>
                                                                </div>
                                                                <div class="list_right">
                                                                    <h4 class="text-dark">
                                                                        <a :href="'/'+site.slug" class="text-dark">{{site.title_site}}</a>
                                                                    </h4>
                                                                    <div class="desc"
                                                                         v-if="typeof site.description === 'string'">
                                                                        <p v-if="site.description.length > 100">
                                                                            {{site.description.slice(0,130)}}... <a
                                                                                :href="'/'+site.slug" >Leer
                                                                            m&aacute;s</a>
                                                                        </p>
                                                                        <p v-else>
                                                                            {{site.description}}... <a
                                                                                :href="'/'+site.slug">Leer
                                                                            m&aacute;s</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </scrolly-viewport>
                                                <scrolly-bar axis="y"></scrolly-bar>
                                            </scrolly>
                                        </div>
                                    </div>
                                </div>
                                <!-- One Second (1/2) Column -->
                                <div class="column one-second column_column ">
                                    <div class="column_attr p-6-4-7">
                                        <h3 class="text-white">Lorem ipsum dolor mit samet</h3>
                                        <h5 class="text-white">Nunc non ante ipsum. Aliquam et malesuada
                                            felis! Vivamus at velit ac mauris ornare dapibus vitae sit amet est.
                                            Etiam porttitor semper sem at mollis turpis duis.</h5>
                                        <hr class="no_line hrmargin_b_30"/>
                                        <ul class="list_check text-white" style="font-size: 13px;">
                                            <li class="icons-list-w">
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                cillum dolore eu fugiat nulla pariatur.
                                            </li>
                                            <li class="icons-list-w">
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                                qui officia deserunt mollit anim id est laborum.
                                            </li>
                                            <li class="icons-list-w">
                                                Incidunt ut labore et dolore magnam aliquam.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section the_content no_content">
                        <div class="section_wrapper">
                            <div class="the_content_wrapper"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Timeline from './Timeline';
    import { Scrolly, ScrollyViewport, ScrollyBar } from 'vue-scrolly';

    export default {
        name: "Container",
        components: {
            Timeline,
            Scrolly,
            ScrollyViewport,
            ScrollyBar
        },
        props: [
            'slides',
            'aboutSite',
            'constribuitors',
            'videos',
            'detailsSite',
            'urlVideos'
        ],
        data() {
            return {
                current: 0,
                direction: 1,
                info: null,
                transitionName: "fade"
            }
        },
        methods: {
            slide(dir) {
                this.direction = dir;
                dir === 1
                    ? (this.transitionName = "slide-next")
                    : (this.transitionName = "slide-prev");
                let len = this.slides.length;
                this.current = (this.current + dir % len + len) % len;
            }
        },
        updated() {
            this.$nextTick(() => {
                window.lightGallery(document.getElementById('video-gallery'), {
                    videojs: true
                })
            });
        }
    }
</script>

<style scoped>
    /*Slider*/
    #slider {
        width: 100%;
        height: 550px;
        position: relative;
    }

    .slide {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn {
        z-index: 20000;
        cursor: pointer;
        border-color: transparent;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        position: absolute;
        top: calc(50% - 35px);
        left: 1%;
        transition: transform 0.3s ease-in-out;
        user-select: none;
    }

    .btn-next {
        left: auto;
        right: 1%;
    }

    .btn:hover {
        transform: scale(1.2);
    }



    .list-unstyled li {
        list-style-type: none;
    }
    .cuadro-img-size{
        width: 100%;height: 550px !important;
    }

    .img-size{
        width: 100%; height: 100% !important;
    }
    .scrolly-bar.axis-y{
        width: 5px !important;
    }

</style>
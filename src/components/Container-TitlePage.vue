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
                                                    <h2 style="padding: 15px;" class="font-size-50 text-justify">
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
                                        <VideoPlayer v-bind:videos="videos"></VideoPlayer>

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
                                            <scrolly class="foo" style="width: 100%;height: 100%;">
                                                <scrolly-viewport>
                                                    <div v-for="(site,index) in detailsSite" :key="index*9">
                                                        <div v-if="site.exist_img">
                                                            <div class="list_item lists_2 clearfix">
                                                                <div class="list_left list_image">
                                                                    <router-link tag="a"
                                                                                 to="{ name:'site', params:{'namesite':site.slug}">
                                                                        <img
                                                                                :src="site.img_square"
                                                                                alt="Tincidunt mauris"
                                                                                class="scale-with-grid img-size-site"
                                                                                width="150" height="140"/>
                                                                    </router-link>
                                                                </div>
                                                                <div class="list_right">
                                                                    <h4 class="text-dark">
                                                                        <a :href="'/'+site.slug" class="text-dark">{{site.title}}</a>
                                                                    </h4>
                                                                    <div class="desc"
                                                                         v-if="typeof site.summary === 'string'">
                                                                        <p v-if="site.summary.length > 100">
                                                                            {{site.summary.slice(0,130)}}... <a
                                                                                :href="'/'+site.slug">Leer
                                                                            m&aacute;s</a>
                                                                        </p>
                                                                        <p v-else>
                                                                            {{site.summary}}... <a
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
                                        <h3 class="text-white">Contacto</h3>
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
    import VideoPlayer from '../components/VideoPlayer'
    import {Scrolly, ScrollyViewport, ScrollyBar} from 'vue-scrolly';

    export default {
        name: "Container",
        components: {
            Timeline,
            VideoPlayer,
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

    .cuadro-img-size {
        width: 100%;
        height: 550px !important;
    }

    .img-size {

        height: 100% !important;
    }
    .img-size-site {
        width: 80px;
        height: 70px !important;
    }

    .scrolly-bar.axis-y {
        width: 5px !important;
    }
    h2.font-size-50{
        font-size: 50px;
    }

</style>
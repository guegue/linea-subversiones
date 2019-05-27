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
                                            <div style="width: 100%;height: 550px; !important;">
                                                <img :src="slides[current].mediaurl" alt=""
                                                     style="width: 100%; height: 100%; object-fit: cover;">
                                            </div>
                                            <div style="height: 100%;width: 50%;background-color: white;z-index: 10001;position: absolute;right: 0;">
                                                <br>
                                                <div style="margin-top: 75px"></div>
                                                <h1 style="padding: 15px;text-align: justify">
                                                    {{slides[current].title}}
                                                </h1>
                                                <br>
                                                <div style="position: relative; margin-left: -15%;"><img
                                                        class="scale-with-grid"
                                                        src="@/assets/content/space/images/home_space_hr.png"
                                                        alt="">
                                                </div>
                                                <div style="margin-top: 20px"></div>
                                                <p style="padding: 10px;text-align: justify;margin-top: 35px !important;">
                                                    {{slides[current].description}}</p>
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
                    <div class="section equal-height " style="padding-top:90px; padding-bottom:50px; ">
                        <div class="section_wrapper clearfix">
                            <div class="items_group clearfix">
                                <!--One Second (1/2) Column -->
                                <div class="column one-second column_column ">
                                    <div class="column_attr" style=" padding:0 8% 0 0;">
                                        <hr class="no_line" style="margin: 0 auto 50px;"/>
                                        <h3>Sobre el sitio</h3>
                                        <div v-for="(paragraph,index) in aboutSite" :key="index">
                                            <p v-if="paragraph !== '' ">{{paragraph}}</p>
                                            <hr v-if="paragraph !== '' " class="no_line hrmargin_b_30"/>
                                        </div>
                                        <a class="button button_large button_theme button_js" href=""><span
                                                class="button_label">Leer m&aacute;s</span></a>
                                    </div>
                                </div>

                                <!-- One Second (1/2) Column -->
                                <div class="column one-second column_column space-border">
                                    <div v-for="(contribuitor,index) in constribuitors" :key="index" class="column_attr"
                                         style=" padding:0 0 0 9%;">
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

                    <pre>{{videos}}</pre>
                    <div v-if="videos.length > 0">
                    <span v-for="(video,index) in videos" :key="'a'+index">
                        <div v-if="video.typeUpload === 'upload'" class="d-none" :id="'video'+index">
                            <video class="lg-video-object lg-html5 video-js vjs-default-skin" controls preload="none">
                                <source :src="video.mediaurl"
                                        :type="video.typefile">
                                Your browser does not support HTML5 video.
                            </video>
                        </div>

                        <div v-else-if="video.typeUpload === 'vimeo'" class="d-none" :id="'video'+indice">
                             <iframe class="lg-video-object lg-vimeo" width="560" height="315"
                                     :src="video.mediaurl" frameborder="0"
                                     webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="">
                             </iframe>
                        </div>

                           <div v-else-if="video.typeUpload === 'youtube'" class="d-none" :id="'video'+indice">
                              <iframe class="lg-video-object lg-youtube" width="560" height="315"
                                      :src="video.mediaurl"
                                      frameborder="0" allowfullscreen=""></iframe>
                          </div>
                    </span>
                    </div>

                    <div class="section" style="padding-top:90px; padding-bottom:50px; ">
                        <div class="section_wrapper clearfix">
                            <div class="items_group clearfix">
                                <!--One Fourth (1/4) Column -->
                                <div class="column one-fourth column_column ">
                                    <div class="column_attr" style=" padding:0 8% 0 0;">
                                        <hr class="no_line hrmargin_b_40"/>
                                        <h3>Videos</h3>
                                        <hr class="no_line hrmargin_b_30"/>
                                        <a class="button button_large button_theme button_js"
                                           href="content/space/stuff.html"><span
                                                class="button_label">Ver m&aacute;s</span></a>
                                    </div>
                                </div>
                                <!-- Three Fourth (3/4) Column -->
                                <div class="column three-fourth column_column space-border">
                                    <div class="column_attr" style=" padding:0 0 0 8%;">
                                        <hr class="no_line hrmargin_b_40"/>

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
                    <div class="section no-margin equal-height background-document"
                         style="">
                        <div class="section_wrapper clearfix">
                            <div class="items_group clearfix">
                                <!-- One Second (1/2) Column -->
                                <div class="column one-second column_column ">
                                    <div class="column_attr">
                                        <div class="img-background-document">
                                            <h4>Dolor et omnien quan:</h4>
                                            <hr class="no_line hrmargin_b_30"/>
                                            <div class="list_item lists_2 clearfix">
                                                <div class="list_left list_image"><img
                                                        src="@/assets/content/space/images/home_space_list_1.png"
                                                        alt="Tincidunt mauris" class="scale-with-grid"
                                                        width="58" height="65"/>
                                                </div>
                                                <div class="list_right">
                                                    <h4>Tincidunt mauris</h4>
                                                    <div class="desc">
                                                        Vivamus tincidunt nisl dolor, sit amet posuere lorem
                                                        viverra sed. Sed scelerisque, ex a pretium egestas,
                                                        tortor ex faucibus orci, eget placerat lacus elit
                                                        amet.
                                                    </div>
                                                </div>
                                            </div>
                                            <hr class="no_line hrmargin_b_30"/>
                                            <div class="list_item lists_2 clearfix">
                                                <div class="list_left list_image"><img
                                                        src="@/assets/content/space/images/home_space_list_2.png"
                                                        alt="Vestibulum commodo" class="scale-with-grid"
                                                        width="58" height="65"/>
                                                </div>
                                                <div class="list_right">
                                                    <h4>Vestibulum commodo</h4>
                                                    <div class="desc">
                                                        Suspendisse at purus nec nunc porttitor rutrum at auctor
                                                        turpis. Aliquam tellus magna, tempor non iaculis in,
                                                        tincidunt commodo enim.
                                                    </div>
                                                </div>
                                            </div>
                                            <hr class="no_line hrmargin_b_30"/>
                                            <div class="list_item lists_2 clearfix">
                                                <div class="list_left list_image"><img
                                                        src="@/assets/content/space/images/home_space_list_3.png"
                                                        alt="Malesuada fames" class="scale-with-grid" width="58"
                                                        height="65"/>
                                                </div>
                                                <div class="list_right">
                                                    <h4>Malesuada fames</h4>
                                                    <div class="desc">
                                                        Sed quis nisl pulvinar, vehicula augue ut, efficitur
                                                        ipsum. Maecenas bibendum tortor auctor, scelerisque mi
                                                        id, laoreet risus.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- One Second (1/2) Column -->
                                <div class="column one-second column_column ">
                                    <div class="column_attr" style=" padding:60px 40px 70px;">
                                        <h3 style="color: #fff;">Lorem ipsum dolor mit samet</h3>
                                        <h5 style="color: #fff;">Nunc non ante ipsum. Aliquam et malesuada
                                            felis! Vivamus at velit ac mauris ornare dapibus vitae sit amet est.
                                            Etiam porttitor semper sem at mollis turpis duis.</h5>
                                        <hr class="no_line hrmargin_b_30"/>
                                        <ul class="list_check" style="font-size: 13px; color: #fff;">
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

    export default {
        name: "Container",
        components: {
            Timeline
        },
        props: ['slides', 'aboutSite', 'constribuitors', 'videos'],
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
                var len = this.slides.length;
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
    @import url("https://fonts.googleapis.com/css?family=Crimson+Text");

    /* FADE IN */
    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-enter {
        opacity: 0;
    }

    /* GO TO NEXT SLIDE */
    .slide-next-enter-active,
    .slide-next-leave-active {
        transition: transform 0.5s ease-in-out;
    }

    .slide-next-enter {
        transform: translate(100%);
    }

    .slide-next-leave-to {
        transform: translate(-100%);
    }

    /* GO TO PREVIOUS SLIDE */
    .slide-prev-enter-active,
    .slide-prev-leave-active {
        transition: transform 0.5s ease-in-out;
    }

    .slide-prev-enter {
        transform: translate(-100%);
    }

    .slide-prev-leave-to {
        transform: translate(100%);
    }

    /* SLIDER STYLES */
    body {
        overflow: hidden;
        margin: 0;
        font-size: 50px;
        font-family: "Crimson Text", sans-serif;
        color: #fff;
    }

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

    .d-none {
        display: none;
    }

    .list-unstyled li {
        list-style-type: none;
    }
</style>
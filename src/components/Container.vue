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
                                        <div v-if="show" :key="current" class="slide" :class="slides[current].className">
                                            <div style="width: 100%;height: 550px; !important;">
                                                <img :src="slides[current].image" alt="" style="width: 100%; height: 100%; object-fit: cover;">
                                            </div>
                                            <div style="height: 100%;width: 50%;background-color: white;z-index: 10001;position: absolute;right: 0;">
                                                <br>
                                                <div style="margin-top: 75px"></div>
                                                <h1 style="padding-left: 10px">
                                                    {{slides[current].title}}
                                                </h1>
                                                <br>
                                                <div style="margin-top: 30px"></div>
                                                <p style="padding-left: 10px">{{slides[current].description}}</p>
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
                                        <h3>New way of traveling</h3>
                                        <hr class="no_line hrmargin_b_30"/>
                                        <h6>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit.</h6>
                                        <hr class="no_line hrmargin_b_30"/>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate.
                                        </p>
                                        <hr class="no_line hrmargin_b_30"/>
                                        <p>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                                            unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                            fugit, sed quia consequuntur magni dolores eos qui ratione
                                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                                            numquam eius modi tempora incidunt ut labore et dooluptatem.
                                        </p>
                                        <hr class="no_line hrmargin_b_30"/>
                                        <a class="button button_large button_theme button_js" href=""><span
                                                class="button_label">Read more</span></a>
                                    </div>
                                </div>
                                <!-- One Second (1/2) Column -->
                                <div class="column one-second column_column space-border">
                                    <div class="column_attr" style=" padding:0 0 0 9%;">
                                        <hr class="no_line hrmargin_b_40"/>
                                        <div class="image_frame image_item no_link scale-with-grid alignnone no_border">
                                            <div class="image_wrapper"><img class="scale-with-grid"
                                                                            src="@/assets/content/space/images/home_space_pic1.jpg"
                                                                            alt="" width="442" height="313"/>
                                            </div>
                                        </div>
                                        <hr class="no_line hrmargin_b_30"/>
                                        <ul class="list_check" style="font-size: 13px;">
                                            <li class="icons-list">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </li>
                                            <li class="icons-list">
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                cillum dolore eu fugiat nulla pariatur.
                                            </li>
                                            <li class="icons-list">
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                                qui officia deserunt mollit anim id est laborum.
                                            </li>
                                            <li class="icons-list">
                                                Incidunt ut labore et dolore magnam aliquam.
                                            </li>
                                        </ul>
                                        <hr class="no_line hrmargin_b_20"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Slider Portada-->
                    <Slider-Portada></Slider-Portada>
                    <!--Slider Portada-->
                    <div class="section" style="padding-top:90px; padding-bottom:50px; ">
                        <div class="section_wrapper clearfix">
                            <div class="items_group clearfix">
                                <!--                                         One Fourth (1/4) Column -->
                                <div class="column one-fourth column_column ">
                                    <div class="column_attr" style=" padding:0 8% 0 0;">
                                        <hr class="no_line hrmargin_b_40"/>
                                        <h3>Meet scientists</h3>
                                        <hr class="no_line hrmargin_b_30"/>
                                        <a class="button button_large button_theme button_js"
                                           href="content/space/stuff.html"><span
                                                class="button_label">Read more</span></a>
                                    </div>
                                </div>
                                <!-- Three Fourth (3/4) Column -->
                                <div class="column three-fourth column_column space-border">
                                    <div class="column_attr" style=" padding:0 0 0 8%;">
                                        <hr class="no_line hrmargin_b_40"/>
                                        <div class="column one">
                                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse.</h6>
                                        </div>
                                        <!-- One Third (1/3) Column -->
                                        <div class="column one-third">
                                            <div style="margin-right: 20%;">
                                                <div class="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                    <div class="image_wrapper"><img class="scale-with-grid"
                                                                                    src="@/assets/content/space/images/home_space_staff1.jpg"
                                                                                    alt="" width="380"
                                                                                    height="342"/>
                                                    </div>
                                                </div>
                                                <hr class="no_line hrmargin_b_20"/>
                                                <h5>Martines walanti</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolorsi
                                                    architecto beatae vitae dicta sunt explicabo.
                                                </p>
                                            </div>
                                        </div>
                                        <!--                                             One Third (1/3) Column -->
                                        <div class="column one-third">
                                            <div style="margin-right: 20%;">
                                                <div class="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                    <div class="image_wrapper"><img class="scale-with-grid"
                                                                                    src="@/assets/content/space/images/home_space_staff2.jpg"
                                                                                    alt="" width="380"
                                                                                    height="342"/>
                                                    </div>
                                                </div>
                                                <hr class="no_line hrmargin_b_20"/>
                                                <h5>Quoponum allen rolenpa</h5>
                                                <p>
                                                    Consectetur adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolorsi architecto beatae vitae
                                                    dicta sunt explicabo.
                                                </p>
                                            </div>
                                        </div>
                                        <!-- One Third (1/3) Column -->
                                        <div class="column one-third">
                                            <div style="margin-right: 20%;">
                                                <div class="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                    <div class="image_wrapper"><img class="scale-with-grid"
                                                                                    src="@/assets/content/space/images/home_space_staff3.jpg"
                                                                                    alt="" width="380"
                                                                                    height="342"/>
                                                    </div>
                                                </div>
                                                <hr class="no_line hrmargin_b_20"/>
                                                <h5>Labore et dolorsi architecto</h5>
                                                <p>
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </div>
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
    import SliderPortada from '../components/SliderPortada';

    export default {
        name: "Container",
        components: {
            SliderPortada
        },
        data() {
            return {
                current: 0,
                direction: 1,
                transitionName: "fade",
                show: false,
                slides: [
                    {
                        title: 'Title',
                        image: 'https://img.peru21.pe/files/ec_article_multimedia_gallery/uploads/2018/11/13/5beb1304124cb.jpeg',
                        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
                    },
                    {
                        title: 'Title',
                        image: 'http://viajarbienybarato.com/wp-content/uploads/2013/12/lama-and-machu-picchu-peru-1600x1067.jpg',
                        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
                        date: '01/10/2020',
                        place: 'Lima, Peru'
                    },
                    {
                        title: 'Title',
                        image: 'https://static1.squarespace.com/static/5140cb0ee4b0bcb4a1dd98e6/5a5cf75b53450ac12050c2d4/5a5e05179140b7de43b736c9/1544102590316/PERU+with+WHOA5.jpg?format=1500w',
                        description: 'This card has supporting text below as a natural lead-in to additional content.',
                    },
                    {
                        title: 'Title',
                        image: 'https://assets.trome.pe/files/ec_article_multimedia_gallery/uploads/2018/07/17/5b4e18fcac2e6.jpeg',
                        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                    }
                ]
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
        mounted() {
            this.show = true;
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
        z-index: 10;
        cursor: pointer;
        border-color: transparent;
        color: white;
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
        transform: scale(1.1);
    }

</style>
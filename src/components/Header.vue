<template>
    <!-- Header Wrapper -->
    <div id="Header_wrapper">
        <!--Header-->
        <header id="Header">
            <!-- Header -  Logo and Menu area -->
            <div id="Top_bar">
                <div class="container">
                    <div class="column one">
                        <div class="top_bar_left clearfix">
                            <!--  Logo-->
                            <div class="logo">
                                <a id="logo" href="" title="BeSpace - BeTheme"> <img
                                        class="logo-main scale-with-grid"
                                        src="@/assets/content/space/images/space.png"
                                        alt="BeSpace - BeTheme"/> <img class="logo-sticky scale-with-grid"
                                                                       src="@/assets/content/space/images/space.png"
                                                                       alt=""> <img
                                        class="logo-mobile scale-with-grid"
                                        src="@/assets/content/space/images/space-responsive.png" alt=""> </a>
                            </div>
                            <!--  Main menu-->
                            <div class="menu_wrapper">
                                <nav id="menu" class="menu-main-menu-container">
                                    <ul id="menu-main-menu" class="menu">
                                        <li class="current_page_item">
                                            <a href=""><span>HOME</span></a>
                                        </li>
                                        <li>
                                            <a href=""><span>TECHNOLOGY</span></a>
                                        </li>
                                        <li>
                                            <a href=""><span>STAFF</span></a>
                                        </li>
                                        <li>
                                            <a href=""><span>ARTICLES</span></a>
                                        </li>
                                        <li>
                                            <a href=""><span>ABOUT</span></a>
                                        </li>
                                        <li>
                                            <a target="_blank" href=""><span><span
                                                    style="padding: 0; color:#AAA;">BUY NOW</span></span></a>
                                        </li>
                                    </ul>
                                </nav>
                                <!--<a class="responsive-menu-toggle" href="#"><i class="icon-menu"></i></a>-->
                            </div>
                            <!--Secondary menu area - only for certain pages -->
                            <div class="secondary_menu_wrapper"></div>
                            <!--Banner area - only for certain pages-->
                            <div class="banner_wrapper"></div>
                            <!--Header Searchform area-->
                            <div class="search_wrapper">
                                <form method="get" id="searchform" action="#">

                                    <input type="text" class="field" name="s" id="s"
                                           placeholder="Enter your search"/>
                                    <input type="submit" class="submit flv_disp_none" value=""/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!--prueba-->
        <Slide right>
            <a id="home" href="#">
                <span>Home</span>
            </a>
        </Slide>
    </div>
</template>

<script>
    import { Slide } from 'vue-burger-menu'

    export default {
        name: "Menu",
        components:{
            Slide
        },
        mounted() {
            window.addEventListener('scroll', () => {
                // eslint-disable-next-line no-console
                // console.log(window.scrollY);
                let menu = document.getElementById('Top_bar');

                if (window.scrollY > 0) {
                    // eslint-disable-next-line no-console
                    menu.classList.add('float-menu');
                } else {
                    menu.classList.remove('float-menu');
                }
            });
        }
    }
</script>

<style scoped>
    .float-menu .container {
        position: fixed;
        top: 0;
        background-color: rgba(22,22,22,0.8);

    }
    .float-menu .container .menu_wrapper{
        background-color: transparent !important;
        color: #fff !important;
    }

    .float-menu .menu>li>a{
        color: #fff !important;
    }
</style>
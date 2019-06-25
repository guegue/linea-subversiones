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
                                <a id="logo" :href="'/'+slugSite" title="BeSpace - BeTheme">
                                    <h3>{{nameSite}}</h3>
                                </a>
                            </div>
                            <!--  Main menu-->
                            <div class="menu_wrapper">
                                <nav id="menu" class="menu-main-menu-container">
                                    <ul id="menu-main-menu" class="menu">
                                        <li v-for="(option,index) in optionMenu"
                                            :class="{'current_page_item': (currentRoute === option.slug)}"
                                            :key="index">
                                            <a :href="'/'+slugSite+'/page/'+option.slug">
                                                <span>{{option.title}}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!--Title-->
        <div v-if="showTitleDescription" id="Subheader">
            <div class="container">
                <div class="column one">
                    <h1 class="title">{{title}}</h1>
                </div>
            </div>
        </div>
        <!--menu lateral derecho-->
        <Slide right>
            <a v-for="option in optionMenu" :key="option.id" :href="'/'+nameSite+'/page/'+option.slug">
                <span>{{option.title}}</span>
            </a>
        </Slide>
    </div>
</template>

<script>
    import {Slide} from 'vue-burger-menu'

    export default {
        name: "Menu",
        components: {
            Slide,
        },
        props: ['optionMenu', 'nameSite', 'slugSite','showTitleDescription','title'],
        data() {
            return {
                currentRoute: null,
            }
        },
        mounted() {
            this.currentRoute = this.$route.params.namepage;
            window.addEventListener('scroll', () => {
                let menu = document.getElementById('Top_bar');
                let windowWidth = window.innerWidth;
                if (window.scrollY > 0 && windowWidth >= 1240) {
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
        background-color: rgba(22, 22, 22, 0.8);
    }

    .float-menu .container .menu_wrapper {
        background-color: transparent !important;
        color: #fff !important;
    }

    .float-menu .menu > li > a, .float-menu .logo a h3 {
        color: #fff !important;
        transition: color ease-in-out 1s;
    }

    .float-menu .logo a h3 {
        transition: color ease-in-out 0.3s;
    }

</style>
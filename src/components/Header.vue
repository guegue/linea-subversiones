<template>
  <!-- Header Wrapper -->
  <div id="Header_wrapper">
    <!--Header-->
    <header id="Header">
      <!-- Header -  Logo and Menu area -->
      <div id="Top_bar" class="float-menu">
        <div class="container">
          <div class="column one">
            <div class="top_bar_left clearfix">
              <!--  Logo-->
              <div class="logo">
                <router-link
                  id="logo"
                  :to="{ name: 'site', params: { namesite: slugSite } }"
                >
                  <h3>{{ nameSite }}</h3>
                </router-link>
              </div>
              <!--  Main menu-->
              <div class="menu_wrapper">
                <nav id="menu" class="menu-main-menu-container">
                  <ul id="menu-main-menu" class="menu">
                    <li
                      v-for="(option, index) in optionMenu"
                      :key="index"
                      :class="{
                        current_page_item: currentRoute === option.slug,
                      }"
                      @click="changeDataFromListView"
                    >
                      <router-link
                        v-if="option.slug.toLowerCase().search('historia') < 0"
                        tag="a"
                        :to="{
                          name: 'page',
                          params: { namesite: slugSite, namepage: option.slug },
                        }"
                      >
                        <span>{{ option.title }}</span>
                      </router-link>
                      <router-link
                        v-else
                        tag="a"
                        :to="{ name: 'story', params: {} }"
                      >
                        <span>{{ option.title }}</span>
                      </router-link>
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
          <h1 class="title">{{ title }}</h1>
        </div>
      </div>
    </div>
    <!--menu lateral derecho-->
    <slide right>
      <router-link
        v-for="option in optionMenu"
        :key="option.id"
        tag="a"
        :to="{
          name: 'page',
          params: { namesite: slugSite, namepage: option.slug },
        }"
      >
        <span>{{ option.title }}</span>
      </router-link>
    </slide>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';

export default {
  name: 'Header',
  components: {
    Slide,
  },
  props: [
    'optionMenu',
    'nameSite',
    'slugSite',
    'showTitleDescription',
    'title',
  ],
  data() {
    return {
      currentRoute: null,
    };
  },
  mounted() {
    this.currentRoute = this.$route.params.namepage;
    // window.addEventListener('scroll', () => {
    //     let menu = document.getElementById('Top_bar');
    //     let windowWidth = window.innerWidth;
    //     if (window.scrollY > 0 && windowWidth >= 1240) {
    //         menu.classList.add('float-menu');
    //     } else {
    //         menu.classList.remove('float-menu');
    //     }
    // });
  },
  methods: {
    changeDataFromListView() {
      this.currentRoute = this.$route.params.namepage;
      this.$eventBus.$emit('empty', '');
    },
  },
};
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

.float-menu .menu > li > a,
.float-menu .logo a h3 {
  color: #fff !important;
  transition: color ease-in-out 1s;
}

.float-menu .logo a h3 {
  transition: color ease-in-out 0.3s;
}
</style>

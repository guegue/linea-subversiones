import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCarousel from '@chenfengyuan/vue-carousel';

//css
import '@/assets/css/global.css';
import '@/assets/content/space/css/structure.css';
import '@/assets/content/space/css/space.css';
import '@/assets/plugins/rs-plugin/css/settings.css';

Vue.component('carousel', VueCarousel);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

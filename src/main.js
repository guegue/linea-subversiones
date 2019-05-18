import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Axios from 'axios';

//css
import '@/assets/css/global.css';
import '@/assets/content/space/css/structure.css';
import '@/assets/content/space/css/space.css';
import '@/assets/plugins/rs-plugin/css/settings.css';

Vue.config.productionTip = false;

//variables globales
Vue.prototype.$axios = Axios;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

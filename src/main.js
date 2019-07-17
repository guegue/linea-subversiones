import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Axios from 'axios';
import VModal from 'vue-js-modal';
import {Icon} from 'leaflet'


//css
import '@/assets/css/global.css';
import '@/assets/content/space/css/structure.css';
import '@/assets/content/space/css/space.css';
import '@/assets/plugins/rs-plugin/css/settings.css';
import 'lightgallery.js/dist/css/lightgallery.min.css';
import 'lightgallery.js/dist/css/lg-fb-comment-box.min.css';
import 'lightgallery.js/dist/css/lg-transitions.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/style.css';

//js
import 'lightgallery.js/src/js/lightgallery.js';
import 'lg-video.js/dist/lg-video.js';
import 'lg-thumbnail.js/dist/lg-thumbnail.js';
import 'lg-fullscreen.js/dist/lg-fullscreen.js';
import '@fortawesome/fontawesome-free/js/all.min.js';

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false;

//variables globales
Vue.prototype.$domainOmeka = 'https://sub-versiones.hijosdeperu.org/';
Vue.prototype.$axios = Axios;
Vue.prototype["$loading"] = id => {
    id !== undefined ? document.getElementById(id).setAttribute('v-cloak', '') : '';
};
Vue.prototype["$removeLoading"] = id => {
    id !== undefined ? document.getElementById(id).removeAttribute('v-cloak') : '';
};
Vue.prototype.$eventBus = new Vue();

Vue.use(VModal);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

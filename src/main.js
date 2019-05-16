import Vue from 'vue'
import App from './App.vue'
import router from './router'

//css
import '@/assets/css/global.min.css';
import '@/assets/content/space/css/structure.min.css';
import '@/assets/content/space/css/space.min.css';
import '@/assets/plugins/rs-plugin/css/settings.min.css';

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

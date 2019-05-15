import Vue from 'vue'
import App from './App.vue'
import * as jQuery from 'jquery';

window.jQuery = jQuery;

const $ = require('jquery');
window.$ = $;

require("@/assets/js/mfn.menu.js");
require("@/assets/js/jquery.plugins.js");
// require("@/assets/js/jquery.jplayer.min.js");
// require("@/assets/js/animations/animations.js");
require("@/assets/js/scripts.js");
// require("@/assets/plugins/rs-plugin/js/jquery.themepunch.tools.min.js");
// require("@/assets/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js");
// require("@/assets/plugins/rs-plugin/js/extensions/revolution.extension.video.min.js");
// require("@/assets/plugins/rs-plugin/js/extensions/revolution.extension.slideanims.min.js");
// require("@/assets/plugins/rs-plugin/js/extensions/revolution.extension.actions.min.js");
// require("@/assets/plugins/rs-plugin/js/extensions/revolution.extension.layeranimation.min.js");
// require("@/assets/plugins/rs-plugin/js/extensions/revolution.extension.kenburn.min.js");
// require("@/assets/plugins/rs-plugin/js/extensions/revolution.extension.navigation.min.js");
// require("@/assets/plugins/rs-plugin/js/extensions/revolution.extension.migration.min.js");
// require("@/assets/plugins/rs-plugin/js/extensions/revolution.extension.parallax.min.js");
// require("@/assets/js/myapp.js");

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');

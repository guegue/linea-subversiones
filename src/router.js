import Vue from 'vue'
import VueRouter from 'vue-router'
import Portada from './views/Portada'
import Videos from './views/Videos'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/:namesite',
            name: 'main',
            component: Portada
        },
        {
            path: '/:namesite/:x/:namepage',
            name: 'page',
            component: Videos
        },
    ]
})

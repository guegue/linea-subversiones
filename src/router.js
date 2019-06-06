import Vue from 'vue'
import VueRouter from 'vue-router'
import TitlePage from './views/TitlePage'
import ListView from './views/ListView'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/:namesite',
            name: 'main',
            component: TitlePage
        },
        {
            path: '/:namesite/:x/:namepage',
            name: 'page',
            component: ListView
        },
    ]
})

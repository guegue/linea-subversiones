import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './views/Main'
import TitlePage from './views/TitlePage'
import ListView from './views/ListView'
import DetailView from './views/DetailView'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/:namesite',
            name: 'site',
            component: TitlePage
        },
        {
            path: '/:namesite/:x/:namepage',
            name: 'page',
            component: ListView
        },
        {
            path: '/:namesite/:x/:namepage/detail/:id',
            name: 'detail',
            component: DetailView
        }
    ]
})

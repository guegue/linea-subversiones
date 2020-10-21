import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './views/Main';
import TitlePage from './views/TitlePage';
import ListView from './views/ListView';
import DetailView from './views/DetailView';
import Story from './views/Story';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/:namesite',
      name: 'site',
      component: TitlePage,
    },
    {
      path: '/:namesite/page/:namepage',
      name: 'page',
      component: ListView,
    },
    {
      path: '/:namesite/page/:namepage/detail/:iditem',
      name: 'detail',
      component: DetailView,
    },
    {
      path: '/:namesite/story',
      name: 'story',
      component: Story,
    },
  ],
});

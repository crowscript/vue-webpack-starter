import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import About from '../components/About.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    }
  ],
  mode: 'history'
});

export default router;

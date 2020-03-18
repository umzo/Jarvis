import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/MainPage').default,
    },
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default,
    // },
    {
      path: '/manager/task',
      name: 'manager-task',
      component: require('@/components/Manager/Task').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

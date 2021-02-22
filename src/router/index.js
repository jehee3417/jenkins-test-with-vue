import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Temp from '@/components/Temp';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/helloWorld',
      // name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/temp',
      // name: 'Temp',
      component: Temp,
    },
  ],
});

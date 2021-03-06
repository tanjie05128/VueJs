// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import header from 'components/header/header';

import 'common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

const routes = [
  {
    path: '/',
    redirect: '/goods', // 重定向
    name: 'goods',
    component: goods
  },
  {
    path: '/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/header',
    name: 'header',
    component: header
  },
  {
    path: 'https://www.easy-mock.com/mock/59914d11a1d30433d8610f39/elem/api/seller',
    name: 'seller',
    component: seller
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: ratings
  }
];

let router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  linkActiveClass: 'active'
});

router.push('/goods');

const store = new Vuex.Store({
  state: {
    count: 0
  },
  // 添加的商品元素
  addCartEl: {},
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

new Vue({
  // el: '#app',//为啥不用这个？？？
  router,
  store,
  template: '<App/>',
  components: {
    App: App
  },
  data: {
    eventHub: new Vue()
  }
  // render: h => h(App)
}).$mount('#app');

// app.$mount('#app');


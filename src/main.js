import '@babel/polyfill'
import Vue from 'vue';
import './plugins/vuetify'
import VueNotifications from 'vue-notifications';
import App from './App.vue';
import router from './router';
import store from './store';
import options from './options';

Vue.use(VueNotifications, options);
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

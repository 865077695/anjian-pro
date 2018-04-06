import Vue from 'vue';
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import App from './App.vue';

Vue.use(ElementUI);

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

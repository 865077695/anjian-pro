import Vue from 'vue';
import Router from 'vue-router';
import {
  routes
} from '@/router/routes';
Vue.use(Router);

const router = new Router({
  routes
});

export default router;


router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to) => {
  window.scrollTo(0, 0)
})

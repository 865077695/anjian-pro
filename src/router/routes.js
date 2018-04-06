import Main from '@/components/content/content';

// 这些路由不作为Main组件的子视图
const signRouter = {
  path: '/sign',
  name: 'sign',
  title: '登录',
  component: resolve => {
    require(['@/components/sign/sign'], resolve);
  }
}

// 以下路由全部为Main子视图
export const appRoutes = [{
  path: '/index',
  name: 'index',
  title: '首页',
  component: resolve => {
    require(['@/components/content/main/index/index'], resolve);
  }
}]

// 菜单项(安监局)
export const anjianjuRoutes = [{
  path: '',
  // name: 'index',
  component: Main,
  children: [{
    path: 'index',
    name: 'index',
    title: '首页',
    component: resolve => {
      require(['@/components/content/main/index/index'], resolve);
    }
  }, {
    path: 'qiye',
    name: 'qiye',
    title: '企业信息',
    component: resolve => {
      require(['@/components/content/main/qiye/qiye'], resolve);
    }
  }]
}]

const defaultRoute = {
  path: '/',
  redirect: '/index'
}
export const routes = [defaultRoute, signRouter, ...anjianjuRoutes];

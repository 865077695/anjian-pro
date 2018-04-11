import Main from '@/components/content/content';
import SysAdmin from '@/components/content/main/anjianju/sys-admin';

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
// 通用+安监局/ = 正确的routes
// 菜单项(通用)
const commonRoutes = [{
  path: '',
  component: Main,
  children: [{
    path: 'index',
    name: 'index',
    title: '首页',
    component: resolve => { require(['@/components/content/main/index/index'], resolve) }
  }, {
    path: 'qiye',
    name: 'qiye',
    title: '企业信息',
    component: resolve => { require(['@/components/content/main/qiye/qiye'], resolve) }
  }]
}]

// 菜单项(安监局)
const anjianjuRoutes = [{
  path: '',
  component: Main,
  children: [{
    path: 'weihua',
    name: 'weihua',
    title: '危化',
    component: resolve => { require(['@/components/content/main/anjianju/weihua/weihua'], resolve) }
  }, {
    path: 'sys-admin',
    name: 'sys-admin',
    title: '系统管理',
    component: SysAdmin,
    children: [{
      path: 'moniter',
      name: 'moniter',
      title: '可视化安监报警设置',
      component: resolve => { require(['@/components/content/main/anjianju/moniter/moniter'], resolve) }
    }, {
      path: 'center',
      name: 'center',
      title: '个人中心',
      component: resolve => { require(['@/components/content/main/anjianju/center/center'], resolve) }
    }, {
      path: 'authority',
      name: 'authority',
      title: '用户与权限管理',
      component: resolve => { require(['@/components/content/main/anjianju/authority/authority'], resolve) }
    }]
  }]
}]

// 菜单项(安委会)
const anweihuiRoutes = [
  {
    path: '',
    component: Main,
    children: []
  }
]

const defaultRoutes = {
  path: '/',
  redirect: '/index'
}

// 安监局菜单
export const anjianju = [
  { name: '首页', path: '/index' },
  { name: '企业信息', path: '/qiye' },
  { name: '危化', path: '/weihua' },
  {
    name: '系统管理',
    path: '/sys-admin',
    children: [
      { name: '用户权限与管理', path: '/authority' },
      { name: '可视化安监报警设置', path: '/moniter' },
      { name: '个人中心', path: '/center' }
    ]
  }
]

export const anweihui = [...commonRoutes, ...anweihuiRoutes]; // 安委会左侧菜单生成元数据
export const routes = [defaultRoutes, signRouter, ...commonRoutes, ...anjianjuRoutes, ...anweihuiRoutes];

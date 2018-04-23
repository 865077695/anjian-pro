import axios from 'axios'
import { Message } from 'element-ui'
import { router } from '@/router/index'

// 创建axios实例
const ax = axios.created({
  baseUrl: process.env.url,
  timeout: 10000
})

// 请求拦截
ax.interceptors.request.use(config => {
  // 请求前

  return config
}, err => {
  console.log(`request error: ${err}`)
  return Promise.reject(err)
})

// 响应拦截
ax.interceptors.response.use(res => {
  if (res.code === 201) {
    Message({
      message: '登录认证失败，请重新登录！',
      type: 'error',
      duration: 5 * 1000
    })
    router.push({ path: '/sign' })
  } else if (res.code === 202) {
    Message({
      message: '用户名或密码错误！',
      type: 'error',
      duration: 5 * 1000
    })
  } else if (res.code === 401) {
    Message({
      message: '无访问权限！',
      type: 'error',
      duration: 5 * 1000
    })
  } else if (res.code === 400) {
    Message({
      message: '参数格式有误！',
      type: 'error',
      duration: 5 * 1000
    })
  } else if (res.code === 500) {
    Message({
      message: '服务器错误，请联系管理员',
      type: 'error',
      duration: 5 * 1000
    })
  }
  return res
}, err => {
  console.log(`response error: ${err}`)
  Message({
    message: '响应错误',
    type: 'error',
    duration: 5 * 1000
  })
  router.push({ path: '/sign' })
  return Promise.reject(err)
})

export default ax

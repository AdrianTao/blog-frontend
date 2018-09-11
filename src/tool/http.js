import axios from 'axios'
import { store } from './index'

export default function http (url) {
  let instance = axios.create({
    baseURL: '/api'+url,
  })
  // instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  // 请求捕获 header添加token
  instance.interceptors.request.use(function (config) {
    // config.headers.Accept = 'application/x-www-form-urlencoded'
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (store.get('apiToken')) {
      config.headers.Accept = 'application/json'
      config.headers.Authorization = store.get('apiToken').type + ' ' + store.get('apiToken').token
    }
    return config
  }, function (error) {
    // 请求错误
    return Promise.reject(error)
  })

  return instance
}
/*
 * @Author: Adrian.taojun 
 * @Date: 2018-05-03 10:13:53 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-07-02 23:16:00
 * 
 * 用于验证服务器返回的json数据头部status_code字段
 * 参数1: 当需要判断多个异步请求时,参数1可传递一个array,
 *        只有一个请求时,使用object
 * 参数2: 需要执行的回调, 成功与错误
 * 
 * code代码:
 * 0:正常
 * 400:错误 参数为空或格式不正确
 * 403:权限错误
 * 500:token 过期
 */
import router from '../router/'

export default function verify (json, {success, error}) {
  if (Array.isArray(json)) {
    // 多条数据
    for (let i=0, len=json.length ; i<len ; i++ ) {
      if (json[i].code !== 200) {
        if (json[i].code === 400) {
          error()
        } else if (json[i].code === 500) {
          router.push('/login')
        } else {
          error()
        }
        break
      }
    }
    success()
  } else if (typeof json === 'object') {
    // 单条数据
    // if (json.code === 0 && json.data !== null) {
    if (json.code === 200) {
      if (typeof success === 'function') {
        success()
      }
    } else if (json.code === 400) {
      if (typeof error === 'function') {
        error()
      }
    } else if (json.code === 500) {
      router.push('/login')
    } else {
      error()
    }
  } else {
    console.log('verify: 未知的返回数据')
  }
}
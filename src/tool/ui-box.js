/*
 * @Author: Adrian.taojun 
 * @Date: 2018-06-10 13:45:54 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-06-10 13:46:21
 * 
 * 关于UI操作方面的类
 */
class Tool {
  constructor () {}

  // 获取屏幕高度
  getScreenHeight () {
    return window.innerHeight || document.documentElement.clientHeight
  }
}

export default new Tool()
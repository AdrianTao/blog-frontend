/*
 * @Author: Adrian.taojun 
 * @Date: 2018-06-10 13:45:35 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-09-05 21:23:01
 * 
 * 通用方法类
 */
class UtilFN {
  constructor () {}

  // 获取日期 年月日 时分秒
  getDate () {
    let timeArr = []
    let timer = new Date()
    
    timeArr.push(timer.getFullYear())
    timeArr.push(timer.getMonth() + 1)
    timeArr.push(timer.getDate())
    timeArr.push(timer.getHours())
    timeArr.push(timer.getMinutes())
    timeArr.push(timer.getSeconds())

    return timeArr
  }

  // 获取地址栏参数
  getLocationParams (name) {
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
    let r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return unescape(r[2])
    }
    
    return null
  }

  // 检测是否是移动端
  isMobile () {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
			return true
		} else {
			return false
		}
  }
}

export default new UtilFN()
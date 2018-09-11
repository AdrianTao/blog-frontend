/*
 * @Author: Adrian.taojun 
 * @Date: 2017-11-01 13:54:36 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-06-07 14:20:43
 * 
 * 该对象用于数据持久化
 */
class Store {
  constructor () {
    this.store = window.localStorage
  }

  set (key, value, fn) {
    try{
      value = JSON.stringify(value)
    } catch (e) {

    }

    this.store.setItem(key, value)

    fn && fn()
  }

  get (key, fn) {
    if (!key) {
      throw new Error('没有找到key。')
    }
    if (typeof key === 'object') {
      throw new Error('key不能是一个对象。')
    }
    let value = this.store.getItem(key)

    if (value !== null) {
      try {
        value = JSON.parse(value)
      } catch (e) {

      }
    }

    return value
  }

  remove (key) {
    this.store.removeItem(key)
  }
}

export default new Store()
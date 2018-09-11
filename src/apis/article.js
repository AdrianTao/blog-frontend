/*
 * @Author: Adrian.taojun 
 * @Date: 2018-07-02 22:41:46 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-07-03 23:16:21
 * 
 * 文章相关接口
 */
import qs from 'qs'
import { http } from '../tool'

const ARTICLE = '/article/'
const instance = http(ARTICLE)

export default {
  // 获取日志列表
  getArticleList (params) {
    return instance.post('getList', params)
  },
}
/*
 * @Author: Adrian.taojun 
 * @Date: 2018-07-02 22:41:46 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-08-14 23:08:19
 * 
 * 阅览相关接口
 * 
 * 包含：
 *      获取文章列表 查看谋篇文章
 *      获取所有分类
 *      评论相关
 */
import { http } from '../tool'

const ARTICLE = '/article/'
const CLASSIFY = '/classify/'
const COMMENTS = '/comments/'
const article = http(ARTICLE)
const classify = http(CLASSIFY)
const comments = http(COMMENTS)

export default {
  // 获取日志列表
  getArticleList (params) {
    return article.post('getList', params)
  },

  // 获取日志
  getArticle (params) {
    return article.post('getOne', params)
  },

  // 根据分类标签 获取日志列表
  getArticleListByClass (params) {
    return article.post('getlistByClass', params)
  },

  // 获取分类列表
  getClassifyList (params) {
    return classify.get('list', params)
  },

  // 获取评论
  getComments (params) {
    return comments.post('getComments', params)
  }
}
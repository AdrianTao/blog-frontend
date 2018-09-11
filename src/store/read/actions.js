/*
 * @Author: Adrian.taojun 
 * @Date: 2018-07-02 23:05:49 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-09-05 23:59:05
 */
import { verify, errorHandler } from '@/tool'
import { read } from '@/apis'

export default {
  // 获取单个日志
  getArticle ({commit, state, rootState, dispatch}, obj) {
    return new Promise( (resolve, reject) => {
      let params = {
        id: obj.id
      }

      read.getArticle(params)
        .then( (response) => {
          // console.log('获取日志', response)
          let json = response.data

          verify(json, {
            success: () => {
              // console.log('获取日志', json.data)
              let res = {
                id: json.data._id,
                title: json.data.title,
                content: json.data.content,
                classify: json.data.classify,
                time: json.data.time,
              }
              commit('setArticle', res)
              resolve()
            },
            error: () => {
              reject(json.message)
            }
          })
        })
        .catch( (err) => {
          errorHandler(err)
          reject(err)
        })
    })
  },

  // 获取日志列表
  getArticleList ({commit, state, rootState, dispatch}, obj) {
    return new Promise( (resolve, reject) => {
      let params = {
        page: obj.page,
        limit: 10   // 每次固定十个
      }

      read.getArticleList(params)
        .then( (response) => {
          let json = response.data

          verify(json, {
            success: () => {
              let res = {
                // list: json.data.articleLists,     // 日志列表
                total: json.data.total,           // 日志总数
                hasNext: json.data.hasNext,       // 是否还有下一页
                hasPrev: json.data.hasPrev        // 是否还有上一页
              }
              let list = []
              if (json.data.articleLists) {
                list = json.data.articleLists.map( (item) => {
                  return {
                    id: item._id,
                    title: item.title,
                    classify: item.classify,
                    time: item.time,
                  }
                })
              }
              res.list = list
              resolve(res)
            },
            error: () => {
              reject(json.message)
            }
          })
        })
        .catch( (err) => {
          errorHandler(err)
          reject(err)
        })
    })
  },

  // 根据分类标签 获取日志列表
  getArticleListByClass ({commit, state, rootState, dispatch}, obj) {
    return new Promise( (resolve, reject) => {
      let params = {
        page: obj.page,
        limit: 10,   // 每次固定十个
        classify: obj.classify
      }

      read.getArticleListByClass(params)
        .then( (response) => {
          let json = response.data

          verify(json, {
            success: () => {
              let response = {
                // list: json.data.articleLists,     // 日志列表
                hasNext: json.data.hasNext,       // 是否还有下一页
                hasPrev: json.data.hasPrev        // 是否还有上一页
              }
              let list = []
              if (json.data.articleLists) {
                list = json.data.articleLists.map( (item) => {
                  return {
                    id: item._id,
                    title: item.title,
                    classify: item.classify,
                    time: item.time,
                  }
                })
              }
              response.list = list
              resolve(response)
            },
            error: () => {
              reject(json.message)
            }
          })
        })
        .catch( (err) => {
          errorHandler(err)
          reject(err)
        })
    })
  },

  // 获取分类列表
  getClassifyList ({commit, state, rootState, dispatch}) {
    return new Promise( (resolve, reject) => {
      read.getClassifyList()
        .then( (response) => {
          let json = response.data

          verify(json, {
            success: () => {
              let classify = json.data.map( (item) => {
                return item.classify
              })
              resolve(classify)
            },
            error: () => {
              reject(json.message)
            }
          })
        })
        .catch( (err) => {
          errorHandler(err)
          reject(err)
        })
    })
  },

  // 获取留言板列表
  getMessageBoardList ({commit, state, rootState, dispatch}, obj) {
    return new Promise( (resolve, reject) => {
      let params = {
        page: obj.page,     // 页数
        limit: 10,          // 固定10个
        id: 0               // 留言板 id为0
      }

      read.getComments(params)
        .then( (response) => {
          let json = response.data

          verify(json, {
            success: () => {
              let res = {
                // list: json.data.articleLists,     // 留言板列表
                hasNext: json.data.hasNext,       // 是否还有下一页
                hasPrev: json.data.hasPrev        // 是否还有上一页
              }
              let list = json.data.comments.map( (item) => {
                return {
                  name: item.author,          // 评论者名字
                  content: item.content,      // 评论内容
                  date: item.created_at,      // 日期
                }
              })
              res.list = list
              resolve(res)
            },
            error: () => {
              reject(json.message)
            }
          })
        })
        .catch( (err) => {
          errorHandler(err)
          reject(err)
        })
    })
  },
}
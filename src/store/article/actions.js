/*
 * @Author: Adrian.taojun 
 * @Date: 2018-07-02 23:05:49 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-07-03 23:26:43
 */
import { verify, errorHandler } from '@/tool'
import { read } from '@/apis'

export default {
  // 获取日志列表
  getArticleList ({commit, state, rootState, dispatch}, obj) {
    return new Promise( (resolve, reject) => {
      let params = {
        page: obj.page,
        limit: obj.limit
      }

      read.getArticleList(params)
        .then( (response) => {
          console.log('获取日志列表', response)
          let json = response.data

          verify(json, {
            success: () => {
              console.log(json.data)
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
}
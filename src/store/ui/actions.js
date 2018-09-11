export default {
  setUIData ({commit}, obj) {
    commit('setUIData', obj)
  },

  setArticleSeen ({commit}, seen) {
    commit('setArticleSeen', seen)
  }

  // 获取站点列表
  // getStationList (context) {
  //   return new Promise( (resolve, reject) => {
  //     station.query.getStationList()
  //       .then( (response) => {
  //         let json = response.data

  //         verify(json, {
  //           success: () => {
  //             context.commit('getStationList', json.data)
  //             resolve()
  //           },
  //           error: () => {
  //             reject(json.message)
  //           }
  //         })
  //       })
  //       .catch( (error) => {
  //         console.log(error)
  //       })
  //   })
  // },
}
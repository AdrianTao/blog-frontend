// vue & vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import ui from './ui'             // ui
import read from './read'         // 阅览文章部分

export default new Vuex.Store({
  modules: {
    ui,
    read,
  }
})
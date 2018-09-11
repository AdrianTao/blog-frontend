/*
 * @Author: Adrian.taojun 
 * @Date: 2018-05-20 20:25:28 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-05-20 22:55:55
 */

import Nav from '@/components/nav'

export default {
  name: 'app-header',
  data () {
    return {
      loginStyle: {
        blur: false,    // 当前是否拥有焦点
        width: '80px',
      },

      login: ''
    }
  },
  components: {
    appNav: Nav
  },
  methods: {
    // 点击login事件
    clickLogin () {
      this.loginStyle = {
        blur: true,
        width: '130px',
      }
    },
    // login失去焦点事件
    blurLogin () {
      this.loginStyle = {
        blur: false,
        width: '80px',
      }
      this.login = ''
    },
    // 登入
    enterLogin () {
      this.login = ''
    }
  },
  created () {
    
  },
  mounted () {

  }
}
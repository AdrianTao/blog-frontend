/*
 * @Author: Adrian.taojun 
 * @Date: 2018-06-24 14:57:05 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-06-24 17:55:05
 */
export default {
  name: 'avatar',
  data () {
    return {
      sex: false,
      hp: true,
      mp: true,
    }
  },
  methods: {
    routingHop () {
      this.$router.push('/about')
    },

    mouseenterHP () {
      this.hp = false
    },

    mouseleaveHP () {
      this.hp = true
    },

    mouseenterMP () {
      this.mp = false
    },

    mouseleaveMP () {
      this.mp = true
    },

    mouseenterSex () {
      this.sex = true
    },

    mouseleaveSex () {
      this.sex = false
    },
  },
  created () {

  },
  mounted () {
    
  }
}
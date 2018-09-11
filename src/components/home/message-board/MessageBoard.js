/*
 * @Author: Adrian.taojun 
 * @Date: 2018-06-20 23:47:10 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-07-10 23:05:25
 */

export default {
  name: 'message-board',
  data () {
    return {
      list: [],
      page: 1,
      hasNext: false,
      height: '',
    }
  },
  methods: {
    getMessageBoardList () {
      this.$store.dispatch('read/getMessageBoardList', {
        page: this.page
      })
        .then( (response) => {
          this.list = response.list
          this.hasNext = response
        })
    }
  },
  created () {
    this.getMessageBoardList()
  },
  mounted () {
    this.height = document.querySelector('.panel-right > .panel-box').offsetHeight - 240 
  }
}
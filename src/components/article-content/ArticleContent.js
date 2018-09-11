/*
 * @Author: Adrian.taojun 
 * @Date: 2018-07-23 22:00:33 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-09-04 23:56:37
 */
import marked from 'marked'
export default {
  name: 'app-articles',
  data () {
    return {
      leftHeight: '',     // 左面板高度
      centerWidth: '',    // 中面板宽度
      leftWidth: '',      // 左面板宽度
      currentForce: '',   // 当前鼠标移入的组件
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    articleContent () {
      return this.$store.state.read.article.content
    },

    compiledMarkdown () {
      return marked(this.articleContent, { sanitize: true })
    },
  },
  watch: {
    
  },
  methods: {
    toggleLineBreak (str) {
      // console.log(typeof str)
      // return str
      return str.replace(/\n/g,'<br>')
    },

    // 返回日志列表
    backList () {
      this.$store.dispatch('ui/setArticleSeen', false)
      this.$router.push('/')
    },

    // 设置左侧高度
    getHeight () {
      this.leftHeight = document.querySelector('.article-content .right .panel').offsetHeight
    },

    // 获取宽度
    getWidth () {
      this.centerWidth = document.querySelector('.article-content .center').offsetWidth + 20
      this.leftWidth = document.querySelector('.article-content .left').offsetWidth + 20
    },

    // 滚动左侧
    scorllLeft () {
      if (this.currentForce === 'left') {
        let parent = document.querySelector('.article-left-body').offsetHeight
        let children = document.querySelector('.article-left-body div').offsetHeight
        let leftScrollTop = document.querySelector('.article-left-body').scrollTop
        let percent = leftScrollTop / (children - parent)
        percent = percent > 1 ? 1 : percent
        document.querySelector('.article-content-body').scrollTop = percent * leftScrollTop
      }
    },

    // 滚动中间
    scorllCenter () {
      if (this.currentForce === 'center') {
        let parent = document.querySelector('.article-content-body').offsetHeight
        let children = document.querySelector('.article-content-body div').offsetHeight
        let centertScrollTop = document.querySelector('.article-content-body').scrollTop
        let percent = centertScrollTop / (children - parent)
        percent = percent > 1 ? 1 : percent
        document.querySelector('.article-left-body').scrollTop = percent * centertScrollTop
      } else {}
    },

    // 鼠标移入
    mouseEnter (name) {
      this.currentForce = name
    },

    // 鼠标移出
    mouseLeave () {
      this.currentForce = ''
    }
  },
  created () {
    
  },
  mounted () {

  },
  updated () {
    if (this.visible) {
      this.getHeight()
      this.getWidth()
    }
  },
}
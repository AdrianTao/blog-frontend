/*
 * @Author: Adrian.taojun 
 * @Date: 2018-06-10 13:58:09 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-09-05 23:58:07
 * 
 * 主页日志列表
 */

export default {
  name: 'article-list',
  data () {
    return {
      listHeight: '',
      classify: [],
      currentClassify: '全部',

      list: [],           // 日志列表
      page: 1,            // 当前页码
      hasNext: false,     // 是否还有下一页
      
      articleTotal: 0   
    }
  },
  components: {
    
  },
  computed: {

  },
  watch: {
    $route(to,from){
      this.autoOpenArticle()
    }
  },
  methods: {
    // 设置列表高度
    setListHeight () {
      this.listHeight = document.querySelector('.home-article').clientHeight - 200
    },

    // 获取日志列表
    getArticleList () {
      this.$store.dispatch('read/getArticleList', {
        page: this.page,
      })
        .then( (response) => {
          this.list = response.list
          this.hasNext = response.hasNext
          this.articleTotal = response.total
        })
    },

    // 通过分类 获取日志列表
    getArticleListByClass (classify) {
      this.page = 1
      this.currentClassify = classify
      if (classify === '全部') {
        this.getArticleList()
      } else {
        this.$store.dispatch('read/getArticleListByClass', {
          page: '1',
          classify
        })
          .then( (response) => {
            this.list = response.list
            this.hasNext = response.hasNext
          })
      }
    },

    // 获取分类
    getClassify (label) {
      this.$store.dispatch('read/getClassifyList')
        .then( (response) => {
          this.classify = response
        })
    },

    // 获取日志
    getArticle (item) {
      this.$store.dispatch('read/getArticle', item)
        .then( () => {
          this.setArticleSeen(true)
          this.$router.push(item.id)
        })
    },

    // 设置文章界面是否可见
    setArticleSeen (seen) {
      this.$store.dispatch('ui/setArticleSeen', seen)
      
    },

    // 如果地址栏携带了文章id 自动打开这个文章
    autoOpenArticle () {
      if (window.location.pathname !== '/') {
        let id = window.location.pathname.split('/')[1]
        this.getArticle({id})
      } else {
        this.setArticleSeen(false)
      }
    }
  },
  created () {
    this.getArticleList()
    this.getClassify()
    this.autoOpenArticle()
  },
  mounted () {
    this.setListHeight()
  }
}
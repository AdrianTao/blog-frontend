<template>
  <div id="app">
    <div :class="this.$store.state.ui.articleSeen ? 'is-blur' : ''">
      <router-view/>
    </div>

    <!-- 文章本体 -->
    <transition name="fade">
      <app-articles :visible.sync="this.$store.state.ui.articleSeen">
      </app-articles>
    </transition>

    
  </div>
</template>

<script>
import ArticleContent from '@/components/article-content'  // 日志本体

export default {
  name: 'App',
  components: {
    appArticles: ArticleContent
  }
}
</script>

<style>
@font-face {
  font-family: myfont;
  src:url(./assets/OrbitronLight.ttf);
}
#app {
  font-family: myfont, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #87B9CB;
  /* margin-top: 60px; */
  overflow: hidden;
  /* background: url(./assets/panel-backgrounp.png); */
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition: transform 0.5s;
  -webkit-transition: transform 0.2s;
}

body {
  font-family:"Helvetica Arial", "Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  position: relative;
  overflow-x: hidden;
  background: #151D22;
  /* 透视效果 */
  perspective: 1000px;
  -webkit-perspective: 1000px;
}

a, a:hover {
  text-decoration: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

[class^="square-"] {
  position: absolute;
  display: block;
  width: 3px;
  height: 3px;
  background: #64F5FC;
}
.square-top-left {
  top: -2px;
  left: 0;
}
.square-top-right {
  top: -2px;
  right: 0;
}
.square-bottom-left {
  bottom: -2px;
  left: 0;
}
.square-bottom-right {
  bottom: -2px;
  right: 0;
}

.is-blur {
  filter: blur(20px);
}
</style>

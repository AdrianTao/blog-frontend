<template>
  <div class="home-article">
    <div class="home-article-title">
      <div>日志列表<span class="bedeck"></span></div>
    </div>
    <div class="classify-list">
      <ul>
        <li
          :class="currentClassify === '全部' ? 'classify-active' : ''"
          @click="getArticleListByClass('全部')">
          全部
        </li>
        <li
          v-for="item in classify"
          :class="currentClassify === item ? 'classify-active' : ''"
          @click="getArticleListByClass(item)">
          {{item}}
        </li>
      </ul>

      <span class="article-total">
        {{'TOTAL : ' + articleTotal}}
      </span>
    </div>

    <div
      class="article-list"
      :style="{maxHeight: listHeight + 'px'}">
      <span class="bedeck"></span>
      <ul :style="{transform: 'matrix(1, 0, 0, 1, '+ this.$store.state.ui.matrixY +', '+ this.$store.state.ui.matrixX +' )'}">
        <li class="list-header">
          <h3 class="list-header-title">TITLE</h3>
          <h3 class="list-header-classify">CLASSIFY</h3>
          <h3 class="list-header-date">DATE</h3>
        </li>
      </ul>
      <ul :style="{transform: 'matrix(1, 0, 0, 1, '+ this.$store.state.ui.matrixY +', '+ this.$store.state.ui.matrixX +' )', maxHeight: listHeight - 30 + 'px'}">
        <li
          v-for="item in list"
          @click="getArticle(item)"
          class="article">
          <span class="article-title">{{item.title}}</span>
          <span class="article-class">{{item.classify}}</span>
          <span class="article-date">{{item.time}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import List from './List.js'
export default List
</script>

<style scoped>
@import url(./List.css);
</style>
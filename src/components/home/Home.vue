<template>
  <div
    class="home"
    ref="centerBox"
    @mousemove="pointMove($event)"
    :style="{
      height: boxHeight + 'px', 
      transform: 'scale(' + box.scale + ') rotateX('+ box.rotateX +') rotateY(' + box.rotateY + ')', 
      '-webkit-transform': 'scale('+ box.scale +') rotateX('+ box.rotateX +') rotateY(' + box.rotateY + ')'
    }">
    <!-- 左侧面板 -->
    <div class="box left">
      <div
        class="panel"
        :style="{
          transform: 'matrix(1, 0, 0, 1, '
          + this.$store.state.ui.matrixY 
          +', '
          + this.$store.state.ui.matrixX 
          +' )'
        }">
        <app-nav></app-nav>
        <avatar></avatar>
      </div>
    </div>

    <!-- 中间面板 -->
    <div class="box center">
      <div
        class="panel"
        :style="{
          transform: 'matrix(1, 0, 0, 1, '
          + this.$store.state.ui.matrixY 
          +', '
          + this.$store.state.ui.matrixX 
          +' )'
        }">
        <app-header></app-header>
        <panel-title>
          MAIN
        </panel-title>
        <!-- 文章列表 -->
        <article-list
          ref="articleList"
          :style="{height: boxHeight - 160 + 'px'}">
        </article-list>
      </div>
    </div>

    <!-- 右侧面板 -->
    <div class="box right">
      <div
        class="panel"
        :style="{
          transform: 'matrix(1, 0, 0, 1, '
          + this.$store.state.ui.matrixY 
          +', '
          + this.$store.state.ui.matrixX 
          +' )'
        }">
        <panel-title>
          SUNDRY
        </panel-title>
        <clock></clock>
        <message-board></message-board>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './Home.js'
export default Home
</script>

<style>
@import url(./Home.css);
</style>
<template>
  <div
    class="home-messageboard"
    :style="{height: height + 'px'}">
    <div class="messageboard-title">
      <div>
        留言<span>板</span>
        <span class="bedeck"></span>
      </div>
      <p>
        不要净写一些让人看了<span>面红耳赤</span>的东西 
        <span class="far fa-meh"></span>
      </p>
      <button class="home-messageboard-add">
        评论
      </button>
    </div>

    <div class="messageboard-list">
      <span class="bedeck"></span>
      <ul
        :style="{transform: 'matrix(1, 0, 0, 1, '+ this.$store.state.ui.matrixY +', '+ this.$store.state.ui.matrixX +' )'}">
        <li
          v-for="(item, index) in list"
          :key="index">
          <div class="messageboard-name">
            {{item.name}}
          </div>
          <div class="messageboard-date">
            {{'[ ' + item.date + ' ]'}}
          </div>
          <div class="messageboard-content">
            {{item.content}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MessageBoard from './MessageBoard.js'

export default MessageBoard
</script>

<style>
@import url('./MessageBoard.css');
</style>
<template>
  <div 
    v-if="visible"
    class="article-before">
    <div class="article-content">

      <!-- 左侧面板 -->
      <div class="left box">
        <!-- 文章标题区域 -->
        <div class="article-content-title">
          <!-- 返回按钮 -->
          <button
            @click="backList"
            class="article-content-back">
            <i class="fas fa-arrow-left"></i>
          </button>
          <!-- 文章标题 -->
          <h4 class="article-content-title-text">
            {{ $store.state.read.article.title }}
          </h4>
        </div>

        <!-- 源代码区域 -->
        <div
          class="panel"
          :style="{height: leftHeight - 55 + 'px'}">
          <div class="panel-title">
            MARKDOWN
          </div>
          <div
            class="article-left-body"
            :style="{
              height: leftHeight - 60 + 'px',
              width: leftWidth + 'px'
            }"
            @scroll="scorllLeft"
            @mouseenter="mouseEnter('left')"
            @mouseleave="mouseLeave">
            <div v-html="toggleLineBreak(articleContent)">
            </div>
          </div>
        </div>
      </div>
  
      <!-- 中间面板 -->
      <div class="center box">
        <!-- 文章标题区域 -->
        <div class="article-content-title">
          <!-- 返回按钮 -->
          <button
            @click="backList"
            class="article-content-back">
            <i class="fas fa-arrow-left"></i>
          </button>
          <!-- 文章标题 -->
          <h4 class="article-content-title-text">
            {{ $store.state.read.article.title }}
          </h4>
        </div>

        <div class="center-header">
          <div class="panel-title">
            CONTENT
          </div>
        </div>
        
        <div class="article-content-info">
          <div class="article-content-info-line">
            <label>作者: </label>
            <p class="article-content-info-author">Adrian</p>
          </div>

          <div class="article-content-info-line">
            <label>分类: </label>
            <p class="article-content-info-classify">
              {{ $store.state.read.article.classify }}
            </p>
          </div>

          <div class="article-content-info-line">
            <label>日期: </label>
            <p class="article-content-info-time">
              {{ $store.state.read.article.time }}
            </p>
          </div>
        </div>

        <div
          class="article-content-body"
          :style="{
            height: leftHeight - 158 + 'px',
            width: centerWidth + 'px'
          }"
          @scroll="scorllCenter"
          @mouseenter="mouseEnter('center')"
          @mouseleave="mouseLeave">
          <div v-html="compiledMarkdown"></div>
        </div>
      </div>
  
      <!-- 右侧面板 -->
      <div class="right box">
        <div class="panel">
          <div class="panel-title">
            COMMENT
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleContent from './ArticleContent.js'

export default ArticleContent
</script>

<style>
@import url(./ArticleContent.css);
</style>
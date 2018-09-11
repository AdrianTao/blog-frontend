<template>
  <header id="app-header">
    <!-- logo -->
    <div
      class="logo"
      :style="{
        transform: 'matrix(1, 0, 0, 1, '
        + this.$store.state.ui.matrixY 
        +', '
        + this.$store.state.ui.matrixX 
        +' )'
      }">
      <div class="logo-text">
        <span class="red">JT</span>
        <span class="white"> - 411049</span>
      </div>
      <span class="square-top-left"></span>
      <span class="square-top-right"></span>
      <span class="square-bottom-left"></span>
      <span class="square-bottom-right"></span>
    </div>
    
    <!-- navbar -->
    <app-nav></app-nav>

    <!-- login -->
    <div
      class="login-box"
      :style="{
        width: loginStyle.width, 
        transform: 'matrix(1, 0, 0, 1, '+ this.$store.state.ui.matrixY +', '+ this.$store.state.ui.matrixX +' )'
      }">
      <p
        class="login-box-placeholder"
        :style="{display: loginStyle.blur ? 'none' : 'block'}">
        LOGIN
      </p>
      <input
        class="login-box-form"
        v-model="login"
        type="text"
        @click="clickLogin"
        @blur="blurLogin"
        @keyup.enter="blurLogin">
    </div>
  </header>
</template>

<script>
import Header from './Header.js'
export default Header
</script>

<style>
@import url(./Header.css);
</style>
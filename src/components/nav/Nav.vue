<template>
  <nav class="app-navbar">
    <ul
      class="navbar-menu"
      :style="{transform: 'matrix(1, 0, 0, 1, '+ this.$store.state.ui.matrixY +', '+ this.$store.state.ui.matrixX +' )'}">
      <li
        v-if="!item.hidden"
        v-for="item in $router.options.routes"
        class="navbar-menu-item">
        <router-link
          :to="item.path">
          {{item.name}}
        </router-link>
      </li>
    </ul>
    <!-- <span class="square-top-left"></span>
    <span class="square-top-right"></span>
    <span class="square-bottom-left"></span>
    <span class="square-bottom-right"></span> -->
  </nav>
</template>

<script>
import Nav from './Nav.js'
export default Nav
</script>

<style>
@import url(./Nav.css);
</style>
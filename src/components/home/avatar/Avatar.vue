<template>
  <div
    class="home-avatar"
    @click="routingHop">
    <span class="top left"></span>
    <span class="top right"></span>
    <span class="bottom left"></span>
    <span class="bottom right"></span>

    <div
      class="avatar-image"
      :style="{transform: 'matrix(1, 0, 0, 1, '+ this.$store.state.ui.matrixY +', '+ this.$store.state.ui.matrixX +' )'}">
    </div>
    <div
      class="avatar-info"
      :style="{transform: 'matrix(1, 0, 0, 1, '+ this.$store.state.ui.matrixY +', '+ this.$store.state.ui.matrixX +' )'}">
      <h4
        class="avatar-info-name"
        @mouseenter="mouseenterSex"
        @mouseleave="mouseleaveSex">
        Adrian
        <span v-if="sex"> (男) </span>
      </h4>
      <div
        class="avatar-info-hp"
        @mouseenter="mouseenterHP"
        @mouseleave="mouseleaveHP">
        <span>HP</span>
        <div
          v-if="hp"
          class="avatar-info-grid">
          <span
            v-for="block in 10"
            class="avatar-info-grid-block"
            :class="block <= 1 ? 'block-on' : 'block-off'">
          </span>
        </div>
        <div v-else
          :style="{textAlign: 'center'}"> 10% </div>
      </div>
      <div
        class="avatar-info-mp"
        @mouseenter="mouseenterMP"
        @mouseleave="mouseleaveMP">
        <span>MP</span>
        <div
          v-if="mp"
          class="avatar-info-grid">
          <span
            v-for="block in 10"
            class="avatar-info-grid-block"
            :class="block <= 5 ? 'block-on' : 'block-off'">
          </span>
        </div>
        <div v-else
          :style="{textAlign: 'center'}"> 50% </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar.js'
export default Avatar
</script>

<style>
@import url(./Avatar.css);
</style>
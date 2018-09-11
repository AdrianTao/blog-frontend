<template>
  <div class="panel-title">
    <h5 class="panel-title-text">
      <slot>title</slot>
      <span class="square-center-right"></span>
    </h5>
    <div class="panel-title-line">
      <span class="square-bottom-right"></span>
    </div>
    <span class="square-bottom-left"></span>
    <span class="square-bottom-right"></span>
  </div>
</template>

<script>
export default {
  name: 'panel-title',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.panel-title {
  position: relative;
  margin-bottom: 20px;
  border-bottom: 1px solid #64F5FC;
}

.panel-title-text {
  position: absolute;
  top: -7px;
  width: auto;
  padding: 0 10px 0 0;
  /* text-align: center; */
  background: #090b0d;
  z-index: 9;
}
.panel-title-line {
  position: relative;
  margin: 10px 0;
  display: block;
  border-bottom: 1px solid #5a6d7b;
  /* opacity: .6; */
}

.square-center-right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  width: 3px;
  height: 3px;
  background: #64F5FC;
  opacity: .6;
}
</style>
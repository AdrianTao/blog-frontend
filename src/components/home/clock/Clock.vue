<template>
  <div
    class="home-clock"
    :style="{transform: 'matrix(1, 0, 0, 1, '+ this.$store.state.ui.matrixY +', '+ this.$store.state.ui.matrixX +' )'}">
    <div
      class="home-clock-time"
      :style="{'font-size': fontSize + 'px', height: (fontSize + 15) + 'px'}">
      <span>
        {{hour}}
      </span>
      <span>:</span>
      <span>
        {{minute}}
      </span>
      <span class="home-clock-stress">:</span>
      <span class="home-clock-stress">
        {{second}}
      </span>
    </div>
  </div>
</template>

<script>
/*
 * @Author: Adrian.taojun 
 * @Date: 2018-06-10 14:01:57 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-07-01 15:52:33
 */

// import "@/assets/911porscha.TTF"

export default {
  name: 'clock',
  data () {
    return {
      hour: '00',
      minute: '00',
      second: '00',
      fontSize: 60,

      loopID: null,
    }
  },
  components: {
    
  },
  watch: {
    fontSize (val) {
      this.fontSize = val
    }
  },
  methods: {
    // 获取日期
    getTime () {
      let timer = new Date()
      let hour = timer.getHours()
      let minute = timer.getMinutes()
      let second = timer.getSeconds()
      this.hour = (hour <= 9 ? '0' + hour : hour)
      this.minute = (minute <= 9 ? '0' + minute : minute)
      this.second = (second <= 9 ? '0' + second : second)
    },

    startLoop () {
      this.loopID = setInterval( () => {
        this.getTime()
      },1000)
    },

    stopLoop () {
      clearInterval(this.loopID)
    },
  },
  created () {
    this.startLoop()
  },
  mounted () {
    // const that = this
    // window.onresize = () => {
    //   return (() => {
    //     console.log(123)
    //     let width = document.querySelector('.home-clock').clientWidth
    //     let bs = (width - 265) >=5 ?  (width - 265) : 0
    //     that.fontSize += bs * 4.5
    //   })()
    // }
    let width = document.querySelector('.home-clock').clientWidth
    let bs = (width - 265) >=5 ?  (width - 265) : 0
    this.fontSize += (bs / 10 - 10)
  },
  destroyed () {
    this.stopLoop()
  }
}
</script>

<style>
.home-clock {
  display: block;
  max-width: 400px;
}
.home-clock-time {
  color: #a1fff9;
}
.home-clock-time > span {
  display: block;
  /* width: 50px; */
  float: left;
}
.home-clock-stress {
  color: #528298;
}
</style>
/*
 * @Author: Adrian.taojun 
 * @Date: 2018-05-20 19:20:20 
 * @Last Modified by: Adrian.taojun
 * @Last Modified time: 2018-09-05 23:46:14
 * 
 * 主页面
 */

import { UiBox, UtilFN } from '@/tool'
import Header from '@/components/header'    // 顶部标题LOGO
import Nav from '@/components/nav'          // 左侧导航栏
import Title from '@/components/title'      // title
import List from './list'                   // 日志列表
import Clock from './clock'                 // 时钟
import MessageBoard from './message-board'  // 留言板
import Avatar from './avatar'               // 个人简介
import utilFn from '../../tool/util-fn';

export default {
  name: 'home',
  data () {
    return {
      boxHeight: '',

      box: {
        scale: '0.9',
        rotateY: '0deg',
        rotateX: '0deg',
      },
      
      animationFlag: true,    // 是否允许动画特效
    }
  },
  components: {
    appHeader: Header,
    appNav: Nav,
    panelTitle: Title,
    articleList: List,
    clock: Clock,
    messageBoard: MessageBoard,
    avatar: Avatar,
  },
  methods: {
    // 获取屏幕高度
    getScreenHeight () {
      this.boxHeight = UiBox.getScreenHeight()
    },

    // 鼠标移动
    pointMove (ev) {
      // if (!utilFn.isMobile()) {
        let obj = this.$refs.centerBox
        let centerX = obj.offsetWidth / 2
        let centerY = obj.offsetHeight / 2
        let clientX = ev.clientX - obj.offsetLeft
        let clientY = ev.clientY - obj.offsetTop
        this.box.rotateY = ((centerX - clientX) / centerX * 2.5).toFixed(2) + 'deg'
        this.box.rotateX = ((centerY - clientY) / centerY * -2.5).toFixed(2) + 'deg'
        let matrixY = Number.parseInt((centerX - clientX) / centerX * -5)
        let matrixX = Number.parseInt((centerY - clientY) / centerY * 10)
  
        this.$store.dispatch('ui/setUIData', {
          matrixY,
          matrixX
        })
      // }
    },

    // 移动端设备移动事件
    deviceMove () {
      window.ondeviceorientation = (event) => {
        let matrixY = event.gamma
        let matrixX = Number.parseInt((90 - event.beta) / 9)
        if (matrixX > 9) {
          matrixX = 9
        } else if (matrixX < -9) {
          matrixX = -9
        } else {}

        if (matrixY > 5) {
          matrixY = 5
        } else if (matrixY < -5) {
          matrixY = -5
        } else {}
        this.$store.dispatch('ui/setUIData', {
          matrixY,
          matrixX
        })
      }
    }
  },
  created () {
    this.getScreenHeight()
  },
  mounted () {
    // 尺寸变化时 box的高度跟随变化
    document.body.onresize = () => {
      this.getScreenHeight()
    }
    if (utilFn.isMobile()) {
      this.deviceMove()
    }
  }
}
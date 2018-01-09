<template>
  <div class="swipe" ref="swipeGroup">
    <mt-swipe
      :speed="speed"
      :auto="auto"
      :defaultIndex="defaultIndex"
      :continuous="continuous"
      :showIndicators="showIndicators"
      :prevent="prevent"
      :stopPropagation="stopPropagation"
    >
      <mt-swipe-item v-for="item in swipeList" :key="item.id">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" ref="swipe">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        c:0
      }
    },
    props: {
      swipeList: {
        type: Array,
        default: []
      },
      // 动画持时
      speed: {
        type: Number,
        default: 300
      },
      // 自动播放的时间间隔
      auto: {
        type: Number,
        default: 3000
      },
      // 初始显示的轮播图的索引
      defaultIndex: {
        type: Number,
        default: 0
      },
      // 是否可以循环播放
      continuous: {
        type: Boolean,
        default: true
      },
      // 是否显示 indicators
      showIndicators: {
        type: Boolean,
        default: true
      },
      // 是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能
      prevent: {
        type: Boolean,
        default: false
      },
      // 是否在 touchstart 事件触发时阻止冒泡。
      stopPropagation: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .swipe{
    height: 250px;
    img{
      width:100%;
      height: 250px;
    }
  }
  .mint-swipe-indicator{
    opacity: 1 !important;
  }
</style>

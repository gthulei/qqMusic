<template>
  <transition name="slide">
   <h-music></h-music>
  </transition>
</template>

<script type="text/ecmascript-6">
  import HMusic from 'components/music-list/music-list'
  export default {
    data() {
      return {
      }
    },
    components: {
      HMusic
    }
  }
</script>

<style lang="scss">
  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s
  }
  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0)
  }
</style>

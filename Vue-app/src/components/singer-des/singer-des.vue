<template>
  <transition name="slide">
   <h-music :title="title" :bgImage="bgImage"></h-music>
  </transition>
</template>

<script type="text/ecmascript-6">
  import HMusic from 'components/music-list/music-list'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avicon
      },
      ...mapGetters([
        'singer'
      ])
    },
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

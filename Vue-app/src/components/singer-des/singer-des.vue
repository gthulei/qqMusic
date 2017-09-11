<template>
  <transition name="slide">
   <h-music :title="title" :bgImage="bgImage" :songs="songs"></h-music>
  </transition>
</template>

<script type="text/ecmascript-6">
  import HMusic from 'components/music-list/music-list'
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/api.singerList'
  import {ERR_OK} from 'api/api.config'

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
        songs:[]
      }
    },
    created() {
      this._getDetail();
    },
    methods: {
      _getDetail() {
        if(!this.singer.id){
          this.$router.push('/singer');
          return;
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = res.data.list;
          }
        })
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

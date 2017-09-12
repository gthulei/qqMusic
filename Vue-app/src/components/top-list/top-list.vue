<template>
  <transition name="slide">
    <h-music :title="title" :bgImage="bgImage" :songs="list"></h-music>
  </transition>
</template>

<script type="text/ecmascript-6">
  import HMusic from 'components/music-list/music-list'
  import {mapGetters} from 'vuex'
  import {getMusicList} from 'api/api.rankings'
  import {ERR_OK} from 'api/api.config'
  import {createSong} from 'public/js/songs'

  export default {
    data() {
      return {
        list:[]
      }
    },
    computed: {
      title() {
        return this.topList.topTitle
      },
      bgImage() {
        if (this.list.length) {
          return this.list[0].image
        }
        return ''
      },
      ...mapGetters([
        'topList'
      ])
    },
    created() {
      this._getMusicList();
    },
    methods: {
      _getMusicList() {
        if(!this.topList.id){
          this.$router.push('/rankings');
          return;
        }
        getMusicList(this.topList.id).then((res) => {
          if (res.code === ERR_OK) {
            this.list = this._normalizeSongs(res.songlist);
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let musicData = item.data
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
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

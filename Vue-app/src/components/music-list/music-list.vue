<template>
  <div class="music-list" ref="musicList">
    <h-header :isBack="true" :title="title"></h-header>
    <div class="bg-image" :style="bgStyle" ref="bgImag">
      <div class="play-wrapper">
        <div ref="playBtn" class="play">
          <i class="icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>
    </div>
    <ul class="songsWarp" ref="songsWarp">
      <li v-for="item in songs">
        <h2>{{item.musicData.songname}}</h2>
        <p>{{title}}·{{item.musicData.albumname}}</p>
      </li>
    </ul>
    <v-loading v-if="songs.length==0"></v-loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import HHeader from 'base/nav';
  import VLoading from 'base/loading';

  export default {
    props: {
      title: {
        type: String,
      },
      bgImage:{
        type: String,
      },
      songs:{
        typa:Array,
        default:[]
      }
    },
    computed: {
      bgStyle() {
        return `background-image:url(${this.bgImage})`
      }
    },
    mounted() {
      setTimeout(() => {
        this._getHeight();
      },20)
    },
    methods: {
      _getHeight() {
        let musicList = this.$refs.musicList.clientHeight;
        let bgImag = this.$refs.bgImag.clientHeight;
        this.$refs.songsWarp.style.height = (musicList-bgImag-20) +'px';
      }
    },
    components: {
      HHeader,
      VLoading
    }
  }
</script>

<style lang="scss">
  @import "../../public/css/variable.scss";
  @import "../../public/css/mixin.scss";

  .music-list {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: $color-background;
    .songsWarp{
      overflow: auto;
      padding: 20px 30px;
      li{
        line-height: 20px;
        margin-bottom: 10px;
        h2{
          @extend no-wrap
        }
        p{
          margin-top: 5px;
          color: $color-text-d;
          @extend no-wrap

        }
      }
    }
    .back {
      position: absolute;
      top: 0;
      left: 6px;
      z-index: 50;
      .icon-back {
        display: block;
        padding: 10px;
        font-size: $font-size-large-x;
        color: $color-theme;
      }
    }
    .bg-image {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 70%;
      transform-origin: top;
      background-size: cover;
      .play-wrapper {
        position: absolute;
        bottom: 20px;
        z-index: 50;
        width: 100%;
        .play {
          box-sizing: border-box;
          width: 135px;
          padding: 7px 0;
          margin: 0 auto;
          text-align: center;
          border: 1px solid $color-theme;
          color: $color-theme;
          border-radius: 100px;
          font-size: 0;
        }
        .icon-play {
          display: inline-block;
          vertical-align: middle;
          margin-right: 6px;
          font-size: $font-size-medium-x;
        }
        .text {
          display: inline-block;
          vertical-align: middle;
          font-size: $font-size-small;
        }
      }
    }
  }
</style>

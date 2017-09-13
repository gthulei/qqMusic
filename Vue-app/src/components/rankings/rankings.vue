<template>
  <div class="rankings">
    <ul>
      <li v-for="item in topList" :key="item.id" class="item" @click="goBack(item)">
        <div>
          <img alt=""  width="100" height="100" v-lazy="item.picUrl">
        </div>
        <ul class="song-list">
          <li class="song" v-for="(song,index) in item.songList">
            <span>{{index + 1}}</span>
            <span>{{song.songname}}-{{song.singername}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <v-loading v-if="topList.length==0"></v-loading>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import VLoading from 'base/loading';
  import {getTopList} from 'api/api.rankings'
  import {ERR_OK} from 'api/api.config'
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        topList: []
      }
    },
    created() {
      this._getTopList();
    },
    methods: {
      _getTopList() {
        getTopList().then( res => {
          if (res.code === ERR_OK) {
            this.topList = res.data.topList;
          }
        })
      },
      goBack(rankings) {
        this.$router.push(`/rankings/${rankings.id}`);
        this.setTopList(rankings);
      },
      ...mapMutations({
        setTopList: 'SET_TOPLIST'
      })
    },
    components: {
      VLoading
    }
  }
</script>

<style lang="scss">
  @import "../../public/css/variable.scss";
  @import "../../public/css/mixin.scss";

  .rankings{
    margin-top: 78px;
    .item{
      display: flex;
      margin: 0 20px;
      padding-top: 20px;
      height: 100px;
      .song-list{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        background: $color-highlight-background;
        color: $color-text-d;
        font-size: $font-size-small;
        overflow: hidden;
        .song{
          line-height: 26px;
          @extend no-wrap;
        }
      }
    }
  }
</style>

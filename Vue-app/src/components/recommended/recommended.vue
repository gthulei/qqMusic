<template>
  <div class="recommended">
    <v-swipe :swipeList="swipeList" v-if="swipeList.length"></v-swipe>
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul>
        <li v-for="item in discList" class="item">
          <div class="icon">
            <img width="60" height="60" v-lazy="item.imgurl">
          </div>
          <div class="text">
            <h2 class="name" v-html="item.creator.name"></h2>
            <p class="desc" v-html="item.dissname"></p>
          </div>
        </li>
      </ul>
    </div>
    <v-loading v-if="discList.length==0"></v-loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import VLoading from 'base/loading';
  import VSwipe from 'base/swipe';
  import {getSwipeList, getDiscList} from 'api/api.recommend'
  import {ERR_OK} from 'api/api.config'

  export default {
    data() {
      return {
        swipeList: [],
        discList: []
      }
    },
    components: {
      VSwipe,
      VLoading
    },
    created() {
      this._getSwipeList();
      this._getDiscList();
    },
    methods: {
      _getSwipeList() {
        getSwipeList().then(res => {
          if (res.code === ERR_OK) {
            this.swipeList = res.data.slider;
          }
        })
      },
      _getDiscList() {
        getDiscList().then(res => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list;
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "../../public/css/variable.scss";

  .recommended {
    margin-top: 80px;
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;
      }
      .icon {
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $font-size-medium;
      }
      .name {
        margin-bottom: 10px;
        color: $color-text;
      }
      .desc {
        color: $color-text-d;
      }
    }
  }

</style>

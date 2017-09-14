<template>
  <div class="search-list" ref="searchList">
    <mt-loadmore
      :top-method="topMethod"
      topPullText="↓下拉刷新"
      :bottom-method="bottomMethod"
      bottomPullText="↑加载更多"
      :bottom-all-loaded="allLoaded"
      :auto-fill="false"
      ref="loadmore">
      <ul>
        <li v-for="item in result">
          <p class="text" v-html="getDisplayName(item)" :class="{'icon-mine':item.type === 'singer','icon-music':!item.type}"></p>
        </li>
      </ul>
      <p class="toast" v-if="allLoaded">~~到底了~~</p>
    </mt-loadmore>
  </div>
</template>

<script type="text/ecmascript-6">
  import {search} from 'api/api.search'
  import {ERR_OK} from 'api/api.config'
  import {createSong} from 'public/js/songs'

  const perpage = 20;

  export default {
    data() {
      return {
        allLoaded: false,
        page: 1,
        showSinger: true,
        result: [],
        clear: ''
      }
    },
    props: {
      query: {
        type: String,
        default: ''
      }
    },
    mounted() {
      // 外层必须定义高度，且是屏幕的高
      this.getBodyHeight();
    },
    methods: {
      getBodyHeight() {
        let h = document.documentElement.clientHeight-130;
        this.$refs.searchList.style.height = h + 'px'
      },
      _search(flag) {
        search(this.query, this.page, this.showSinger, perpage).then((res) => {
          if (res.code === ERR_OK) {
            if (flag) {
              this.result = [];
            }
            let ret = this._genResult(res.data);
            ret && ret.forEach(item => {
              this.result.push(item);
            });
            this.allLoaded = ret.length != perpage;
            this.$refs.loadmore.onTopLoaded();
            this.$refs.loadmore.onBottomLoaded();
          }
        })
      },
      _genResult(data) {
        let ret = []
        if (data.zhida && data.zhida.singerid) {
          ret.push({...data.zhida, type: 'singer'})
        }
        if (data.song) {
          ret = ret.concat(this._normalizeSongs(data.song.list))
        }
        return ret
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((musicData) => {
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      },
      getDisplayName(item) {
        if (item.type === 'singer') {
          return item.singername
        } else {
          return `${item.name}-${item.singer}`
        }
      },
      topMethod(){
        // 下拉刷新执行的方法
        this.page = 1;
        this.allLoaded = false;
        this._search(true);

      },
      bottomMethod() {
        //上拉刷新执行的方法
        this.page++;
        this._search();

      }
    }
  }
</script>

<style lang="scss">
  @import "../public/css/variable.scss";
  @import "../public/css/mixin.scss";

  .search-list {
    padding-top: 50px;
    overflow: scroll;
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
    .toast{
      text-align: center;
      font-size: $font-size-medium;
      color: $color-text-d;
      padding: 10px 0;
    }
    ul {
      padding: 0 30px;
      font-size: $font-size-medium;
      color: $color-text-d;
      li {
        p {
          line-height: 25px;
          @extend no-wrap;
          &:before {
            margin-right: 5px;
            vertical-align: middle;
          }
        }

      }
    }
  }
</style>

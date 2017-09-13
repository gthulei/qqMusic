<template>
  <div class="search">
    <search-box ref="searchBox" @query="changeQuery"></search-box>
    <div class="hot" v-if="!query">
      <h2>热门搜索</h2>
      <ul>
        <li class="hot-item" v-for="item in hot" @click="setQueryKey(item.k)">
          {{item.k}}
        </li>
      </ul>
    </div>
    <div v-if="query">
      <search-list :result="result" ></search-list>
    </div>
    <v-loading v-if="hot.length==0"></v-loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import searchBox from 'base/search-box'
  import {getHotKey,search} from 'api/api.search'
  import {ERR_OK} from 'api/api.config'
  import VLoading from 'base/loading'
  import searchList from 'base/search-list'
  import {createSong} from 'public/js/songs'

  const perpage = 20;

  export default {
    data() {
      return {
        hot:[],
        query:'',
        page: 1,
        showSinger:true,
        result:[],
        clear:''
      }
    },
    created() {
      this._getHotKey();
    },
    methods: {
      changeQuery(v) {
        this.query = v;
      },
      _getHotKey() {
        getHotKey().then(res => {
          if (res.code === ERR_OK) {
            this.hot = res.data.hotkey.slice(0, 10);
          }
        })
      },
      _search() {
        search(this.query, this.page, this.showSinger, perpage).then((res) => {
          if (res.code === ERR_OK) {
            this.result = this._genResult(res.data);
          }
        })
      },
      _genResult(data) {
        let ret = []
        if (data.zhida && data.zhida.singerid) {
          ret.push({...data.zhida,type:'singer'})
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
      setQueryKey(v) {
        // 引用子组件方法
        this.$refs.searchBox.setQuery(v);
      }
    },
    components: {
      searchBox,
      VLoading,
      searchList
    },
    watch: {
      query(newQuery) {
        if(!newQuery)return;
        clearInterval(this.clear);
        this.clear=setTimeout(()=>{
          this._search();
        },500)

      }
    },
  }
</script>

<style lang="scss">
  @import "../../public/css/variable.scss";

  .search{
      margin-top: 78px;
    .hot {
      margin: 60px 0 0 20px;
      h2{
        margin: 10px 0;
        font-size: $font-size-medium;
        color: $color-sub-theme;
      }
      li{
        display: inline-block;
        padding: 5px 10px;
        margin: 0 20px 10px 0;
        border-radius: 6px;
        background: $color-highlight-background;
        font-size: $font-size-medium;
        color: $color-text-d;
      }
    }
  }
</style>

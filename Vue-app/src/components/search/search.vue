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
    <search-history v-if="!query"></search-history>
    <search-list :query="query" v-if="query" ref="searchList"></search-list>
    <v-loading v-if="hot.length==0"></v-loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import searchBox from 'base/search-box'
  import {getHotKey} from 'api/api.search'
  import {ERR_OK} from 'api/api.config'
  import VLoading from 'base/loading'
  import searchList from 'base/search-list'
  import {createSong} from 'public/js/songs'
  import searchHistory from 'components/search-history/search-history'

  export default {
    data() {
      return {
        hot:[],
        query:''
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
      setQueryKey(v) {
        // 引用子组件方法
        this.$refs.searchBox.setQuery(v.replace(/^\s+|\s+$/g,""));
      }
    },
    components: {
      searchBox,
      VLoading,
      searchList,
      searchHistory
    },
    watch: {
      query(newQuery) {
        if(!newQuery)return;
        clearInterval(this.clear);
        this.clear=setTimeout(()=>{
          this.$refs.searchList._search();
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
      position: fixed;
      top: 120px;
      margin-left: 20px;
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

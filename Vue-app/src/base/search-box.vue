<template>
  <mt-search
    v-model="query"
    placeholder="搜索歌曲、歌手"
    cancel-text=""
    :autofocus="true"
    :show="false">
  </mt-search>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        query:''
      }
    },
    methods: {
      setQuery(v) {
        this.query = v;
      }
    }
  }
</script>

<style lang="scss">
  @import "../public/css/variable.scss";
  .mint-search{
    height: auto;
  }
  .mint-searchbar{
    background-color: $color-background;

  }
  .mint-searchbar-cancel{
    display: none;
  }
  .mint-searchbar-inner{
    background-color: $color-highlight-background;
  }
  .mint-searchbar-core{
    padding-left: 10px;
    color: $color-text;
    background-color: $color-highlight-background;
  }
  .mint-search-list{
    display: none;
  }
</style>

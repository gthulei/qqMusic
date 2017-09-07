<template>
  <mt-tabbar v-model="selected" :fixed="true">
    <mt-tab-item id="推荐">
      <router-link tag="div" to="/recommended">
        推荐
      </router-link>
    </mt-tab-item>
    <mt-tab-item id="歌手">
      <router-link tag="div" to="/singer">
        歌手
      </router-link>
    </mt-tab-item>
    <mt-tab-item id="排行">
      <router-link tag="div" to="/rankings">
        排行
      </router-link>
    </mt-tab-item>
    <mt-tab-item id="搜索">
      <router-link tag="div" to="/search">
        搜索
      </router-link>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {selected: '推荐'}
    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../public/css/variable.scss";

  .mint-tabbar {
    background-color: $color-background;
    .mint-tab-item {
      color: $color-text-l;
      .mint-tab-item-label {
        font-size: $font-size-medium;
      }
    }
  }

  .mint-tabbar.is-fixed {
    top: 40px;
    bottom: auto;
  }

  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: $color-background;
    border-bottom: 2px solid $color-theme;
    color: $color-theme;
  }
</style>

<template>
  <div class="search-history">
    <div class="title">
      <span>搜索记录</span>
      <span class="icon" @click="clear">
        <i class="icon-clear"></i>
      </span>
    </div>
    <ul class="item">
      <li>
        <span>刘德华</span>
        <span @click="itemDelete" class="icon">
            <i class="icon-delete"></i>
          </span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    methods: {
      clear() {
        this.$messagebox({
          title: '温馨提示',
          message: '是否清空所有搜索历史?',
          showCancelButton: true
        });
      },
      itemDelete() {
        this.$toast({
          message: '删除成功',
          duration: 500
        });
      }
    }
  }
</script>

<style lang="scss">
  @import "../../public/css/variable.scss";
  @import "../../public/css/mixin.scss";

  .search-history {
    position: fixed;
    width: 100%;
    top: 270px;
    .title {
      display: flex;
      font-size: $font-size-medium;
      color: $color-text-l;
      justify-content: space-between;
      margin: 0 20px;
    }
    .icon{
      @extend extend-click
    }
    .item {
      li {
        padding: 10px 0;
        @extend .title
      }
    }
  }

  .mint-msgbox {
    width: 270px;
    border-radius: 13px;
    background: $color-highlight-background;
  }

  .mint-msgbox-btn {
    color: $color-text-d;
    background-color: $color-highlight-background;
  }

  .mint-msgbox-message {
    font-size: $font-size-large;
    color: $color-text-l;
  }

  .mint-msgbox-content {
    border-bottom: .5px solid $color-text-d;
  }

  .mint-msgbox-cancel {
    border-right: .5px solid $color-text-d;
  }
</style>

<template>
  <div class="tabWarp">
    <ul class="tabs">
      <li>
        <router-link tag="div" class="tab-item" to="/recommended">
          <span class="tab-link">推荐</span>
        </router-link>
      </li>
      <li>
        <router-link tag="div" class="tab-item" to="/singer">
          <span class="tab-link">歌手</span>
        </router-link>
      </li>
      <li>
        <router-link tag="div" class="tab-item" to="/rankings">
          <span class="tab-link">排行</span>
        </router-link>
      </li>
      <li>
        <router-link tag="div" class="tab-item" to="/search">
          <span class="tab-link">搜索</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="scss">
  @import "../../public/css/variable.scss";

  .tabWarp {
    width: 100%;
    margin-top: 40px;
    .tabs {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        .tab-item{
          color: $color-text-l;
          font-size: $font-size-medium-x;
          padding: 10px 0;
        }
        .router-link-active{
          color: $color-theme;
          border-bottom: 2px solid $color-theme;
        }
      }
    }
  }
</style>

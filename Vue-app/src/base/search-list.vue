<template>
  <div class="search-list">
    <mt-loadmore
      :top-method="topMethod"
      :bottom-method="bottomMethod"
      :bottom-all-loaded="allLoaded"
      ref="loadmore">
      <ul>
        <li v-for="item in result">
          <p class="text" v-html="getDisplayName(item)" :class="{'icon-mine':item.type === 'singer','icon-music':!item.type}"></p>
        </li>
      </ul>
    </mt-loadmore>
    <v-loading v-if="result.length == 0"></v-loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import VLoading from 'base/loading'

  export default {
    data() {
      return {
        allLoaded:false
      }
    },
    props: {
      result: {
        type: Array,
        default: []
      }
    },
    methods: {
      getDisplayName(item) {
        if (item.type === 'singer') {
          return item.singername
        } else {
          return `${item.name}-${item.singer}`
        }
      },
      topMethod(){
        // 下拉刷新执行的方法
        setTimeout(() => {
          console.log('下拉刷新执行的方法');
          this.$refs.loadmore.onTopLoaded();
        },1000)
      },
      bottomMethod() {
        //上拉刷新执行的方法
        setTimeout(()=>{
          console.log('上拉刷新执行的方法')
          this.$refs.loadmore.onBottomLoaded();
        },2000)
      }
    },
    components: {
      VLoading
    },
  }
</script>

<style lang="scss">
  @import "../public/css/variable.scss";
  @import "../public/css/mixin.scss";

  .search-list {
    padding-top: 60px;
    ul {
      padding: 0 30px;
      font-size: $font-size-medium;
      color: $color-text-d;
      li {
        margin-bottom: 10px;
        p {
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

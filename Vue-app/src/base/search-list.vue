<template>
  <div class="search-list">
    <mt-loadmore>
      <ul class="loadmore">
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
    props: {
      result: {
        type: Array,
        default:[]
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
    },
    components: {
      VLoading
    },
  }
</script>

<style lang="scss">
  @import "../public/css/variable.scss";
  @import "../public/css/mixin.scss";
  .search-list{
    margin-top: 50px;
  }
  .loadmore{
    margin-top: 10px;
    padding: 0 30px;
    font-size: $font-size-medium;
    color: $color-text-d;
    li{
      padding-bottom: 20px;
      p{
        @extend no-wrap;
        &:before{
          margin-right: 5px;
          vertical-align: middle;
        }
      }

    }
  }
</style>

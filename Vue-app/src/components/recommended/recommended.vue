<template>
  <div class="recommended">
    <v-swipe :swipeList="swipeList" v-if="swipeList.length"></v-swipe>
  </div>
</template>

<script type="text/ecmascript-6">
  import VSwipe from 'base/swipe';
  import { getSwipeList } from 'api/api.recommend'
  import { ERR_OK } from 'api/api.config'

  export default {
    data() {
      return {
        swipeList: [],
      }
    },
    components: {
      VSwipe
    },
    created() {
      this._getSwipeList();
    },
    methods: {
      _getSwipeList() {
        getSwipeList().then( res => {
          if (res.code === ERR_OK) {
            this.swipeList = res.data.slider;
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .recommended{
    margin-top: 80px;
  }
</style>

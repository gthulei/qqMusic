<template>
  <mt-header fixed :title="title">
    <div slot="left" class="back" v-if="isBack">
      <mt-button class="icon-back" @click="_goBack()"></mt-button>
    </div>
  </mt-header>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: "QQ音乐"
      },
      isBack:{
        type: Boolean,
        default: false
      }
    },
    methods: {
      _goBack() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss">
  @import "../public/css/variable.scss";

  .mint-header{
    background-color: $color-background;
    color: $color-text-green;
  }
</style>

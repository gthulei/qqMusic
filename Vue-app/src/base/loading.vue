<template>
  <div class="mint-indicator">
    <div class="mint-indicator-wrapper" style="padding: 20px;">
      <span class="mint-indicator-spin"
      ><div class="mint-spinner-snake" style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); border-bottom-color: rgb(204, 204, 204); height: 32px; width: 32px;">
      </div>
      </span>
      <span class="mint-indicator-text" style="">{{this.text}}</span>
    </div>
    <div class="mint-indicator-mask"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      text: {
        type: String,
        default: "加载中..."
      }
    }
  }
</script>


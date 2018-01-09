<template>
  <div id="app">
    <h-header></h-header>
    <h-tbas></h-tbas>
    <!--开启缓存-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import HHeader from 'base/nav'
  import HTbas from 'components/tabs/tabs'
  export default {
    components: {
      HHeader,
      HTbas
    }
  }
</script>

<template>
  <div id="app">
    <h-header></h-header>
    <h-tbas></h-tbas>
    <router-view></router-view>
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

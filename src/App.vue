<template>
  <div id="app">
    <app-header/>
   
    
  </div>
</template>

<script>
import appHeader from "./components/commons/Header/app-header"
import indexBody from "./components/pages/Home/index-body"
export default {
  name: 'App',
  components: {
    appHeader,indexBody
  }
}
</script>

<style lang = "scss">


</style>

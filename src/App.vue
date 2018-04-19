<template>
  <div id="app">
    <app-header :hasNav="hasNav"></app-header>
    <router-view></router-view>
    
  </div>
</template>

<script>
import appHeader from "./components/commons/Header/app-header"
import router from "./router"
export default {
  name: 'App',
  components: {
    appHeader
  },
  data(){
    return {
      hasNav:true
    }
  },
  created(){
    switch(this.$route.name){
      case "videoinfo":this.hasNav = false;break;
      case "indexBody":this.hasNav = true;break;
    }
    router.beforeEach((to,from,next) => {
      switch(to.name){
        case "videoinfo":
        this.hasNav = false;
        
        
        break;
        case "indexBody":this.hasNav = true;break;
      }
      next();
    })
  },
}
</script>

<style lang = "scss">
  body{
    padding-top: 0.76rem;
  }

</style>

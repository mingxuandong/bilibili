<template>
  <section id="main">
      <banner/>
      <main-box/>
  </section>
</template>

<script>
import banner from "./banner"
import mainBox from "./mainBox"
export default {
  name:"index-body",
  components:{
      banner,mainBox
  },
  beforeRouteLeave(to, from, next){
    console.log("hahahahaha");
    if(to.name == "videoinfo"){

      this.$root.$emit("gotovideoinfo",to);
    }
    next();
  }   
}
</script>

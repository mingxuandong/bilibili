<template>
 <section id="banner" class="swiper-container">
     <div class="swiper-wrapper">
         <div class="swiper-slide" v-for=" banner in bannerList " :key= "banner.pos_num">
             <a :href="banner.url">
                 <img :src="'http://localhost:3000/api/img?url='+banner.pic" alt="" width="100%">
            </a>
         </div>   
         
     </div>
     <div class="swiper-pagination"></div>
 </section>
</template>

<script>
import Vue from 'vue';
import swiper from "swiper";
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
export default {
  name:"banner",
  data(){
      return {
          bannerList:[

          ]
      }
  },
  created(){
    this.$axios({
        url:"http://localhost:3000/api/lunbo",
        params:{
            jsonp:"jsonp",
            pf:7,
            id:1695
        },
        method:"get",
        // headers: {'Cookie': 'pos=74; finger=edc6ecda; buvid3=7333DE74-6637-42DC-A5A3-C1EEF86FECD614585infoc; UM_distinctid=162ba6cb82370-09600fe7e4cba9-574e6e46-3d10d-162ba6cb824277; LIVE_BUVID=AUTO8815235837408962; purl_token=bilibili_1523583881'},
    }).then((result) =>{
       this.bannerList = result.data.data;
       Vue.nextTick(function(){
           new swiper("#banner.swiper-container",{
               autoplay:true,
               pagination: {
                    el: '.swiper-pagination',
                },
           })
       })
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-container{
    height: 1.1rem;
}
img{
    height: 1.1rem;
    background: #ccc;
}

</style>

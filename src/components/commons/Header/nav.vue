<template>
 <div class="swiper-container">
   <ul :class="[isOpen?'open':'navclose','swiper-wrapper']">
    <li v-for="nav in navList" :key = "nav.id" class="swiper-slide">
      {{nav.title}}
    </li>
  </ul>
 </div> 
  
</template>
<script>
import swiper from "swiper";
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
export default {
  name: "app-nav",
  data() {
    return {
      isOpen: false,
      navList: [
        {
          title: "首页",
          id: 999
        },
        {
          title: "动画",
          id: 1
        },
        {
          title: "番剧",
          id: 2
        },
        {
          title: "国创",
          id: 3
        },
        {
          title: "音乐",
          id: 4
        },
        {
          title: "舞蹈",
          id: 5
        },
        {
          title: "科技",
          id: 6
        },
        {
          title: "游戏",
          id: 7
        },
        {
          title: "娱乐",
          id: 8
        },
        {
          title: "鬼畜",
          id: 9
        },
        {
          title: "电影",
          id: 10
        },
        {
          title: "电视剧",
          id: 11
        },
        {
          title: "纪录片",
          id: 12
        },
        {
          title: "影视",
          id: 13
        },
        {
          title: "时尚",
          id: 14
        },
        {
          title: "生活",
          id: 15
        },
        {
          title: "广告",
          id: 16
        },
        {
          title: "直播",
          id: 17
        },
        {
          title: "相薄",
          id: 18
        }
      ]
    };
  },
  mounted() {
    this.navSwiper =  new swiper(".swiper-container",{
      freeMode:true,
      freeModeMomentum:false,
      slidesPerView:5
    })
  }
};
</script>
<style lang="scss" scoped>
div.swiper-container{
  width: 3.35rem;
  .navclose {
    
    li {
      height: 0.32rem;
      font-size: 0.12rem;
      display: inline-block;
      flex-shrink: 0;
      line-height: 0.32rem;
      text-align: center;
    }

  }
margin-top: 0.44rem;
overflow: hidden;
}

</style>


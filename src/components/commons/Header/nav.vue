<template>
<div id="nav">
  <div class="swiper-container">
   <ul class='navclose swiper-wrapper' v-show= "!isOpen">
    <router-link tag="li" v-for="(nav ,index) in navList" :key = "nav.id" class="swiper-slide" :to="{name: (nav.id>16?'indexBody':'channel'),params:(nav.id>16?{}:{cid:nav.cid})}">
      <span :class="[index===activeIndex?'active-nav':'']" @click="activeIndex = index">{{nav.title}}</span>
    </router-link>
  </ul>
  
  <div v-if = "!isOpen" @click="isOpen = !isOpen" class="down"></div>
  
  
 </div>
  <div class="open-container">
    <transition
    enter-active-class="animated slideInDown"
    leave-active-class="animated slideOutUp"
    >
      <ul class='open' v-if= "isOpen">
        <router-link v-for="(nav ,index) in navList" :key = "nav.id" tag="li" :to="{name: (nav.id>16?'indexBody':'channel'),params:{cid:1}}">
          <span :class="[index===activeIndex?'active-nav':'']" @click="activeIndex = index">{{nav.title}}</span>
        </router-link>
        <li v-if="isOpen" @click="isOpen = !isOpen" class="up">

        </li>
      </ul>
   </transition>
  </div>
  
</div>
 
  
</template>
<script>
import swiper from "swiper";
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
export default {
  name: "app-nav",
  data() {
    return {
      activeIndex: 0,
      isOpen: false,
      navList: [
        {
          title: "首页",
          id: 999
        },
        {
          title: "动画",
          id: 1,
          cid:1
        },
        {
          title: "番剧",
          id: 2,
          cid:13
        },
        {
          title: "国创",
          id: 3,
          cid:167
        },
        {
          title: "音乐",
          id: 4,
          cid:3
        },
        {
          title: "舞蹈",
          id: 5,
          cid:129
        },
        {
          title: "科技",
          id: 6,
          cid:36
        },
        {
          title: "游戏",
          id: 7,
          cid:4
        },
        {
          title: "娱乐",
          id: 8,
          cid:5
        },
        {
          title: "鬼畜",
          id: 9,
          cid:119
        },
        {
          title: "电影",
          id: 10,
          cid:23
        },
        {
          title: "电视剧",
          id: 11,
          cid:11
        },
        {
          title: "纪录片",
          id: 12,
          cid:177
        },
        {
          title: "影视",
          id: 13,
          cid:181
        },
        {
          title: "时尚",
          id: 14,
          cid:155
        },
        {
          title: "生活",
          id: 15,
          cid:160
        },
        {
          title: "广告",
          id: 16,
          cid:165
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
    this.navSwiper = new swiper(".swiper-container", {
      freeMode: true,
      freeModeMomentum: false,
      slidesPerView: 6
    });
  },
  created(){
    this.$root.$on("changeMainNavIndex",(index)=>{
      this.activeIndex = index;
    })
  }
};
</script>
<style lang="scss" scoped>
.animated {
  animation-duration: 0.2s;
}
div.swiper-container {
  position: relative;
  z-index: 1;
  .navclose {
    li {
      height: 0.32rem;
      font-size: 0.14rem;
      display: inline-block;
      flex-shrink: 0;
      line-height: 0.32rem;
      text-align: center;

      .active-nav {
        display: inline-block;
        color: #fb789d;
        border-bottom: 2px solid #fb789d;
        box-sizing: border-box;
        height: 0.32rem;
        padding: 0 0.05rem;
      }
    }
  }
  overflow: hidden;
  div.down {
    position: absolute;
    right: 0;
    top: 0;
    background: url("../../../imgs/arrdown.jpg") no-repeat center center, white;
    z-index: 15;
    width: 0.625rem;
    height: 0.32rem;
    background-size: 0.16rem auto;
  }
}
#nav {
  width: 100%;
  position: fixed;
  top: 0.44rem;
  z-index: 14;
  background: #fff;
  div.open-container:last-child {
    position: absolute;
    z-index: 15;
    
    .open {
      box-sizing: content-box;
      display: block;
      padding: 0 0.15rem;
      background: #fff;
      .up {
        height: 0.25rem;
        background: url("../../../imgs/arrup.jpg") no-repeat center center;
        background-size: 0.16rem auto;
        width: 100%;
        margin-top: -0.6rem;
     }
      li {
        width: 0.575rem;
        height: 0.44rem;
        text-align: center;
        display: inline-block;
        line-height: 0.44rem;
        .active-nav {
          display: inline-block;
          color: #fb789d;
          border-bottom: 2px solid #fb789d;
          box-sizing: border-box;
          height: 0.32rem;
          padding: 0 0.05rem;
        }
      }
    }
  }
}
</style>


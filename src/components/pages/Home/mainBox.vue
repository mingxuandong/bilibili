<template>
  <ul class="main-box">
      <router-link v-for=" item in dataList " :key="item.aid" tag="li" :to = "{name:'videoinfo',params:{aid:item.aid}}">
          <img width="100%" :src="'http://localhost:3000/api/img?url=' + item.pic " alt="">
          <p>{{ item.title }}</p>
          <span class="play-counts">
              <i></i>
              <span>{{ item.play }}</span>
          </span>
           <span class="say-counts">
              <i></i>
              <span>{{ item.video_review }}</span>                           
          </span>
      </router-link>
  </ul>
</template>

<script>
// import router from "../../../router"
import {  mapMutations } from "vuex"
export default {
  name:"main-box",
  data(){
      return {
          dataList:[

          ]
      }
  },
  created(){
    //   console.log(this.goInfo)
      this.$root.$once("gotovideoinfo",this.goInfo)
      this.$axios({
          url:"http://localhost:3000/api/ranking?rid=0&day=3&jsonp=jsonp&aid=22129389",
          method:"get"
      }).then(result=>{
          this.dataList = result.data.data.list;
      })
  },computed:{
      dataLists(start){
          start = start *20
          return this.dataList.slice(start,start + 20);
      }
  },
    mounted(){
        // console.log(this.goInfo)
    },
  
  methods:{
      goInfo(to){
          console.log("gotoinfo is changed heiheiheiheihei")
          
             for(var i = 0; i < this.dataList.length; i++){
              if(to.params.aid===this.dataList[i].aid){
                  this.$store.commit("changeInfoPage",this.dataList[i]);
                  break;
              }
          }
        //   console.log("hahahahaha11212") 
      }
  },
 beforeDestroy(){
      
  }
}
</script>
<style lang="scss" scoped>
.main-box{
    box-sizing: content-box;
    padding:0.05rem;
    font-size: 0;
    li{
        font-size: 0.12rem;
        width: 50%;
        // background:blue;
        display: inline-block;
        padding:0.05rem;
        height: 1.58rem;
        img{
            border-radius:5px;
            background: #ccc;
            height:1.06rem;
        }
        p{
            margin-top: 0.05rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        overflow: hidden;
        position: relative;
    }
}
.play-counts{
    position: absolute;
    bottom:0.45rem;
    left:15%;
    color:#fff;
    i{
        background: url("../../../imgs/plays.png") no-repeat center center;
        display: inline-block;
        width: 0.16rem;
        height: 0.16rem;
        background-size:0.16rem auto;
    }
    display: flex;
    align-items: center;
}
.say-counts{
    position: absolute;
    bottom: 0.45rem;
    left:60%;
    color:#fff;
    display: flex;
    align-items: center;
    i{
        width: 0.16rem;
        height: 0.16rem;
        background-size:0.16rem auto;
        background: url("../../../imgs/says.png") no-repeat center center;
        display: inline-block;
    }
}
</style>


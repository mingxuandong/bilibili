<template>
  <ul id="channel-nav">
      <router-link :class="{'activeInfoNav':cid==item.cid}"  v-for="item in currentClass" tag="li" :to=" { name:'channel' , params:{cid:item.cid} } " :key="item.cid">
          {{item.title}}
      </router-link>
  </ul>
</template>
<script>
export default {
  name:"channelNav",
  data(){
      return {
          classList:[
            [{cid:1,title:"推荐"},{cid:24,title:"MAD.AMV"},{cid:25,title:"MMD.3D"},{cid:47,title:"短片.手书.配音"},{cid:27,title:"综合"}],
            [{cid:13,title:"推荐"},{cid:33,title:"连载动画"},{cid:32,title:"完结动画"},{cid:51,title:"资讯"},{cid:152,title:"官方延伸"}],
            [{cid:167,title:"推荐"},{cid:153,title:"国产动画"},{cid:168,title:"国产原创相关"},{cid:169,title:"布袋戏"},{cid:170,title:"资讯"}],
          ],
          currentClass:[],
          isMainly:true,
      }
  },
  props:["cid"],
  created(){
    // console.log(typeof this.cid)
    // console.log(this.classList)
    // for(var i = 0; i < this.classList.length; i++){
    //   var brk = false;
    //   for(var j = 0; j < this.classList[i].length; j++){
    //     if(this.cid == this.classList[i][j].cid){
    //       this.currentClass = this.classList[i];
    //       console.log("找到当前cid了")
    //       this.currentClass[j].active = true;
    //       if(j==0){
    //         this.isMainly = true;
    //       }else{
    //         this.isMainly = false;
    //       }
    //       break
    //     }
    //   }
    //   if(brk){
    //     break;
    //   }
    // }
    // console.log(this.currentClass,this.isMainly)
  },
  // beforeRouteLeave(to,from , next){
  //   console.log("hahahahahaha")
  //   next()
  // },
  // beforeRouteUpdate(to,from,next){
  //   console.log(to)
  //   next();
  // },
  watch:{
    cid:{
       immediate:true,
    handler(){
      // console.log(this.cid)
      for(var i = 0; i < this.classList.length; i++){
      var brk = false;
      for(var j = 0; j < this.classList[i].length; j++){
        if(this.cid == this.classList[i][j].cid){
          this.$root.$emit("changeMainNavIndex",i+1);
          this.currentClass = this.classList[i];
          // for(var z = 0; z < this.currentClass.length ; z++){
          //   this.currentClass[z].active = false;
          // }
          // this.currentClass[j].active = true;
          brk = true;
          if(j==0){
            this.isMainly = true;
          }else{
            this.isMainly = false;
          }
          break
        }
      }
      if(brk){
        break;
      }
    }
    // console.log(this.currentClass)
    }
    }
   
  }
}
</script>
<style lang="scss" scoped>
.activeInfoNav{
  color:#fb7299;
}
#channel-nav{
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  font-size: 0;
  padding-left: 0.1rem;
  white-space: nowrap;
  background: #f9f9f9;
  li{
    display: inline-block;
    font-size: 0.14rem;
    height: 0.44rem;
    padding:0 0.1rem;
    text-align: center;
    line-height: 0.44rem;
  }
}

</style>



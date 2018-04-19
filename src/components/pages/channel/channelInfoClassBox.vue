<template>
  <div id="channel-infoclass-box">
      <section class="hot-address">
          <h3>热门推荐</h3>
          <article v-if="address.length>0" v-for="(n,i) in 4" :key="i">
              <img :src="'http://localhost:3000/api/img?'+address[i].pic" alt="">
              <p>{{ address[i].title }}</p>
          </article>
      </section>
      <section class="new-publish">
          <h3>最新视频</h3>
          <article v-for="item in newPublish" :key="item.aid">
              <img :src="'http://localhost:3000/api/img?'+item.pic" alt="">
              <p>{{ item.title }}</p>
          </article>
      </section>
  </div>
</template>
<script>
export default {
  name:"channelInfoClassBox",
  data(){
      return {
          address:[],
          newPublish:[]
      }
  },
  props:["cid"],
  watch:{
      cid:{
          immediate:true,
          handler(){
              this.$axios({
                  method:"get",
                  url:"http://localhost:3000/api/getarchiverankbypartion",
                  params:{
                      tid:this.cid,
                      day:7,
                      jsonp:"jsonp"
                  }
              }).then((result)=>{
                //   console.log(result);
                  this.newPublish = result.data.data.archives

              });
              this.$axios({
                  method:"get",
                  url:"http://localhost:3000/api/ranking/region",
                  params:{
                      rid:this.cid,
                      day:7,
                      jsonp:"jsonp"
                  }
              }).then((result)=>{
                //   console.log(result);
                  this.address = result.data.data

              });
          }
      }
  },
  methods:{
      getMore(){

      }
  }
}
</script>
<style lang="scss" scoped>
#channel-infoclass-box{
    border-top: 1px solid #ccc;
    margin-top:0.45rem;
    section{
        padding:0.05rem;
        font-size: 0;
        h3{
            font-size: 0.16rem;
        }
        article{
            padding:0.05rem;
            font-size: 0.12rem;
            display: inline-block;
            height:1.43rem;
            width: 50%;
            overflow: hidden;
            img{
                width: 100%;
                height: 1.06rem;
            }
        }
    }
}
</style>



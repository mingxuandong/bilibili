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
      <div class="get-more-button" @click="getMore(currentNewSPage)" > 点击加载更多 </div>
  </div>
</template>
<script>
export default {
  name:"channelInfoClassBox",
  data(){
      return {
          address:[],
          newPublish:[],
          currentNewSPage:1
      }
  },
  props:["cid"],
  watch:{
      cid:{
          immediate:true,
          handler(){
            //   this.$axios({
            //       method:"get",
            //       url:"http://localhost:3000/api/getarchiverankbypartion",
            //       params:{
            //           tid:this.cid,
            //           pn:1,
            //           jsonp:"jsonp"
            //       }
            //   }).then((result)=>{
            //     //   console.log(result);
            //       this.newPublish = result.data.data.archives

            //   });
            this.currentNewSPage = 1
              this.getMore(this.currentNewSPage);
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
      getMore(pn){
          this.$axios({
                  method:"get",
                  url:"http://localhost:3000/api/getarchiverankbypartion",
                  params:{
                      tid:this.cid,
                      pn:pn,
                      jsonp:"jsonp"
                  }
              }).then((result)=>{
                //   console.log(result);
                if( pn ===1 ){
                    this.newPublish = result.data.data.archives
                }else{
                     this.newPublish = this.newPublish.concat(result.data.data.archives);
                }
                 
                  this.currentNewSPage++;
            });
      }
  }
}
</script>
<style lang="scss" scoped>
#channel-infoclass-box{
    border-top: 1px solid #ccc;
    margin-top:0.45rem;
    background: #f4f4f4;
    section{
        padding:0.05rem;
        font-size: 0;
        h3{
            font-size: 0.16rem;
            height: 0.32rem;
            line-height: 0.32rem;
            text-indent: 0.05rem;
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
                border-radius: 5px;
            }
            p{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
        }
    }
}
.hot-address{
    h3{
        height: 0.52rem;
        line-height: 0.52rem;
        color: #fb7299;
    }
}
.get-more-button{
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    margin-top: 0.2rem;
    background: #e7e7e7;
    color: #fb7299;

}
</style>



<template>
  <div id="channel-main-box">
      <ul>
          <li :class="[i==0?'hot-address':'info-class']" v-if="items" v-for="(items,i) in dataList" :key="currentClass[i].cid">
              <h3 >
                  <span>{{ (i==0?"热门":"") + currentClass[i].title }}</span>
                  <span>{{ i==0?"排行榜":"查看更多" }}</span>
              </h3>
              <article v-for="(n,j) in 4" :key="n">
                  <img width="100%" :src="'http://localhost:3000/api/img?url='+items[j].pic" alt="">
                  <p>{{items[j].title}}</p>
              </article>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "channelMainlyBox",
  props: ["currentClass"],
  data() {
    return {
      dataList: []
    };
  },
  created() {
    //   for(let i = 0; i < this.currentClass.length; i++){
    //       this.$axios({
    //           url:"http://localhost:3000/api/ranking/region",
    //           method:"get",
    //           params:{
    //               rid:this.currentClass[i].cid,
    //               day:(i==0?7:3),
    //               jsonp:"jsonp"
    //           }
    //       }).then((result)=>{
    //           console.log(result.data.data)
    //           this.dataList[i] = result.data.data
    //           console.log(this.dataList)
    //       })
    //   }
  },
  watch: {
    currentClass: {
      immediate: true,
      handler() {
        for (let i = 0; i < this.currentClass.length; i++) {
          this.$axios({
            url: "http://localhost:3000/api/ranking/region",
            method: "get",
            params: {
              rid: this.currentClass[i].cid,
              day: i == 0 ? 7 : 3,
              jsonp: "jsonp"
            }
          }).then(result => {
            // console.log(result.data.data)
            // this.dataList[i] = result.data.data
            //
            //注意！！！！！！这里使用了Vue.$set方法让vue可以察觉到数组内部的变化 直接赋值并不会触发视图更新！！！
            this.$root.$set(this.dataList, i, result.data.data);
            // console.log(this.dataList)
          });
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#channel-main-box {
  margin-top: 0.45rem;
  border-top: 1px solid #ccc;
  li{ 
      font-size: 0;
      padding:0.05rem;
      
      article{
          width: 50%;
          display: inline-block;
          font-size: 0.12rem;
          padding:0.05rem;
          img{
              height:1.06rem;
          }
          height: 1.43rem;
          overflow: hidden;
          p{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
      }
      h3{
          font-size: 0.16rem;
          height: 0.42rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          
      }  
      
  }
  .hot-address{
      h3{

      }
  }
}
</style>



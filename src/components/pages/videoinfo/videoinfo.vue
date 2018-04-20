<template>
    <div id="videoinfo-box">
        <div class="video-container">
            <img :src="'http://localhost:3000/api/img?url=' + info.pic" alt="">
        </div>
        <div class="more-video"> 
            <p>高清更流畅，APP内打开观看</p>
            <div class="introduce">
                <h3>{{info.title}}</h3>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  name:"videoinfo",
  props:["aid"],
  data(){
      return {
          videoinfo:{

          },
          moreVideo:[]
      }
  },
  computed:{
    //   computedUrl(){
    //       if(this.videoinfo.durl){
    //         var url = this.videoinfo.durl[0].url;
    //         console.log(url)
    //         var host = url.match(/\/\/(.)+\.acgvideo/)[0];
    //         console.log(host)
    //         var path = url.match(/\.com(.)+.mp4/)[0];
    //         var params = url.slice(url.indexOf("?")+1);
    //         url = "host=" + host + "&path=" + path + "&" + params;
    //         return url;
    //       }else{
    //           return ""
    //       }
          
    //   }
  },
  created(){
      this.$http.jsonp("http://localhost:3000/api/shipin",{
        //   jsonp: 'callback',
          jsonpCallback: "callbackfunction",
          params:{
            aid:this.aid, 
            page:1, 
            platform:"html5", 
            quality:1, 
            vtype:"mp4", 
            type:"jsonp", 
            is_preview:1 
          }
      }).then(result=>{  
          console.log(result)
           this.videoinfo = result.body ;
        },err => {  
            console.log("发送失败"+err.status+","+err.statusText);  
        });

    this.$axios({
        method:"get",
        url:"http://localhost:3000/api/recommendnew",
        params:{
            aid:this.aid
        }
    }).then((result)=>{
        this.moreVideo = result.data.data
    });
    console.log(this.info)
  },
  computed:{
      ...mapState({"info":(state)=>{ return state.dongmingxuan.currentInfo }})
  }
}
</script>

<style lang="scss" scoped>
#videoinfo-box{
    margin-top: -0.32rem;
    .video-container{
        img{
            width: 100%;
            height: 2.35rem;
            background: #ccc;
            filter: blur(10px);
            -webkit-filter: blur(10px);
        }
    }
    .more-video{
        position: relative;
        z-index: 2;
        background: white;
        padding:0.1rem;
        p{
            margin:0.1rem;
            height: 0.36rem;
            border-radius: 0.18rem;
            background: #fb7299;
            text-align: center;
            line-height: 0.36rem;
            color: #fff;
            font-size: 0.16rem;
        }
        .introduce{
            h3{
                // font-weight: bolder;
                white-space: nowrap;
                overflow: hidden;
                text-overflow:ellipsis
            }
        }
    }
}

</style>

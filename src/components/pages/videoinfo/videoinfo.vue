<template>
    <div>
        <!-- <video width="100%" height="100%" preload="auto" webkit-playsinline="" playsinline="" style="display: inline;">
            <source v-if="videoinfo.durl" :src="'http://localhost:3000/api/video?' + computedUrl + '&aid=' + aid " type="video/mp4">
        </video> -->
        <!-- {{computedUrl}} -->
    </div>
</template>
<script>

export default {
  name:"videoinfo",
  props:["aid"],
  data(){
      return {
          videoinfo:{}
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
           this.videoinfo = result.body ;
        },err => {  
            console.log("发送失败"+err.status+","+err.statusText);  
        })
  }
}
</script>


<template>
  <div id="search-page-box">
      <div class="search-header">
          <div class="search-box-container">
               <input @keyup.enter="toDoSearch(currentWords)" type="text" v-model="currentWords" maxlength="33" autocomplete="off" placeholder="搜索视频、番剧、UP主或AV号">
               <i></i>
          </div>
          <span>取消</span>
      </div>
      <section class="hotwords">
          <p>大家都在搜</p>
          <ul v-if="hotwords.length">
              <li v-for="(n,i) in 7" :key="i">
                  {{hotwords[i].keyword}}
              </li>
          </ul>
      </section>
      <section class="search-history">
          <h3>
              搜索历史
          </h3>
          <ul>
              <li v-for="(item,i) in  history" :key="i">
                  {{item}}
              </li>
          </ul>
          <p v-if="history.length" @click="clearHistory">清除历史</p>
      </section>
      <suggest :trims="suggests" v-if="currentWords" />
      <search-engine :results="results" :to-do-search-without-change-keyword ="toDoSearchWithoutChangeKeyword" v-if="doSearch" />
  </div>
</template>
<script>
import Suggest from "./searchSuggest.vue"
import SearchEngine from "./SearchEngine.vue"
export default {
  name:"searchPage",
  props:["keywords"],
  data(){
      return {
          hotwords:[],
          history:[],
          doSearch:false,
          currentWords:"",
          currentWordsBackUp:this.currentWords,
          suggests:[],
          results:{}
      }
  },
  components:{
      Suggest,SearchEngine
  },
  created(){
    //   console.log(this.keywords)
      
      this.$axios({
          method:"get",
          url:"http://localhost:3000/api/searchhot"
      }).then((result)=>{
          
          this.hotwords = result.data.list;
      });
      this.history = JSON.parse(localStorage.history);
  },
  methods:{
      toDoSearch(value){
          if(value===""){
              console.log("no keywords find")
              return false;
          }
          let keywords = value||this.keywords;
          this.writeHistory(keywords);
          console.log(this.$router,111)
          this.$router.replace({name:"search",query:{keywords:value}});
      },
      writeHistory(keyword){
            let history = JSON.parse(localStorage.history);
            if(history.length<7){
                history.unshift(keyword);
            }else{
                history.pop();
                history.unshift(keyword);
            }
            this.history = history;
            localStorage.history = JSON.stringify(history);
      },
      clearHistory(){
          this.history = [];
           localStorage.history = JSON.stringify([]);
      },
      toDoSearchWithoutChangeKeyword(search_type,search_order){
          this.$axios({
              method:"post",
              url:"http://localhost:3000/api/search",
              data:{
                  bangumi_num:3,
                  keyword:this.keywords,
                  main_ver:"v3",
                  movie_num:3,
                  order:search_order,
                  page:1,
                  pagesize:20,
                  platform:"h5",
                  search_type:search_type
              }
          }).then((result)=>{
            //   console.log(result);
              this.results = result.data
              this.doSearch = true;
          })
      }
  },
  watch:{
      keywords:{
          immediate:true,
          handler(value){
              console.log(this.keywords);
              this.toDoSearchWithoutChangeKeyword();
          }
      },
      currentWords:{
          handler(){
            //   console.log(this.currentWords)
              if(!this.currentWords){
                  return false;
              }
              if(this.doSearch) {
                  this.doSearch = false;
                }
              this.$http.jsonp("https://s.search.bilibili.com/main/suggest",
              {
                  jsonp: 'jsoncallback',
                // jsonpCallback: "callbackfunction",
                params:{
                    func:"suggest",
                    suggest_type:"accurate",
                    sub_type:"tag",
                    main_ver:"v1",
                    highlight:"",
                    bangumi_acc_num:3,
                    special_acc_num:0,
                    upuser_acc_num:0,
                    tag_num:10,
                    term:this.currentWords,
                    rnd:Math.random()
                }
             }).then((result)=>{
                //  console.log(result)
                this.suggests =  result.body.result.tag;
             })
          }
      }
  }
}
</script>

<style lang="scss" scoped>
#search-page-box{
    padding-top:0.001rem;
    min-height: 100vh;
    background: white;
    width:100%;
    position: relative;
    margin-top: -0.76rem;
    z-index: 30;
    .search-header{
        width: 100%;
        position: fixed;
        height: 0.44rem;
        padding:0 0.1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        div{
            padding:0 0.8rem 0 0.4rem ;
            border-radius: 5px;
            left: 0.1rem;
            right: 0.5rem;
            top:0.07rem;
            bottom:0.07rem;
            position: absolute;
            background: #f4f4f4;
            input{
                border:none;
                background: #f4f4f4;
                height: 0.3rem;
                
            }
            i{
                position: absolute;
                width: 0.22rem;
                height: 0.22rem;
                background: url("../../../imgs/search-pro.png") no-repeat center center;
                background-size: 0.22rem 0.22rem;
                left: 0.08rem;
                top: 0.04rem;
            }
        }
        span{
            font-size: 0.14rem;
            color: #fb7299;
        }
    }
    .hotwords{
        color: #999;
        margin-top: 0.44rem;
        padding:0.1rem 0.1rem;
        font-size: 0.14rem;
        ul{
            margin-left: -0.05rem;
            margin-top: 0.1rem;
            font-size: 0;
            li{
                height: 0.34rem;
                font-size: 0.14rem;
                display: inline-block;
                padding: 0 0.1rem;
                border:1px solid #ccc;
                border-radius: 0.17rem;
                line-height: 0.32rem;
                margin:0.05rem;
                color: #666;

            }
        }
    }
    .search-history{
        padding-left: 0.1rem;
        border-top: 0.1rem solid #f4f4f4;
        h3{
            height: 0.46rem;
            line-height: 0.46rem;
            font-size: 0.14rem;
            color: #999;
        }
        p{
            border-top: 1px solid #cccccc;
            text-align: center;
            color: #999;
            margin-right: 0.1rem;
            height: 0.46rem;
            line-height: 0.46rem;
        }
        ul{
            li{
                height: 0.44rem;
                line-height: 0.44rem;
                text-indent: 0.2rem;
                font-size: 0.14rem;
                background: url("../../../imgs/history.png") no-repeat 0 center;
                background-size: 0.16rem 0.16rem;
            }
        }

    }
}
</style>

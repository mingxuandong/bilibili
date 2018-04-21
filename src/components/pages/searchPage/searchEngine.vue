<template>
  <div id="searchengine-box">
      <section class="searchengine-header">

      </section>
  </div>
</template>

<script>
export default {
  name:"searchengin-box",
  props:["toDoSearchWithoutChangeKeyword","results"],
  data(){
      return {
          headerMain:[
              {title:"综合",search_type:"all"},
              {title:"番剧",search_type:"bangumi"},
              {title:"UP主",search_type:"upuser"},
              {title:"影视",search_type:"bgc"}
          ],
          headerSerachOrder:[
              {title:"默认排序",order:"totalrank"},
              {title:"播放多",order:"click"},
              {title:"新发布",order:"pubdate"},
              {title:"弹幕多",order:"dm"},
          ],
          currentSearchType:"all",
          currentSearchOrder:"totalrank",
          searchResults:[]
      }
  },
  created(){
      
  },
  watch:{
      results:{
          immediate:true,
          handler(newval){
              this.searchResults = newval;
          }
      }
  }
}
</script>
<style lang="scss" scoped>
#searchengine-box{
    position: fixed;
    top:0.44rem;
    width: 100%;
    min-height: 100vh;
    background: white;
}
</style>


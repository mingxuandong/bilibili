<template>
  <div class="search-suggest">
      <ul>
          <li v-for="(item,i) in trims" :key="i" v-html="item.name">
              
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"searchSuggest",
  props:["trims"],
  watch:{
      trims:{
          immediate:true,
          handler(){
            //console.log(this.trims,111)
          }
      }
  }
}
</script>
<style lang="scss">
.search-suggest{
    padding-left:0.1rem;
    position: fixed;
    min-height: 100vh;
    background: #f4f4f4;
    width: 100%;
    top:0.44rem;
    ul{
        li{
            margin-right: 0.1rem;
            border-bottom: 1px solid #ccc;
            height: 0.44rem;
            line-height: 0.44rem;
        }
    }
}
.suggest_high_light{
        color:#fb7299;
    }
</style>


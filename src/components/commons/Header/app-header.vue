<template>
  <header id="header">
      <div id="top">
        <h1>bilibili</h1>
        <a href="###" id="search-button"></a>
        <a href="###" class="head-button"></a>
        <a href="###" class="download-app-button">下载App</a>
      </div>
      <app-nav/>
  </header>
  
</template>

<script>
import appNav from "./nav";
export default {
  name: "app-header",
  components: {
    appNav
  }
};
</script>

<style lang="scss" scoped>
#header {
  
  div#top {
    padding: 0.065rem 0;
    height: 0.44rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    h1 {
      background: url(../../../imgs/logo.png) no-repeat center center;
      background-size: 100% auto;
      width: 0.6rem;
      height: 0.275rem;
      font-size: 0;
      margin-left: 0.15rem;
    }
    #search-button {
      width: 0.19rem;
      height: 0.19rem;
      background: url(../../../imgs/search-button.png) no-repeat center center;
      background-size: 100% auto;
      margin-left: auto;
      margin-right: 0.23rem;
    }
    .head-button {
      background: url("../../../imgs/noface.gif") no-repeat center center;
      background-size: 0.24rem auto;
      border-radius: 50%;
      height: 0.24rem;
      width: 0.24rem;
    }
    .download-app-button {
      width: 0.81rem;
      height: 0.25rem;
      border-radius: 0.05rem;
      background: #fb7299;
      margin: 0 0.12rem;
      color: #fff;
      line-height: 0.25rem;
      text-align: center;
      font-size: 0.12rem;
    }
  }
}
</style>


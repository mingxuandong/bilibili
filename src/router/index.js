import Vue from 'vue'
import Router from 'vue-router'
import indexBody from "../components/pages/Home/index-body.vue"
import videoinfo from "../components/pages/videoinfo/videoinfo.vue"
import channel from "../components/pages/channel/channelNav.vue"
import searchPage from "../components/pages/searchPage/searchPage.vue"
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '',
      redirect:"/index"
    },
    {
      path: '/index',
      name: 'indexBody',
      component: indexBody
    },
    {
      path: "/videoinfo/:aid",
      name:"videoinfo",
      props:true,
      component: videoinfo,
    },
    {
      path:"/channel/:cid",
      name:"channel",
      component:channel,
      props:true
    },
    {
      path:"/search",
      name:"search",
      component:searchPage,
      props: (route) => ({ keywords:route.query.keywords })
    },
  ]
})

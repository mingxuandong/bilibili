import Vue from 'vue'
import Router from 'vue-router'
import indexBody from "../components/pages/Home/index-body.vue"
import videoinfo from "../components/pages/videoinfo/videoinfo.vue"
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
    }
  ]
})

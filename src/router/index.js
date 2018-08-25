import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiPage from '@/components/HiPage'
import HiPageSubHi1 from '@/components/HiPageSubHi1'
import HiPageSubHi2 from '@/components/HiPageSubHi2'
import mainS1 from "@/components/mainS1"
import mainS2 from "@/components/mainS2"
import param1 from "@/components/param1"
import Error from "@/components/Error"

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    { // home page
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: mainS1,
        right: mainS2
      }
    },
    {
      path: "/params/:newsId(\\d+)/:newsContent",
      component: param1
    },
    {// hi page
      path: '/hi',
      name: 'HiPage',
      component: HiPage,
      children: [
        {path: '/', name:"hello/hi", component: HiPage},
        {path: 'hi1',name: "hi1" ,component: HiPageSubHi1},
        {path: 'hi2',name: "hi2" ,component: HiPageSubHi2}
      ]
    },
    {
      path: "/goHome",
      redirect: "/"
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsContent',
      redirect: "/params/:newsId(\\d+)/:newsContent"
    },
    {
      path: '/hi1',
      component: HiPageSubHi1,
      alias: "/roar"
    },
    {
      path: '*',
      component: Error
    }
  ]
});

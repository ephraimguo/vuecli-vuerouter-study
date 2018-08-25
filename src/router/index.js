import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiPage from '@/components/HiPage'
import HiPageSubHi1 from '@/components/HiPageSubHi1'
import HiPageSubHi2 from '@/components/HiPageSubHi2'

Vue.use(Router)

export default new Router({
  routes: [
    { // home page
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {// hi page
      path: '/hi',
      // name: 'HiPage',
      component: HiPage,
      children: [
        {path: '/', name:"hello/hi", component: HiPage},
        {path: 'hi1',name: "hi1" ,component: HiPageSubHi1},
        {path: 'hi2',name: "hi2" ,component: HiPageSubHi2}
      ]
    }
  ]
});


import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块

import allblogs from './components/allblogs'
import aboutme from './components/aboutme'
import gossip from './components/gossip'
import bloginfo from './components/bloginfo'
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'allblogs', component: allblogs },
    { path: '/aboutme', name: 'aboutme', component: aboutme },
    { path: '/gossip', name: 'gossip', component: gossip },
    { path: '/bloginfo/:id', name: 'bloginfo', component: bloginfo, }
  ]
})

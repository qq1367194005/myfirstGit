import Vue from 'vue'
import App from './App.vue'
import router from './router'

import unit from './assets/js/unit.js'

import VueResource from 'vue-resource'

import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video


Vue.use(VueResource)
Vue.prototype.unit = unit

Vue.config.productionTip = false
window.router=router

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

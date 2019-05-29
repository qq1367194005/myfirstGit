import Vue from 'vue'
import App from './App.vue'
import router from './router'

import unit from './assets/js/unit.js'

import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.prototype.unit = unit

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

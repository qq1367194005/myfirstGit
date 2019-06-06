<template>
  <div id="app">
      <Header />
      <router-view/>
      <p style="text-align:center;margin:20px 0 ;color:#4178be">Copyright © 2018-2019 www.hyunl.cn 晋ICP备19000520号</p>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  
  methods: {
      
  },
  
}
</script>

<style>

html,body{
  padding:0;
  margin:0;
}

</style>

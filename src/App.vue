<template>
  <div id="app">
      <Header />
      <router-view/>
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
body{
  /* background: rgb(180, 101, 101); */
}
</style>

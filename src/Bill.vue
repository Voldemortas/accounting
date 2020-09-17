<template>
  <div id="app">
    <PreviewTable v-bind:data="data" />
    <a v-bind:href="`${path}/`">a</a>
  </div>
</template>

<script>
import PreviewTable from './components/PreviewTable.vue'

export default {
  name: 'App',
  components: {
    PreviewTable,
  },
  props: {
    path: String,
  },
  data() {
    return { data: JSON.parse(localStorage.getItem('products')) }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

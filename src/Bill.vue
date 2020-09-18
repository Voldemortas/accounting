<template>
  <div id="app">
    <main class="main">
      <PreviewTable v-bind:data="data" /><br />
      <a v-bind:href="`${path}/`">Go Back</a>
    </main>
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

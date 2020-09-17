<template>
  <div id="app">
    <main class="main">
      <PreviewTable v-bind:data="data" /><br />
      <div class="right">
        <a v-bind:href="`${path}/`">Back</a>
      </div>
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

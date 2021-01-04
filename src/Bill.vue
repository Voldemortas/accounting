<template>
  <div id="app">
    <main class="main">
      <PreviewTable v-bind:data="data" /><br />
      <a v-bind:href="`${path}/`">Go Back</a> <a href="#" @click="getPDF">Get PDF</a>
    </main>
  </div>
</template>

<script>
import PreviewTable from './components/PreviewTable.vue'
import html2pdf from 'html2pdf.js'

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
  methods: {
    getPDF(){
      html2pdf(
        document.getElementsByTagName('html')[0].innerHTML.toString().replaceAll(/<a href="\/">Go Back<\/a>\s*\n*<a href="#">Get PDF<\/a>/g, ''),
        {
          filename: 'receipt.pdf',                  
          html2canvas:  { scale: 4 }
        }
      )
    }
  }
}
//
</script>

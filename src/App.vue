<template>
  <div id="app">
    <main class="main">
      <EditableTable v-bind:data="data" :method="updateTable" />
      <div class="right">
        <a v-bind:href="`${path}/bill`">Get a Bill</a>
      </div>
    </main>
  </div>
</template>

<script>
import EditableTable from './components/EditableTable.vue'

const TAX = 0.21

if (!localStorage.getItem('products')) {
  const defaultData = [
    { code: '47764a23', name: 'Jeans', base: 15, tax: TAX },
    { code: '47714543', name: 'Belt', base: 6, tax: TAX },
    { code: '47612022', name: 'Black Shirt', base: 20, tax: TAX },
    { code: '47612023', name: 'White Shirt', base: 20, tax: TAX },
    { code: '47612024', name: 'Red Shirt', base: 20, tax: TAX },
    { code: '47612025', name: 'Green Shirt', base: 20, tax: TAX },
    { code: '47612026', name: 'Blue shirt', base: 20, tax: TAX },
  ]
  localStorage.setItem('products', JSON.stringify(defaultData))
}

export default {
  name: 'App',
  components: {
    EditableTable,
  },
  props: {
    path: String,
  },
  data() {
    return { data: JSON.parse(localStorage.getItem('products')) }
  },
  methods: {
    updateTable(event, key, value) {
      if (event === 'remove') {
        this.data.splice(key, 1)
        return true
      }
      if (value.name === '' || value.code === '' || value.base <= 0) {
        return false
      }
      if (event === 'update') {
        this.data.splice(key, 1, { ...value, tax: TAX })
      }
      if (event === 'add') {
        this.data.push({ ...value, tax: TAX })
      }
      return true
    },
  },
  watch: {
    data: function() {
      window.localStorage.setItem('products', JSON.stringify(this.data))
    },
  },
}
</script>

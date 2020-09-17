<template>
  <div id="app">
    <EditableTable v-bind:data="data" :method="updateTable" />
  </div>
</template>

<script>
import EditableTable from './components/EditableTable.vue'

const TAX = 0.21

if (!localStorage.getItem('products')) {
  const defaultData = [
    { code: '477', name: 'Jeans', base: 15, tax: TAX },
    { code: '478', name: 'Belt', base: 6, tax: TAX },
  ]
  localStorage.setItem('products', JSON.stringify(defaultData))
}

export default {
  name: 'App',
  components: {
    EditableTable,
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

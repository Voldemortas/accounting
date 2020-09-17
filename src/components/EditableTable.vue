<template>
  <table border="1">
    <thead>
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Base Price</th>
        <th>Price + VAT</th>
        <th colspan="2">Actions</th>
      </tr>
    </thead>
    <tbody v-for="(item, index) in data" :key="item.code + index">
      <EditableRow v-bind="item" :method="method" v-bind:index="index" />
    </tbody>
    <tfoot>
      <th>Subtotal</th>
      <th></th>
      <th>{{data.reduce((acc, curr) => acc + curr.base, 0).toFixed(2)}}</th>
      <th>{{data.reduce((acc, curr) => acc + (curr.base * (1 + curr.tax)) , 0).toFixed(2)}}</th>
      <th colspan="2"></th>
    </tfoot>
  </table>
</template>

<script>
import EditableRow from "./EditableRow";

export default {
  name: "EditableTable",
  props: {
    data: Array,
    method: Function,
  },
  components: { EditableRow },
};
</script>

<style scoped>
</style>
<template>
  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Base Price</th>
        <th>Price + VAT</th>
        <th colspan="2" style="min-width: 20px" class="pad-left">Actions</th>
      </tr>
    </thead>
    <tbody class="scrollable">
      <template v-for="(item, index) in data">
        <EditableRow
          v-bind="item"
          :method="method"
          v-bind:index="index"
          :key="item.code + index"
        />
      </template>
    </tbody>
    <tfoot>
      <NewRow :method="method" v-bind:tax="0.21" />
      <th>Subtotal</th>
      <th></th>
      <th>{{ data.reduce((acc, curr) => acc + curr.base, 0).toFixed(2) }}</th>
      <th>
        {{
          data
            .reduce((acc, curr) => acc + curr.base * (1 + curr.tax), 0)
            .toFixed(2)
        }}
      </th>
      <th colspan="2" style="min-width: 0"></th>
    </tfoot>
  </table>
</template>

<script>
import EditableRow from './EditableRow'
import NewRow from './NewRow'

export default {
  name: 'EditableTable',
  props: {
    data: Array,
    method: Function,
  },
  components: { EditableRow, NewRow },
}
</script>

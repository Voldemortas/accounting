<template>
  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Base Price</th>
        <th>Price + VAT</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, index) in data">
        <PreviewRow
          v-bind="item"
          v-bind:index="index"
          :key="item.code + index"
        />
      </template>
    </tbody>
    <tfoot>
      <th>Total</th>
      <th></th>
      <th>{{ data.reduce((acc, curr) => acc + curr.base, 0).toFixed(2) }}</th>
      <th>
        {{
          data
            .reduce((acc, curr) => acc + curr.base * (1 + curr.tax), 0)
            .toFixed(2)
        }}
      </th>
    </tfoot>
  </table>
</template>

<script>
import PreviewRow from './PreviewRow'

export default {
  name: 'EditableTable',
  props: {
    data: Array,
  },
  components: { PreviewRow },
}
</script>

<template>
  <tr>
    <td>{{ code }}</td>
    <td>{{ name }}</td>
    <td>{{ base.toFixed(2) }}</td>
    <td>{{ (base * (1 + tax)).toFixed(2) }}</td>
  </tr>
</template>

<script>
export default {
  name: 'PrevieRow',
  props: {
    code: String,
    name: String,
    base: Number,
    tax: Number,
  },
}
</script>

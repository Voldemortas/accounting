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

<style scoped>
input {
  width: 100%;
  text-align: center;
}
td {
  width: 100px;
}
.td-small {
  width: 10px;
  border-width: 0;
}
svg {
  cursor: pointer;
}
</style>

<template>
  <tr>
    <td>
      <input type="text" id="code" v-model="newCode" autocomplete="false" />
    </td>
    <td>
      <input type="text" id="name" v-model="newName" autocomplete="false" />
    </td>
    <td>
      <input
        autocomplete="false"
        step="0.01"
        type="number"
        id="base"
        v-model="newBase"
        v-on:change="changeBase"
        v-on:keyup="changeBase"
      />
    </td>
    <td>
      <input
        autocomplete="false"
        step="0.01"
        type="number"
        id="total"
        v-model="newTotal"
        v-on:change="changeTotal"
        v-on:keyup="changeTotal"
      />
    </td>
    <td v-on:click="add" class="td--small pad-left">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 172 172"
        style=" fill:#000000;"
      >
        <title>add</title>
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
        >
          <path d="M0,172v-172h172v172z" fill="none" />
          <g fill="#2ecc71">
            <path
              d="M86,14.33333c-39.517,0 -71.66667,32.14967 -71.66667,71.66667c0,39.517 32.14967,71.66667 71.66667,71.66667c39.517,0 71.66667,-32.14967 71.66667,-71.66667c0,-39.517 -32.14967,-71.66667 -71.66667,-71.66667zM86,28.66667c31.61217,0 57.33333,25.72117 57.33333,57.33333c0,31.61217 -25.72117,57.33333 -57.33333,57.33333c-31.61217,0 -57.33333,-25.72117 -57.33333,-57.33333c0,-31.61217 25.72117,-57.33333 57.33333,-57.33333zM78.83333,57.33333v21.5h-21.5v14.33333h21.5v21.5h14.33333v-21.5h21.5v-14.33333h-21.5v-21.5z"
            />
          </g>
        </g>
      </svg>
    </td>
    <td class="td--small" style="display: inherit" v-on:click="cancel">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 172 172"
        style=" fill:#000000;"
      >
        <title>cancel</title>
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
        >
          <path d="M0,172v-172h172v172z" fill="none" />
          <g fill="#e74c3c">
            <path
              d="M33.73372,23.59961l-10.13411,10.13411l52.26628,52.26628l-52.26628,52.26628l10.13411,10.13411l52.26628,-52.26628l52.26628,52.26628l10.13411,-10.13411l-52.26628,-52.26628l52.26628,-52.26628l-10.13411,-10.13411l-52.26628,52.26628z"
            />
          </g>
        </g>
      </svg>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'NewRow',
  props: {
    method: Function,
    tax: Number,
  },
  data() {
    return {
      newBase: 0,
      newTotal: 0,
      newCode: '',
      newName: '',
    }
  },
  methods: {
    changeBase(e) {
      this.newTotal = (e.target.value * (1 + this.tax)).toFixed(2)
    },
    changeTotal(e) {
      this.newBase = (e.target.value / (1 + this.tax)).toFixed(2)
    },
    cancel() {
      this.newBase = 0
      this.newTotal = 0
      this.newCode = ''
      this.newName = ''
    },
    add() {
      let newValue = {
        code: this.newCode,
        name: this.newName,
        base: this.newBase * 1,
      }
      if (this.method('add', 0, newValue)) this.cancel()
    },
  },
}
</script>

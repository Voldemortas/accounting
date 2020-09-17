<template>
  <tr v-if="!edit">
    <td>{{code}}</td>
    <td>{{name}}</td>
    <td>{{base.toFixed(2)}}</td>
    <td>{{(base * (1 + tax)).toFixed(2)}}</td>
    <td v-on:click="() => {
        edit = !edit
      }" class="td-small">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 172 172"
        style=" fill:#000000;"
      >
        <title>edit</title>
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
          <g fill="#e67e22">
            <path
              d="M131.96744,14.33333c-1.83467,0 -3.66956,0.70211 -5.06706,2.09961l-91.06706,91.06706c0,0 7.2025,0.03583 10.75,3.58333c3.5475,3.5475 3.47135,10.63802 3.47135,10.63802c0,0 7.30015,0.13348 10.86198,3.69531c3.56183,3.56183 3.58333,10.75 3.58333,10.75l91.06706,-91.06706c2.80217,-2.80217 2.80217,-7.33911 0,-10.13412l-18.53255,-18.53255c-1.3975,-1.3975 -3.23239,-2.09961 -5.06706,-2.09961zM131.96744,31.63411l8.39844,8.39844l-7.51661,7.5166l-8.39844,-8.39844zM114.31673,49.28483l8.39844,8.39844l-54.91178,54.91179c-1.79883,-1.23267 -3.69363,-2.1668 -5.55697,-2.88347c-0.70233,-1.849 -1.62314,-3.72331 -2.84147,-5.51498zM26.30111,121.83333l-4.80111,28.66667l28.66667,-4.80111z"
            />
          </g>
        </g>
      </svg>
    </td>
    <td v-on:click="remove" class="td-small">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 172 172"
        style=" fill:#000000;"
      >
        <title>remove</title>
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
          <g fill="#000000">
            <path
              d="M71.66667,14.33333l-7.16667,7.16667h-35.83333v14.33333h7.16667v107.5c0,7.83362 6.49972,14.33333 14.33333,14.33333h71.66667c7.83362,0 14.33333,-6.49972 14.33333,-14.33333v-107.5h7.16667v-14.33333h-14.33333h-21.5l-7.16667,-7.16667zM50.16667,35.83333h71.66667v107.5h-71.66667zM69.56706,59.43294l-10.13411,10.13411l16.43295,16.43294l-16.43295,16.43294l10.13411,10.13411l16.43294,-16.43294l16.43294,16.43294l10.13411,-10.13411l-16.43294,-16.43294l16.43294,-16.43294l-10.13411,-10.13411l-16.43294,16.43295z"
            />
          </g>
        </g>
      </svg>
    </td>
  </tr>
  <tr v-else>
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
    <td v-on:click="save" class="td-small">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 172 172"
        style=" fill:#000000;"
      >
        <title>save</title>
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
              d="M145.43294,37.93294l-80.93294,80.93295l-30.76628,-30.76628l-10.13411,10.13411l40.90039,40.90039l91.06706,-91.06705z"
            />
          </g>
        </g>
      </svg>
    </td>
    <td v-on:click="cancel" class="td-small">
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
  name: "EditableRow",
  props: {
    code: String,
    name: String,
    base: Number,
    tax: Number,
    method: Function,
    index: Number,
  },
  data() {
    return {
      edit: false,
      newBase: this.base.toFixed(2),
      newTotal: (this.base * (1 + this.tax)).toFixed(2),
      newCode: this.code + "",
      newName: this.name + "",
    };
  },
  methods: {
    changeBase(e) {
      this.newTotal = (e.target.value * (1 + this.tax)).toFixed(2);
    },
    changeTotal(e) {
      this.newBase = (e.target.value / (1 + this.tax)).toFixed(2);
    },
    cancel() {
      this.newBase = this.base.toFixed(2);
      this.newTotal = (this.base * (1 + this.tax)).toFixed(2);
      this.newCode = this.code + "";
      this.newName = this.name + "";
      this.edit = !this.edit;
    },
    save() {
      let newValue = {
        code: this.newCode,
        name: this.newName,
        base: this.newBase * 1,
      };
      this.edit = !this.method("update", this.index, newValue);
    },
    remove() {
      this.method("remove", this.index);
    },
  },
};
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
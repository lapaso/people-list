<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :key="header.value"
          :style="{width: header.width+'px'}"
        >{{header.text}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in items" :key="itemKey ? item[itemKey]:index">
        <td v-for="header in headers" :key="header.value">
          <slot :name="header.value" v-bind:item="item">{{item[header.value]}}</slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
/*
Props:
headers:[{text: "foo", value:"foo"}] - text=headerText, value=propsName in items element
items:[{foo:""}]
itemKey: The field on each item object that designates a unique key
 */
export default {
  name: "Grid",
  props: {
    headers: Array,
    items: Array,
    itemKey: String,
  },
};
</script>
<style scoped>
table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  overflow: scroll;
}

td {
  box-shadow: inset 1px -1px #ddd;
}
th {
  top: 0;
  box-shadow: inset 1px 1px #ddd, 0 1px #ddd;
}

td,
th {
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #dee0de;
  color: black;
}
</style>
<template>
  <div class="circle">
    <span class="symbol">F</span>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
.circle {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: whitesmoke;
  border: 3px solid grey;
  margin-left: 10px;
}
.symbol {
  font-size: 45px;
  font-family: Times, Times New Roman, serif;
  line-height: normal;
}
</style>
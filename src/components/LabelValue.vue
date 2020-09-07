<template>
  <div class="labelValueWrapper">
    <div class="label">{{label}}</div>
    <div class="value">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LableValue",
  props: { label: String },
};
</script>

<style scoped>
.labelValueWrapper {
  flex-direction: row;
  display: flex;
}
.labelValueWrapper .label {
  display: flex;
  width: 30%;
}
.labelValueWrapper .value {
  display: flex;
}
</style>
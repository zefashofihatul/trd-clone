<template>
  <button class="primary-button">{{ value }}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    value: String,
  },
};
</script>

<style lang="scss" scoped>
@import "./style/Button.scss";
</style>

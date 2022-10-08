<template>
  <button class="primary-button" :style="{ 'background-color': colorSwitch() }">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    value: {
      type: String,
      default: "Button Value",
    },
    color: String,
  },
  methods: {
    colorSwitch: function () {
      switch (this.color) {
        case "dark":
          return "#0f0f0f";
        case "white":
          return "#f5f6f8";
        default:
          return "#da3833";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/Button.scss";
</style>

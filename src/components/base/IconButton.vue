<template>
  <div
    class="icon-button-container"
    :style="{ 'background-color': colorSwitch() }"
  >
    <div class="icon-wrapper">
      <filterIcon />
    </div>
  </div>
</template>

<script>
import filterIcon from "@/assets/icon/filterIcon.vue";

export default {
  name: "IconButton",
  components: {
    filterIcon,
  },
  props: {
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
@import "./style/IconButton.scss";
</style>

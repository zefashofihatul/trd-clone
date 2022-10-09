<template>
  <div class="grid-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: "GridWrapper",
};
</script>

<style lang="scss" scoped>
@import "./style/GridWrapper.scss";
</style>

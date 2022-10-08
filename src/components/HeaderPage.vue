<template>
  <div class="header-page-container">
    <h1 class="header-page-title">Topics ({{ totalNews }})</h1>
    <div class="header-page-controller">
      <PrimaryButton color="dark" value="Create News" />
    </div>
  </div>
</template>

<script>
import PrimaryButton from "./base/Button.vue";

export default {
  components: {
    PrimaryButton,
  },
};
</script>

<style lang="scss" scoped>
@import "./style/HeaderPage.scss";
</style>

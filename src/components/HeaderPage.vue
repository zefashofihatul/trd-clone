<template>
  <div class="header-page-container">
    <h1 class="header-page-title">{{ title }}</h1>
    <div class="header-page-controller">
      <router-link class="routerLink" to="/news/create">
        <PrimaryButton color="dark" value="Create News" />
      </router-link>
      <IconButton color="dark" />
    </div>
  </div>
</template>

<script>
import PrimaryButton from "./base/Button.vue";
import IconButton from "./base/IconButton.vue";

export default {
  components: {
    PrimaryButton,
    IconButton,
  },
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@import "./style/HeaderPage.scss";
</style>

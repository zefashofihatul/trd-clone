<template>
  <div class="nav-container">
    <div class="content-container">
      <div class="left-content">
        <div class="logo-container">
          <img :src="logo" alt="" />
        </div>
        <div class="search-container" v-show="search">
          <searchIcon />
          <input type="text" class="search-input" placeholder="Search" />
        </div>
      </div>
      <div class="nav-content-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo.svg";
import searchIcon from "@/assets/icon/search.vue";

export default {
  name: "TopNav",
  data: function () {
    return {
      logo: logo,
    };
  },
  props: {
    search: Boolean,
  },
  components: {
    searchIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "./style/TopNav.scss";
</style>

<template>
  <div class="nav-container">
    <div class="content-container">
      <div class="left-content">
        <div class="logo-container">
          <img :src="logo" alt="" />
        </div>
        <div class="search-container">
          <searchIcon />
          <input type="text" class="search-input" placeholder="Search" />
        </div>
      </div>
      <div class="nav-content-container">
        <PrimaryButton value="Logout" />
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo.svg";
import searchIcon from "@/assets/icon/search.vue";
import PrimaryButton from "@/components/base/Button";

export default {
  name: "TopNav",
  data: function () {
    return {
      logo: logo,
    };
  },
  components: {
    searchIcon,
    PrimaryButton,
  },
};
</script>

<style lang="scss" scoped>
@import "./style/TopNav.scss";
</style>

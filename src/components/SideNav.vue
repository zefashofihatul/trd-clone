<template>
  <div class="side-nav-wrapper">
    <div class="side-nav-container">
      <span class="title-nav">Data Enquiries</span>
      <div class="nav-container">
        <router-link class="routerLink" to="/">
          <div class="nav-list">
            <div class="nav-list-icon">
              <packageIcon />
            </div>
            <span class="nav-list-title">Topics</span>
          </div>
        </router-link>
        <router-link class="routerLink" to="/news">
          <div class="nav-list">
            <div class="nav-list-icon">
              <documentIcon />
            </div>
            <span class="nav-list-title">Deal sheets</span>
          </div>
        </router-link>
        <router-link class="routerLink" to="/analytics">
          <div class="nav-list">
            <div class="nav-list-icon">
              <trendingUpIcon />
            </div>
            <span class="nav-list-title">Analytics</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="side-nav-container">
      <span class="title-nav">National Inventory</span>
      <div class="nav-container">
        <router-link class="routerLink" to="/">
          <div class="nav-list">
            <div class="nav-list-icon">
              <packageIcon />
            </div>
            <span class="nav-list-title">Development</span>
          </div>
        </router-link>
        <router-link class="routerLink" to="/news">
          <div class="nav-list">
            <div class="nav-list-icon">
              <documentIcon />
            </div>
            <span class="nav-list-title">Residential</span>
          </div>
        </router-link>
        <router-link class="routerLink" to="/dealsheet">
          <div class="nav-list">
            <div class="nav-list-icon">
              <trendingUpIcon />
            </div>
            <span class="nav-list-title">Commercial</span>
          </div>
        </router-link>
        <router-link class="routerLink" to="/analytics">
          <div class="nav-list">
            <div class="nav-list-icon">
              <flagIcon />
            </div>
            <span class="nav-list-title">Merriweather</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import documentIcon from "@/assets/icon/documentIcon";
import packageIcon from "@/assets/icon/packageIcon";
import trendingUpIcon from "@/assets/icon/trendingUp";
import flagIcon from "@/assets/icon/flagIcon.vue";

export default {
  name: "SideNav",
  components: {
    documentIcon,
    packageIcon,
    trendingUpIcon,
    flagIcon,
  },
};
</script>

<style lang="scss">
@import "./style/SideNav.scss";
</style>

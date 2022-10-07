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
        <router-link class="routerLink" to="/news">
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
        <router-link class="routerLink" to="/news">
          <div class="nav-list">
            <div class="nav-list-icon">
              <trendingUpIcon />
            </div>
            <span class="nav-list-title">Commercial</span>
          </div>
        </router-link>
        <router-link class="routerLink" to="/news">
          <div class="nav-list">
            <div class="nav-list-icon">
              <flagIcon />
            </div>
            <span class="nav-list-title">National</span>
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

<style>
.side-nav-container {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 32px 24px 0px 32px;
}

span.title-nav {
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #9d9d9d;
  text-transform: uppercase;
  width: fit-content;
}

.nav-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 4px;
}

.nav-list:hover {
  background-color: #f0f0f0;
  border-radius: 4px;
}

.nav-list-icon {
  width: fit-content;
}

.routerLink {
  text-decoration: none;
}

span.nav-list-title {
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
  margin-left: 12px;
}
</style>

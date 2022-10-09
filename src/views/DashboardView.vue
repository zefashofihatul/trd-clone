<template>
  <TopNav :search="true">
    <PrimaryButton value="Logout" />
  </TopNav>
  <GridWrapper>
    <SideNav />
    <div class="dashboard-list-container">
      <h2>Dashboard List Container</h2>
    </div>
  </GridWrapper>
</template>

<script>
import GridWrapper from "@/components/base/GridWrapper.vue";
import SideNav from "@/components/SideNav.vue";
import PrimaryButton from "@/components/base/Button";
import TopNav from "@/components/TopNav.vue";

export default {
  name: "DashboardView",
  components: {
    GridWrapper,
    SideNav,
    PrimaryButton,
    TopNav,
  },
};
</script>

<style>
@import "./style/DashboardView.scss";
</style>

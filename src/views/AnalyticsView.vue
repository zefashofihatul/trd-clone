<template>
  <TopNav :search="true">
    <PrimaryButton value="Logout" />
  </TopNav>
  <GridWrapper>
    <SideNav />
    <div class="analytics-list-container">
      <h2>Analytics List Container</h2>
    </div>
  </GridWrapper>
</template>

<script>
import GridWrapper from "@/components/base/GridWrapper.vue";
import SideNav from "@/components/SideNav.vue";
import PrimaryButton from "@/components/base/Button";
import TopNav from "@/components/TopNav.vue";

export default {
  name: "AnalyticsView",
  components: {
    GridWrapper,
    SideNav,
    TopNav,
    PrimaryButton,
  },
};
</script>

<style>
.analytics-list-container {
  background-color: aqua;
}
</style>

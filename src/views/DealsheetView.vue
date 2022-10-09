<template>
  <TopNav :search="true">
    <PrimaryButton value="Logout" />
  </TopNav>
  <GridWrapper>
    <SideNav />
    <div class="dealsheet-list-container">
      <h2>Dealsheet List Container</h2>
    </div>
  </GridWrapper>
</template>

<script>
import GridWrapper from "@/components/base/GridWrapper.vue";
import SideNav from "@/components/SideNav.vue";
import PrimaryButton from "@/components/base/Button";
import TopNav from "@/components/TopNav.vue";

export default {
  name: "DealsheetView",
  components: {
    GridWrapper,
    SideNav,
    PrimaryButton,
    TopNav,
  },
};
</script>

<style>
.dealsheet-list-container {
  background-color: aqua;
}
</style>

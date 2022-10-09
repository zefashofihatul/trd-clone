<template>
  <TopNav :search="true">
    <PrimaryButton value="Logout" />
  </TopNav>
  <GridWrapper>
    <SideNav />
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </GridWrapper>
</template>

<script>
import GridWrapper from "@/components/base/GridWrapper.vue";
import SideNav from "@/components/SideNav.vue";
import PrimaryButton from "@/components/base/Button";
import TopNav from "@/components/TopNav.vue";

export default {
  name: "AboutView",
  components: {
    GridWrapper,
    SideNav,
    PrimaryButton,
    TopNav,
  },
};
</script>

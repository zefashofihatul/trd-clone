<template>
  <div class="container">
    <h1>Welcome to Your Vue.js App</h1>
    <div class="dashboard-grid-wrapper">
      <SideNav />
      <NewsList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from "@/components/SideNav.vue";
import NewsList from "@/components/NewsList.vue";

export default {
  name: "DashboardView",
  components: {
    SideNav,
    NewsList,
  },
};
</script>

<style>
.dashboard-grid-wrapper {
  display: grid;
  grid-template-columns: minmax(160px, 260px) 3fr;
}
</style>

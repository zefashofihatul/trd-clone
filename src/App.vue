<template>
  <div class="container">
    <TopNav />
    <div class="dashboard-grid-wrapper">
      <SideNav />
      <router-view />
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue";
import TopNav from "@/components/TopNav.vue";

export default {
  components: {
    SideNav,
    TopNav,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: proxima-nova, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  box-sizing: border-box;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.dashboard-grid-wrapper {
  display: grid;
  min-height: 100vh;
  padding-top: 59px;
  box-sizing: border-box;
  grid-template-columns: minmax(160px, 240px) 3fr;
}
</style>

<template>
  <div class="container">
    <div class="dashboard-grid-wrapper">
      <SideNav />
      <NewsList />
    </div>
  </div>
  <router-view />
</template>

<script>
import SideNav from "@/components/SideNav.vue";
import NewsList from "@/components/NewsList.vue";

export default {
  components: {
    SideNav,
    NewsList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
</style>

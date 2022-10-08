<template>
  <div class="news-list-container">
    <HeaderPage title="News" />
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
export default {
  name: "NewsView",
  data: function () {
    return {
      totalNews: 179,
    };
  },
  components: {
    HeaderPage,
  },
};
</script>

<style lang="scss" scoped>
@import "./style/NewsView.scss";
</style>

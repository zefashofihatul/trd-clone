<template>
  <div class="news-list-container">
    <HeaderPage :title="`Topics (${totalNews})`" />
    <div class="news-card-wrapper">
      <NewsCard :newsData="newsData" />
      <NewsCard :newsData="newsData" />
    </div>
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import NewsCard from "@/components/NewsCard.vue";
import image from "@/assets/images/newsImage.png";

export default {
  name: "NewsView",
  data: function () {
    return {
      totalNews: 179,
      newsData: {
        image: image,
      },
    };
  },
  components: {
    HeaderPage,
    NewsCard,
  },
};
</script>

<style lang="scss" scoped>
@import "./style/NewsView.scss";
</style>

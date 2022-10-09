<template>
  <TopNav :search="true">
    <PrimaryButton value="Logout" />
  </TopNav>
  <GridWrapper>
    <SideNav />
    <div class="news-list-container">
      <HeaderPage :title="`Topics (${totalNews})`" />
      <div class="news-card-wrapper">
        <NewsCard :newsData="newsData" />
        <NewsCard :newsData="newsData" />
      </div>
    </div>
  </GridWrapper>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import NewsCard from "@/components/NewsCard.vue";
import image from "@/assets/images/newsImage.png";
import Loading from "@/components/Loading.vue";
import GridWrapper from "@/components/base/GridWrapper.vue";
import SideNav from "@/components/SideNav.vue";
import PrimaryButton from "@/components/base/Button";
import TopNav from "@/components/TopNav.vue";

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
    GridWrapper,
    PrimaryButton,
    SideNav,
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
@import "./style/NewsView.scss";
</style>

<template>
  <div class="news-card-container">
    <div class="news-card-content-wrapper">
      <div class="news-card-image">
        <img :src="newsData.image" alt="" />
      </div>
      <div class="news-card-content">
        <div class="content-description">
          <div class="content-description-publish">
            <span>Publish 09/20/2022</span>
          </div>
          <div class="content-description-writter">
            <span>Steven Donics</span>
          </div>
        </div>
        <div class="content-news-title">
          <p>
            The planning phase of the TRD project consisted of competitor
            research, strategy refinement, and sit mapping.
          </p>
        </div>
      </div>
    </div>
    <div class="news-card-status-wrapper">
      <div class="status">
        <div class="status-label">
          <span class="label">Active Read</span>
          <p class="status">6177</p>
        </div>
      </div>
      <div class="status">
        <div class="status-label">
          <span class="label">Ranking</span>
          <p class="status">12/180</p>
        </div>
      </div>
      <div class="status">
        <div class="status-label">
          <span class="label">Category</span>
          <p class="status">Bussiness</p>
        </div>
      </div>
      <div class="status">
        <div class="status-label">
          <span class="label">Total Earn</span>
          <p class="status">$8k</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    newsData: Object,
  },
  mounted: function () {},
};
</script>

<style lang="scss" scoped>
@import "./style/NewsCard.scss";
</style>

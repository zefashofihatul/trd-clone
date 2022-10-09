<template>
  <div class="post-news-container">
    <TopNav>
      <PrimaryButton value="Publish" color="dark" style="margin-right: 16px" />
      <PrimaryButton value="Delete & Back" style="margin-right: 56px" />
      <IconButton color="dark" />
    </TopNav>
    <div class="post-news-wrapper">
      <div class="post-title-wrapper">
        <input
          type="text"
          placeholder="Title"
          name="postTitle"
          id="post-title"
          v-model="title"
        />
      </div>
      <div class="post-description-wrapper">
        <CustomTextarea
          type="text"
          placeholder="Tell your story"
          v-model="description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import PrimaryButton from "@/components/base/Button";
import IconButton from "@/components/base/IconButton.vue";
import CustomTextarea from "@/components/base/Textarea.vue";

export default {
  name: "PostNewsView",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  components: {
    TopNav,
    PrimaryButton,
    IconButton,
    CustomTextarea,
  },
  methods: {
    addInput: function () {
      console.log("addinput");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/PostNews.scss";
</style>

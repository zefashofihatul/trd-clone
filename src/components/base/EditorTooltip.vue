<template>
  <div id="tooltip" aria-hidden="true">
    <span class="boldButton" @mouseup="boldHandle"><boldIcon /></span>
    <span class="italicButton" @mouseup="italicHandle"><italicIcon /></span>
    <span class="underlineButton" @mouseup="underlineIcon"
      ><underlineIcon
    /></span>
  </div>
</template>

<script>
import boldIcon from "@/assets/icon/boldIcon.vue";
import italicIcon from "@/assets/icon/italicIcon.vue";
import underlineIcon from "@/assets/icon/underlineIcon.vue";

export default {
  name: "PrimaryButton",
  components: {
    boldIcon,
    italicIcon,
    underlineIcon,
  },
  methods: {
    boldHandle: function (e) {
      this.$emit("perform-action", "bold");
    },
    italicHandle: function (e) {
      this.$emit("perform-action", "italic");
    },
    underlineIcon: function (e) {
      this.$emit("perform-action", "underline");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/EditorTooltip.scss";
</style>

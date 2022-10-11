<template>
  <div class="post-news-container">
    <TopNav>
      <PrimaryButton value="Publish" color="dark" style="margin-right: 16px" />
      <PrimaryButton value="Delete & Back" style="margin-right: 56px" />
      <IconButton color="dark" />
    </TopNav>
    <div class="post-news-wrapper">
      <div class="post-title-wrapper">
        <TextareaCustom
          type="text"
          placeholder="Title"
          name="postTitle"
          id="post-title"
          spellcheck="false"
          v-model="title"
        />
      </div>
      <div class="post-description-wrapper" ref="descriptionWrapper">
        <div class="">
          <TextareaCustom
            type="text"
            name="post-description"
            id="post-description"
            placeholder="Tell your story"
            spellcheck="false"
            v-model="description"
            @keydown="changeDown"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import PrimaryButton from "@/components/base/Button";
import IconButton from "@/components/base/IconButton.vue";
import TextareaCustom from "@/components/base/Textarea.vue";
import { h, createApp, withModifiers } from "vue";

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
    TextareaCustom,
  },
  methods: {
    addInput: function () {
      console.log("addinput");
    },
    changeDown: function (e) {
      if (e.code == "KeyB") {
        e.preventDefault();
        const bold = document.createElement("b");
        console.log(bold);
      }
      if (e.keyCode == "46" || e.keyCode == "8") {
        if (e.target.textLength == "0" && e.target.selectionEnd == "0") {
          e.preventDefault();
          const elementTarget =
            e.target.parentElement.previousElementSibling ||
            e.target.parentElement.nextElementSibling;
          if (this.$refs.descriptionWrapper.children.length > 1) {
            this.setSelectionRange(elementTarget.firstElementChild, -1, -1);
            e.target.parentElement.parentNode.removeChild(
              e.target.parentElement,
            );
          }
        }
      }
      if (e.keyCode == "13") {
        e.preventDefault();
        const component = h(TextareaCustom, {
          class: ["post-description"],
          name: "post-description",
          placeholder: "Tell your story",
          spellcheck: "false",
          style: {
            height: "34px",
            lineHeight: "1.5",
            margin: "6px 0",
          },
          onKeydown: (e) => {
            this.changeDown(e);
          },
        });
        const componentApp = createApp(component);
        const wrapper = document.createElement("div");
        componentApp.mount(wrapper);
        if (e.target.parentElement.nextElementSibling) {
          e.target.parentElement.parentNode.insertBefore(
            wrapper,
            e.target.parentElement.nextElementSibling,
          );
        } else {
          e.target.parentElement.parentNode.appendChild(wrapper);
        }
        this.setSelectionRange(wrapper.firstElementChild, 0, 0);
      }
      // Move next sibling handle
      if (e.keyCode == "40" || e.keyCode == "39") {
        if (e.target.textLength == e.target.selectionEnd) {
          const elementTarget = e.target.parentElement.nextElementSibling;
          if (elementTarget) {
            e.preventDefault();
            this.setSelectionRange(elementTarget.firstElementChild, 8, 8);
          }
        }
      }
      // Move previous sibling handle
      if (e.keyCode == "37" || e.keyCode == "38") {
        if (e.target.selectionEnd == "0") {
          const elementTarget = e.target.parentElement.previousElementSibling;
          if (elementTarget) {
            e.preventDefault();
            this.setSelectionRange(elementTarget.firstElementChild, -1, -1);
          }
        }
      }
    },
    getCaret: function (el) {
      console.log(el.scrollHeight);
      var taHeight = el.scrollHeight;
      return Math.floor(taHeight / 30);
    },
    setSelectionRange: function (input, selectionStart, selectionEnd) {
      if (input.setSelectionRange) {
        var start = selectionStart;
        var end = selectionEnd;
        input.selectionStart = start;
        input.selectionEnd = end;
        input.focus();
      } else if (input.createTextRange) {
        var range = input.createTextRange();
        console.log(range);
        range.collapse(true);
        range.moveEnd("character", selectionEnd);
        range.moveStart("character", selectionStart);
        range.select();
      }
    },
    setCaretToPos: function (input, pos) {
      this.setSelectionRange(input, pos, pos);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/PostNews.scss";
</style>

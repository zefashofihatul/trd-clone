<template>
  <div class="post-news-container">
    <span id="tooltip" aria-hidden="true">Hey ✌️</span>
    <TopNav>
      <PrimaryButton value="Publish" color="dark" style="margin-right: 16px" />
      <PrimaryButton value="Delete & Back" style="margin-right: 56px" />
      <IconButton color="dark" />
    </TopNav>
    <div class="post-news-wrapper" @click="selectionWord">
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
    selectionWord: function (e) {
      const range = this.getSelectionRange(e.target);
      const resistance = 4;
      if (Math.abs(range.start - range.end) > resistance) {
        console.log(range);
        this.toggleTooltip(e, true);
      } else {
        this.toggleTooltip(e, false);
      }
    },
    changeDown: function (e) {
      if (e.ctrlKey && e.keyCode == 66) {
        e.preventDefault();
        this.performAction("bold");
        console.log("CTRL + B was pressed!");
      }
      if (e.keyCode == "46" || e.keyCode == "8") {
        if (
          this.isCaretOnLastLine(e.target) &&
          this.getCaret(e.target) == "0"
        ) {
          e.preventDefault();
          const elementTarget =
            e.target.parentElement.previousElementSibling &&
            e.target.parentElement.nextElementSibling;
          if (this.$refs.descriptionWrapper.children.length > 1) {
            if (e.target.parentElement.previousElementSibling) {
              this.setCaretToPos(
                e.target.parentElement.previousElementSibling.firstElementChild,
                e.target.parentElement.previousElementSibling.firstElementChild
                  .textContent.length,
              );
            } else {
              if (e.target.parentElement.nextElementSibling) {
                console.log("next");
                this.setCaretToPos(
                  e.target.parentElement.nextElementSibling.firstElementChild,
                  0,
                );
              }
            }
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
            lineHeight: "1.5",
            margin: "6px 0",
            textAlign: "left",
            cursor: "text",
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
        this.setCaretToPos(wrapper.firstElementChild);
      }
      // Move next sibling handle
      if (e.keyCode == "40" || e.keyCode == "39") {
        if (e.keyCode == "39") {
          if (
            this.isCaretOnLastLine(e.target) &&
            this.getCaret(e.target) == e.target.textContent.length
          ) {
            const elementTarget = e.target.parentElement.nextElementSibling;
            if (elementTarget) {
              e.preventDefault();
              this.setCaretToPos(elementTarget.firstElementChild, 5);
            }
          }
        }
        if (e.keyCode == "40") {
          if (this.isCaretOnLastLine(e.target)) {
            const elementTarget = e.target.parentElement.nextElementSibling;
            if (elementTarget) {
              e.preventDefault();
              this.setCaretToPos(elementTarget.firstElementChild, 5);
            }
          }
        }
      }
      // Move previous sibling handle
      if (e.keyCode == "37" || e.keyCode == "38") {
        if (e.keyCode == "38") {
          if (this.isCaretOnFirstLine(e.target)) {
            const elementTarget = e.target.parentElement.previousElementSibling;
            if (elementTarget) {
              e.preventDefault();
              this.setCaretToPos(
                elementTarget.firstElementChild,
                elementTarget.firstElementChild.textContent.length,
              );
            }
          }
        }
        if (e.keyCode == "37") {
          if (
            this.isCaretOnFirstLine(e.target) &&
            this.getCaret(e.target) == "0"
          ) {
            const elementTarget = e.target.parentElement.previousElementSibling;
            if (elementTarget) {
              e.preventDefault();
              this.setCaretToPos(
                elementTarget.firstElementChild,
                elementTarget.firstElementChild.textContent.length,
              );
            }
          }
        }
      }
    },
    toggleTooltip: function (event, position) {
      const tooltip = document.getElementById("tooltip");
      if (position) {
        const { x, y } = this.getCaretCoordinates();
        tooltip.setAttribute("aria-hidden", "false");
        tooltip.setAttribute(
          "style",
          `display: inline-block; left: ${x - 32}px; top: ${y - 36}px`,
        );
      } else {
        tooltip.setAttribute("aria-hidden", "true");
        tooltip.setAttribute("style", "display: none;");
      }
    },
    getCaretCoordinates: function (e) {
      let x = 0,
        y = 0;
      const isSupported = typeof window.getSelection !== "undefined";
      if (isSupported) {
        const selection = window.getSelection();
        // Check if there is a selection (i.e. cursor in place)
        if (selection.rangeCount !== 0) {
          // Clone the range
          const range = selection.getRangeAt(0).cloneRange();
          // Collapse the range to the start, so there are not multiple chars selected
          range.collapse(true);
          // getCientRects returns all the positioning information we need
          const rect = range.getClientRects()[0];
          if (rect) {
            x = rect.left; // since the caret is only 1px wide, left == right
            y = rect.top; // top edge of the caret
          }
        }
      }
      return { x, y };
    },
    getCaret: function (el) {
      let position = 0;
      const isSupported = typeof window.getSelection !== "undefined";
      if (isSupported) {
        const selection = window.getSelection();
        if (selection.rangeCount !== 0) {
          const range = window.getSelection().getRangeAt(0);
          const preCaretRange = range.cloneRange();
          preCaretRange.selectNodeContents(el);
          preCaretRange.setEnd(range.endContainer, range.endOffset);
          position = preCaretRange.toString().length;
        }
      }
      return position;
    },
    isCaretOnLastLine: function (element) {
      if (element.ownerDocument.activeElement !== element) return false;

      // Get the client rect of the current selection
      let window = element.ownerDocument.defaultView;
      let selection = window.getSelection();
      if (selection.rangeCount === 0) return false;

      let originalCaretRange = selection.getRangeAt(0);
      // Bail if there is a selection
      if (originalCaretRange.toString().length > 0) return false;
      let originalCaretRect = originalCaretRange.getBoundingClientRect();

      // Create a range at the end of the last text node
      let endOfElementRange = document.createRange();
      endOfElementRange.selectNodeContents(element);

      // The endContainer might not be an actual text node,
      // try to find the last text node inside
      let endContainer = endOfElementRange.endContainer;
      let endOffset = 0;
      while (endContainer.hasChildNodes() && !(endContainer instanceof Text)) {
        endContainer = endContainer.lastChild;
        endOffset = endContainer.length ?? 0;
      }
      endOfElementRange.setEnd(endContainer, endOffset);
      endOfElementRange.setStart(endContainer, endOffset);
      let endOfElementRect = endOfElementRange.getBoundingClientRect();
      return originalCaretRect.bottom === endOfElementRect.bottom;
    },
    isCaretOnFirstLine: function (element) {
      if (element.ownerDocument.activeElement !== element) return false;

      // Get the client rect of the current selection
      let window = element.ownerDocument.defaultView;
      let selection = window.getSelection();
      if (selection.rangeCount === 0) return false;

      let originalCaretRange = selection.getRangeAt(0);

      // Bail if there is text selected
      if (originalCaretRange.toString().length > 0) return false;

      let originalCaretRect = originalCaretRange.getBoundingClientRect();
      // Create a range at the end of the last text node
      let startOfElementRange = element.ownerDocument.createRange();
      startOfElementRange.selectNodeContents(element);

      // The endContainer might not be an actual text node,
      // try to find the last text node inside
      let startContainer = startOfElementRange.endContainer;
      let startOffset = 0;
      while (
        startContainer.hasChildNodes() &&
        !(startContainer instanceof Text)
      ) {
        startContainer = startContainer.firstChild;
      }
      startOfElementRange.setStart(startContainer, startOffset);
      startOfElementRange.setEnd(startContainer, startOffset);
      let endOfElementRect = startOfElementRange.getBoundingClientRect();
      return originalCaretRect.top === endOfElementRect.top;
    },
    getSelectionRange: function (el, start, end) {
      const sel = window.getSelection();
      const { anchorOffset, focusOffset } = sel;
      return { start: anchorOffset, end: focusOffset };
      // const btn = document.createElement("b");
      // btn.innerHTML = sel;
      // document.execCommand("insertHTML", false, btn.outerHTML);
    },
    performAction: function (command) {
      // Bold, Italic, Underline
      const sel = window.getSelection().toString();
      document.execCommand(command, false, null);
    },
    setCaretToPos: function (el, pos = 0) {
      const node = el;
      const range = document.createRange();
      if (el.textContent.length >= pos && el.textContent.length > 0) {
        const textNode = node.firstChild;
        range.setStart(textNode, pos);
        range.setEnd(textNode, pos);
      }

      const sel = window.getSelection();
      sel.removeAllRanges();

      sel.addRange(range);
      node.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/PostNews.scss";
</style>

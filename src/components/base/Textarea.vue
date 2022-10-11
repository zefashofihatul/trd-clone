<template>
  <textarea
    name="textarea-custom"
    id="textarea-custom"
    ref="textarea"
    :spellcheck="spellcheck"
    @input="autoGrow()"
    :placeholder="placeholder"
  ></textarea>
</template>

<script>
export default {
  name: "TextareaCustom",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    spellcheck: {
      required: false,
    },
    lineheight: {
      type: String,
    },
  },
  methods: {
    autoGrow: function () {
      this.$refs.textarea.style.height = "5px";
      this.$refs.textarea.style.height =
        this.$refs.textarea.scrollHeight + "px";
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_mixin";
#textarea-custom {
  height: auto;
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: wrap;
  resize: none;
  @include headingFont(20px, 400, $dark-font-color);
  border: none;
  &::placeholder {
    color: $grey-font-color;
  }
  &:focus {
    outline: none;
    background-color: none;
  }
}
</style>

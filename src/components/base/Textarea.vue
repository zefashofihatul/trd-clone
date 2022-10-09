<template>
  <textarea
    name="textarea-custom"
    id="textarea-custom"
    rows="1"
    ref="textarea"
    @input="autoGrow()"
    :placeholder="placeholder"
  ></textarea>
</template>

<script>
export default {
  name: "TextareaCustom",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
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
  line-height: 1.8;
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

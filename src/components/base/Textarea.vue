<template>
  <div
    name="textarea-custom"
    id="textarea-custom"
    ref="textarea"
    :spellcheck="spellcheck"
    contenteditable="true"
    :placeholder="placeholder"
    oninput="if(this.innerHTML.trim()==='<br>')this.innerHTML=''"
  ></div>
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
  methods: {},
};
</script>

<style lang="scss">
@import "@/scss/_mixin";
#textarea-custom {
  max-width: 100%;
  width: 100%;
  text-align: left;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  padding: 3px 2px;
  min-height: 1em;
  cursor: pointer;
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
[contenteditable][placeholder]:empty:before {
  content: attr(placeholder);
  position: absolute;
  color: gray;
  background-color: transparent;
}
</style>

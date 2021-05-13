<template>
  <component :is="tag" :class="styleClasses">
    <slot />
  </component>
</template>

<script>
export default {
  name: "BaseText",
  props: {
    size: {
      type: String,
      default: "m",
      validator(value) {
        return ["m", "xl"].includes(value)
      },
    },
    tag: {
      type: String,
      default: "p",
      validator(value) {
        return ["p", "div", "span", "a"].includes(value)
      },
    },
    isLight: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    styleClasses() {
      return {
        text: true,
        [this.size]: true,
        light: this.isLight,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.text {
  line-height: 1.4;
  font-family: "Roboto", sans-serif;
  color: $color-text;

  &.m {
    font-size: 16px;

    @include on-medium-screen-and-down {
      font-size: 14px;
    }
  }

  &.xl {
    font-size: 24px;

    @include on-medium-screen-and-down {
      font-size: 20px;
    }
  }

  &.light {
    color: #fff;
  }
}
</style>

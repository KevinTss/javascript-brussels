<template>
  <component :is="headingTag" :class="styleClasses">
    <slot />
  </component>
</template>

<script>
export default {
  name: "BaseHeading",
  props: {
    level: {
      type: Number,
      default: 1,
      validator(value) {
        return value < 7 && value > 0
      },
    },
    size: {
      type: String,
      default: "m",
      validator(value) {
        return ["m", "xl"].includes(value)
      },
    },
  },
  computed: {
    headingTag() {
      return `h${this.level}`
    },

    styleClasses() {
      return {
        heading: true,
        [this.size]: true,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.heading {
  line-height: 1.4;
  font-family: "Roboto", sans-serif;
  color: $color-heading;
  font-weight: 600;

  &.m {
    font-size: 28px;

    @include on-medium-screen-and-down {
      font-size: 20px;
    }
  }

  &.xl {
    font-size: 48px;

    @include on-medium-screen-and-down {
      font-size: 28px;
    }
  }
}
</style>

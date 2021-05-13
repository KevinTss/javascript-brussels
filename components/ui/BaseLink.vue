<template>
  <BaseText
    v-bind="$props"
    tag="a"
    :href="href"
    :is-light="$parent.$props.isLight"
    class="link"
  >
    <slot />
  </BaseText>
</template>

<script>
import BaseText from "./BaseText"

export default {
  name: "BaseLink",
  components: { BaseText },
  props: {
    href: {
      type: String,
      default: "#",
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  &:hover {
    text-decoration: underline;
  }
}
</style>

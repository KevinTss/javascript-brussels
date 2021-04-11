<template>
  <img class="base-image" :src="src || fallback" :style="style" />
</template>

<script>
import fallbackLogoUrl from "../../assets/images/logo/js-logo-120x120.png";

export default {
  name: "BaseImage",
  props: {
    src: {
      type: String,
      required: true,
    },
    objectFit: {
      type: String,
      default: "contain",
      validator(value) {
        return ["contain", "cover"].includes(value);
      },
    },
  },
  data() {
    return { fallback: fallbackLogoUrl };
  },
  computed: {
    style() {
      return {
        objectFit: "contain",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.base-image {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <a class="item-card" :href="link" target="_blank" rel="noreferrer noopener">
    <div class="image-container">
      <BaseImage :src="logoUrl" :alt="`${title} logo`" />
    </div>
    <div class="content">
      <BaseText>{{ title }}</BaseText>
    </div>
  </a>
</template>

<script>
import BaseImage from "../ui/BaseImage"
import BaseText from "../ui/BaseText"

export default {
  name: "ItemCard",
  components: { BaseImage, BaseText },
  props: {
    title: {
      type: String,
      default: "",
    },
    logoUrl: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
.item-card {
  display: flex;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.image-container {
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 12px;
  margin-right: 10px;
}

.content {
  display: flex;
  align-items: center;
}
</style>

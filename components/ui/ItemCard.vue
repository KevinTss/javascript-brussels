<template>
  <div class="item-card">
    <a class="wrapper" :href="link" target="_blank" rel="noreferrer noopener">
      <div class="header-card">
        <div class="image-container">
          <BaseImage :src="logoUrl" :alt="`${title} logo`" />
        </div>
        <div class="content">
          <BaseText>{{ title }}</BaseText>
        </div>
      </div>
      <ul class="tags-container">
        <li v-for="(tag, index) in tags" :key="index" class="tag-item">
          <Tag :text="tag" />
        </li>
      </ul>
      <ul class="langs-container">
        <li class="lang-item">Languages:</li>
        <li v-for="(lang, index) in langs" :key="index" class="lang-item">
          {{ lang }}
        </li>
      </ul>
    </a>
  </div>
</template>

<script>
import BaseImage from "../ui/BaseImage"
import BaseText from "../ui/BaseText"
import Tag from "../ui/Tag"

export default {
  name: "ItemCard",
  components: { BaseImage, BaseText, Tag },
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
    tags: {
      type: Array,
      default: () => [],
    },
    langs: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.item-card {
  width: 100%;
  border: 10px solid $color-transparent;
}

.wrapper {
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border-radius: 25px;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 39px 0px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }
}

.header-card {
  display: flex;
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

.tags-container {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: -5px;
  margin-top: 5px;
  padding: 0;
}

.tag-item {
  border: 5px solid $color-transparent;
}

.langs-container {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: -5px;
  margin-top: 5px;
  padding: 0;
}

.lang-item {
  border: 5px solid $color-transparent;
  font-size: 14px;
}
</style>

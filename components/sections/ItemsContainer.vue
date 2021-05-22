<template>
  <div :id="id" class="item-container">
    <div class="container">
      <BaseHeading>{{ title }}</BaseHeading>
      <ul class="list">
        <li v-for="(item, index) in items" :key="index" class="list-item">
          <ItemCard
            :title="item.name"
            :logo-url="item.image"
            :link="item.url"
            :tags="item.tags"
            :langs="item.langs"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseHeading from "../ui/BaseHeading"
import ItemCard from "../ui/ItemCard"

export default {
  name: "ItemContainer",
  components: { BaseHeading, ItemCard },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: null,
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.item-container {
  @include page-wrapper;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: -10px;
}

.container {
  @include page-container;
  flex-direction: column;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: 10px -10px -10px -10px;
}

.list-item {
  display: flex;
  width: 33.33%;
  border: 10px solid transparent;

  @include on-medium-screen-and-down {
    width: 50%;
  }
  @include on-small-screen-and-down {
    width: 100%;
  }
}
</style>

<template>
  <div class="tag">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  padding: 3px 8px;
  border-radius: 3px;
  background-color: lighten($color-primary, 40%);
  color: $color-heading;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.7px;
}
</style>

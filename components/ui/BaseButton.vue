<template>
  <button class="btn">
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'base-button'
  }
</script>

<style lang="scss" scoped>
  $color-primary: #efd81a;

  .btn {
    background-color: $color-primary;
    border: 2px solid $color-primary;
    padding: 10px 20px;
    color: white;
    border-radius: 4px;
    font-weight: 900;
    font-size: 16px;
  }
</style>

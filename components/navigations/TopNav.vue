<template>
  <nav class="top-nav">
    <span>
      <NuxtLink to="/resources">Resources</NuxtLink>
    </span>
  </nav>
</template>

<script>
  export default {
    name: 'top-nav'
  }
</script>

<style lang="scss" scoped>
  .top-nav {
    display: flex;
  }
</style>

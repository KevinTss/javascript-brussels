<template>
  <div class="logo">
    <NuxtLink to="/">JavaScript.Brussels</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;

  a {
    display: inline-flex;
    align-items: center;
    font-weight: 900;
    font-size: 28px;
    line-height: 140%;

    @include on-medium-screen-and-down {
      font-size: 24px;
    }
    @include on-medium-screen-and-down {
      font-size: 18px;
    }
  }
}
</style>

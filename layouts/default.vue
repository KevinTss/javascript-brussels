<template>
  <div class="default-layout">
    <TheHeader />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../components/layouts/TheHeader'
import TheFooter from '../components/layouts/TheFooter'

export default {
  name: 'default-layout',
  components: {TheHeader, TheFooter}
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: $font-family;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: inherit;
    }
  }

  html, body, #__nuxt, #__layout {
    width: 100%;
    height: 100%;
  }

  .default-layout {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    main {
      display: flex;
      flex-grow: 1;
    }
  }
</style>

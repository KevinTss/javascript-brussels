<template>
  <header class="the-header">
    <div class="container">
      <Logo />
      <TopNav />
    </div>
  </header>
</template>

<script>
import Logo from "../ui/Logo"
import TopNav from "../navigations/TopNav"

export default {
  name: "TheHeader",
  components: { Logo, TopNav },
}
</script>

<style lang="scss" scoped>
.the-header {
  @include page-wrapper;
  height: 60px;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid $color-primary;

  .container {
    @include page-container;
    height: 100%;
    justify-content: space-between;
  }
}
</style>

<template>
  <header class="the-header">
    <div class="container">
      <Logo />
      <TopNav />
    </div>
  </header>
</template>

<script>
import Logo from "../ui/Logo";
import TopNav from "../navigations/TopNav";

export default {
  name: "TheHeader",
  components: { Logo, TopNav },
};
</script>

<style lang="scss" scoped>
.the-header {
  display: flex;
  height: 60px;
  position: sticky;
  top: 0;
  justify-content: center;
  padding: 0 20px;

  .container {
    display: flex;
    height: 100%;
    width: 90%;
    max-width: 1200px;
    justify-content: space-between;
  }
}
</style>

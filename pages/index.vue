<template>
  <div>
    <p>Hello World</p>
    <BaseButton>Click me</BaseButton>
  </div>
</template>

<script>
import BaseButton from "../components/ui/BaseButton";

export default {
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
p {
  color: $color-text;
}
</style>

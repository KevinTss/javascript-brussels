<template>
  <footer class="the-footer">
    <div class="container">
      <BaseText>
        &copy; JavaScript.brussels —
        <BaseLink href="mailto:info@javascript.brussels"
          >info@javascript.brussels</BaseLink
        >
      </BaseText>
    </div>
  </footer>
</template>

<script>
import BaseText from "../ui/BaseText"
import BaseLink from "../ui/BaseLink"

export default {
  name: "TheFooter",
  components: { BaseText, BaseLink },
}
</script>

<style lang="scss" scoped>
.the-footer {
  @include page-wrapper;
  background-color: $color-primary;
}

.container {
  @include page-container;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>

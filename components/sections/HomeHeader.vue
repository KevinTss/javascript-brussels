<template>
  <div class="home-header">
    <div class="container">
      <div class="left">
        <BaseImage
          :src="illustrationUrl"
          alt="product discussion illustration"
        />
      </div>
      <div class="right">
        <BaseHeading size="xl"
          >All you need to find about JavaScript in Brussels</BaseHeading
        >
        <BaseText size="xl"
          >Find tutorials, books, jobs, bootcamps and all useful resources
          shared by the community.</BaseText
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeading from "../ui/BaseHeading"
import BaseText from "../ui/BaseText"
import BaseImage from "../ui/BaseImage"

export default {
  name: "HomeHeader",
  components: { BaseHeading, BaseText, BaseImage },
  data() {
    return {
      illustrationUrl: require("../../assets/images/llustrations/discuss-product.svg"),
    }
  },
}
</script>

<style lang="scss" scoped>
.home-header {
  @include page-wrapper;
  padding-top: 50px;
  padding-bottom: 50px;

  @include on-medium-screen-and-down {
    padding-top: 0;
  }
  @include on-small-screen-and-down {
    padding-bottom: 0;
  }
}

.container {
  @include page-container;

  @include on-medium-screen-and-down {
    flex-direction: column;
  }
}

.left {
  width: 50%;

  @include on-medium-screen-and-down {
    width: 100%;
  }
}

.right {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include on-medium-screen-and-down {
    width: 100%;
  }

  > h1 {
    margin-bottom: 20px;
  }
}
</style>

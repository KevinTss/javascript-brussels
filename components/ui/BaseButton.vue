<template>
  <button :class="styleClasses">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "minimal"].includes(value);
      },
    },
  },
  computed: {
    styleClasses() {
      return {
        btn: true,
        [this.variant]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  border-style: solid;
  border-width: 2px;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 900;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.01);
  }

  &.primary {
    background-color: $color-primary;
    color: white;
    border-color: $color-primary;
  }

  &.minimal {
    background-color: transparent;
    border-color: transparent;
    color: $color-text;
  }
}
</style>

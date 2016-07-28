<template>
  <ons-back-button>
    <slot></slot>
  </ons-back-button>
</template>

<script>
  const noop = () => {};

  export default {
    ready() {
      /**
       * Override default click behavior.
       */
      this.$el.onClick = noop;
    }
  };
</script>

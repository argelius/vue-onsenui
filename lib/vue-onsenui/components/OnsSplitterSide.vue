<template>
  <ons-splitter-side
    :side="side"
    :width="width"
    :collapse="collapse ? '' : null"
    :swipeable="swipeable ? '' : null"
  >
    <slot></slot>
  </ons-splitter-side>
</template>

<script>
  export default {
    props: {
      side: {
        type: String,
        default: 'left',
        validator: (val) => (
          val == 'left' ||
          val == 'right'
        )
      },

      width: {
        type: String,
        default: '80%'
      },

      collapse: {
        type: Boolean,
        default: false
      },

      swipeable: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

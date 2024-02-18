<script setup>
  defineProps({
    shadow: {
      type: Boolean,
      default: false,
    },
  })
</script>

<template>
  <button
    class="main-button"
    :class="{
      'main-button_shadow': shadow,
    }"
  >
    <slot />
  </button>
</template>

<style scoped>
  @import 'main-button.scss';
</style>

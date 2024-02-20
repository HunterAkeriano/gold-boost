<script setup>
  defineProps({
    shadow: {
      type: Boolean,
      default: false,
    },
    arrow : {
      type: Boolean,
      default: false,
    }
  })
</script>

<template>
  <button
    class="main-button"
    :class="{
      'main-button_shadow': shadow,
      'main-button_arrow': arrow,
    }"
  >
    <slot />
  </button>
</template>

<style>
  @import 'main-button.scss';
</style>

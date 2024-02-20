<script setup>
  defineProps(['type'])
</script>

<template>
  <button
    class="main-button"
    :class="{
      'main-button_shadow': type === 'shadow',
      'main-button_arrow': type === 'arrow',
    }"
  >
    <slot />
  </button>
</template>

<style>
  @import 'main-button.scss';
</style>

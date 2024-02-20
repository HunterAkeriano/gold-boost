<script setup>
  defineProps(['href', 'type'])
</script>

<template>
  <a
    class="ui-link"
    :class="{
      'ui-link_gold': type === 'gold',
      'ui-link_white': type === 'white',
    }"
    :href="href"
  >
    <slot />
  </a>
</template>

<style scoped>
  @import 'ui-links.scss';
</style>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="wrapper">
    <component :is="route.meta.layoutComponent">
      <slot />
    </component>
  </div>
</template>

<style scoped></style>

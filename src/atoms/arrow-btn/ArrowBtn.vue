<script setup>
import SvgManager from "@/atoms/svg-manager/SvgManager.vue";

defineProps(['left'])
</script>

<template>
  <button class="arrow-btn" :class="{'arrow-btn_left': left}">
    <SvgManager :icon="'#arrow-btn'"/>
  </button>
</template>

<style scoped>
@import "arrow-btn.scss";
</style>

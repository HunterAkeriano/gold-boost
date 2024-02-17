<script setup>
  import { RouterView } from 'vue-router'
  import AppLayout from '@/templates/app-layout/AppLayout.vue'
</script>

<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<style lang="scss">
@import "@/assets/scss/base.scss";
</style>

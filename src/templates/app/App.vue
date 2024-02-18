<script setup>
  import { RouterView } from 'vue-router'
  import AppLayout from '@/templates/app-layout/AppLayout.vue'
  import IconsManager from "@/molecules/icon-manager/IconsManager.vue";
</script>

<template>
  <app-layout>
    <router-view />
  </app-layout>

  <IconsManager/>
</template>

<style lang="scss">
@import "@/assets/scss/base.scss";
</style>

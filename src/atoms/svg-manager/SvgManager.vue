<script setup>
  defineProps({
    icon: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <svg>
    <use :href="icon" />
  </svg>
</template>

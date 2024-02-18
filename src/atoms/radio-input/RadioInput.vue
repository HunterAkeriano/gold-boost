<script setup>
  defineProps(['value', 'background', 'name'])
  defineEmits(['update:modelValue'])
</script>

<template>
  <div class="radio-input" :class="{ 'radio-input_background': background }">
    <label>
      <input
        type="radio"
        :name="name"
        :value="value"
        @input="$emit('update:modelValue', $event.target.value)"
      />

      <slot />
    </label>
  </div>
</template>

<style scoped>
  @import 'radio-input.scss';
</style>

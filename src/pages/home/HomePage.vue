<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale, availableLocales } = useI18n();

const changeLanguage = (newLocale) => {
    locale.value = newLocale;
};
</script>

<template>
<h2>{{t('welcome')}}</h2>
  <button @click="changeLanguage('en')">English</button>
  <button @click="changeLanguage('ua')">Українська</button>
</template>

<style scoped>

</style>
<template>
  <div>
    <h1>{{ $t("welcome") }}</h1>
    <select v-model="currentLanguage" @change="changeLanguage">
      <option value="uz">Uzbek</option>
      <option value="ru">Russian</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"; // Импорт Vue
import i18next from "/src/i18"; // Импорт i18next из правильного пути

const currentLanguage = ref("uz");

const changeLanguage = () => {
  i18next.changeLanguage(currentLanguage.value);
};

watch(currentLanguage, (newLang) => {
  i18next.changeLanguage(newLang);
});
</script>

<style scoped>
/* Стили компонента */
</style>

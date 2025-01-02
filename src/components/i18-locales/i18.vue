<template>
  <div>
    <h1>{{ $t("welcome") }}</h1>
    <p>{{ $t("password") }}</p>
    <select v-model="currentLanguage" @change="changeLanguage" class="border border-gray-300 p-2 w-full max-w-[250px] rounded">
      <option value="uz">Uzbek</option>
      <option value="ru">Russian</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"; 
import i18next from "/src/i18"; 

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

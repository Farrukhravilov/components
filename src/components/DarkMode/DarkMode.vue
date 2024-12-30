<template>
  <button @click="toggleTheme" class="theme-toggle">
    <span v-if="isDarkMode">🌙</span>
    <!-- Иконка Луны для темной темы -->
    <span v-else>☀️</span>
    <!-- Иконка Солнца для светлой темы -->
  </button>
</template>

<script setup lang="ts">
import { useTheme } from "@/composables/useTheme"; // Импортируем useTheme

// Получаем isDarkMode и toggleTheme из useTheme
const { isDarkMode, toggleTheme } = useTheme();
</script>

<style scoped>
.theme-toggle {
  @apply p-3 rounded-full text-xl cursor-pointer transition-transform transform hover:scale-105;
}
</style>

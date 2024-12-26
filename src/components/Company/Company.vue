<template>
  <header class="bg-gray-50 p-4 shadow-md flex items-center justify-between">
    <!-- Заголовок -->
    <div>
      <h1 class="text-2xl font-bold text-gray-800">Korxona oynasi</h1>
      <p class="text-gray-500">
        Bu bo'lim sizga mijozlarni belgilangan yil bo'yicha narx va buyurtma
        soniga qarab ajratib beradi
      </p>
    </div>

    <!-- Фильтр с выпадающим списком -->
    <div class="flex items-center space-x-2">
      <select
        v-model="selectedYear"
        class="border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option v-for="year in years" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
      <button
        @click="onSearch"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 flex items-center"
      >
        <i class="fas fa-search mr-2"></i>
        <!-- Иконка поиска -->
      </button>
    </div>
  </header>
  <CompanyTable />
</template>

<script setup lang="ts">
import { ref } from "vue";
import CompanyTable from "../Сompany-Table/CompanyTable.vue";

// Список годов
const years = ref<number[]>([2022, 2023, 2024, 2025]);

// Текущий выбранный год
const selectedYear = ref<number>(2022);

// Метод поиска
const onSearch = (): void => {
  console.log("Selected year:", selectedYear.value);
  // Логика поиска или фильтрации
};
</script>

<style scoped></style>

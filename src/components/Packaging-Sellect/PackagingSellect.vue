<template>
  <div class="container mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl text-[#00000] font-bold mb-4">
      Filial hodimlari uchun kpi belgilash
    </h2>
    <div class="flex items-center justify-center">
      <div class="mb-6 border border-gray-200 p-[25px] w-full max-w-[650px]">
        <label class="block text-lg font-semibold mb-[30px]">
          Kpi hisoblansh usuli
        </label>

        <div class="flex flex-col space-y-2">
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="kpiMethod"
              value="daily"
              v-model="selectedMethod"
              class="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-500"
            />
            <span class="w-full max-w-[500px]">
              Kpi hisoblanayotganda kpiga ishlaydigan hodimning kpidan oylikga
              ishlaydigan hodim kunlig pulini ayrib hisoblash
            </span>
          </label>

          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="kpiMethod"
              value="monthly"
              v-model="selectedMethod"
              class="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-500"
            />
            <span class="w-full max-w-[500px]">
              Kpi hisoblanayotganda oylik va kpiga ishlaydigan hodimlarni pulini
              alohida hisoblash.
            </span>
          </label>
          <div class="flex items-center justify-end">
            <button
              class="mt-4 btn bg-indigo-600 text-white rounded px-4 py-2"
              @click="saveSelection"
            >
              Saqlash
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedMethod = ref<string>(""); // Хранит выбранное значение радио-кнопки

const saveSelection = () => {
  console.log("Selected KPI Method:", selectedMethod.value);
  // Здесь можно добавить логику сохранения
};
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
}
</style>

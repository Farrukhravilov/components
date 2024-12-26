<template>
  <div class="flex items-center justify-around gap-[30px] w-full pt-[20px]">
    <button
      v-for="(button, index) in buttons"
      :key="index"
      :class="[
        'border w-full max-w-[500px] p-3 flex items-center justify-center rounded-[6px] transition duration-200',
        button.color,
        selectedButton === index
          ? 'bg-opacity-70 text-white'
          : 'hover:bg-opacity-70 hover:text-white'
      ]"
      @click="setActive(index)"
    >
      {{ button.label }}
    </button>
    <button
      class="border border-blue-500 p-3 flex items-center justify-center rounded-[6px] text-blue-500 hover:bg-blue-500 transition duration-200 hover:text-[#fff]"
    >
      <i class="fas fa-redo"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Референс для выбранной кнопки
const selectedButton = ref<number | null>(null);

// Массив кнопок с их цветами и метками
const buttons = [
  { label: "Kechagi", color: "border-red-500 hover:bg-red-500" },
  { label: "rejadagi", color: "border-green-500 hover:bg-green-600" },
  { label: "oylik", color: "border-yellow-500 hover:bg-yellow-500" },
  { label: "passiv", color: "border border-gray-300 hover:bg-gray-500" },
];

// Функция для установки активной кнопки
const setActive = (index: number) => {
  selectedButton.value = index;
};
</script>

<style scoped>
.bg-opacity-70 {
  background-color: rgb(22, 163, 74);
  border: none;
}
</style>

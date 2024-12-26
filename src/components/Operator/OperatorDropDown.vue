<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        @click="toggleDropdown"
        class="inline-flex justify-between w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
      >
        {{ selectedOption.label }} <span class="ml-2">&darr;</span>
      </button>
    </div>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
    >
      <div class="py-1" role="menu">
        <div
          v-for="option in options"
          :key="option.id"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          @click="selectOption(option)"
        >
          {{ option.label }} • {{ option.count }} ta
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Option {
  id: number;
  label: string;
  count: number;
}

const isOpen = ref(false);
const selectedOption = ref<Option>({ id: 1, label: "Barchasi", count: 20 });

const options: Option[] = [
  { id: 1, label: "Barchasi", count: 20 },
  { id: 2, label: "TEST FILIAL ADMIN", count: 4 },
  { id: 3, label: "Maxmud5050", count: 20 },
  // Добавьте больше опций по необходимости
];

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: Option) => {
  selectedOption.value = option;
  isOpen.value = false;
};
</script>

<style>
/* Включите или измените стили по необходимости */
</style>

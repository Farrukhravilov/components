<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        @click="toggleDropdown"
        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {{ selectedOption || "Выберите опцию" }}
        <svg
          class="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.29 7.79a1 1 0 011.42 0L10 10.59l3.29-2.8a1 1 0 011.42 1.42l-4 3.5a1 1 0 01-1.42 0l-4-3.5a1 1 0 010-1.42z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="isOpen"
      class="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
    >
      <div class="p-2">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Поиск..."
          class="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div class="max-h-60 overflow-y-auto">
        <div
          v-for="option in filteredOptions"
          :key="option"
          @click="selectOption(option)"
          class="py-2 px-4 hover:bg-gray-100 cursor-pointer"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const options = ref(["Опция 1", "Опция 2", "Опция 3", "Опция 4"]);
const selectedOption = ref<string | null>(null);
const isOpen = ref(false);
const searchQuery = ref("");

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const filteredOptions = computed(() => {
  return options.value.filter((option) =>
    option.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const selectOption = (option: string) => {
  selectedOption.value = option;
  searchQuery.value = "";
  isOpen.value = false;
};

// Закрыть dropdown при клике вне его
document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".relative")) {
    isOpen.value = false;
  }
});
</script>

<style scoped>
/* Добавьте свои стили здесь, если необходимо */
</style>

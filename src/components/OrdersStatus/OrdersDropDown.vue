<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        type="button"
        class="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="toggleDropdown"
      >
        <span>{{ selectedItem.name }} ({{ selectedItem.count }} ta)</span>
        <svg
          class="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 10l5 5 5-5H7z"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="isOpen"
      class="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div
        class="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <template v-for="(item, index) in items" :key="index">
          <a
            href="#"
            @click.prevent="selectItem(item)"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            {{ item.name }} • {{ item.count }} ta
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Dropdown",
  setup() {
    const isOpen = ref(false);
    const items = ref([
      { name: "barchasi", count: 67 },
      { name: "TEST FILIAL ADMIN", count: 7 },
      { name: "Sarvar Sodiqov", count: 4 },
      { name: "Yuvuvchi Hodimn", count: 2 },
      { name: "Yuvish test", count: 1 },
      { name: "Maxmud5050", count: 44 },
      { name: "Anvar sifat", count: 1 },
      { name: "Iqboljon Raimjanov", count: 2 },
    ]);

    const selectedItem = ref(items.value[0]); // Выбор первого элемента по умолчанию

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const selectItem = (item: { name: string; count: number }) => {
      selectedItem.value = item; // Установка выбранного элемента
      isOpen.value = false; // Закрытие меню после выбора
    };

    return { isOpen, items, selectedItem, toggleDropdown, selectItem };
  },
});
</script>

<style scoped>
/* Добавьте стили, если нужно */
</style>

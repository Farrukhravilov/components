<template>
  <div>
    <table class="min-w-full border border-gray-300 mb-4 text-center">
      <thead>
        <tr class="">
          <th>#</th>
          <th>Mahsulot</th>
          <th>Soni</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in items"
          :key="index"
          class="hover:bg-gray-50"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }} ta</td>
          <td>
            <button @click="() => removeItem(index)" class="text-red-600">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex items-center mb-4">
      <select v-model="selectedProduct" class="border rounded px-4 py-2">
        <option
          v-for="product in products"
          :key="product.id"
          :value="product.name"
        >
          {{ product.name }}
        </option>
      </select>
      <button
        @click="addItem"
        class="ml-4 bg-blue-500 text-white rounded px-4 py-2"
      >
        <i class="fas fa-plus"></i> Qo'shish
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white shadow-md rounded-lg p-4 relative"
      >
        <button
          @click="removeItem(index)"
          class="absolute top-2 right-2 text-red-600"
        >
          <i class="fas fa-times"></i>
        </button>
        <h3 class="text-lg font-semibold">{{ item.name }}</h3>
        <div class="flex items-center justify-between">
          <input
            v-model="item.price"
            type="number"
            class="border rounded mt-2 p-4 border-gray-400 py-2 w-full"
            placeholder="Narx"
          />
          <span class="bg-gray-500 text-white p-2 mt-[9px]">s`om</span>
        </div>
        <button
          @click="confirmAction(item.name)"
          class="mt-4 bg-blue-500 text-white rounded px-4 py-2 w-full"
        >
          Yuvildi
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Данные продуктов
const products = [
  { id: 1, name: "ADIYOL 1 KISHI" },
  { id: 2, name: "ADIYOL 2 KISHI" },
  { id: 3, name: "ADIYOL 3 KISHI" },
];

// Локальное состояние
const items = ref<{ name: string; quantity: number; price: number }[]>([]);
const selectedProduct = ref(products[0].name);

// Функция для добавления продукта в таблицу
const addItem = () => {
  const existingItem = items.value.find(
    (item) => item.name === selectedProduct.value
  );
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    items.value.push({ name: selectedProduct.value, quantity: 1, price: 0 });
  }
};

// Функция для удаления продукта
const removeItem = (index: number) => {
  items.value.splice(index, 1);
};

// Подтверждение действия
const confirmAction = (productName: string) => {
  const product = items.value.find((item) => item.name === productName);
  console.log(`Confirmed price for ${product?.name}: ${product?.price}`);
};
</script>

<style scoped>
/* Стили для таблицы и карточек, если нужно */
</style>

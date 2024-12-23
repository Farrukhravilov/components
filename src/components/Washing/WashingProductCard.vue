<template>
  <div class="bg-white shadow-md rounded-lg p-4 relative">
    <button @click="removeProduct" class="absolute top-2 right-2 text-red-600">
      <i class="fas fa-times"></i>
    </button>
    <h3 class="text-lg font-semibold">{{ product.name }}</h3>
    <input
      v-model="product.price"
      type="number"
      class="border rounded mt-2 p-5 py-1 w-full"
      placeholder="Narx"
    />
    <button
      @click="confirmAction"
      class="mt-4 bg-blue-500 text-white rounded px-4 py-2 w-full"
    >
       Yuvildi
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  product: { name: string; price: number; quantity: number };
  onRemove: () => void;
}>();

// Удаление карточки
const removeProduct = () => {
  props.onRemove();
};

// Подтверждение действия (по необходимости)
const confirmAction = () => {
  console.log(
    `Confirmed price for ${props.product.name}: ${props.product.price}`
  );
};
</script>

<style scoped>
/* Стили для карточки, если нужно */
</style>

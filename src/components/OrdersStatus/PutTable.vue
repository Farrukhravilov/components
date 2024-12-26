<template>
  <div class="p-6">
    <h1 class="text-[36px] font-normal mb-1">Taxirirlash</h1>
    <p>Bu bo'limda maxsulotning malumotlari o'zgartiriladi.</p>
    <div class="mb-4 w-full">
      <h2 class="text-[32px] flex font-normal text-[#000]">Davron test</h2>
      <button
        class="w-full bg-green-500 rounded-[10px] hover:bg-green-600 flex items-center justify-center text-white p-4 border-b border-gray-300 mb-[40px]"
      >
        KVITANSIYA N#: 67
      </button>
      <h2 class="text-[26px]">ADYOL 1 KISHI</h2>
      <div class="flex gap-2">
        <div class="w-full flex items-center">
          <input
            type="number"
            class="w-full p-3 border border-gray-300 rounded"
            v-model="quantity"
            placeholder="4"
          />
          <span
            class="border border-gray-300 bg-gray-300 text-white p-3 rounded"
            >dona</span
          >
        </div>
        <div class="w-full flex items-center">
          <input
            type="number"
            class="w-full p-3 border border-gray-300 rounded"
            v-model="price"
            placeholder="25000"
          />
          <span
            class="border border-gray-300 bg-gray-300 text-white p-3 rounded"
            >s`om</span
          >
        </div>
      </div>
      <button
        class="p-3 bg-blue-500 rounded text-white w-full hover:bg-blue-600 flex items-center justify-center mt-[20px]"
      >
        olchandi
      </button>
    </div>
    <table class="table border">
      <thead class="text-[#000]">
        <tr>
          <th>#</th>
          <th>Xizmat</th>
          <th>Hajm</th>
          <th>Narx</th>
          <th>Umumiy Narx</th>
          <th>Taxrirlash</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in 8" :key="item">
          <td>1</td>
          <td>ADIYOL 1 KISHI</td>
          <td>4 dona</td>
          <td>25 000</td>
          <td>100 000</td>
          <td>test</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Реактивные переменные для ввода данных
const quantity = ref<number>(4);
const price = ref<number>(25000);
</script>

<style scoped></style>

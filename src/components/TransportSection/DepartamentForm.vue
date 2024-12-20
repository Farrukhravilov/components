<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Левая часть -->
    <div class="bg-white shadow-md rounded-lg p-6">
      <div class="mb-4">
        <label
          for="serviceType"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Xizmat turi
        </label>
        <select
          id="serviceType"
          class="w-full border p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option>ADIYOL 1 KISHI</option>
          <option>ADIYOL 2 KISHI</option>
        </select>
      </div>
      <div class="mb-4">
        <label
          for="quantity"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Sonini kiriting
        </label>
        <div class="flex items-center">
          <input
            id="quantity"
            type="number"
            placeholder="Sonini kiriting"
            class="w-full border p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="button"
            class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
          >
            <i class="fas fa-check"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Правая часть -->
    <form class="bg-white shadow-md rounded-lg p-6">
      <div class="mb-4">
        <label
          for="address"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Manzil
        </label>
        <input
          id="address"
          type="text"
          placeholder="MTS orti 1 wt Guncha-19"
          class="w-full border p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div class="flex items-center justify-between w-full gap-[30px]">
        <div class="mb-4 w-full">
          <label
            for="deliveryDate"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Topshiriladigan Sana<span class="text-red-500">*</span>
          </label>
          <input
            id="deliveryDate"
            type="date"
            class="w-full border p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div class="mb-4 w-full">
          <label
            for="notes"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Buyurtma Izohi
          </label>
          <input
            id="notes"
            type="text"
            placeholder="Buyurtma haqida izoh qoldiring"
            class="w-full border p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <!-- pri najatie ot suda knopki -->
      <div class="w-full">
        <label
          for="location"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          Lokatsiya
        </label>

        <!-- Первый блок -->
        <div
          v-if="!isSwitched"
          class="flex items-center bg-gray-200 rounded-md shadow-sm w-full"
        >
          <!-- Поле ввода -->
          <input
            id="location"
            type="text"
            placeholder="—"
            class="flex-grow w-full px-4 py-2 bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white rounded-l-md"
          />
          <!-- Кнопка с иконкой -->
          <button
            @click="toggleSwitch"
            type="button"
            class="px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-r-md flex items-center justify-center"
          >
            <i class="fas fa-pen"></i>
          </button>
        </div>

        <!-- Второй блок -->
        <div v-else class="flex items-center bg-gray-200 rounded-md shadow-sm">
          <!-- Левая кнопка с иконкой -->
          <button
            type="button"
            class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-l-md flex items-center justify-center"
          >
            <i class="fas fa-sync-alt"></i>
          </button>
          <!-- Поле ввода -->
          <input
            type="text"
            placeholder="—"
            class="flex-grow px-4 py-2 bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
          <!-- Правая кнопка с иконкой -->
          <button
            type="button"
            class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
          >
            <i class="fas fa-trash-alt"></i>
          </button>
          <!-- Обратная кнопка -->
          <button
            @click="toggleSwitch"
            type="button"
            class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center ml-2 rounded-md"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
        </div>
      </div>
      <!--  -->
      <div class="pt-[30px] pb-[30px]">
        <label class="inline-flex items-center">
          <input
            type="checkbox"
            class="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            v-model="isChecked"
          />
          <span class="ml-2">Mijoz olib ketishi</span>
        </label>
        <span v-if="isChecked" class="ml-4 text-blue-500">
          <i class="fas fa-carry-on"></i>
          <!-- Иконка Font Awesome -->
        </span>
      </div>
      <button
        type="button"
        class="w-full px-6 py-3 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
      >
        <i class="fas fa-save mr-2"></i>
        Buyurtmani Ro'yxatga olish
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
//
const isChecked = ref(false);  

function toggleCheckbox() {  
  isChecked.value = !isChecked.value;  
}
// Состояние переключения блоков
const isSwitched = ref(false);

// Функция переключения
const toggleSwitch = () => {
  isSwitched.value = !isSwitched.value;
};
</script>

<style></style>

<template>
  <div
    class="bg-white border border-red-600 shadow-lg rounded-lg p-6 transition-transform duration-300"
  >
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center justify-between gap-[40px] w-full">
        <p class="text-gray-800 font-bold">KV: {{ kv }}</p>
        <p class="text-gray-800 font-bold">{{ branchName }}</p>
        <p class="text-red-500">{{ daysRemaining }} kun</p>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center mb-1">
        <i class="fas fa-user-circle text-gray-600 mr-2"></i>
        <span class="font-bold text-[26px]">{{ userName }}</span>
      </div>

      <div class="flex flex-col items-center mb-1">
        <div class="flex items-center">
          <i class="fas fa-phone-alt text-blue-600 mr-2"></i>
          <a :href="'tel:' + phoneNumber" class="text-blue-500 text-[26px]">{{
            phoneNumber
          }}</a>
        </div>
        <div class="flex items-center">
          <i class="fas fa-phone-alt text-blue-600 mr-2"></i>
          <a :href="'tel:' + phoneNumber" class="text-blue-500 text-[19px]">{{
            phoneNumber
          }}</a>
        </div>
      </div>

      <div class="flex items-center mb-1">
        <i class="fas fa-money-bill-wave text-red-600 mr-2"></i>
        <span class="text-red-600 text-[26px]">{{ amount }} so'm</span>
      </div>
    </div>
    <div class="flex w-full">
      <input
        type="text"
        placeholder="Summa kiriting"
        class="w-full border border-gray-300 p-2 rounded"
      />
      <div class="bg-gray-300 flex items-center justify-center w-[60px]">
        <span class="bg-gray-300 text-center text-gray-400">so`m</span>
      </div>
    </div>
    <div class="flex flex-col w-full">
      <label class="text-center">
        To`lov turi <span class="text-red-600">*</span>
      </label>
      <select
        class="form-select block w-full mt-1 p-2 border border-gray-300 rounded"
      >
        <option disabled value="">Naqd</option>
        <option>test</option>
        <option>test</option>
        <option>test</option>
        <option>test</option>
      </select>
    </div>
    <div class="flex w-full items-center gap-[10px]">
      <button
        @click="confirmAction"
        class="w-full mt-[10px] bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        <i class="fas fa-check mr-2"></i>
        <!-- Иконка подтверждения -->
        Pull olish
      </button>
      <button
        @click="showModal = true"
        class="w-full mt-[10px] bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
      >
        <!-- Иконка подтверждения -->
        Kechib Yuborish
      </button>
    </div>
    <WarningModal :isVisible="showModal" @close="showModal = false"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { defineEmits } from "vue";
import WarningModal from "../Customers/WarningModal.vue";
// Данные карточки
const kv = ref(394);
const branchName = ref("TEST FILIAL ADMIN");
const daysRemaining = ref(-425);
const userName = ref("Humoyun");
const phoneNumber = ref("+998915887474");
const amount = ref("27 000");
const showModal = ref(false); 
</script>

<style scoped></style>

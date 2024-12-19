<template>
  <div
    class="bg-gray-100  border border-red-600 shadow-lg rounded-lg p-6 transition-transform duration-300"
  >
    <div class="flex justify-between items-center mb-4 border-b border-gray-300 pb-[20px] ">
      <div class="flex items-center justify-between gap-[40px] w-full">
        <p class="text-gray-800 font-bold">KVITANSIYA №: {{ kv }}</p>
        <div class="flex items-center gap-[10px]">
            <i class="fa-solid fa-truck"></i>
            <p class="text-gray-800 font-bold">{{ branchName }}</p>
        </div>
        <!-- <p class="text-red-500">{{ daysRemaining }} kun</p> -->
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div class="flex items-center mb-1">
        <i class="fas fa-user-circle text-gray-600 mr-2"></i>
        <span class="font-bold text-[26px]">{{ userName }}</span>
      </div>

      <div class="flex items-center mb-1">
        <i class="fas fa-phone-alt text-blue-600 mr-2"></i>
        <a :href="'tel:' + phoneNumber" class="text-blue-500 text-[26px]">{{
          phoneNumber
        }}</a>
      </div>

      <div class="flex items-center mb-1">
        <i class="fas fa-money-bill-wave text-red-600 mr-2"></i>
        <a :href="'tel:' + phoneNumber" class="text-blue-500 text-[19px]">{{
          phoneNumber
        }} <span class="text-[#000]">|</span></a>
      </div>
      <div class="flex items-center gap-[15px] mb-1">
        <i class="fa-solid fa-location-dot"></i>
        <span>location</span>
      </div>
      <div class="flex items-center gap-[15px] mb-1">
        <!-- history data -->
        <i class="fa-solid fa-clock-rotate-left"></i>
         <span> 23-09-2022 19:09:51</span>
      </div>
    </div>
    <button
     @click="toggleModal"
      class="w-full mt-[10px] bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
    >
      <!-- <i class="fas fa-check mr-2"></i> -->
      <!-- Иконка подтверждения -->
      Bekor qilindi
    </button>
  </div>
  <Cancellation title="Buyurtmani bekor qilish"
    :show="isModalVisible"
    content="Mijoz: Vodnik"
    :hasInput="true"
    input-label="Izoh"
    :input-required="true"
    confirm-button-text="Buyurtmani bekor qilish"
    @close="toggleModal"
    @confirm="handleConfirm"/>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Cancellation from "../Delivery/Cancellation.vue";
// Данные карточки
const kv = ref(394);
const branchName = ref("TEST FILIAL ADMIN");
const daysRemaining = ref(-425);
const userName = ref("Humoyun");
const phoneNumber = ref("+998915887474");
const amount = ref("27 000");

// Логика подтверждения

// Локальное состояние для модального окна
const isModalVisible = ref(false);

// Функция для открытия/закрытия модального окна
function toggleModal() {
  isModalVisible.value = !isModalVisible.value;
}

// Обработка подтверждения
function handleConfirm(value: string) {
  console.log('Подтверждено с введенным значением:', value);
  toggleModal();
}
</script>

<style scoped></style>

<template>
  <div
    class="bg-gray-100 border shadow-lg rounded-lg p-6 transition-transform duration-300"
  >
    <div
      class="flex justify-between items-center mb-4 border-b border-gray-300 pb-[20px]"
    >
      <div class="flex items-center justify-between gap-[40px] w-full">
        <p class="text-gray-800 font-bold">KVITANSIYA №: {{ kv }}</p>
        <div class="flex items-center gap-[10px]">
          <i class="fa-solid fa-truck"></i>
          <p class="text-gray-800 font-bold">{{ branchName }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center pb-[15px]">
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
      <div class="flex items-center gap-[15px] mb-1">
        <i class="fa-solid fa-location-dot"></i>
        <span>location</span>
      </div>
      <div class="flex items-center gap-[15px] mb-1">
        <!-- history data -->
        <i class="fa-solid fa-clock-rotate-left"></i>
        <span class="text-blue-500 font-normal text-[24px]"> test filial</span>
      </div>
      <div class="flex items-center gap-[15px] mb-1">
        <!-- history data -->
        <i class="fa-solid fa-clock-rotate-left"></i>
        <span class="font-normal text-[20px]"> mts orti 1 wt Guncha-19</span>
      </div>
      <div class="flex items-center justify-between gap-[15px] mb-1">
        <!-- history data -->
        <div class="flex items-center gap-[10px]">
          <i class="fa-solid fa-clock-rotate-left"></i>
          <span class="font-normal text-[20px]">22-07-2024</span>
        </div>
        <div class="flex items-center justify-between gap-[10px]">
          <button class="bg-blue-700 text-white rounded p-1">
            icon Qongiroq qilindi
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-between gap-[5px] border-t border-gray-300 pt-[20px]"
    >
      <button class="rounded bg-green-600 text-white p-2 w-full">
        Yakunlash
      </button>
      <button
        @click="toggleModal"
        class="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
      >
        <!-- <i class="fas fa-check mr-2"></i> -->
        <!-- Иконка подтверждения -->
        Bekor qilindi
      </button>
    </div>
    <button
      @click="openModal"
      class="w-full mt-[20px] bg-[#000] text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
    >
      <!-- <i class="fas fa-check mr-2"></i> -->
      <!-- Иконка подтверждения -->
      boshqa haydovchiga
    </button>
  </div>
  <Cancellation
    title="Buyurtmani bekor qilish"
    :show="isModalVisible"
    content="Mijoz: Vodnik"
    :hasInput="true"
    input-label="Izoh"
    :input-required="true"
    confirm-button-text="Buyurtmani bekor qilish"
    @close="toggleModal"
    @confirm="handleConfirm"
  />
  <TransferModal
    title="Boshqa haydovchiga o'tkazib yuborish"
    :is-visible="showModal"
    content="Mijoz: Vodnik"
    :has-input="true"
    select-label="Shafoyrlar"
    :options="driverOptions"
    confirm-button-text="Mijozni transfer qilish"
    @close="closeModal"
    @confirm="handleConfirmation"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Cancellation from "../Delivery/Cancellation.vue";
import TransferModal from "../Delivery/TransferModal.vue";
// Данные карточки
const kv = ref(394);
const branchName = ref("TEST FILIAL ADMIN");
const daysRemaining = ref(-425);
const userName = ref("Humoyun");
const phoneNumber = ref("+998915887474");
const amount = ref("27 000");


const showModal = ref(false);
// Логика подтверждения
// Опции для выбора
const driverOptions = ref(["hammaga", "sarvar sodiqov", "test", "test2"]);
function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
// Локальное состояние для модального окна
const isModalVisible = ref(false);

// Функция для открытия/закрытия модального окна
function toggleModal() {
  isModalVisible.value = !isModalVisible.value;
}

// Обработка подтверждения
function handleConfirm(value: string) {
  console.log("Подтверждено с введенным значением:", value);
  toggleModal();
}
</script>

<style scoped></style>

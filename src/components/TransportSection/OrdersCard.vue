<template>
  <div class="bg-white border border-red-400 rounded-lg p-4 shadow-md">
    <div
      class="flex items-center justify-between border-b border-gray-300 pb-[20px]"
    >
      <h2 class="text-lg font-semibold">
        KVITANSIYA: <span class="text-red-600">{{ invoiceNumber }}</span>
      </h2>
      <p class="text-red-700">- {{ daysLeft }} kun</p>
    </div>

    <div class="flex items-center mt-8">
      <i class="fas fa-user mr-2"></i>
      <span class="font-bold">{{ userName }}</span>
    </div>

    <div class="flex items-center justify-between mt-1">
      <div class="flex items-center">
        <i class="fas fa-phone mr-2"></i>
        <span class="text-blue-600">{{ phone }}</span>
      </div>
      <i class="fas fa-video-camera text-green-600 transform rotate-180"></i>
    </div>

    <div class="flex items-center mt-1">
      <i class="fas fa-map-marker-alt mr-2"></i>
      <span>{{ location }}</span>
    </div>

    <div class="flex items-center justify-between mt-1">
      <div class="flex items-center">
        <i class="fas fa-user-friends mr-2"></i>
        <span>{{ role }}</span>
      </div>
      <span>2 dona</span>
    </div>

    <div class="mt-2 flex items-center gap-[10px]">
      <span class="text-blue-500">
        <i class="fa-solid fa-message"></i>
      </span>
      <p class="text-blue-500">{{ additionalInfo }}</p>
    </div>

    <div class="mt-9 flex justify-between gap-[10px] w-full">
      <button
        class="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
      >
        Topshirish
      </button>
      <button
        class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        Tartiblash
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  invoiceNumber: number;
  daysLeft: number;
  userName: string;
  phone: string;
  location: string;
  role: string;
  additionalInfo: string;
}>();
</script>

<style scoped>
/* Добавьте дополнительные стили, если нужно */
</style>

<template>
  <div class="p-4">
    <h2 class="text-[#000] font-normal text-[34px]">Yuvish bo`limi</h2>
    <p class="text-[000] font-normal text-[16px]">
      Bu bo'limda mijozlar tomonidan berilgan buyurtmalarini yuvilishi haqida
      ma'lumotlar kiritiladi.
    </p>
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-[20px]"
    >
      <OrderCountCard>
        <template #title> Yuvilmaganlar soni</template>
        <template #text>162 ta </template>
      </OrderCountCard>

      <OrderCountCard>
        <template #title> Yuvilganlar soni </template>
        <template #text> 29 ta </template>
      </OrderCountCard>

      <OrderCountCard>
        <template #title>Qadoqlanganlar soni </template>
        <template #text> 54 ta </template>
      </OrderCountCard>
    </div>
    <div class="w-full mt-[40px]">
      <!-- Первый блок -->
      <div class="flex items-center bg-gray-200 rounded-md shadow-sm w-full">
        <!-- Поле ввода -->
        <input
          id="location"
          type="text"
          placeholder="Barkodni kiriting"
          class="flex-grow w-full px-4 py-2 bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white rounded-l-md"
        />
        <!-- Кнопка с иконкой -->
        <button
          type="button"
          class="px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-r-md flex items-center justify-center"
        >
          <i class="fa fa-check text-white-800"></i>
        </button>
      </div>
    </div>
    <div class="p-2">
      <h4 class="text-[32px] font-normal text-[#000]">Yuvish.</h4>
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-[20px] p-1"
      >
        <WashingCard
          v-for="item in 10"
          :invoiceNumber="245"
          :daysLeft="-818"
          userName="Мижозни узи олиб кетади 1 шт"
          phone="+998987456321"
          location="uzb"
          role="Yuvuvchi Hodimnn"
          additionalInfo="test"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import WashingCard from "../Washing/WashingCard.vue";
import OrderCountCard from "../TransportSection/OrderCountCard.vue";
</script>

<style></style>

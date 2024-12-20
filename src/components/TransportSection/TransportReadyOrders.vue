<template>
  <div class="p-4">
    <h2 class="text-[#000] font-normal text-[34px]">Tayyor buyurtmalar</h2>
    <p class="text-[000] font-normal text-[16px]">
      Bu bo`limda tayyor bo`lgan buyurtmalar mijozlarga topshiriladi
    </p>
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-[20px]"
    >
      <OrderCountCard>
        <template #title> Topshiriladiganlar soni </template>
        <template #text> 17 ta </template>
      </OrderCountCard>

      <OrderCountCard>
        <template #title> Omborda </template>
        <template #text> 5 ta </template>
      </OrderCountCard>

      <OrderCountCard>
        <template #title>Topshiriladiganlar soni </template>
        <template #text> 4 ta </template>
      </OrderCountCard>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-[50px] mt-[20px]">
        <button
          class="border bg-blue-800 p-3 text-white rounded border-purple-600 hover:bg-blue-900 transition"
        >
          Tartiblanmagan buyurtmalar
        </button>
        <button
          class="border bg-blue-800 p-3 text-white rounded border-purple-600 hover:bg-blue-900 transition"
        >
          Tartiblangan buyurtmalar
        </button>
      </div>
      <button
        class="border bg-blue-800 p-2 text-white rounded border-purple-600 hover:bg-blue-900 transition"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
    <h2>Tartiblanmagan buyurtmalar</h2>
    <div class="">
      <OrdersCard
        :invoiceNumber="245"
        :daysLeft="-818"
        userName="gg"
        phone="+998987456321"
        location="uzb"
        role="Yuvuvchi Hodimnn"
        additionalInfo="test"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderCountCard from "../TransportSection/OrderCountCard.vue";
import OrdersCard from "../TransportSection/OrdersCard.vue";
</script>

<style></style>

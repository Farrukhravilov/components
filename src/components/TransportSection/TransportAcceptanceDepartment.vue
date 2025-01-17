<template>
  <div class="p-4">
    <h2 class="text-[#000] font-normal text-[32px]">
      Buyurtma qabul qilish bo`limi
    </h2>
    <p class="text-[000] font-normal text-[24px]">
      Bu bo'limda mijozlar ro'yxatga olinadi va ular bilan ishlash amalga
      oshiriladi.
    </p>
    <!-- yakunlanmagan buyurtmalar. -->
    <div class="">
      <h2 class="text-[#000] font-normal text-[30px] pb-[20px] pt-[20px]">
        yakunlanmagan buyurtmalar
      </h2>
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-[20px]"
      >
        <TransportUserCard v-for="item in 3" />
      </div>
    </div>
    <!-- Yangi buyurtmalar. -->
    <div class="">
      <h2
        class="text-[#000] font-normal text-[30px] pb-[20px] pt-[20px] border-b border-gray-300 pb-[20px]"
      >
        Yangi buyurtmalar.
      </h2>
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-[20px]"
      >
        <NewTransportUserCard v-for="item in 12" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TransportHeader from "../TransportSection/TransportHeader.vue";
import TransportUserCard from "../TransportSection/TransportUserCard.vue";
import NewTransportUserCard from "../TransportSection/NewTransportUserCard.vue";
</script>

<style scoped></style>

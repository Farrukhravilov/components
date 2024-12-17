<template>
  <div class="p-2">
    <h2 class="text-[#000] font-normal text-[34px] tracking-[3px]">
      Qarzdorlar bo`limi
    </h2>
    <p class="text-[#000] font-normal text-[22px]">
      Bu bo'limda qarzdorlarning ma'lumotlari bo'ladi.
    </p>
  </div>
  <DebtorsHeader />
  <div class="p-2">
    <p
      class="text-[#000] font-normal text-[32px] border-t border-gray-300 pt-[20px] border-b border-gray-300 pb-[20px]"
    >
      To`lash vaqti belgilanmagan qarzlar
    </p>
  </div>
  <div
    class="grid grid-cols-[repeat(auto-fill,minmax(370px,1fr))] gap-[20px] p-2"
  >
    <UserCard v-for="item in 14" />
  </div>
  <div class="p-2">
    <p
      class="text-[#000] font-normal text-[32px] border-t border-gray-300 pt-[20px] border-b border-gray-300 pb-[20px]"
    >
      Qarzlar
    </p>
  </div>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(370px,1fr))] gap-[20px] p-2">
    <DebtorsCard v-for="item in 8" />
  </div>
</template>

<script setup>
import UserCard from "../Customers/UserCard.vue";
import DebtorsCard from "../Customers/DebtorsCard.vue";
import DebtorsHeader from "../Customers/DebtorsHeader.vue";
</script>

<style></style>

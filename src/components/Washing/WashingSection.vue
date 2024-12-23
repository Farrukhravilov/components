<template>
  <div class="p-4">
    <h2 class="text-[#000] font-normal text-[34px]">Yuvish bo`limi</h2>
    <p class="text-[000] font-normal text-[16px]">
      Bu bo'limda mijozlar tomonidan berilgan buyurtmalarini yuvilishi haqida
      ma'lumotlar kiritiladi.
    </p>
    <WashingHeader />
    <WashingTable :products="products" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <WashingProductCard
        v-for="(item, index) in items"
        :key="index"
        :product="{
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        }"
        :onRemove="() => removeItem(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import WashingHeader from "../Washing/WashingHeader.vue";
import WashingTable from "../Washing/WashingTable.vue";
import WashingProductCard from "../Washing/WashingProductCard.vue";
</script>

<style></style>

<template>
  <div class="p-4">
    <div class="pb-[20px]">
      <h2 class="font-normal text-[#000] text-[42px]">
        Olib kelishdagi buyurtmalar
      </h2>
      <p class="font-normal text-[#000] text-[20px]">
        Bu bo'limda mijozlardan ro'yxatga olingan buyurtmalar ustida amaliyotlar
        bajariladi.
      </p>
    </div>
    <div class="pb-[20px]">
      <DeliveryTable :columns="columns" :data="data" />
    </div>
    <div class="">
      <h4 class="font-normal text-[#000] text-[30px]">
        Yakunlanmagan buyurtmalar.
      </h4>
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-[20px] p-2"
      >
        <DeliveryUserCard v-for="item in 10" />
      </div>
    </div>
    <!-- yangi buyurtmalar -->
    <div class="">
      <h4 class="font-normal text-[#000] text-[30px] pb-[20px]">Yangi buyurtmalar</h4>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-[20px] p-2">
          <NewDeliveryUserCard v-for="item in 10" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DeliveryUserCard from "../Delivery/DeliveryUserCard.vue";
import DeliveryTable from "../Delivery/DeliveryTable.vue";
import NewDeliveryUserCard from "../Delivery/NewDeliveryUserCard.vue";

const columns = ref(["T/r", "Xodim", "Buyurtmalar", "Olib kelish jarayonida"]);
const data = ref([
  [1, "Hamma", "6 dona", "0 dona"],
  [2, "TEST FILIAL ADMIN", "1 dona", "0 dona"],
  [3, "Sarvar Sodiqov", "13 dona", "13 dona"],
  [4, "Anvar sifat", "2 dona", "0 dona"],
  [5, "AZAMAT", "10 dona", "0 dona"],
]);
</script>

<style></style>

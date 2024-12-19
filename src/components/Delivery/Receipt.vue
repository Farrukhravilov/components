<template>
  <div class="container mx-auto p-4">
    <h1 class="text-[34px] font-bold mb-1">KvitanSiya <span class="text-red-600" >№184 </span> Chegirmalari</h1>
    <p class="mb-4 text-[#000] font-normal text-[23px]">
      Bu bo'limda mijozlardan ro'yhatga olingan buyurtmalarga chegirmalar
      belgilanadi.
    </p>
    <table class="min-w-full bg-white border border-gray-300 text-center">
      <thead>
        <tr class="bg-gray-100">
          <th>T/r</th>
          <th>Xizmat turi</th>
          <th>Xizmat narx</th>
          <th>Chegirma summa</th>
          <th><i class="fa-solid fa-pen-to-square"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in 5"
          class="hover:bg-gray-50"
        >
          <td >1</td>
          <td >
            Adyol 1 Kishi
          </td>
          <td >60 000 so`m</td>
          <td >
            <input type="number" class="border border-gray-300 w-[90%] p-1" >
          </td>
          <td class="py-2">
            <button class="bg-blue-500 text-white rounded p-3">
                <i class="fa-solid fa-pen-to-square"></i>
              <!-- Replace with your desired icon -->
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Discount {
  serviceType: string;
  price: string;
  discountAmount: number;
}

</script>

<style scoped>
.icon-pencil {
  width: 16px;
  height: 16px;
  fill: white; /* Change as needed */
}
</style>

<template>
  <div class="p-6 w-full">
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <div
        class="flex w-full items-center justify-between border-b border-gray-200"
      >
        <h1 class="text-[24px] tracking-[3px] font-semibold mb-4">
          Ko'rsatkichlar
        </h1>
        <div class="flex items-center gap-[10px]">
          <button class="border border-blue-600 p-2 rounded-[6px]">
            shu kun
          </button>
          <button class="border border-blue-600 p-2 rounded-[6px]">
            shu joy
          </button>
        </div>
      </div>
      <label class="block mb-2 text-[#000]">Dan-gacha tanlash</label>
      <div class="flex items-center mb-4 w-full">
        <input
          type="date"
          v-model="startDate"
          class="border border-gray-300 rounded-lg p-2 mr-2 w-full"
        />
        <input
          type="date"
          v-model="endDate"
          class="border border-gray-300 rounded-lg p-2 w-full"
        />
        <button
          @click="search"
          class="bg-blue-500 text-white rounded-[3px] px-4 py-2 hover:bg-blue-600"
        >
          Qidirish
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const startDate = ref<string>("");
const endDate = ref<string>("");

const search = () => {
  console.log("Selected dates:", startDate.value, endDate.value);
};
</script>

<style>
/* Add any additional styles if necessary */
</style>

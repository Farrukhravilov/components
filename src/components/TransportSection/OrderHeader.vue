<template>
  <div class="flex items-center justify-between pb-[40px]">
    <h2 class="text-[32px] text-red-500 font-normal">
      Tartiblanmagan buyurtmalar
    </h2>
    <div class="flex items-center gap-[20px]">
      <OrdersDropDown />
      <div class="relative">
        <button class="bg-gray-500 p-3 rounded" @click="handleToggleLine">
          <i class="fas fa-video-camera text-white transform rotate-180"></i>
          <div
            v-if="lineVisible"
            class="absolute left-0 right-0 transform rotate-45 top-[23px] h-1 w-[45px] bg-red-500"
          ></div>
        </button>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import OrdersDropDown from "../OrdersStatus/OrdersDropDown.vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  lineVisible: boolean;
}>();

const emit = defineEmits<{
  (e: "toggle-line"): void;
}>();

const handleToggleLine = () => {
  emit("toggle-line");
};
</script>

<style></style>

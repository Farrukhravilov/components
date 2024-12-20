<template>
  <div class="">
    <div class="flex items-center justify-center">
      <div
        class="flex  w-full items-center space-x-2 bg-white rounded-[12px] border border-gray-300 mt-[30px] mb-[30px] shadow-lg p-2"
      >
        <span class="text-gray-400">
          <i class="fas fa-search"></i>
        </span>
        <input
          type="text"
          placeholder="Микоз иаллаш..."
          v-model="searchTerm"
          class="flex-1 p-2 outline-none rounded-full bg-transparent"
        />
      </div>
    </div>
    <TransportForm/>
  </div>
</template>

<script setup lang="ts">
import TransportForm from "../TransportSection/TransportForm.vue";

</script>

<style></style>

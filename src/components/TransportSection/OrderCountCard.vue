<template>
  <div class="bg-white p-4 rounded-lg shadow-md flex flex-col h-[20vh] items-center justify-center">
    <div class="text-[30px]">
        <slot name="title"></slot>
    </div>
    <div class="text-green-500 font-bold text-2xl">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps();
</script>

<style scoped>
/* Add styles if necessary */
</style>

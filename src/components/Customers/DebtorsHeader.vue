<template>
  <div class="flex items-center gap-[20px] p-4">
    <input
      type="number"
      class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    />
    <input
      type="text"
      placeholder="Telefon raqam, ism"
      class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    />
    <select
      class="form-select block w-full mt-1 p-2 border border-gray-300 rounded"
    >
      <option disabled value="">Tanlang</option>
      <option>test</option>
      <option>test</option>
      <option>test</option>
      <option>test</option>
    </select>
    <div class="flex items-center gap-[20px] mr-[10px] ">
      <button class="w-[60px] h-[50px] rounded-[8px] bg-red-500  text-[#fff] flex items-center justify-center"  ><i class="fas fa-times"></i></button>
      <button class="w-[60px] h-[50px] rounded-[8px] bg-blue-600 text-[#fff] flex items-center justify-center "  ><i class="fas fa-check"></i></button>
    </div>
  </div>
</template>

<script setup>
</script>

<style></style>

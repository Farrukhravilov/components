<template>
  <div class="flex items-center flex-col gap-[15px]">
    <h2
      class="text-[32px] tracking-[3px] text-[#000] w-full pb-[20px] font-normal border-b border-gray-200"
    >
      Hisobotlar bo`limi
    </h2>
    <ReportsDataItem />
    <div class="flex space-x-4 items-center justify-center w-full">
      <button
        class="bg-blue-600 text-white p-4 rounded-lg w-[32%] transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      >
        Kirim
        <div class="text-[30px]">0 so'm</div>
      </button>

      <button
        class="bg-rose-600 text-white p-4 rounded-lg w-[32%] transition duration-300 ease-in-out transform hover:bg-red-700 hover:scale-105"
      >
        Chiqim
        <div class="text-[30px]">0 so'm</div>
      </button>

      <button
        class="bg-red-600 text-white p-4 rounded-lg w-[32%] transition duration-300 ease-in-out transform hover:bg-red-700 hover:scale-105"
      >
        Foyda
        <div class="text-[30px]">0 so'm</div>
      </button>
    </div>
    <ReportsGlobal title="Bir Martalik Chiqimlar"/>
    <ReportsMainTable/>
    <ReportsGlobal title="Berilgan maoshlar"/>
  </div>
</template>

<script setup lang="ts">
import ReportsMainTable from "../reports-main-table/ReportsMainTable.vue";
import ReportsDataItem from "../reports-data-item/ReportsDataItem.vue";
import ReportsGlobal from "../reports-table-global/ReportsGlobal.vue";
</script>

<style></style>

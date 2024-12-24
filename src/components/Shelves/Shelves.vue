<template>
  <div class="p-4">
    <div class="border-b border-gray-300 pb-[20px] pt-[20px]">
      <h2 class="text-[#000] font-normal text-[35px]">Tokchalar bo`limi</h2>
      <p class="text-[000] font-normal text-[16px]">
        Bu bo`limda qurigan mahsulotlar tokcha (stylaj) larda saqlanadi
      </p>
    </div>
  </div>
  <ShelvesTable />
  <!--  -->
  <div
    class="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-[20px] mt-[40px] pl-[15px] pr-[15px] p-1"
  >
    <ShelvesInfoCard v-for="item in 6" />
  </div>
</template>

<script setup lang="ts">
import ShelvesTable from "../Shelves/ShelvesTable.vue";
import ShelvesInfoCard from "../Shelves/ShelvesInfoCard.vue";
</script>

<style scoped></style>

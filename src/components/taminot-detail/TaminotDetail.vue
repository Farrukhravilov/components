<template>
  <div class="flex gap-[10px]">
    <TaminotDetailLeft />
    <!-- <TaminotTableHeader /> -->
    <TaminotTable />
  </div>
</template>

<script setup lang="ts">
import TaminotTable from "../taminot-table/TaminotTable.vue";
import TaminotDetailLeft from "../taminot-detail-left/TaminotDetailLeft.vue";
</script>

<style lang="scss" scoped></style>

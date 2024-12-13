<template>
  <div class="flex gap-[10px] w-full border border-[#015812] w-[69%] rounded-[10px] h-[84vh] max-1100:w-full">
    <div class="bg-white w-full p-6 rounded-lg">
      <TaminotTableHeader />
      <TaminotTableMain />
    </div>
  </div>
</template>

<script>
import TaminotTableHeader from "../taminot-table-header/TaminotTableHeader.vue";
import TaminotTableMain from "../taminot-table-main/TaminotTableMain.vue";
export default {
  components: {
    TaminotTableHeader,
    TaminotTableMain,
  },
};
</script>

<style lang="scss" scoped></style>

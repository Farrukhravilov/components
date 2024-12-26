<template>
  <div
    class="flex flex-col gap-[20px] w-[30%] border border-[#015812] rounded-[10px] h-[84vh] max-1100:hidden"
  >
    <div class="flex flex-col">
      <TaminotHeader />
      <div class="overflow-y-auto max-h-[580px] max-1165:max-h-[500px]">
        <div
          class="flex flex-col gap-[20px] items-center justify-center mr-[20px] ml-[20px]"
        >
          <TaminotCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TaminotHeader from "../taminot-header/TaminotHeader.vue";
import TaminotCard from "../taminot-main/TaminotCard.vue";
// import TaminotDetail from "../taminot-detail/TaminotDetail.vue";
</script>

<style lang="scss" scoped></style>

<template>
  <div class="border ml-[20px] mt-[10px] border-[#015812] rounded-[8px] w-[97%] h-[84vh]">
    <TaminotHeader />
    <div class="grid grid-cols-[repeat(auto-fill,minmax(390px,1fr))] gap-[20px] pl-[25px] pr-[15px] pt-[20px]">
      <TaminotCard v-for="item in 6" />
    </div>
  </div>
</template>

<script>
import TaminotHeader from "../taminot-header/TaminotHeader.vue";
import TaminotCard from "../taminot-main/TaminotCard.vue";
export default {
  components: {
    TaminotHeader,
    TaminotCard
  },
};
</script>

<style lang="scss" scoped></style>

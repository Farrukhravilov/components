<template>
  <div class="w-full p-[20px]">
    <h2 class="text-[32px] text-[#00000] font-normal tracking-[3px]">
      Qo'ng'iroqlar ro`yxati
    </h2>
    <Buttons />
  </div>
  <!-- KECHAGI BUTTON DI TABLE -->
  <!-- <YesturdayTable/> -->
  <!-- rejadagi button di table -->
  <!-- <PlansTable /> -->
  <!-- oylik buttin di table -->
  <!-- <Monthly/> -->
  <!-- passive -->
  <!-- <Passive/> -->
   <!-- tarix table -->
    <History/>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import History from "../Operator/History.vue";
import PlansTable from "../Operator/PlansTable.vue";
import Passive from "../Operator/Passive.vue";
import YesturdayTable from "../Operator/YesturdayTable.vue";
import Buttons from "../Operator/Buttons.vue";
import Monthly from "../Operator/Monthly.vue";
</script>

<style></style>

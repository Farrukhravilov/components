<template>
  <div class="w-full">
    <div class="p-[25px] flex items-center justify-between">
      <h2 class="text-blue-700 font-normal">barchasi</h2>
      <div class="flex items-center justify-center w-full gap-[20px]">
        <button
          class="font-normal text-[24px] tracking-[2px] border rounded-[8px] bg-red-600 p-2 text-[#fff] w-full max-w-[130px] flex items-center justify-center gap-[10px]"
        >
          <i class="fas fa-phone-alt"></i> 34 ta
        </button>
        <button
          class="font-normal text-[24px] tracking-[2px] border rounded-[8px] bg-yellow-400 p-2 text-[#fff] w-full max-w-[130px] flex items-center justify-center gap-[10px]"
        >
          <i class="fas fa-phone-alt"></i> 0 ta
        </button>
        <button
          class="font-normal text-[24px] tracking-[2px] border rounded-[8px] bg-green-600 p-2 text-[#fff] w-full max-w-[130px] flex items-center justify-center gap-[10px]"
        >
          <i class="fas fa-phone-alt"></i> 0 ta
        </button>
      </div>
      <OperatorDropDown />
    </div>
    <div class="flex flex-col items-center justify-center w-full">
      <div class="w-full max-w-[1800px] flex">
        <div class="overflow-x-auto w-full">
          <table class="table border w-full">
            <thead>
              <tr class="bg-blue-300">
                <th>N°</th>
                <th>Xodim</th>
                <th>Telefon</th>
                <th>Sana</th>
                <th>Vaqt</th>
                <th></th>
                <th>Izoh</th>
                <th>Operator</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tableData" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.xodim }}</td>
                <td class="text-blue-600">{{ item.telefon }}</td>
                <td>
                  <span class="badge badge-error text-[#fff]">{{
                    item.sana
                  }}</span>
                </td>
                <td>
                  <span class="badge badge-error text-[#fff]">{{
                    item.vaqt
                  }}</span>
                </td>
                <td><i class="fas fa-phone-alt"></i></td>
                <td>
                  <button class="btn btn-outline">{{ item.izoh }}</button>
                </td>
                <td>{{ item.operator }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import OperatorDropDown from "../Operator/OperatorDropDown.vue";
import Pagination from "../Operator/Pagination.vue";

const tableData = ref([
  {
    xodim: "feewefw",
    telefon: "+998975871313",
    sana: "-739631 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "Anvarjonefw",
    telefon: "+998975891456",
    sana: "-739631 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "Test nurisolm",
    telefon: "+9983699638523",
    sana: "-739631 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "test davron",
    telefon: "+998894671354",
    sana: "-739631 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "weffew",
    telefon: "+998312654879",
    sana: "-739631 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "feqwewf",
    telefon: "+998789658778",
    sana: "-739631 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "cwewf",
    telefon: "+998547983535",
    sana: "-739631 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "ewv",
    telefon: "+998789743636",
    sana: "-739631 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "egr",
    telefon: "+998559997878",
    sana: "-739631 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "Alijon ggt",
    telefon: "+998985594478",
    sana: "-10 kun",
    vaqt: "17:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "yangi test",
    telefon: "+998679684646",
    sana: "-10 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "Abdulhalim",
    telefon: "+998907772600",
    sana: "-10 kun",
    vaqt: "12:15:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "Ismoiljon",
    telefon: "+998973336696",
    sana: "-10 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "yana 1 test",
    telefon: "+9988467797",
    sana: "-10 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
  {
    xodim: "Saidjonn",
    telefon: "+998978741010",
    sana: "-10 kun",
    vaqt: "00:00:00",
    izoh: "No malum",
    operator: "No malum",
  },
]);

</script>

<style scoped>
/* Add any additional custom styles here */
.active {  
    border: 2px solid #fff; /* Пример оформления для активного состояния */  
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Пример тени */  
}
</style>

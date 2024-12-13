<template>
  <div class="flex flex-col mx-auto w-full">
    <h2
      class="text-[42px] mx-auto p-[25px] text-[#000] font-normal tracking-[3px] pb-[20px] border-b border-gray-200"
    >
      Kassa chiqimlar bo`limi
    </h2>
    <div class="w-full mx-auto">
      <ExpenceTableTop />
      <!-- <ExpenceTableBottom /> -->
      <div class="overflow-x-auto w-full max-w-[1505px] mx-auto">
        <h1 class="text-[32px] mt-[20px] mb-[20px] text-[#000] font-normal tracking-[3px]" >Maosh</h1>
        <table class="table w-full">
          <thead>
            <tr>
              <th class="border border-gray-200 text-center">#</th>
              <th class="border border-gray-200 text-center">Xodim ismi</th>
              <th class="border border-gray-200 text-center">Maosh</th>
              <th class="border border-gray-200 text-center opacity-[0%] ">Aksiyalar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employee, index) in employees" :key="index">
              <td class="border border-gray-200">
                <span class="text=center flex items-center justify-center">
                  {{ index + 1 }}</span
                >
              </td>
              <td class="border border-gray-200">
                <span class="text=center flex items-center justify-center">{{
                  employee.name
                }}</span>
              </td>
              <td class="border border-gray-200">
                <span class="text=center flex items-center justify-between"
                  >{{ employee.salary }}
                  <div class="flex items-center gap-[20px] justify-end">
                    <button class="btn btn-square btn-outline">👁️</button>
                    <button class="btn btn-square btn-outline">✏️</button>
                  </div>
                </span>
              </td>
              <td>
                <div class="flex space-x-2 items-center justify-center">
                  <button class="btn btn-primary">To‘lash</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ExpenceTableBottom from "../expence-table-bottom/ExpenceTableBottom.vue";
import TaminotTableMain from "../taminot-table-main/TaminotTableMain.vue";
import ExpenceTableTop from "../expense-table-top/ExpenceTableTop.vue";
export default {
  components: {
    ExpenceTableTop,
  },
  data() {
    return {
      employees: [
        { name: "TEST FILIAL ADMIN", salary: "0 so'm" },
        { name: "Sarvar Sodiqov", salary: "0 so'm" },
        { name: "Tayorlov", salary: "0 so'm" },
        { name: "Yuvuvchi Hodimn", salary: "0 so'm" },
        { name: "Kogon filial", salary: "0 so'm" },
        { name: "Yusufjon", salary: "0 so'm" },
        { name: "Operator", salary: "24 000 so'm" },
        { name: "Yuvish test", salary: "0 so'm" },
        { name: "Filial opeeator", salary: "0 so'm" },
      ],
    };
  },
};
</script>

<style></style>

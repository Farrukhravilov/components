<script lang="ts">
import { defineComponent } from "vue";
import CustomersPagination from "../Customers/CustomersPagination.vue";
export default defineComponent({
  components: {
    CustomersPagination,
  },
});
</script>

<template>
  <div class="p-4">
    <h2 class="font-normal text-[#000] text-[35px]">Barcha mijozlar</h2>
    <p class="font-normal text-[#000] text-[22px]">
      Bu bo'limda barcha mijozlarning malumotlari saqlanadi.
    </p>
    <div class="flex items-center gap-[20px] mt-[40px]">
      <button
        class="bg-green-500 text-[#fff] w-full max-w-[500px] p-3 flex items-center justify-center rounded-[6px]"
      >
        Yangi Mijoz qo`shish
      </button>
      <button
        class="w-full text-[#fff] bg-blue-500 max-w-[500px] p-3 flex items-center justify-center rounded-[6px]"
      >
        Barchaga SMS jo`natish
      </button>
      <button
        class="border border-yellow-500 w-full max-w-[500px] p-3 flex items-center justify-center rounded-[6px]"
      >
        Excel
      </button>
    </div>
    <!--  -->
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-[60px] justify-between p-4 rounded">
          <div class="flex items-center gap-[20px] w-full">
            <div class="flex w-full max-w-[450px]">
              <div
                class="border flex items-center bg-gray-300 justify-center border-gray-300 rounded h-[40px] w-[50px]"
              >
                <span class="text-[#000]">0</span>
              </div>
              <div
                class="bg-gray-300 w-[50px] h-[40px] border-l rounded border-gray-200"
              ></div>
              <select class="border border-gray-300 rounded p-2 w-full">
                <option>50</option>
                <option>20</option>
                <option>100</option>
              </select>
              <div
                class="bg-gray-300 w-[80px] flex items-center justify-center h-[40px]"
              >
                <span class="text-[#000]">Ta</span>
              </div>
            </div>
          </div>
          <CustomersPagination/>
        </div>
        <button
            class="bg-blue-600 text-white rounded-full p-3 flex items-center justify-center"
            @click="showModal"
          >
            <i class="fas fa-filter"></i>
        </button>
    </div>
    <!--  -->
  </div>
</template>

<style></style>

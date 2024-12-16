<template>
  <div class="container mx-auto p-6 bg-white shadow rounded-lg">
    <h1 class="text-[32px] font-normal tracking-[3px] mb-4">
      Qo`ngi`roqlar hisoboti
    </h1>
    <p class="text-gray-600 text-[20px] mb-4">
      Bu bo'limda barcha qo`ng`iroqlar hisobotlari saqlanadi.
    </p>
    <div class="flex gap-[10px]">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :class="[
          'border w-full max-w-[500px] p-3 flex items-center justify-center rounded-[6px] transition duration-200',
          button.color,
          selectedButton === index
            ? 'bg-opacity-70 text-white'
            : 'hover:bg-opacity-70 hover:text-white',
        ]"
        @click="setActive(index)"
      >
        {{ button.label }}
      </button>
    </div>
    <div class="flex items-center justify-between p-4 rounded">
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
        <!-- pagination -->
        <Pagination />
      </div>

      <button
        class="bg-blue-600 text-white rounded-full p-3 flex items-center justify-center"
        @click="showModal"
      >
        <i class="fas fa-filter"></i>
      </button>
    </div>
    <div class="flex items-center justify-center mb-[10px] mt-[10px]">
      <button
      :class="[
        'border border-green-500 w-full max-w-[400px] p-3 flex items-center justify-center rounded-[6px] transition duration-200',
        isActive ? 'bg-green-600 text-white' : 'hover:bg-green-600 hover:text-white'
      ]"
      @click="toggleActive"
      >
        Filtirlangan malumotlar
      </button>
    </div>
    <div class="overflow-x-auto">
      <table class="table border w-full text-center">
        <thead>
          <tr>
            <th>N°</th>
            <th>KV №</th>
            <th>Mijoz</th>
            <th>Operator</th>
            <th>Qo`ng`iroq izoh</th>
            <th>Qo`ng`iroq natijasi</th>
            <th>Gaplashilgan sana</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>asdasd</td>
            <td>asdasd</td>
            <td>asdasd</td>
            <td>
              <span class="badge badge-error text-[#fff]">asdasd</span>
            </td>
            <td>
              <span class="badge badge-error text-[#fff]">asdasd</span>
            </td>
            <td><i class="fas fa-phone-alt"></i></td>
            <td>
              <p>asdasd</p>
            </td>
            <td>asdasd</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Pagination from "../Pagination/Pagination.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ButtonGroup",
  setup() {
    const selectedButton = ref<number | null>(null);

    const buttons = [
      { label: "Qayta qongiroqa", color: "border-red-500 hover:bg-red-500" },
      { label: "6 oyliklar", color: "border-green-500 hover:bg-green-600" },
      {
        label: "rejadagi qo‘ng‘iroqlar",
        color: "border-yellow-500 hover:bg-yellow-500",
      },
    ];

    const setActive = (index: number) => {
      selectedButton.value = index;
    };
    const isActive = ref(false);

    const toggleActive = () => {
      isActive.value = !isActive.value;
    };
    return {
      buttons,
      selectedButton,
      setActive,
      isActive,
      toggleActive,
    };
  },
});
</script>

<style scoped>
/* Add any additional styles here if necessary */
.bg-opacity-70 {
  background-color: rgb(22, 163, 74);
  border: none;
}
</style>

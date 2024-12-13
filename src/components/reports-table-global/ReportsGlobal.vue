<template>
  <div class="p-4 w-full">
    <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
    <div class="flex items-center justify-between bg-white p-4 rounded shadow">
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
        <div class="flex items-center">
          <button class="bg-gray-200 hover:bg-gray-300 rounded p-2">
            <i class="fas fa-angle-double-left"></i>
          </button>
          <button class="bg-gray-200 hover:bg-gray-300 rounded p-2 mx-1">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="bg-gray-200 hover:bg-gray-300 rounded p-2 mx-1">
            <i class="fas fa-chevron-right"></i>
          </button>
          <button class="bg-gray-200 hover:bg-gray-300 rounded p-2">
            <i class="fas fa-angle-double-right"></i>
          </button>
        </div>
      </div>

      <button
        class="bg-blue-600 text-white rounded-full p-3 flex items-center justify-center"
        @click="showModal"
      >
        <i class="fas fa-filter"></i>
      </button>
    </div>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Ism</th>
            <th>Izoh</th>
            <th>Sana</th>
            <th>Xodim</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-red-100">
            <td>1</td>
            <td>Jami:</td>
            <td></td>
            <td>0 so'm</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <ReportsFilterModal
    :isVisible="isModalVisible"
    @close="closeModal"
    @apply-filters="handleFilters"
  />
</template>

<script>
import ReportsFilterModal from "../reports-filter-modal/ReportsFilterModal.vue";
export default {
  name: "ReportsGlobal",
  props: {
    title: {
      type: String,
      default: "Table Title",
    },
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  component: {
    ReportsFilterModal,
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    handleFilters(filters) {
      console.log("Applied Filters:", filters);
    },
  },
};
</script>

<style scoped></style>

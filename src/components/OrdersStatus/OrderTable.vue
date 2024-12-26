<template>
  <div class="p-4">
    <div class="flex items-center justify-end gap-[20px] pb-[40px]">
      <button
        @click="openModal"
        class="bg-blue-600 text-white rounded-full p-3 flex items-center justify-center"
      >
        <i class="fas fa-filter"></i>
      </button>
      <OrdersDropDown />
      <select class="border p-2">
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="150">150</option>
        <option value="200">200</option>
      </select>
    </div>
    <table class="w-full border-collapse border">
      <thead>
        <tr>
          <th>№</th>
          <th>Toshirish muddati</th>
          <th>Mijoz</th>
          <th>Manzil</th>
          <th>Izoh</th>
          <th>Jami mahsulot</th>
          <th>Status</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in data"
          :key="index"
          class="bg-pink-200 hover:bg-pink-300"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ item.duration }}</td>
          <td class="flex flex-col">
            {{ item.client }}
            <span class="text-blue-600">+998907872387</span>
          </td>
          <td>{{ item.address }}</td>
          <td>{{ item.note }}</td>
          <td>{{ item.total }}</td>
          <td>{{ item.status }}</td>
          <td class="border px-4 py-2 flex space-x-1">
            <button class="bg-green-500 text-white p-3 rounded">
              <i class="fas fa-eye"></i>
            </button>
            <button
              @click="deleteItem(index)"
              class="bg-red-500 text-white p-3 rounded"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pt-[20px]">
      <OrdersPagination />
    </div>
    <FilterModal :isOpen="isModalOpen" :closeModal="closeModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import OrdersPagination from "../OrdersStatus/OrdersPagination.vue";
import OrdersDropDown from "../OrdersStatus/OrdersDropDown.vue";
import FilterModal from "../OrdersStatus/FilterModal.vue";

// Интерфейс для элементов данных
interface Item {
  duration: string;
  client: string;
  address: string;
  note: string;
  total: string;
  status: string;
}

// Данные таблицы
const data = ref<Item[]>([
  {
    duration: "-1107 kun",
    client: "test dawron",
    address: "fwe (_) ",
    note: "",
    total: "3 ta",
    status: "qayta. quridi",
  },
  {
    duration: "-1106 kun",
    client: "Test Saygak 2",
    address: "+998913253395",
    note: "huvdfg (opvfigibh)",
    total: "1 ta",
    status: "qadoqlandi",
  },
  {
    duration: "-1096 kun",
    client: "Saidjon",
    address: "+998934506457",
    note: "Buxoro (_) ",
    total: "2 ta",
    status: "qadoqlandi",
  },
  {
    duration: "-1093 kun",
    client: "Test Saygak 2",
    address: "+998913253395",
    note: "huvdfg (opvfigibh)",
    total: "1 ta",
    status: "qadoqlandi",
  },
]);

// Состояния модального окна
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

// Удаление элемента
const deleteItem = (index: number) => {
  if (confirm("Are you sure you want to delete this item?")) {
    data.value.splice(index, 1);
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}

tbody tr:hover {
  background-color: #f9f9f9;
}
</style>

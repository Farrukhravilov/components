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
        <option value="">20</option>
        <option value="">50</option>
        <option value="">150</option>
        <option value="">200</option>
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
            <!-- <button @click="editItem(index)" class="bg-blue-500 text-white p-1 rounded">  
                <i class="fas fa-edit"></i>  
              </button>   -->
            <button class="bg-green-500 text-white p-3 rounded">
              <i class="fas fa-eye"></i>
            </button>
            <button
              @click="deleteItem(index)"
              class="bg-red-500 text-white p-3 rounded"
            >
              <i class="fas fa-trash"></i>
            </button>
            <!-- <button class="bg-purple-500 text-white p-1 rounded" @click="refreshItem(index)">  
                <i class="fas fa-sync-alt"></i>  
              </button>   -->
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

<script lang="ts">
import { defineComponent, ref } from "vue";
import OrdersPagination from "../OrdersStatus/OrdersPagination.vue";
import OrdersDropDown from "../OrdersStatus/OrdersDropDown.vue";
import FilterModal from "../OrdersStatus/FilterModal.vue";
interface Item {
  duration: string;
  client: string;
  address: string;
  note: string;
  total: string;
  status: string;
  id: number;
  name: string;
  details: string;
}

export default defineComponent({
  name: "DataTable",
  setup() {
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
      {
        duration: "-1086 kun",
        client: "test ggg",
        address: "dw (_) ",
        note: "",
        total: "1 ta",
        status: "qadoqlandi",
      },
      {
        duration: "-1085 kun",
        client: "test ggg",
        address: "dw (_) ",
        note: "",
        total: "1 ta",
        status: "qadoqlandi",
      },
      {
        duration: "-1079 kun",
        client: "Ismoiljon",
        address: "+998937368696",
        note: "Sarmazor mfy (yer usti)",
        total: "2 ta",
        status: "qadoqlandi",
      },
      {
        duration: "-1078 kun",
        client: "Saygak uchun mijoz",
        address: "+998912345798",
        note: "w (_)",
        total: "1 ta",
        status: "qadoqlandi",
      },
      {
        duration: "-1076 kun",
        client: "test",
        address: "qwc (qwxqw)",
        note: "",
        total: "4 ta",
        status: "qadoqlandi",
      },
      {
        duration: "-933 kun",
        client: "Azizbek",
        address: "+998908887766",
        note: "Margilon (Akvapark yonida)",
        total: "3 ta",
        status: "quridi",
      },
      {
        duration: "-119 kun",
        client: "Faxriddin",
        address: "+998914136100",
        note: "Choshtepa (Masjid)",
        total: "5 ta",
        status: "quridi",
      },
    ]);
    const editItem = (index: number) => {
      console.log("Editing item at index:", index);
    };

    const deleteItem = (index: number) => {
      if (confirm("Are you sure you want to delete this item?")) {
        data.value.splice(index, 1);
      }
    };

    const viewItem = (item: Item) => {
      console.log("Viewing item:", item);
    };

    const refreshItem = (index: number) => {
      console.log("Refreshing item at index:", index);
    };
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };
    const openIndex = ref<number | null>(null);

    // Переключение видимости строки
    function toggleRow(index: number) {
      openIndex.value = openIndex.value === index ? null : index;
    }
    const tableData = ref([
      { name: "Али", age: 25, city: "Ташкент" },
      { name: "Сара", age: 30, city: "Самарканд" },
      { name: "Омар", age: 28, city: "Бухара" },
    ]);
    return {
      data,
      editItem,
      deleteItem,
      viewItem,
      refreshItem,
      isModalOpen,
      openModal,
      closeModal,
    };
  },
  components: {
    OrdersPagination,
    OrdersDropDown,
    FilterModal,
  },
});
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
.table tr {
  cursor: pointer;
}

.table tr + tr {
  transition: max-height 0.3s ease-out;
  overflow: hidden;
}
</style>

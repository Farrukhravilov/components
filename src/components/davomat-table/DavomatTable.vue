<template>
  <div class="container mx-auto mt-5">
    <h2
      class="text-2xl flex items-center gap-[5px] font-semibold mb-4 text-left border-b border-gray-200 pb-[20px]"
    >
      <span class="text-blue-500">11-Dekabr</span>
      <span class="text-red-600">Chorshanba</span>
      <span class="text-gray-500"> (2024) </span>
    </h2>
    <button
      class="px-4 py-2 bg-blue-500 text-white mb-[20px] rounded hover:bg-blue-600"
    >
      Kpi hisoblash
    </button>
    <div class="mb-4 flex justify-end items-center">
      <input
        type="date"
        v-model="selectedDate"
        class="border border-gray-300 rounded p-2 mr-2"
      />
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        @click="searchByDate"
      >
        Topish
      </button>
    </div>

    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
      <thead>
        <tr>
          <th class="py-2 border-b border-gray-200">
            <input type="checkbox" @change="toggleAllCheckboxes" />
          </th>
          <th class="py-2 border-b border-gray-200">Ism</th>
          <th class="py-2 border-b border-gray-200">Telefon</th>
          <th class="py-2 border-b border-gray-200">Maosh</th>
          <th class="py-2 border-b border-gray-200">Keldi Ketdi</th>
          <th class="py-2 border-b border-gray-200">Izoh</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in filteredRows"
          :key="index"
          class="hover:bg-gray-200 transition duration-300"
        >
          <td class="py-2 border-b border-gray-200 text-center">
            <input
              type="checkbox"
              v-model="selectedRows"
              :value="row.name"
              @change="updateAllCheckboxState"
            />
          </td>
          <td
            class="py-2 border-b border-gray-200 text-blue-500 hover:text-blue-600 text-center"
          >
            {{ row.name }}
          </td>
          <td
            class="py-2 border-b border-gray-200 text-blue-500 hover:text-blue-600 text-center"
          >
            {{ row.phone }}
          </td>
          <td class="py-2 border-b border-gray-200 text-center">
            {{ row.salary }}
          </td>
          <td
            class="py-2 border-b border-gray-200 text-red-500 hover:text-red-600 text-center"
          >
            {{ row.status }}
          </td>
          <td>
            <input
              type="text"
              placeholder="Izoh"
              class="border border-gray-300 rounded-[2px] p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="space-x-4 flex items-center justify-between mt-[20px]">
      <button
        class="px-6 w-[33%] py-2 bg-green-500 text-white font-bold rounded-full transition-transform transform hover:scale-105 hover:bg-green-600"
      >
        Keldi
      </button>
      <button
        class="px-6 py-2 w-[33%] bg-red-200 text-gray-800 font-bold rounded-full transition-transform transform hover:scale-105 hover:bg-red-500"
      >
        Yarim kun
      </button>
      <button
        class="px-6 py-2 w-[33%] bg-red-500 text-white font-bold rounded-full transition-transform transform hover:scale-105 hover:bg-red-600"
      >
        Butun kun
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Row {
  name: string;
  phone: string;
  salary: string;
  status: string;
  note: string;
}

const selectedRows = ref<string[]>([]);
const selectedDate = ref<string>('');
const rows = ref<Row[]>([
  {
    name: "Sarvar Sodiqov",
    phone: "+998 908330620",
    salary: "0 so`m",
    status: "Kelmadi",
    note: "ИЗОХ",
  },
  {
    name: "Tayorlov",
    phone: "+998 985663214",
    salary: "0 so`m",
    status: "Kelmadi",
    note: "ИЗОХ",
  },
  {
    name: "Yuvuvchi Hodimn",
    phone: "+998 985214141",
    salary: "0 so`m",
    status: "Kelmadi",
    note: "ИЗОХ",
  },
  {
    name: "Operator",
    phone: "+998 995487454",
    salary: "24 000 so`m",
    status: "Kelmadi",
    note: "ИЗОХ",
  },
  {
    name: "Yuvish test",
    phone: "+998 984523679",
    salary: "0 so`m",
    status: "Kelmadi",
    note: "ИЗОХ",
  },
  {
    name: "Filial operator",
    phone: "+998 907852420",
    salary: "0 so`m",
    status: "Kelmadi",
    note: "ИЗОХ",
  },
  {
    name: "ELYOR",
    phone: "+998 987452679",
    salary: "12 000 so`m",
    status: "Kelmadi",
    note: "ИЗОХ",
  },
]);

const filteredRows = computed(() => {
  return rows.value.filter((row) =>
    row.name.toLowerCase().includes(selectedDate.value.toLowerCase())
  );
});

function toggleAllCheckboxes(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.checked) {
    selectedRows.value = filteredRows.value.map((row) => row.name);
  } else {
    selectedRows.value = [];
  }
}

function updateAllCheckboxState() {
  const allSelected = filteredRows.value.every((row) =>
    selectedRows.value.includes(row.name)
  );
  const allCheckbox = document.querySelector("input[type=checkbox]") as HTMLInputElement;
  if (allCheckbox) {
    allCheckbox.checked = allSelected;
  }
}

function searchByDate() {
  console.log("Searching for date:", selectedDate.value);
}
</script>

<style scoped></style>

<template>
  <div class="w-full">
    <h2>Таблица услуг</h2>
    <draggable v-model="items" :animation="200" item-key="id">
      <template #item="{ element, index }">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ element.serviceType }}</td>
          <td>{{ element.price }}</td>
          <td>{{ element.minPrice }}</td>
          <td>{{ element.maxPrice }}</td>
          <td>{{ element.operatorKPI }}</td>
          <td>
            <span
              :class="{
                'status-green': element.status === 'active',
                'status-red': element.status === 'inactive',
              }"
            >
              {{ element.status }}
            </span>
          </td>
          <td>
            <button @click="editItem(element)">✏️</button>
          </td>
        </tr>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";

interface Item {
  id: number;
  serviceType: string;
  price: string;
  minPrice: string;
  maxPrice: string;
  operatorKPI: string;
  status: string;
}

const items = ref<Item[]>([
  {
    id: 1,
    serviceType: "Yangiv (kg)",
    price: "4 000 so'm",
    minPrice: "3 000 so'm",
    maxPrice: "0 so'm",
    operatorKPI: "0 so'm",
    status: "active",
  },
  {
    id: 2,
    serviceType: "Yumshoqlar o'yinchoq (kg)",
    price: "25 000 so'm",
    minPrice: "25 000 so'm",
    maxPrice: "333 333 so'm",
    operatorKPI: "0 so'm",
    status: "active",
  },
  {
    id: 3,
    serviceType: "Adiyol (dona)",
    price: "90 000 so'm",
    minPrice: "50 000 so'm",
    maxPrice: "0 so'm",
    operatorKPI: "0 so'm",
    status: "active",
  },
  {
    id: 4,
    serviceType: "GILAM 15000 (m2)",
    price: "15 000 so'm",
    minPrice: "12 000 so'm",
    maxPrice: "0 so'm",
    operatorKPI: "0 so'm",
    status: "inactive",
  },
  {
    id: 5,
    serviceType: "Папа",
    price: "25 000 so'm",
    minPrice: "0 so'm",
    maxPrice: "0 so'm",
    operatorKPI: "80 000 so'm",
    status: "active",
  },
  {
    id: 6,
    serviceType: "bsfgshfs (m2)",
    price: "0 so'm",
    minPrice: "0 so'm",
    maxPrice: "0 so'm",
    operatorKPI: "0 so'm",
    status: "active",
  },
  {
    id: 7,
    serviceType: "tes",
    price: "123 so'm",
    minPrice: "0 so'm",
    maxPrice: "0 so'm",
    operatorKPI: "0 so'm",
    status: "inactive",
  },
  {
    id: 8,
    serviceType: "ADIYOL 1 KISHI (dona)",
    price: "60 000 so'm",
    minPrice: "50 000 so'm",
    maxPrice: "60 000 so'm",
    operatorKPI: "0 so'm",
    status: "active",
  },
  {
    id: 9,
    serviceType: "Mebel (o'rin)",
    price: "50 000 so'm",
    minPrice: "40 000 so'm",
    maxPrice: "70 000 so'm",
    operatorKPI: "0 so'm",
    status: "inactive",
  },
  {
    id: 10,
    serviceType: "Ko'rpa (m)",
    price: "25 000 so'm",
    minPrice: "15 000 so'm",
    maxPrice: "0 so'm",
    operatorKPI: "0 so'm",
    status: "active",
  },
]);

const editItem = (item: Item) => {
  alert(`Редактирование: ${item.serviceType}`);
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th,
td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
}
th {
  background-color: #f2f2f2;
}
.status-green {
  color: green;
}
.status-red {
  color: red;
}
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #007bff;
}
button:hover {
  text-decoration: underline;
}
</style>

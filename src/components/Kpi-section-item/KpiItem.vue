<template>
  <div class="p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Kpi - Operator</h2>
    <KpiForm />
    <!--  -->
    <div class="mb-4">
      <label for="operatorSelect" class="text-lg">Operator</label>
    </div>

    <table class="table table-zebra w-full mb-4">
      <thead>
        <tr>
          <th class="hover:bg-blue-200">Id</th>
          <th class="hover:bg-blue-200">Operator</th>
          <th class="hover:bg-blue-200">Min</th>
          <th class="hover:bg-blue-200">Max</th>
          <th class="hover:bg-blue-200">Min summa</th>
          <th class="hover:bg-blue-200">Max summa</th>
          <th class="hover:bg-blue-200">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(operator, index) in operators" :key="operator.id">
          <td>{{ operator.id }}</td>
          <td>{{ operator.name }}</td>
          <td>{{ operator.min }}</td>
          <td>{{ operator.max }}</td>
          <td>{{ operator.minSumma }}</td>
          <td>{{ operator.maxSumma }}</td>
          <td>
            <button
              @click="editOperator(operator)"
              class="btn btn-warning btn-sm mr-2 hover:bg-yellow-400"
            >
              <i class="fas fa-edit"></i> Edit
            </button>
            <button
              @click="deleteOperator(operator.id)"
              class="btn btn-error btn-sm hover:bg-red-600"
            >
              <i class="fas fa-trash-alt"></i> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <button @click="addOperator" class="btn btn-primary mt-4">
      <i class="fas fa-plus"></i> Add Operator
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import KpiForm from "../Kpi-Form/KpiForm.vue";

interface Operator {
  id: number;
  name: string;
  min: number;
  max: number;
  minSumma: number;
  maxSumma: number;
}

const limitPercentage = ref<number>(0);
const limitSum = ref<number>(0);
const selectedOperator = ref<string>("operator1");
const operators = ref<Operator[]>([
  {
    id: 1,
    name: "Operator 1",
    min: 1,
    max: 10,
    minSumma: 5000,
    maxSumma: 10000,
  },
]);

const addOperator = () => {
  const newOperator: Operator = {
    id: operators.value.length + 1,
    name: `Operator ${operators.value.length + 1}`,
    min: 1,
    max: 10,
    minSumma: 5000,
    maxSumma: 10000,
  };
  operators.value.push(newOperator);
};

const editOperator = (operator: Operator) => {
  // Editing logic (can be expanded)
  console.log("Edit Operator:", operator);
};

const deleteOperator = (id: number) => {
  operators.value = operators.value.filter((operator) => operator.id !== id);
};
</script>

<style scoped>
.table th {
  text-align: center;
}

.table td {
  text-align: center;
}
</style>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Yuvish xodimlari uchun</h1>
    <div class="flex items-center mb-4 border border-gray-200">
      <input
        type="number"
        placeholder="Dan"
        class="input w-1/4 border-r border-gray-200"
      />
      <input type="number" placeholder="Gacha" class="input w-1/4" />
      <input
        type="number"
        placeholder="Summa"
        class="input w-1/4 border-l border-gray-200"
      />
      <button class="btn bg-indigo-600 text-white rounded px-4 py-2">+</button>
    </div>

    <table class="table w-full">
      <thead>
        <tr>
          <th>Id</th>
          <th>Dan</th>
          <th>Gacha</th>
          <th>Summa</th>
          <th>Aksiyalar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>{{ task.from }}</td>
          <td>{{ task.to }}</td>
          <td>{{ task.total }}</td>
          <td>
            <button class="btn btn-warning btn-sm mr-2 hover:bg-yellow-400">
              <i class="fas fa-edit"></i> Edit
            </button>
            <button class="btn btn-error btn-sm hover:bg-red-600">
              <i class="fas fa-trash-alt"></i> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WashingTasks",
  data() {
    return {
      tasks: [
        { id: 1, from: "0 kvm", to: "100 kvm", total: "1 000 so'm" },
        { id: 2, from: "100.01 kvm", to: "200 kvm", total: "1 200 so'm" },
        { id: 3, from: "200.01 kvm", to: "300 kvm", total: "1 400 so'm" },
      ],
    };
  },
});
</script>

<style scoped>
/* Any additional styling can go here */
</style>

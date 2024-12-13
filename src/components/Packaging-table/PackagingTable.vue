<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Yuvish xodimlari uchun</h1>
    <div class="flex justify-between items-center mb-4">
      <div class="flex-grow">
        <span class="mr-2 font-semibold">Dan</span>
        <span class="mr-2 font-semibold">Gacha</span>
        <span class="mr-2 font-semibold">Summa</span>
      </div>
      <button class="btn btn-primary">+</button>
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
            <button class="btn btn-secondary mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8.5V15h-2v-4.5H6v-2h3V7h2v2.5h3v2h-3z"
                />
              </svg>
            </button>
            <button class="btn btn-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 8h6v2H7zm0 3h6v2H7z"
                />
              </svg>
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

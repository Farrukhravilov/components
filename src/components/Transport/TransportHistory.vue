<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Transport History</h1>
    <p class="text-gray-600">
      2024-12-01 -> 2024-12-31 || KPI records for the period.
    </p>
    <div class="flex items-center justify-between mt-4">
      <span class="font-semibold">Total Amount: 0 UZS</span>
      <button
        class="bg-blue-600 text-white rounded-full p-3 flex items-center justify-center"
      >
        <i class="fas fa-filter"></i>
      </button>
    </div>
    <table class="table w-full mt-4">
      <thead>
        <tr>
          <th>№</th>
          <th>Employee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sample Employee</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sample Employee 2</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps();
</script>

<style scoped></style>

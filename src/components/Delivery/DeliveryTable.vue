<script lang="ts" setup>
import { defineProps } from "vue";

// Определяем пропсы
const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  tableClass: {
    type: String,
    default: "table w-full",
  },
});
</script>

<template>
  <div class="overflow-x-auto">
    <table :class="tableClass" class="border" >
      <thead>
        <tr>
          <th v-for="(col, index) in columns" :key="index">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* Если нужно, добавьте кастомные стили */
</style>

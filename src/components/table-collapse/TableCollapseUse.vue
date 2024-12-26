<template>
  <div id="app">
    <TableCollabse>
      <template v-slot:header-col1>
        <th class="py-2 border-b border-gray-200 text-center">KV N°</th>
      </template>
      <template v-slot:header-col2>
        <!-- <th class="py-2 border-b border-gray-200">Новый Мijoz</th> -->
      </template>
      <template v-slot:header-col3>
        <th class="py-2 border-b border-gray-200 text-center">Soni</th>
      </template>

      <template v-slot:row-col1>
        <td class="py-2 px-4 border-b border-gray-200 text-center">94</td>
      </template>
      <template v-slot:row-col2>
        <td class="py-2 px-4 border-b border-gray-200 text-center">Test</td>
      </template>
      <template v-slot:row-col3>
        <td class="py-2 px-4 border-b border-gray-200 text-center">2 ta</td>
      </template>

      <template v-slot:details1>
        <!-- <p>Это собственные детали для первой записи.</p> -->
        <div class="flex items-center justify-around">
          <td class="py-2 pr-[57px] border-b border-gray-200">92</td>
          <td class="py-2 border-b border-gray-200">Test</td>
          <button
            class="flex items-center justify-center w-10 h-8 bg-green-500 rounded-full text-white hover:bg-green-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12l5 5L20 7"
              />
            </svg>
          </button>
        </div>
      </template>
      <template v-slot:details2>
        <div class="flex items-center justify-around">
          <td class="py-2 pr-[57px] border-b border-gray-200">92</td>
          <td class="py-2 border-b border-gray-200">Test</td>
          <button
            class="flex items-center justify-center w-10 h-8 bg-green-500 rounded-full text-white hover:bg-green-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12l5 5L20 7"
              />
            </svg>
          </button>
        </div>
      </template>
    </TableCollabse>
  </div>
</template>

<script setup lang="ts">
import TableCollabse from "../table-collabse/TableCollabse.vue";
</script>

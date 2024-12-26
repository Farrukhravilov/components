<template>
  <div class="p-4 bg-base-100 shadow-md rounded">
    <!-- Заголовок -->
    <h1 class="text-[26px] font-bold text-[#000] mb-4">
      Buyurtmalarni qiymatlarini dan-gacha belgilash
    </h1>
    <!-- Фильтр -->
    <div class="flex space-x-4 mb-4">
      <input
        v-model="fromValue"
        type="number"
        placeholder="Dan"
        class="border rounded p-2 w-1/2 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input
        v-model="toValue"
        type="number"
        placeholder="Gacha"
        class="border rounded p-2 w-1/2 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <button
        @click="applyFilter"
        class="bg-blue-500 justify-center text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 transition"
      >
        <i class="fas fa-search mr-2"></i>
      </button>
    </div>
    <div class="overflow-x-auto">
      <table class="table w-full text-center">
        <!-- Заголовок таблицы -->
        <thead class="text-[#000]">
          <tr>
            <th>Yilda</th>
            <th>4 marta va ortiq</th>
            <th>2-3 marta</th>
            <th>1 marta</th>
            <th>Buyurtma bermaganlar</th>
          </tr>
        </thead>
        <!-- Тело таблицы -->
        <tbody>
          <tr v-for="row in tableData" :key="row.id">
            <td>{{ row.year }}</td>
            <td :class="getCellClass(row.moreThanFour)">
              {{ row.moreThanFour }}
            </td>
            <td :class="getCellClass(row.twoToThree)">
              {{ row.twoToThree }}
            </td>
            <td :class="getCellClass(row.oneTime)">
              {{ row.oneTime }}
            </td>
            <td class="bg-neutral text-white text-center">
              {{ row.noOrders }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "OrdersTable",
  setup() {
    // Данные таблицы
    const tableData = ref([
      {
        id: 1,
        year: "1 million so'mdan yuqori",
        moreThanFour: 0,
        twoToThree: 0,
        oneTime: 3,
        noOrders: 343,
      },
      {
        id: 2,
        year: "200 ming so'mdan yuqori",
        moreThanFour: 2,
        twoToThree: 2,
        oneTime: 31,
        noOrders: 343,
      },
      {
        id: 3,
        year: "200 ming so'mgacha",
        moreThanFour: 1,
        twoToThree: 6,
        oneTime: 27,
        noOrders: 343,
      },
    ]);

    // Классы для ячеек на основе значений
    const getCellClass = (value: number): string => {
      if (value === 0) return "bg-green-500 text-white text-center";
      if (value <= 2) return "bg-green-300 text-black text-center";
      if (value <= 6) return "bg-yellow-300 text-black text-center";
      return "bg-red-500 text-white text-center";
    };

    // Метод для применения фильтра
    const applyFilter = (): void => {
      // Логика фильтрации данных по значениям fromValue и toValue
      console.log(`Filtering from ${fromValue} to ${toValue}`);
    };

    // Переменные для фильтра
    const fromValue = ref<number | null>(null);
    const toValue = ref<number | null>(null);

    return {
      tableData,
      getCellClass,
      fromValue,
      toValue,
      applyFilter,
    };
  },
});
</script>

<style scoped>
/* Дополнительные стили не требуются, всё покрывается DaisyUI */
</style>

<template>
  <div class="p-4 rounded">
    <div class="flex items-center gap-[20px] w-full">
      <div class="mb-4 w-full">
        <label class="block text-gray-700" for="limitFoiz"
          >Limit foiz <span class="text-red-600">*</span></label
        >
        <input
          v-model="limitFoiz"
          id="limitFoiz"
          type="number"
          class="mt-1 p-2 border rounded w-full transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500"
          placeholder="0"
        />
      </div>

      <div class="mb-4 w-full">
        <label class="block text-gray-700" for="limitSoM"
          >Limit so'm <span class="text-red-600">*</span></label
        >
        <div class="flex">
          <input
            v-model="limitSoM"
            id="limitSoM"
            type="number"
            class="mt-1 p-2 border rounded w-full transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500"
            placeholder="0"
          />
          <button
            class="bg-blue-500 text-white rounded px-5 py-2 hover:bg-purple-600 transition duration-200 ease-in-out flex items-center"
          >
            <i class="fa fa-pencil mr-2"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="flex mb-4 w-full">
      <select
        class="flex-1 p-2 border rounded mr-2 w-[24%] transition duration-200 ease-in-out hover:bg-gray-200"
      >
        <option>Tanlang</option>
        <option>Variant 1</option>
        <option>Variant 2</option>
      </select>
      <input
        type="number"
        class="p-2 border rounded w-[20%] transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500"
        placeholder="Min"
      />
      <input
        type="number"
        class="p-2 border rounded w-[20%] mx-2 transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500"
        placeholder="Max"
      />
      <input
        type="text"
        class="p-2 border rounded w-[20%] transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500"
        placeholder="Min summa"
      />
      <input
        type="text"
        class="p-2 border rounded w-[20%] transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500"
        placeholder="Max summa"
      />
      <button
        class="bg-blue-500 text-white rounded px-4 hover:bg-purple-600 transition duration-200 ease-in-out"
      >
        <i class="fa fa-plus"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const limitFoiz = ref(0);
    const limitSoM = ref(0);

    return { limitFoiz, limitSoM };
  },
};
</script>

<style scoped>
/* Добавьте стили по необходимости */
</style>

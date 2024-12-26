<template>
  <div class="container mx-auto p-4">
    <!-- Верхние кнопки -->
    <div class="flex w-full gap-4 mb-4">
      <button class="bg-blue-500 w-[50%] text-white py-2 px-4 rounded-[8px]">
        + Doimiy chiqim qo'shish
      </button>
      <button class="bg-gray-500 w-[50%] text-white py-2 px-4 rounded-[8px]">
        Yashirilgan chiqimlar
      </button>
    </div>

    <!-- Таблица -->
    <div class="overflow-x-auto bg-white w-full shadow-md rounded-lg">
      <table class="table-auto w-full border-collapse border border-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th class="border border-gray-200 p-2 text-center">#</th>
            <th class="border border-gray-200 p-2 text-center">
              Chiqim izoh<span class="text-red-500">*</span>
            </th>
            <th class="border border-gray-200 p-2 text-center">
              Chiqim summasi<span class="text-red-500">*</span>
            </th>
            <th class="border border-gray-200 p-2 text-center">+</th>
            <th class="border border-gray-200 p-2 text-center">
              <i class="fa-solid fa-eye-slash"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Строки таблицы -->
          <tr>
            <td class="border border-gray-200 p-2 text-center">1.</td>
            <td class="border border-gray-200 p-2">
              <input
                type="text"
                placeholder="Bir martalik chiqim izohi"
                class="w-full border border-gray-300 rounded p-2"
              />
            </td>
            <td class="border border-gray-200 p-2 flex items-center">
              <input
                type="number"
                class="w-full border border-gray-300 rounded p-2"
                value="0"
              />
              <span class="ml-2 text-gray-500">CYM</span>
            </td>
            <td class="border border-gray-200 p-2 text-center">
              <button class="bg-blue-500 text-white py-1 px-3 rounded">
                <i class="fa-solid fa-check"></i>
              </button>
            </td>
            <td class="border border-gray-200 p-2 text-center">
              <button class="bg-red-500 text-white py-1 px-3 rounded">
                <i class="fa-solid fa-eye-slash"></i>
              </button>
            </td>
          </tr>
          <!-- Динамические строки -->
          <tr v-for="item in 6" >
            <td class="border border-gray-200 p-2 text-center">2.</td>
            <td class="border border-gray-200 p-2 text-blue-500 cursor-pointer text-center">
              suvga
            </td>
            <td class="border border-gray-200 p-2 flex items-center">
              <input
                type="number"
                class="w-full border border-gray-300 rounded p-2"
                value="0"
              />
              <span class="ml-2 text-gray-500">CYM</span>
            </td>
            <td class="border border-gray-200 p-2 text-center">
              <button class="bg-blue-500 text-white py-1 px-3 rounded">
                <i class="fa-solid fa-check"></i>
              </button>
            </td>
            <td class="border border-gray-200 p-2 text-center">
              <button class="bg-red-500 text-white py-1 px-3 rounded">
                <i class="fa-solid fa-eye-slash"></i>
              </button>
            </td>
          </tr>
          <!-- Добавьте больше строк, если нужно -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>

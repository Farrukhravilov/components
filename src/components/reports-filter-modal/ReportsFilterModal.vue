<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-1/2">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold">Filtrlangan ma'lumotlar</h2>
        <button class="text-gray-600 hover:text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <form>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Ism</label>
          <input
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Ism"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Izoh</label>
          <input
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Izoh"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Sana</label>
          <div class="flex space-x-4">
            <input
              type="date"
              class="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            <input
              type="date"
              class="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Xodim</label>
          <input
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Xodim"
          />
        </div>

        <div class="flex justify-end space-x-2 mt-6">
          <button
            type="button"
            class="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Отменить
          </button>
          <button
            type="submit"
            class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Применить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts"> 
</script>

<style scoped>
/* Ваши стили тут */
</style>

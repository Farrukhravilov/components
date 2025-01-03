<template>
  <div class="relative p-[20px] mb-[20px]">
    <!-- Кнопка для открытия dropdown -->
    <button class="bg-black text-white rounded hover:bg-blue-600 transition ease-out duration-300 p-[15px]"
      @click="toggleDropdown">
      Нажми на меня
    </button>
    <!-- Dropdown -->
    <transition enter="transition ease-out duration-300" enter-from="opacity-0 translate-y-2"
      enter-to="opacity-100 translate-y-0" leave="transition ease-in duration-200"
      leave-from="opacity-100 translate-y-0" leave-to="opacity-0 translate-y-2">
      <div v-if="isOpen" class="absolute mt-2 w-64 p-4 bg-white border border-gray-300 rounded shadow-lg">
        <!-- Input -->
        <div class="relative z-0 w-full mb-5 group">
          <input type="text" name="floating_email" id="floating_email" v-model="emailInput" @input="applyEmailMask"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="" required />
          <label for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email address
          </label>
        </div>

        <!-- Select -->
        <div>
          <label for="dropdown-select" class="block text-sm font-medium text-gray-700">
            Выберите опцию
          </label>
          <select id="dropdown-select"
            class="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Опция 1 farrukh</option>
            <option>Опция 2 farrukh</option>
            <option>Опция 3 farrukh</option>
          </select>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
const emailInput = ref("");

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const applyEmailMask = () => {
  const value = emailInput.value;
  // Удаляем запрещённые символы
  const sanitizedValue = value.replace(/[^a-zA-Z0-9@._-]/g, "");
  // Применяем ограничения на части email
  const emailParts = sanitizedValue.split("@");
  if (emailParts.length > 1) {
    emailParts[0] = emailParts[0].slice(0, 64); // Ограничение на имя пользователя
    emailParts[1] = emailParts[1].replace(/[^a-zA-Z0-9.-]/g, "");
    const domainParts = emailParts[1].split(".");
    if (domainParts.length > 1) {
      domainParts[0] = domainParts[0].slice(0, 63); // Ограничение на домен
      domainParts[1] = domainParts[1].slice(0, 5); // Ограничение на зону
    }
    emailInput.value = emailParts[0] + "@" + domainParts.join(".");
  } else {
    emailInput.value = emailParts[0];
  }
};
</script>

<style>
button {
  list-style: none;
  text-decoration: none;
}

button:hover {
  list-style: none;
  text-decoration: none;
}
</style>

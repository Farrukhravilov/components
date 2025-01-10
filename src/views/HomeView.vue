<script setup lang="ts">
import api from '../server/api';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Header from "../components/Header/Header.vue";
import MyDastur from "../components/Dastur/MyDastur.vue";
import Title from "../components/tekst/Title.vue";

// Стейт для управления состоянием окна логина
const isLoginOpen = ref(false);

// Открытие окна логина
const openLogin = () => {
  isLoginOpen.value = true;
};

const username = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

// Метод для выполнения логина
const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = ''; // Сбрасываем ошибку перед новым запросом

  try {
    const response = await api.login({ username: username.value, password: password.value });
    console.log(response);
  } catch (error) {
    errorMessage.value = 'Invalid credentials or server error.';
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

// Закрытие окна логина
const closeLogin = () => {
  isLoginOpen.value = false;
};

// Обработчик нажатия клавиш
const handleKeyboardEvent = (event: KeyboardEvent) => {
  console.log('hello',event.key);
  
  if (event.ctrlKey && event.key === 'F7') {
    console.log('hi');
    
    openLogin(); // Открыть окно при нажатии Ctrl + J
  }
};

onMounted(() => {
  // Добавляем обработчик события клавиатуры при монтировании компонента
  window.addEventListener('keydown', handleKeyboardEvent);
});

onBeforeUnmount(() => {
  // Убираем обработчик события при размонтировании компонента
  window.removeEventListener('keydown', handleKeyboardEvent);
});
</script>

<template>
  <div
    class="fixed w-full z-100 h-screen bg-cover bg-center bg-fixed bg-[url('../assets/images/png/back-img-26055c57.png')]">
    <div class="text-3xl font-bold mt-[120px] w-full mx-auto max-w-[1320px]"></div>
    <Title />
    <MyDastur />

    <!-- Окно логина -->
    <div v-if="isLoginOpen" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-200">
      <div class="bg-white p-8 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">Login</h2>
        <form @submit.prevent="handleLogin" >
          <input type="text" placeholder="Username" v-model="username"  class="mb-4 p-2 border border-gray-300 rounded" />
          <input type="password" placeholder="Password"  v-model="password" class="mb-4 p-2 border border-gray-300 rounded" />
          <div class="flex justify-end">
            <!-- <button type="button" @click="closeLogin" class="px-4 py-2 bg-red-500 text-black rounded">Close</button> -->
            <button class="ml-2 px-4 py-2 bg-blue-500 text-black rounded">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Дополнительный стиль для модального окна */
</style>

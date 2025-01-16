<script setup lang="ts">
import api from "../server/api";
import { ref, onMounted, onBeforeUnmount } from "vue";
import MyDastur from "../components/Dastur/MyDastur.vue";
import Title from "../components/tekst/Title.vue";
const isLoginOpen = ref(false);

// Открытие окна логина
const openLogin = () => {
  isLoginOpen.value = true;
};

const username = ref("");
const password = ref("");
const isLoading = ref(false);
const errorMessage = ref("");

const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    const response = await api.login({
      username: username.value,
      password: password.value,
    });
    console.log(response);
  } catch (error) {
    errorMessage.value = "Invalid credentials or server error.";
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
  console.log("hello", event.key);

  if (event.ctrlKey && event.key === "F7") {
    console.log("hi");

    openLogin(); // Открыть окно при нажатии Ctrl + J
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyboardEvent);
});

onBeforeUnmount(() => {
  // Убираем обработчик события при размонтировании компонента
  window.removeEventListener("keydown", handleKeyboardEvent);
});
</script>

<template>
  <div
    class="fixed w-full z-100 h-screen bg-cover bg-center bg-fixed bg-[url('../assets/images/png/back-img-26055c57.png')]"
  >
    <div class="text-3xl font-bold mt-[120px] w-full mx-auto max-w-[1320px]"></div>
    <Title />
    <MyDastur />
  </div>
</template>

<style scoped>
/* Дополнительный стиль для модального окна */
</style>

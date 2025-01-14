<template>
  <div
    class="relative w-full z-100 h-[100%] bg-cover bg-center bg-fixed bg-[url('../assets/images/png/back-img-26055c57.png')]">
    <header class="relative z-100 w-full max-1046:none max-w-[1380px] m-auto">
      <nav class="p-4">
        <ul class="flex justify-between items-center">
          <li v-if="specificCategory1">
            <router-link to="/About" class="text-white hover:text-black uppercase text-[25px]">
              {{ specificCategory1.text }}
            </router-link>
          </li>
          <li>
            <router-link v-if="specificCategory2" to="/Connection" class="text-white hover:text-black uppercase text-[25px]">
              {{ specificCategory2.text }}
            </router-link>
          </li>
          <li>
            <router-link to="/" class="text-2xl text-white font-bold text-center mt-2 uppercase text-[30px]"
              :class="{ active: $route.path == '/' }">
              CRUD GROUP
            </router-link>
          </li>
          <li>
            <router-link v-if="specificCategory3" to="/Faq" class="text-white hover:text-black uppercase text-[25px]">
              {{ specificCategory3.text }}
            </router-link>
          </li>
          <li v-if="specificCategory4" >
            <router-link to="/Videos" class="text-white hover:text-red-700 uppercase text-[25px]"
              :class="{ active: $route.path == '/Videos' }">
              {{ specificCategory4.text }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <RouterView />
    <div v-if="isLoginOpen" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-200">
      <div class="bg-white p-8 rounded-lg h-[40vh]">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold mb-4">Login For Crud Company</h2>
          <button type="button" @click="closeLogin"
            class="px-4 border border-green-700 mb-4 py-2 bg-red-500 text-black rounded">
            Close
          </button>
        </div>
        <form @submit.prevent="handleLogin">
          <input type="text" placeholder="Username" v-model="username"
            class="mb-4 p-2 border border-gray-300 rounded" />
          <input type="password" placeholder="Password" v-model="password"
            class="mb-4 p-2 border border-gray-300 rounded" />
          <div class="flex justify-end mt-[160px]">
            <button :disabled="isLoading"
              class="ml-2 px-4 py-2 bg-yellow-500 text-black border border-green-700 rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- <ModalRight /> -->
  <!-- <ModalLeft/> -->
</template>

<script setup lang="ts">
import api from "./server/api";
import ModalRight from "./components/Modal-Right/ModalRight.vue";
import ModalLeft from "./components/Modal-Left/ModalLeft.vue";
import { ref, onBeforeUnmount, onMounted } from "vue";
import { RouterView } from "vue-router";
import { useToast } from "vue-toastification"; // Импортируем useToast
import { useRouter } from "vue-router";
import Faq from "./views/Faq.vue";
import InfoPage from "./views/InfoPage.vue";
// import CreateCategory from "./components/Creater-Category/CreateCategory.vue";
const inputValue = ref("");

const isLoginOpen = ref(false);

const openLogin = () => {
  isLoginOpen.value = true;
};
const username = ref("");
const password = ref("");
const isLoading = ref(false);
const errorMessage = ref("");
const usernameDisplay = ref("");
const router = useRouter();
const toast = useToast();
const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    const response = await api.login({
      username: username.value,
      password: password.value,
    });
    console.log(response);
    usernameDisplay.value = username.value;
    router.push("/Dashboard");
    toast.success("Вы успешно прошли авторизацию!");
    closeLogin();
  } catch (error) {
    console.error(error);
    toast.error("Не удалось пройти авторизацию.");
  } finally {
    isLoading.value = false;
  }
};

const closeLogin = () => {
  isLoginOpen.value = false;
};
const categories = ref("");
const specificCategory1 = ref(null);
const specificCategory2 = ref(null);
const specificCategory3 = ref(null);
const specificCategory4 = ref(null);

const Category = () => {
  return api
    .getOneCategory({ category_id: 6 })
    .then((res) => {
      categories.value = res.data;
      // Используем find для поиска элемента с ordinal_number === 1
      // Используем find для поиска элементов с разными ordinal_number
      specificCategory1.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 1
      );
      specificCategory2.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 2
      );
      specificCategory3.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 3
      );
      specificCategory4.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 4
      );
      console.log("Найденная категория:", specificCategory.value);
      console.log(`Категория ${id}:`, res.data);
    })
    .catch((error) => {
      console.error(`Ошибка при получении категории ${id}:`, error);
    });
};

const handleKeyboardEvent = (event: KeyboardEvent) => {
  console.log("hello", event.key);
  if (event.ctrlKey && event.shiftKey && event.key === "F7") {
    console.log("hi");

    openLogin();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyboardEvent);
  Category();
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyboardEvent);
});
</script>

<style scoped>
.hov:hover {
  color: brown;
  transition: all 0.3s ease;
}
</style>

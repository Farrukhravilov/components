<template>
    <div class="relative h-32 overflow-hidden">
        <div class="text-animation text-white text-center uppercase text-[46px] absolute w-full" :style="{
            transform: isFirstText ? 'translateY(0)' : 'translateY(-100%)',
            opacity: isFirstText ? 1 : 0,
            zIndex: 2
        }">
            BIZNESINGGIZGA
            <span class="text">Oson <br></span> YECHIM TOPAMIZ
        </div>
        <!-- Второй текст -->
        <div class="text-animation text-white text-center uppercase text-[46px] w-[100px] absolute w-full" :style="{
            transform: isFirstText ? 'translateY(100%)' : 'translateY(0)',
            opacity: isFirstText ? 0 : 1,
            zIndex: 1}  "v-if="specificCategory2"  >
            {{ specificCategory2.text }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import api from "../../server/api";
const categories = ref("");
const specificCategory1 = ref(null);
const specificCategory2 = ref(null);
const specificCategory3 = ref(null);
const specificCategory4 = ref(null);
const specificCategory5 = ref(null);
const specificCategory6 = ref(null);
const specificCategory7 = ref(null);
const specificCategory8 = ref(null);
const Category = () => {
  return api
    .getOneCategory({ category_id: 7 })
    .then((res) => {
      categories.value = res.data;
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
      specificCategory5.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 5
      );
      specificCategory6.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 6
      );
      specificCategory7.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 7
      );
      specificCategory8.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 8
      );
      console.log(res.data);
    })
    .catch((error) => {
      console.error(`Ошибка при получении категории ${id}:`, error);
    });
}; // Стейт для управления состоянием окна логина
// Управление состоянием текста
const isFirstText = ref(true)
let intervalId: number

// Переключение состояния текста
const toggleText = () => {
    isFirstText.value = !isFirstText.value
}

// Установка интервала для смены текста
onMounted(() => {
    Category();
    intervalId = setInterval(() => {
        toggleText()
    }, 4000) // Полный цикл (2 сек. анимация + 2 сек. пауза)
})

onUnmounted(() => {
    clearInterval(intervalId)
})
</script>

<style scoped>
.text-animation {
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    position: absolute;
    width: 100%;
}

.text {
    color: rgb(177, 22, 22);
}
</style>

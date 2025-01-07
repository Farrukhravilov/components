<template>
    <div class="max-w-md mx-auto mt-10 p-6 border rounded-lg bg-white shadow-lg">
        <h2 class="text-2xl font-semibold mb-6">Создать категорию</h2>
        <form @submit.prevent="handleSubmit">
            <div class="mb-4">
                <label for="name" class="block text-lg font-medium">Название категории</label>
                <input id="name" v-model="name" type="text"
                    class="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required />
            </div>
            <div class="mb-6">
                <label for="comment" class="block text-lg font-medium">Комментарий</label>
                <input id="comment" v-model="comment" type="text"
                    class="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit"
                class="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Создать
            </button>
        </form>
        <p v-if="responseMessage" class="mt-4 text-center text-green-600">{{
            responseMessage
            }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import api from "../api"; // Импортируем API

// Объявление переменных
const name = ref<string>(""); // Название категории
const comment = ref<string>(""); // Комментарий
const responseMessage = ref<string>(""); // Сообщение о результате

// Функция для обработки отправки формы
const handleSubmit = async () => {
    const data = {
        name: name.value,
        comment: comment.value,
    };

    try {
        const result = await api.createCategory(data); // Используем createCategory для отправки данных
        if (result) {
            responseMessage.value = "Категория успешно создана!";
        }
    } catch (error) {
        responseMessage.value = "Ошибка при создании категории.";
    }
};
</script>

<style scoped>
/* Ваши стили, если нужно */
</style>
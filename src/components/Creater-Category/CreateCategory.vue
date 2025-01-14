<script setup lang="ts">
import { ref } from "vue";
import api from "../../server/api";

const categoryName = ref<string>("");
const categoryComment = ref<string>("");
const categoryItems = ref<{ text: string; ordinal_number: number }[]>([
  { text: "Home", ordinal_number: 1 },
  { text: "About", ordinal_number: 2 },
  { text: "Contact", ordinal_number: 3 },
]);

const responseMessage = ref<string>("");

const createCategorys = async () => {
  try {
    const categoryResponse = await api.createCategory({
      name: categoryName.value,
      comment: categoryComment.value,
    });
    const categoryId = categoryResponse?.data?.id;
    if (!categoryId) {
      throw new Error("Не удалось получить ID категории.");
    }
    const itemsData = categoryItems.value.map((item) => ({
      category_id: categoryId,
      text: item.text,
      ordinal_number: item.ordinal_number,
    }));
    await api.createCategoryItems(itemsData);
    responseMessage.value = "Категория и элементы успешно созданы!";
  } catch (error) {
    responseMessage.value = "Ошибка при создании категории или её элементов.";
    console.error(error);
  }
};
</script>

<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Создать категорию</h2>
    <form @submit.prevent="createCategorys" class="space-y-4">
      <div>
        <label class="block text-sm font-medium">Название категории</label>
        <input
          v-model="categoryName"
          type="text"
          class="input"
          placeholder="Введите название категории"
        />
      </div>
      <div>
        <label class="block text-sm font-medium">Комментарий</label>
        <input
          v-model="categoryComment"
          type="text"
          class="input"
          placeholder="Введите комментарий"
        />
      </div>
      <h3 class="text-lg font-medium">Элементы категории (Navbar)</h3>
      <div v-for="(item, index) in categoryItems" :key="index" class="space-y-2">
        <label class="block text-sm">Текст элемента</label>
        <input
          v-model="item.text"
          type="text"
          class="input"
          placeholder="Текст элемента"
        />
        <label class="block text-sm">Порядковый номер</label>
        <input
          v-model="item.ordinal_number"
          type="number"
          class="input"
          placeholder="Порядковый номер"
        />
      </div>
      <button
        type="button"
        @click="
          categoryItems.push({ text: '', ordinal_number: categoryItems.length + 1 })
        "
        class="btn"
      >
        Добавить элемент
      </button>
      <button type="submit" class="btn btn-primary">Создать</button>
    </form>
    <p v-if="responseMessage" class="mt-4 text-green-600">{{ responseMessage }}</p>
  </div>
</template>

<style>
.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 0.25rem;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #28a745;
}
</style>

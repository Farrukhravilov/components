<template>
    <section class="mt-[50px] grid grid-cols-2  text-center">
        <!-- Карточка 1 -->
        <div
            class="bg-black/70 cardss text-white p-6 rounded-tl-lg shadow-lg border border-gray-700 h-60 flex items-center justify-center relative group">
            <!-- Вопрос -->
            <p class="text-lg transition-opacity duration-300 tekts group-hover:opacity-0 uppercase" v-if="specificCategory2" >
                {{specificCategory2.text}}
            </p>
            <!-- Ответ -->
            <p
                class="absolute top-0 left-0 right-0 bottom-0 answer uppercase text-yellow-500 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100" v-if="specificCategory3">
                {{specificCategory3.text}}
            </p>
        </div>
        <div
            class="bg-black/70 cardss text-white p-6 rounded-tr-lg shadow-lg border border-gray-700 h-60 flex items-center justify-center relative group">
            <!-- Вопрос -->
            <p class="text-lg transition-opacity duration-300 tekts group-hover:opacity-0 uppercase " v-if="specificCategory4">
                {{specificCategory4.text}}
            </p>
            <!-- Ответ -->
            <p
                class="absolute top-0 left-0 right-0 bottom-0 answer text-yellow-500 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100 uppercase " v-if="specificCategory11">
                {{specificCategory11.text}}
            </p>
        </div>
        <div
            class="bg-black/70 cardss text-white p-6  shadow-lg border border-gray-700 h-60 flex items-center justify-center relative group">
            <!-- Вопрос -->
            <p class="text-lg transition-opacity duration-300 tekts group-hover:opacity-0 uppercase " v-if="specificCategory6" >
                {{specificCategory6.text}}
            </p>
            <!-- Ответ -->
            <p
                class="absolute top-0 left-0 right-0 bottom-0 answer text-yellow-500 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100 uppercase " v-if="specificCategory7">
                {{specificCategory7.text}}
            </p>
        </div>
        <div
            class="bg-black/70 cardss text-white p-6  shadow-lg border border-gray-700 h-60 flex items-center justify-center relative group">
            <!-- Вопрос -->
            <p class="text-lg transition-opacity duration-300 tekts group-hover:opacity-0 uppercase " v-if="specificCategory8">
                {{specificCategory8.text}}
            </p>
            <!-- Ответ -->
            <p
                class="absolute top-0 left-0 right-0 bottom-0 answer text-yellow-500 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100" v-if="specificCategory9" >
                {{specificCategory9.text}}
            </p>
        </div>
        <div
            class="bg-black/70 cardss text-white rounded-bl-lg p-6 shadow-lg border border-gray-700 h-60 flex items-center justify-center relative group">
            <!-- Вопрос -->
            <p class="text-lg transition-opacity duration-300 tekts group-hover:opacity-0 uppercase " v-if="specificCategory4">
                {{specificCategory4.text}}
            </p>
            <!-- Ответ -->
            <p
                class="absolute top-0 left-0 right-0 bottom-0 answer text-yellow-500 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100 uppercase" v-if="specificCategory11">
                {{specificCategory11.text}}
            </p>
        </div>
        <div
            class="bg-black/70 cardss text-white p-6 rounded-br-lg shadow-lg border border-gray-700 h-60 flex items-center justify-center relative group">
            <!-- Вопрос -->
            <p class="text-lg transition-opacity duration-300 tekts group-hover:opacity-0 uppercase " v-if="specificCategory12">
                {{specificCategory12.text}}
            </p>
            <!-- Ответ -->
            <p
                class="absolute top-0 left-0 right-0  bottom-0 answer text-yellow-500 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100 uppercase " v-if="specificCategory13">
                {{specificCategory13.text}}
            </p>
        </div>

    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
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
const specificCategory9 = ref(null);
const specificCategory12 = ref(null);
const specificCategory11 = ref(null);
const specificCategory13 = ref(null);
const Category = () => {
  return api
    .getOneCategory({ category_id: 8 })
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
      specificCategory12.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 12
      );
      specificCategory11.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 11
      );
      specificCategory9.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 9
      );
      specificCategory13.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 13
      );
      console.log(res.data);
    })
    .catch((error) => {
      console.error(`Ошибка при получении категории ${id}:`, error);
    });
};
onMounted(() => {
  Category();
});
</script>

<style>

</style>
<template>
  <div
    class="p-7 bg-gradient-to-r bg-opacity-50 from-blue-500 backdrop-blur-md to-purple-500 text-white mx-auto w-full max-w-[1320px] border border-white rounded-[12px]"
    data-aos="fade-down"
    data-aos-delay="1000"
  >
    <h2 class="text-3xl text-white font-bold text-left mb-4">
      <span class="text-white" v-if="specificCategory1">{{
        specificCategory1.text
      }}</span>
    </h2>
    <div class="p-6 rounded-lg">
      <div class="flex items-center justify-between">
        <div class="bg-gray-900 rounded-lg p-4 shadow-lg">
          <img src="../../assets/images/png/vector.png" alt="" />
        </div>
        <div class="w-full max-w-[450px]">
          <h2 class="text-white">
            <p class="mt-4 font-normal text-white text-[19px]" v-if="specificCategory2">
                {{ specificCategory2.text }}
            </p>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import api from "../../server/api";
const categories = ref("");
const specificCategory1 = ref(null);
const specificCategory2 = ref(null);
const specificCategory3 = ref(null);
const specificCategory4 = ref(null);
const specificCategory5 = ref(null);
const specificCategory6 = ref(null);
const specificCategory7 = ref(null);
const Category = () => {
  return api
    .getOneCategory({ category_id: 3 })
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

<style scoped></style>

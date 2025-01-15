<template>
  <div
    class="text-white mx-auto w-full max-w-[1320px] pt-[90px] pb-[140px]"
    data-aos="fade-down"
    data-aos-delay="1000"
  >
    <div class="flex items-center gap-[15px] mb-6">
      <i class="fa-solid fa-slash text-white"></i>
      <h2 class="text-[22px] font-normal text-white">
        <span class="text-white uppercase" v-if="specificCategory1">{{
          specificCategory1.text
        }}</span>
      </h2>
    </div>
    <Swiper
      :slidesPerView="5"
      :spaceBetween="0"
      pagination
      scrollbar
      class="rounded-[12px] w-full"
    >
      <SwiperSlide
        class="bg-gray-800 rounded-lg flex items-center justify-center p-4"
        style="width: 30%"
      >
        <img :src="`${url}media/516f54c0-45ad-4f06-8125-5a0b4b5e9310-effective-engineering.png`" alt="Company Logo" class="h-[180px]" />
      </SwiperSlide>
      <SwiperSlide
        class="bg-gray-800 rounded-lg flex items-center justify-center p-4"
        style="width: 30%"
      >
        <img :src="`${url}media/516f54c0-45ad-4f06-8125-5a0b4b5e9310-effective-engineering.png`" alt="Company Logo" class="h-[180px]" />
      </SwiperSlide>
      <SwiperSlide
        class="bg-gray-800 rounded-lg flex items-center justify-center p-4"
        style="width: 30%"
      >
        <img :src="`${url}media/b937c0a9-b808-475c-b52e-ad49dfc7445e-ideal.png`" alt="Company Logo" class="h-[180px]" />
      </SwiperSlide>
      <SwiperSlide
        class="bg-gray-800 rounded-lg flex items-center justify-center p-4"
        style="width: 30%"
      >
        <img :src="`${url}media/e6cf82e9-c17f-406f-af48-f41ddd369305-eco-bonu.png`" alt="Company Logo" class="h-[180px]" />
      </SwiperSlide>
      <SwiperSlide
        class="bg-gray-800 rounded-lg flex items-center justify-center p-4"
        style="width: 30%"
      >
        <img :src="`${url}media/d4bddc68-f79c-4653-90d3-84891bafcbd9-dehqon-uz.png`" alt="Company Logo" class="h-[180px]" />
      </SwiperSlide>
      <SwiperSlide
        class="bg-gray-800 rounded-lg flex items-center justify-center p-4"
        style="width: 30%"
      >
        <img :src="`${url}media/49c661fc-0c89-4d9f-b903-c2c9b0e2f3ab-dehqon-uz.png`" alt="Company Logo" class="h-[180px]" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import api from "../../server/api";
import baseurl from "../../server/baseurl";
const url = baseurl;
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
    .getOneCategory({ category_id: 4 })
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
const videos = ref("");
const sendData = async () => {
  try {
    const res = await api.createVideo(7);
    console.log("Успешный ответ:", res.data);
  } catch (error) {
    console.error("Ошибка запроса:", error);
  }
};

// const displayedItems = ref([...items]);

const shuffleItems = () => {
  const shuffled = [...displayedItems.value].sort(() => Math.random() - 0.5);
  displayedItems.value = shuffled;
};

onMounted(() => {
  Category();
  sendData();
  setInterval(shuffleItems, 3000); // Меняет местами каждые 3 секунды
});
</script>

<style scoped>
/* Добавьте любые нужные стили здесь */
</style>

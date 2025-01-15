<template>
  <div
    class="text-white mx-auto w-full max-w-[1320px] pt-[90px] pb-[140px]"
    data-aos="fade-down"
    data-aos-delay="1000"
  >
    <div class="flex items-center gap-[15px] mb-6">
      <i class="fa-solid fa-slash text-white"></i>
      <h2 class="text-[22px] font-normal">
        <span class="text-white uppercase" v-if="specificCategory1">{{ specificCategory1.text }}</span>
      </h2>
    </div>
    <Swiper
      :slidesPerView="3"
      :spaceBetween="20"
      pagination
      scrollbar
      class="rounded-[12px] w-full"
    >
      <SwiperSlide
        v-for="item in displayedItems"
        :key="item.id"
        class="bg-gray-800 rounded-lg flex items-center justify-center p-4"
        style="width: 18%"
      >
        <img :src="item.logo" alt="Company Logo" class="h-[180px]" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
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

const items = [
  { id: 1, logo: "https://via.placeholder.com/150x100?text=Parvoz" },
  { id: 2, logo: "https://via.placeholder.com/150x100?text=Eco+Bonu" },
  { id: 3, logo: "https://via.placeholder.com/150x100?text=Dehqon.uz" },
  { id: 4, logo: "https://via.placeholder.com/150x100?text=Effective+Engineering" },
  { id: 5, logo: "https://via.placeholder.com/150x100?text=Effective+Engineering" },
  { id: 6, logo: "https://via.placeholder.com/150x100?text=Effective+Engineering" },
];

const displayedItems = ref([...items]);

const shuffleItems = () => {
  const shuffled = [...displayedItems.value].sort(() => Math.random() - 0.5);
  displayedItems.value = shuffled;
};

onMounted(() => {
  Category();
  setInterval(shuffleItems, 3000); // Меняет местами каждые 3 секунды
});

</script>

<style scoped>
/* Добавьте любые нужные стили здесь */
</style>

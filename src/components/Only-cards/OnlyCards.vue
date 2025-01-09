<template>
    <div class="text-white mx-auto w-full max-w-[1320px] pt-[90px] pb-[140px]">
        <h2 class="text-[22px] font-normal mt-[40px] mb-6">
            <span class="blue">AYNI DAMDAGI FOYDALANUVCHILAR</span>
        </h2>
        <Swiper :slidesPerView="5" :spaceBetween="20" pagination scrollbar class="rounded-[12px] w-full">
            <SwiperSlide v-for="(item) in displayedItems" :key="item.id"
                class="bg-gray-800 rounded-lg flex items-center justify-center p-4" style="height: 180px;">
                <img :src="item.logo" alt="Company Logo" class="object-cover w-full" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css'; // Импортируем стили Swiper  

const items = [
    { id: 1, logo: 'https://via.placeholder.com/150x100?text=Parvoz' },
    { id: 2, logo: 'https://via.placeholder.com/150x100?text=Eco+Bonu' },
    { id: 3, logo: 'https://via.placeholder.com/150x100?text=Dehqon.uz' },
    { id: 4, logo: 'https://via.placeholder.com/150x100?text=Effective+Engineering' },
    { id: 5, logo: 'https://via.placeholder.com/150x100?text=Effective+Engineering' },
    { id: 6, logo: 'https://via.placeholder.com/150x100?text=Effective+Engineering' },
];

const displayedItems = ref([...items]);

const shuffleItems = () => {
    const shuffled = [...displayedItems.value].sort(() => Math.random() - 0.5);
    displayedItems.value = shuffled;
};

onMounted(() => {
    setInterval(shuffleItems, 3000); // Меняет местами каждые 3 секунды  
});
</script>

<style scoped>
/* Добавьте любые нужные стили здесь */
</style>

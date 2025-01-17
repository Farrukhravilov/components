<template>
  <div class="mt-[60px]">
    <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[20px]">
      <div v-for="card in cards" :key="card.id" :style="{ transition: 'all 1s ease-in-out' }"
        class="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <img :src="`${url}${card.image}`" :alt="card.title" class="w-full h-[100%] object-cover" />
        <div class="p-4 text-center">
          <h3 class="text-lg font-bold text-gray-900">{{ card.title }}</h3>
          <p class="text-sm text-gray-600">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import api from "../../server/api";
import baseurl from "../../server/baseurl";
const url = baseurl;

// Интерфейс карточки
interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
}

// Список карточек
const cards = ref<Card[]>([
  {
    id: 1,
    image: "media/468071bb-2fe4-44d7-b682-c6fc6699743a-eco-bonu.png",
    title: "Eco Bonu",
    description: "Carpet Cleaning",
  },
  {
    id: 2,
    image: "media/947041d1-78fd-493e-ad9a-b413903aec18-effective-engineering.png",
    title: "Effective Engineering",
    description: "Строительная компания",
  },
  {
    id: 3,
    image: "media/cf090d53-0242-40be-bb86-c93db200f89b-ideal.png",
    title: "IDEAL",
    description: "Швейное производство",
  },
  {
    id: 4,
    image: "media/d3c6f35a-8dfc-4f9b-ac78-b6fca4dae30b-parvoz.png",
    title: "Parvoz",
    description: "Gilam yuvish korxonasi",
  },
  {
    id: 5,
    image: "media/cf090d53-0242-40be-bb86-c93db200f89b-ideal.png",
    title: "IDEAL",
    description: "Швейное производство",
  },
  {
    id: 6,
    image: "media/468071bb-2fe4-44d7-b682-c6fc6699743a-eco-bonu.png",
    title: "Eco Bonu",
    description: "Carpet Cleaning",
  },
  {
    id: 7,
    image: "media/947041d1-78fd-493e-ad9a-b413903aec18-effective-engineering.png",
    title: "Effective Engineering",
    description: "Строительная компания",
  },
  {
    id: 8,
    image: "media/d3c6f35a-8dfc-4f9b-ac78-b6fca4dae30b-parvoz.png",
    title: "Parvoz",
    description: "Gilam yuvish korxonasi",
  },
]);

// Функция перемешивания карточек
const shuffleCards = () => {
  cards.value = [...cards.value].sort(() => Math.random() - 0.5);
};

onMounted(() => {
  shuffleCards();
  setInterval(() => {
    shuffleCards();
  }, 4000);
});
</script>

<style scoped></style>

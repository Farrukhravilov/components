<template>
    <div class="mt-[60px]">
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[20px]">
        <div
          v-for="(card, index) in cards"
          :key="card.id"
          :style="{ transition: 'all 1s ease-in-out' }"
          class="relative bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img :src="card.image" alt="Card Image" class="w-full h-40 object-cover" />
          <div class="p-4 text-center">
            <h3 class="text-lg font-bold text-gray-900">{{ card.title }}</h3>
            <p class="text-sm text-gray-600">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  // Интерфейс карточки
  interface Card {
    id: number;
    image: string;
    title: string;
    description: string;
  }
  
  // Список карточек
  const cards = ref<Card[]>([
    { id: 1, image: '/path/to/image1.png', title: 'Eco Bonu', description: 'Carpet Cleaning' },
    { id: 2, image: '/path/to/image2.png', title: 'Effective Engineering', description: 'Строительная компания' },
    { id: 3, image: '/path/to/image3.png', title: 'IDEAL', description: 'Швейное производство' },
    { id: 4, image: '/path/to/image4.png', title: 'Parvoz', description: 'Gilam yuvish korxonasi' },
    { id: 5, image: '/path/to/image1.png', title: 'Eco Bonu', description: 'Carpet Cleaning' },
    { id: 6, image: '/path/to/image2.png', title: 'Effective Engineering', description: 'Строительная компания' },
    { id: 7, image: '/path/to/image3.png', title: 'IDEAL', description: 'Швейное производство' },
    { id: 8, image: '/path/to/image4.png', title: 'Parvoz', description: 'Gilam yuvish korxonasi' },
  ]);
  
  // Перемешивание карточек
  const shuffleCards = () => {
    cards.value = [...cards.value].sort(() => Math.random() - 0.5);
  };
  
  // Автоматическая смена мест карточек
  onMounted(() => {
    setInterval(() => {
      shuffleCards();
    }, 3000); // Смена мест каждые 5 секунд
  });
</script>
  
<style scoped></style>
  
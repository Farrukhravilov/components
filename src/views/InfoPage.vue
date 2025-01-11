<template>
  <div
    class="relative z-100 h-[100%] bg-cover bg-center bg-fixed bg-[url('../assets/images/png/back-img-26055c57.png')]"
  >
    <div class="relative mx-auto w-full max-w-[1320px]">
      <h2
        class="text-white text-[51px] font-normal pt-[180px] uppercase text-center tracking-[5px]"
      >
        <span class="text-blue"
          >QURILISH DAVLAT <br />
          OBYEKTLARI</span
        >
        UCHUN DASTUR
      </h2>
    </div>
    <div
      class="flex items-center justify-between mx-auto w-full max-w-[1320px] pt-[130px] pb-[120px]"
    >
      <!-- Card 1 -->
      <div class="flex flex-col gap-[60px] w-[23%]">
        <div
          ref="cardRefs"
          class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 animate-fadeIn"
        >
          <img src="" alt="IDEAL Logo" class="w-full h-[180px] object-cover" />
        </div>
        <div
          ref="cardRefs"
          class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 animate-fadeIn"
        >
          <img src="" alt="Dehqon Logo" class="w-full h-[180px] object-cover" />
        </div>
      </div>
      <!-- Card 2 -->
      <!-- Card 3 -->
      <div
        ref="cardRefs"
        class="bg-white rounded-xl h-[60vh] w-[60vh] shadow-lg overflow-hidden transform transition duration-500 animate-fadeIn"
      >
        <img src="" alt="Eco Bonu Logo" class="w-full h-[180px] object-cover" />
      </div>
      <!-- Card 4 -->
      <div class="flex flex-col gap-[60px] w-[23%]">
        <div
          ref="cardRefs"
          class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 animate-fadeIn"
        >
          <img src="" alt="Effective Logo" class="w-full h-[180px] object-cover" />
        </div>
        <!-- Card 5 -->
        <div
          ref="cardRefs"
          class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 animate-fadeIn"
        >
          <img src="" alt="Another Logo" class="w-full h-[180px] object-cover" />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="p-10 text-white mx-auto w-full max-w-[1320px]">
      <h2 class="text-3xl font-bold text-center">
        <span class="blue">SAVDO HOZMAGLAR</span> UCHUN
      </h2>
      <p class="mt-4 font-normal text-white text-[20px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat
        deleniti alias esse, totam eaque assumenda amet minus et minima similique
        laboriosam atque beatae dolor optio ipsum ut maxime. Architecto obcaecati odio ab
        illo consectetur corporis dignissimos quis delectus iusto quasi. Quis animi libero
        iure doloribus, tenetur, dolore facere excepturi officia ad laborum doloremque
        eos. Ratione eligendi atque provident ea quibusdam reprehenderit facere odio quae,
        dolorem fugiat eveniet tempora quasi, cum blanditiis quidem perspiciatis iure
        deserunt fugit laudantium reiciendis labore praesentium? Cumque, eum excepturi
        quaerat perspiciatis recusandae quod modi deserunt ad! Et dolorum vero nemo
        corrupti quae non consequuntur ad!
      </p>
      <div
        class="p-12 bg-gradient-to-r from-blue-500 to-purple-500 mt-10 flex justify-around border border-white rounded-[16px] backdrop-blur-md bg-opacity-50"
      >
        <!-- Progress Bar 1 -->
        <div class="text-center flex items-center gap-[5px]">
          <div class="relative">
            <svg width="80" height="80" class="transform rotate-[-90deg]">
              <circle
                cx="40"
                cy="40"
                r="30"
                stroke="gray"
                stroke-width="8"
                fill="transparent"
              />
              <circle
                cx="40"
                cy="40"
                r="30"
                stroke="blue"
                stroke-width="8"
                fill="transparent"
                stroke-dasharray="188.4"
                stroke-dashoffset="70.62"
                class="transition duration-1000"
              />
            </svg>
            <span
              class="absolute left-1/2 top-1/2 text-white font-bold text-lg transform -translate-x-1/2 -translate-y-1/2"
              >81%</span
            >
          </div>
          <p class="mt-2 text-white text-[18px]">Ishingizni tezlashtadi</p>
        </div>
        <!-- Progress Bar 2 -->
        <div class="text-center flex items-center gap-[5px]">
          <div class="relative">
            <svg width="80" height="80" class="transform rotate-[-90deg]">
              <circle
                cx="40"
                cy="40"
                r="30"
                stroke="gray"
                stroke-width="8"
                fill="transparent"
              />
              <circle
                cx="40"
                cy="40"
                r="30"
                stroke="yellow"
                stroke-width="8"
                fill="transparent"
                stroke-dasharray="188.4"
                stroke-dashoffset="70.62"
                class="transition duration-1000"
              />
            </svg>
            <span
              class="absolute left-1/2 top-1/2 text-white font-bold text-lg transform -translate-x-1/2 -translate-y-1/2"
              >78%</span
            >
          </div>
          <p class="mt-2 text-white text-[18px]">Ishingizni tezlashtadi</p>
        </div>
        <!-- Progress Bar 3 -->
        <div class="text-center flex items-center gap-[5px]">
          <div class="relative">
            <svg width="80" height="80" class="transform rotate-[-90deg]">
              <circle
                cx="40"
                cy="40"
                r="30"
                stroke="gray"
                stroke-width="8"
                fill="transparent"
              />
              <circle
                cx="40"
                cy="40"
                r="30"
                stroke="green"
                stroke-width="8"
                fill="transparent"
                stroke-dasharray="188.4"
                stroke-dashoffset="70.62"
                class="transition duration-1000"
              />
            </svg>
            <span
              class="absolute left-1/2 top-1/2 text-white font-bold text-lg transform -translate-x-1/2 -translate-y-1/2"
              >63%</span
            >
          </div>
          <p class="mt-2 text-white text-[18px]">Ishingizni tezlashtadi</p>
        </div>
      </div>
      <img
        src="../assets/images/png/31040d80-0db7-42e5-8c62-681a9ae8a67c-Rectangle 15.png"
        class="w-[60%] mx-auto pt-[60px]"
        alt=""
      />
    </div>
    <!--  -->
    <div
      class="p-7 bg-gradient-to-r bg-opacity-50 from-blue-500 backdrop-blur-md to-purple-500 text-white mx-auto w-full max-w-[1320px] border border-white rounded-[12px]"
    >
      <h2 class="text-3xl font-bold text-left mb-4">
        <span class="text-white">FOYDALANUVCHILAR SONI</span>
      </h2>
      <div class="p-6 rounded-lg">
        <div class="flex items-center justify-between">
          <div class="bg-gray-900 rounded-lg p-4 shadow-lg">
            <img src="../assets/images/png/vector.png" alt="" />
          </div>
          <div class="w-full max-w-[450px]">
            <p class="mt-4 font-normal text-white text-[19px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <OnlyCards />
    <InfoVideo />
    <div class="pb-[40px]">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/Footer/Footer.vue";
import OnlyCards from "../components/Only-cards/OnlyCards.vue";
import InfoVideo from "../components/Info-Video/InfoVideo.vue";
// import InfoVideo from "../components/Info-Video/InfoVideo.vue;
import { onMounted, ref } from "vue";

// Создаем массив для хранения ссылок на карточки
const cardRefs = ref<HTMLDivElement[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "animate-fadeIn");
          observer.unobserve(entry.target); // Отключить наблюдение после появления
        }
      });
    },
    { threshold: 0.1 }
  );

  // Наблюдение за всеми карточками с помощью массива ref
  cardRefs.value.forEach((card) => {
    if (card) observer.observe(card); // Наблюдение за карточками
  });
});
</script>

<style scoped>
.blue {
  color: #0085ff;
}

html {
  height: 100%;
  width: 100%;
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes progressAnimation {
  0% {
    width: 0%;
  }

  100% {
    width: inherit;
    /* наследует конечное значение ширины */
  }
}

.animate-progress {
  animation: progressAnimation 1s forwards;
}
.text-blue {
  color: rgb(3, 44, 179);
}
</style>

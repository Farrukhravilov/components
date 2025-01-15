<template>
  <div
    class="relative z-100 h-[100%] bg-cover bg-center bg-fixed bg-[url('../assets/images/png/back-img-26055c57.png')]"
  >
    <Subtitle/>
    <div
      class="flex items-center justify-between mx-auto w-full max-w-[1320px] pt-[130px] pb-[120px]"
    >
      <!-- Card 1 -->
      <div class="flex flex-col gap-[60px] w-[23%]">
        <div
          ref="cardRefs"
          class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 animate-fadeIn"
        >
          <img :src="`${url}media/b937c0a9-b808-475c-b52e-ad49dfc7445e-ideal.png`" alt="IDEAL Logo" class="w-full h-[180px] object-cover" />
        </div>
        <div
          ref="cardRefs"
          class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 animate-fadeIn"
        >
          <img :src="`${url}media/d4bddc68-f79c-4653-90d3-84891bafcbd9-dehqon-uz.png`" alt="Dehqon Logo" class="w-full h-[180px] object-cover" />
        </div>
      </div>
      <!-- Card 2 -->
      <!-- Card 3 -->
      <div
        ref="cardRefs"
        class="bg-white rounded-xl h-[60vh] w-[60vh] shadow-lg overflow-hidden transform transition duration-500 animate-fadeIn"
      >
        <img :src="`${url}media/e6cf82e9-c17f-406f-af48-f41ddd369305-eco-bonu.png`" alt="Eco Bonu Logo" class="w-full h-[100%] object-cover" />
      </div>
      <!-- Card 4 -->
      <div class="flex flex-col gap-[60px] w-[23%]">
        <div
          ref="cardRefs"
          class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 animate-fadeIn"
        >
          <img :src="`${url}media/516f54c0-45ad-4f06-8125-5a0b4b5e9310-effective-engineering.png`" alt="Effective Logo" class="w-full h-[180px] object-cover" />
        </div>
        <!-- Card 5 -->
        <div
          ref="cardRefs"
          class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 animate-fadeIn"
        >
          <img :src="`${url}media/b937c0a9-b808-475c-b52e-ad49dfc7445e-ideal.png`" alt="Another Logo" class="w-full h-[180px] object-cover" />
        </div>
      </div>
    </div>
    <!--  -->
    <div
      class="p-10 text-white mx-auto w-full max-w-[1320px]"
      data-aos="fade-down"
      data-aos-delay="1000"
    >
      <h2
        class="text-3xl font-bold text-center"
        data-aos="fade-down"
        data-aos-delay="1000"
      >
        <span class="blue" v-if="specificCategory1" >{{specificCategory1.text}}</span>
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
        data-aos="fade-down"
        data-aos-delay="1000"
      >
        <!-- Progress Bar 1 -->
        <div
          class="text-center flex items-center gap-[5px]"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
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
          <p
            class="mt-2 text-white text-[18px]"
            data-aos="fade-down"
            data-aos-delay="1000"
            v-if="specificCategory3"
          >
            {{ specificCategory3.text }}
          </p>
        </div>
        <!-- Progress Bar 2 -->
        <div
          class="text-center flex items-center gap-[5px]"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
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
          <p
            class="mt-2 text-white text-[18px]"
            data-aos="fade-down"
            data-aos-delay="1000"
            v-if="specificCategory5"
          >
            {{ specificCategory5.text }}
          </p>
        </div>
        <!-- Progress Bar 3 -->
        <div
          class="text-center flex items-center gap-[5px]"
          data-aos="fade-down"
          data-aos-delay="1000"
        >
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
          <p
            class="mt-2 text-white text-[18px] text-white"
            data-aos="fade-down"
            data-aos-delay="1000"
            v-if="specificCategory3"
          >
            {{ specificCategory3.text }}
          </p>
        </div>
      </div>
      <img
        src="../assets/images/png/31040d80-0db7-42e5-8c62-681a9ae8a67c-Rectangle 15.png"
        class="w-[60%] mx-auto pt-[60px]"
        data-aos="fade-down"
        data-aos-delay="1000"
        alt=""
      />
    </div>
    <!--  -->
    <Users/>
    <OnlyCards />
    <InfoVideo />
    <div class="pb-[40px]">
      <Footer />
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import api from "../server/api";
import Footer from "../components/Footer/Footer.vue";
import OnlyCards from "../components/Only-cards/OnlyCards.vue";
import InfoVideo from "../components/Info-Video/InfoVideo.vue";
import Users from "../components/Users/Users.vue";
import Subtitle from "../components/Subtitle/Subtitle.vue";
import baseurl from "../server/baseurl";
const url = baseurl;

// Создаем массив для хранения ссылок на карточки
const cardRefs = ref<HTMLDivElement[]>([]);
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
    .getOneCategory({ category_id: 2 })
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
onMounted(() => {
  Category();
  sendData();
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
#fff {
  display:none;
}
.animate-progress {
  animation: progressAnimation 1s forwards;
}
.text-blue {
  color: rgb(3, 44, 179);
}
</style>

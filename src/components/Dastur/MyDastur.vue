<template>
  <div ref="container"
    class="w-full max-w-[1350px] mx-auto fixed max-1046:none bottom-[97px] left-[0px] right-[0px] border border-white-700 rounded-tr-3xl rounded-tl-3xl  transform translate-y-[100px] transition-all duration-700 ease-in-out max-1370:max-w-[1300px] max-1310:max-w-[1200px] max-1210:max-w-[100%] max-1210:mr-[15px] max-1210:ml-[15px]">
    <div class="p-4 ">
      <div class="flex cc items-center justify-between border-b border-white rounded pb-[0px] ">
        <div>
          <h2 class="text-2xl mb-4 text-white text-[23px] uppercase">
            Bizning dasturlarimiz:
          </h2>
        </div>
        <router-link to="/InfoPage" class="flex items-center justify-center mb-4 gap-[13px]">
          <h2 class="text-2xl text-white text-[20px] uppercase">
            BOSHQA DASTURLARIMIZ HAQIDA BATAFSIL
          </h2>
          <button class="text-white text-[26px]">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </router-link>
      </div>
      <div class="flex items-center justify-between cls grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-1370:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[20px] p-2 pt-[20px] eff bg-gradient-to-r from-gray-800 to-gray-900 backdrop bg-blue-900 bg-blue-500 max-1310:grid-cols-[repeat(auto-fill,minmax(230px,1fr))]
        max-1210:grid-cols[repeat(auto-fill,minmax(150px,1fr))]">
        <router-link to="/InfoPage"
          class="bg-gray-800 rounded-lg flex flex-col gap-[30px] h-[25vh] p-4 hover:scale-105 transition-transform relative group overflow-hidden">
          <div class="w-10 h-10 border-4 blue border-blue-600 rounded-full filter blur-[1.0px] shadow-lg animate-spin">
          </div>
          <p class="text-left text-white text-[30px] truncate overflow-hidden whitespace-nowrap max-1210:text-[25px]">
            Savdo hozmalar<br />uchun
          </p>
          <div class="effect"></div>
        </router-link>
        <router-link to="/InfoPage"
          class="bg-gray-800 rounded-lg p-4 flex flex-col gap-[30px] h-[25vh] hover:scale-105 gro transition-transform">
          <div class="w-10 h-10 border-4 yellow border-blue-600 rounded-full animate-spin"></div>
          <p class="text-left text-white text-[30px] max-1210:text-[25px]">
            Qurilish davlat<br />obyektlari uchun
          </p>
          <div class="effec"></div>
        </router-link>
        <router-link to="/InfoPage"
          class="bg-gray-800 rounded-lg p-4 flex flex-col gap-[30px] h-[25vh] gre hover:scale-105 transition-transform">
          <div class="w-10 h-10 border-4 green border-blue-600 rounded-full animate-spin"></div>
          <p class="text-left text-white text-[30px] max-1210:text-[25px]">Ishlab chiqarish</p>
          <div class="e"></div>
        </router-link>
        <router-link to="/InfoPage"
          class="bg-gray-800 rounded-lg p-4 flex flex-col gap-[15px] pur h-[25vh] hover:scale-105 transition-transform">
          <div class="w-10 h-10 border-4 purple border-blue-600 rounded-full animate-spin"></div>
          <p class="text-left text-white text-[30px] max-1210:text-[25px]">
            Qurilish<br />mahsulotlarini ishlab chiqarish
          </p>
          <div class="ef"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const container = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  if (container.value) {
    observer.observe(container.value);
  }
});
</script>

<style scoped>
/* Изначальное состояние элемента */
.opacity-0 {
  opacity: 0;
}

.transform {
  transform: translateY(100px);
}

.group:hover .effect {
  opacity: 0.5;
  bottom: 0;
}

/* .backdrop {
  backdrop-filter: blur(8px);
} */

.bg-blue-500 {
  color: blue;
}

.cls {
  background: linear-gradient(180deg, rgba(0, 46, 65, .29) 0%, rgba(0, 46, 65, 0) 100%);
  -webkit-backdrop-filter: blur(10.6903095245px);
  backdrop-filter: blur(10.6903095245px);
}

.cc {
  background: linear-gradient(180deg, rgba(0, 46, 65, .29) 0%, rgba(0, 46, 65, 0) 100%);
  -webkit-backdrop-filter: blur(10.6903095245px);
  backdrop-filter: blur(10.6903095245px);
}
</style>

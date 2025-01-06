<script setup lang="ts">
import Header from "../components/Header/Header.vue";
</script>

<template>
  <div class="relative z-55">
    <img class="w-full absolute z-22" src="../assets/images/png/back-img-26055c57.png" alt="" />
    <Header />
    <div class="text-3xl font-bold mt-[120px]">
      <div class="flex flex-col gap-[20px]">
        <div class="text-animation text-1 text-white text-center text-uppercase text-[45px]">BIZNESINGGIZGA <br> <span
            class="text-red-800">Oson</span> YECHIM TOPAMIZ</div>
        <div class="text-animation text-2 text-white text-center text-uppercase text-[45px]">Ishingizni <br>
          Osonlashtiramiz</div>
      </div>
    </div>
    <div class="w-full max-w-[1380px] m-auto fixed  bottom-[0] left-[10%] border border-white-700 rounded">
      <div class="p-4">
        <div class="flex items-center justify-between border-b border-white rounded pb-[0px]">
          <div class="">
            <h2 class="text-2xl mb-4 text-white text-[23px] uppercase">Bizning dasturlarimiz:</h2>
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-2xl mb-4 text-white text-[20px] uppercase">BOSHQA DASTURLARIMIZ HAQIDA BATAFSIL</h2>
            <button class="text-white">></button>
          </div>
        </div>
        <div class="flex items-center justify-between grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[20px] p-2 pt-[20px]">
          <div class="bg-gray-800  rounded-lg flex flex-col items-center justify-center h-[25vh] p-4 hover:scale-105 transition-transform">
            <i class="fas fa-shopping-cart text-white mb-2 block mx-auto"></i>
            <p class="text-center text-white text-[30px] ">Savdo hozmalar<br>uchun</p>
          </div>
          <div class="bg-gray-800  rounded-lg p-4  flex flex-col items-center justify-center h-[25vh] hover:scale-105 transition-transform">
            <i class="fas fa-building text-white mb-2 block mx-auto"></i>
            <p class="text-center text-white text-[30px] ">Qurilish davlat<br>obyektlari uchun</p>
          </div>
          <div class="bg-gray-800  rounded-lg p-4  flex flex-col items-center justify-center h-[25vh] hover:scale-105 transition-transform">
            <i class="fas fa-industry text-white mb-2 block mx-auto"></i>
            <p class="text-center text-white text-[30px] ">Ishlab chiqarish</p>
          </div>
          <div class="bg-gray-800  rounded-lg p-4 flex flex-col items-center justify-center h-[25vh] hover:scale-105 transition-transform">
            <i class="fas fa-tools text-white mb-2 block mx-auto"></i>
            <p class="text-center text-white text-[30px] ">Qurilish<br>mahsulotlarini ishlab chiqarish</p>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
    /* Прозрачность 0% в начале */
  }

  20% {
    opacity: 1;
    /* Появляется до 20% */
  }

  80% {
    opacity: 1;
    /* Остается видимым до 80% */
  }

  100% {
    opacity: 0;
    /* Исчезает к 100% */
  }
}

.text-animation {
  animation: fadeIn 4s infinite;
  /* Длительность анимации */
}

.text-1 {
  animation-delay: 0s;
  /* Первый текст отображается сразу */
}

.text-2 {
  animation-delay: 4s;
  /* Второй текст появляется после первого */
}
</style>
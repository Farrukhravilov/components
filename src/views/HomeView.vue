<script setup lang="ts">
import Header from "../components/Header/Header.vue";
import MyDastur from "../components/Dastur/MyDastur.vue";
</script>

<template>
  <div class="relative z-55">
    <img class="w-full absolute z-22" src="../assets/images/png/back-img-26055c57.png" alt="" />
    <!-- <Header /> -->
    <div class="text-3xl font-bold mt-[120px]">
      <div class="flex flex-col gap-[20px]">
        <div class="text-animation text-1 text-white text-center text-uppercase text-[45px]">BIZNESINGGIZGA <br> <span
            class="text-red-800">Oson</span> YECHIM TOPAMIZ</div>
        <div class="text-animation text-2 text-white text-center text-uppercase text-[45px]">Ishingizni <br>
          Osonlashtiramiz</div>
      </div>
    </div>
    <MyDastur/>
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
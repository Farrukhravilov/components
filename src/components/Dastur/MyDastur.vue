<template>
  <div
    class="w-full max-w-[1350px] mx-auto fixed  bottom-[0px]  left-[0px] right-[0px] border border-white-700 rounded-tr-3xl rounded-tl-3xl">
    <div class="p-4">
      <div class="flex items-center justify-between border-b border-white rounded pb-[0px]">
        <div class="">
          <h2 class="text-2xl mb-4 text-white text-[23px] uppercase">Bizning dasturlarimiz:</h2>
        </div>
        <div class="flex items-center justify-center mb-4 gap-[13px]">
          <h2 class="text-2xl text-white text-[20px] uppercase">BOSHQA DASTURLARIMIZ HAQIDA BATAFSIL</h2>
          <button class="text-white text-[26px]"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      <div
        class="flex items-center justify-between grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[20px] p-2 pt-[20px] eff">
        <router-link to="/InfoPage"
          class="bg-gray-800 rounded-lg flex flex-col gap-[30px]  h-[25vh] p-4 hover:scale-105 transition-transform relative group overflow-hidden">
          <div class="w-10 h-10 border-4 blue border-blue-600 rounded-full  filter blur-[1.0px] shadow-lg animate-spin">
          </div>
          <p class="text-left text-white text-[30px] truncate overflow-hidden whitespace-nowrap">Savdo hozmalar<br>uchun</p>

          <!-- Эффект подсветки -->
          <div class="effect">
          </div>
        </router-link>
        <!--  -->
        <router-link to="/InfoPage"
          class="bg-gray-800  rounded-lg p-4  flex flex-col gap-[30px]  h-[25vh] hover:scale-105 gro transition-transform">
          <div class="w-10 h-10 border-4 yellow border-blue-600 rounded-full animate-spin"></div>
          <p class="text-left text-white text-[30px]">Qurilish davlat<br>obyektlari uchun</p>
          <!--  -->
          <div class="effec"></div>
        </router-link>
        <!--  -->
        <router-link to="/InfoPage"
          class="bg-gray-800  rounded-lg p-4  flex flex-col gap-[30px] h-[25vh] gre hover:scale-105 transition-transform">
          <div class="w-10 h-10 border-4 green border-blue-600 rounded-full animate-spin"></div>
          <p class="text-left text-white text-[30px] ">Ishlab chiqarish</p>
          <!-- green -->
          <div class="e"></div>
        </router-link>
        <!--  -->
        <router-link to="/InfoPage"
          class="bg-gray-800  rounded-lg p-4 flex flex-col gap-[15px] pur  h-[25vh] hover:scale-105 transition-transform">
          <div class="w-10 h-10 border-4 purple border-blue-600 rounded-full animate-spin"></div>
          <p class="text-left text-white text-[30px] ">Qurilish<br>mahsulotlarini ishlab chiqarish</p>
          <div class="ef"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.group:hover .effect {
  opacity: 0.5;
  bottom: 0;
}
</style>
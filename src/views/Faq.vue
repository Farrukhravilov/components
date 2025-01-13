<template>
  <div
    class="relative z-100 h-[100%] bg-cover bg-center bg-fixed bg-[url('../assets/images/png/back-img-26055c57.png')] pt-[40px]"
  >
    <div class="relative w-full max-w-[1380px] mx-auto pb-[30px]">
      <div class="flex items-center gap-[15px] ">
        <i class="fa-solid fa-slash text-white"></i>
        <h2 class="uppercase text-[25px] mt-[0px] text-white text-[18px]">
        KO'P BERILADIGAN SAVOLLAR
        </h2>
      </div>
      <FaqSection />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/Footer/Footer.vue";
import FaqSection from "../components/Faq/FaqSection.vue";
</script>

<style></style>

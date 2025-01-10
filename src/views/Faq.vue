<template>
  <div class="relative z-100 h-[100%] bg-cover bg-center bg-fixed bg-[url('../assets/images/png/back-img-26055c57.png')] pt-[40px]">
    <!-- <img class="w-full fixed z-22 h-[100%]" src="../assets/images/png/back-img-26055c57.png" alt="" /> -->
    <!-- <Header /> -->
    <div class="relative w-full max-w-[1380px] mx-auto pb-[150px]">
      <h2 class="uppercase text-[25px] mt-[20px] text-white text-[18px]">KO'P BERILADIGAN SAVOLLAR</h2>
      <FaqSection/>
      <Footer />
    </div>
  </div>
</template>


<script setup lang="ts">
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import FaqSection from "../components/Faq/FaqSection.vue";
</script>


<style></style>
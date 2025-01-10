<template>
    <div class="relative z-55 h-[100vh]">
        <img class="w-full fixed z-22 h-[100%]" src="../assets/images/png/back-img-26055c57.png" alt="" />
        <Header/>
        <!-- <div class="relative mx-auto w-full max-w-[1320px] mt-[60px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase ">Video qo'llanma</h2>
            </div>
            <p class="text-white font-normal  mt-[15px] text-[18px]">Biz har bir mahsulotlrimiz uchun video qo’llanmalar tayyorlaymiz</p>
            <Video/>
        </div> -->
        <div class="mx-auto w-full max-w-[1320px] relative mt-[120px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase">Qo'shimcha</h2>
            </div>
            <!-- <SmallVideo/> -->
        </div> 
        <!-- <div class="w-full max-w-[1320px] mx-auto relative mt-[40px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase mb-[0px]">BIZ BILAN BOG'LANISH</h2>
            </div>
            <Footer/>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import Header from "../components/Header/Header.vue";
import SmallVideo from "../components/Video-S/SmallVideo.vue";
import Video from "../components/Video/Video.vue";
import Footer from "../components/Footer/Footer.vue";
</script>

<style>

</style>
<template>
    <div class="relative w-full z-100 h-[100%] bg-cover bg-center bg-fixed bg-[url('../assets/images/png/back-img-26055c57.png')] pt-[50px] ">
        <div class="relative mx-auto w-full max-w-[1320px] mt-[60px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase ">Video qo'llanma</h2>
            </div>
            <p class="text-white font-normal  mt-[15px] text-[18px]">Biz har bir mahsulotlrimiz uchun video qo’llanmalar tayyorlaymiz</p>
            <WatchVideo/>
        </div>
        <div class="mx-auto w-full max-w-[1320px] relative mt-[120px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase">Qo'shimcha</h2>
            </div>
            <VideosAll/>
        </div> 
        <div class="w-full max-w-[1320px] mx-auto relative mt-[40px] pb-[40px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase mb-[0px]">BIZ BILAN BOG'LANISH</h2>
            </div>
            <Footer/>
        </div> 
    </div>
</template>

<script setup lang="ts">
import Header from "../components/Header/Header.vue";
import VideosAll from "../components/Videos-All/VideosAll.vue";
import WatchVideo from "../components/Watch/WatchVideo.vue";
import Footer from "../components/Footer/Footer.vue";
</script>

<style>

</style>
<template>
    <div class="relative w-full z-100 h-[100%] bg-cover bg-center bg-fixed bg-[url('../assets/images/png/back-img-26055c57.png')]">
        <!-- <Header/> -->
        <div class="relative mx-auto w-full max-w-[1320px] mt-[60px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase ">Biz haqimizda</h2>
            </div>
            <Video />
        </div>
        <div class="mx-auto w-full max-w-[1320px] relative mt-[120px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase">MIJOZLARIMIz fikrlari</h2>
            </div>
            <SmallVideo />
        </div>
        <div class="mx-auto w-full max-w-[1320px] relative mt-[100px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase">BiZNING MIJOZLARIMIZ</h2>
            </div>
            <CustomersCard />
        </div>
        <div class="relative mx-auto max-w-[1320px] mt-[35px] pb-[30px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase">BiZNING MIJOZLARIMIZ</h2>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup lang="ts">
import Video from "../components/Video/Video.vue";
import SmallVideo from "../components/Video-S/SmallVideo.vue";
import CustomersCard from "../components/Customers-Card/CustomersCard.vue";
import Footer from "../components/Footer/Footer.vue";
</script>

<style></style>
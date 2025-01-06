<template>
    <header class="relative z-100 w-full max-w-[1380px] m-auto">
        <nav class="p-4">
            <ul class="flex justify-between items-center">
                <li>
                    <a  class=" text-white  hover:text-red-700 uppercase text-[25px]">Biz haqimizda</a>
                </li>
                <li>
                    <span class="text-white">•</span>
                </li>
                <li>
                    <a  class=" text-white  hover:text-red-700 uppercase text-[25px]">Aloqa uchun</a>
                </li>
                <li>
                    <span class="text-2xl text-white font-bold text-center mt-2 uppercase text-[30px]">CRUD GROUP</span>
                </li>
                <li>
                    <router-link to="/Faq" class=" text-white  hover:text-red-700 uppercase text-[25px]">FAQ</router-link>
                </li>
                <li>
                    <span class="text-white">•</span>
                </li>
                <li>
                    <a  class="text-white  hover:text-red-700 uppercase text-[25px]">Video kushimchalar</a>
                </li>
            </ul>
            <!-- <div class="text-2xl text-white font-bold text-center mt-2">CRUD GROUP</div> -->
        </nav>
    </header>
    <router-view />
</template>

<script setup lang="ts">

</script>


<style></style>
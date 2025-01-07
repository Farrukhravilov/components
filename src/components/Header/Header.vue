<template>
    <header class="relative z-100 w-full max-w-[1380px] m-auto">
        <nav class="p-4">
            <ul class="flex justify-between items-center">
                <li>
                    <router-link to="/About" class=" text-white  hover:text-red-700 uppercase text-[25px]">Biz
                        haqimizda</router-link>
                </li>
                <li>
                    <span class="text-white">•</span>
                </li>
                <li>
                    <a class=" text-white  hover:text-red-700 uppercase text-[25px]">Aloqa uchun</a>
                </li>
                <li>
                    <router-link to="/"
                        class="text-2xl text-white font-bold text-center mt-2 uppercase text-[30px]">CRUD
                        GROUP</router-link>
                </li>
                <li>
                    <router-link to="/Faq"
                        class=" text-white  hover:text-red-700 uppercase text-[25px]">FAQ</router-link>
                </li>
                <li>
                    <span class="text-white">•</span>
                </li>
                <li>
                    <a class="text-white  hover:text-red-700 uppercase text-[25px]">Video kushimchalar</a>
                </li>
            </ul>
        </nav>
    </header>
    <!-- <router-view /> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import api from "../../server/api";
import store from "@/store";
const getCategory = async () => {
    const res = await api.getCategory();
    console.log(res.data); // Выводим данные в консоль
}
getCategory();
</script>

<style></style>
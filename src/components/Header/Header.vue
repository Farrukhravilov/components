<template>
    <header class="relative z-100 w-full max-w-[1380px] m-auto">
        <nav class="p-4">
            <ul class="flex justify-between items-center">
                <li>
                    <router-link to="/About" class="text-white hover:text-red-700 uppercase text-[25px]"
                        active-class="active-link">
                        Biz haqimizda
                    </router-link>
                </li>
                <li>
                    <span class="text-white">•</span>
                </li>
                <li>
                    <router-link to="/Connection" class="text-white hover:text-red-700 uppercase text-[25px]"
                        active-class="active-link">
                        Aloqa uchun
                    </router-link>
                </li>
                <li>
                    <router-link to="/" class="text-2xl text-white font-bold text-center mt-2 uppercase text-[30px]"
                        active-class="active-link">
                        CRUD GROUP
                    </router-link>
                </li>
                <li>
                    <router-link to="/Faq" class="text-white hover:text-red-700 uppercase text-[25px]"
                        active-class="active-link">
                        FAQ
                    </router-link>
                </li>
                <li>
                    <span class="text-white">•</span>
                </li>
                <li>
                    <router-link to="/Videos" class="text-white hover:text-red-700 uppercase text-[25px]"
                        active-class="active-link">
                        Video kushimchalar
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
    <router-view />
</template>


<script setup lang="ts">
import { ref } from "vue";
import api from "../../server/api";
// import store from "@/store";
const getCategory = async () => {
    const res = await api.getCategory();
    console.log(res.data);
}
getCategory();
</script>

<style>
.active-link {
    color: #900;
}
</style>
<template>
    <div class="fixed w-[100%] h-screen top-0 bg-black border border-white filter transition-all duration-500 ease-out"
        :class="{ 'translate-x-[calc(100%-5%)]': isClosed }">
        <nav class="p-4 h-[82vh]">
            <ul class="flex flex-col gap-[20px] justify-between items-center">
                <li>
                    <router-link to="/"
                        class="text-2xl text-white font-bold text-center mt-2 mb-5 uppercase text-[30px]"
                        :class="{ active: $route.path == '/' }">
                        CRUD GROUP
                    </router-link>
                </li>
                <li>
                    <router-link to="/About"
                        class="text-white hover:text-red-700 uppercase text-[25px] hover:text-red-600">
                        Biz haqimizda
                    </router-link>
                </li>
                <li>
                    <router-link to="/Connection" class="text-white hover:text-red-700 uppercase text-[25px]"
                        :class="{ active: $route.path == '/Connection' }">
                        Aloqa uchun
                    </router-link>
                </li>
                <li>
                    <router-link to="/Faq" class="text-white hover:text-red-700 uppercase text-[25px]"
                        :class="{ active: $route.path == '/Faq' }">
                        FAQ
                    </router-link>
                </li>
                <li>
                    <router-link to="/Videos" class="text-white hover:text-red-700 uppercase text-[25px]"
                        :class="{ active: $route.path == '/Videos' }">
                        Video kushimchalar
                    </router-link>
                </li>
            </ul>
        </nav>
        <button @click="toggleMenu" class="btn">
            <i
                :class="['fas', isClosed ? 'fa-chevron-left' : 'fa-chevron-right', 'transition-transform duration-500 transform']"></i>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isClosed = ref(false);

const toggleMenu = () => {
    isClosed.value = !isClosed.value;
};
</script>

<style scoped>
.filter {
    backdrop-filter: blur(10.6903095245px);
    border-radius: 24px 0 0 24px;
}

.btn {
    position: absolute;
    top: calc(40% + 40px);
    left: -15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #900;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease-out;
}

.transition-all {
    transition: all 0.5s ease-out;
}
</style>

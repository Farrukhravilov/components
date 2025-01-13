<template>
    <div class="fixed h-screen top-0 left-[-30%] bg-[#091621] border-r border-[#fff] transition-all duration-500 ease-out"
        :class="{ 'w-[90%]': !isClosed, 'w-[300px]': isClosed }">
        <nav class="p-6 h-full flex flex-col items-center">
            <div class="logo text-white text-2xl font-bold mb-10">
                CRUD GROUP
            </div>
            <ul class="flex flex-col gap-6">
                <li>
                    <router-link to="/" class="text-white text-lg hover:text-[#d22] transition">
                        Главная
                    </router-link>
                </li>
                <li>
                    <router-link to="/about" class="text-white text-lg hover:text-[#d22] transition">
                        О нас
                    </router-link>
                </li>
                <li>
                    <router-link to="/services" class="text-white text-lg hover:text-[#d22] transition">
                        Услуги
                    </router-link>
                </li>
            </ul>
        </nav>
        <button @click="toggleMenu"
            class="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-[#d22] text-white flex items-center justify-center rounded-full shadow-lg">
            <i :class="['fas', isClosed ? 'fa-chevron-right' : 'fa-chevron-left']"></i>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isClosed = ref(true);

const toggleMenu = () => {
    isClosed.value = !isClosed.value;
};
</script>

<style scoped>
.logo {
    letter-spacing: 2px;
    text-transform: uppercase;
}
.fixed {
    border-radius: 0 24px 24px 0;
}
</style>

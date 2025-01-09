<template>
    <div class="relative h-32 overflow-hidden">
        <!-- Первый текст -->
        <div class="text-animation text-white text-center uppercase text-[46px] absolute w-full" :style="{
            transform: isFirstText ? 'translateY(0)' : 'translateY(-100%)',
            opacity: isFirstText ? 1 : 0,
            zIndex: 2
        }">
            BIZNESINGGIZGA
            <span class="text">Oson <br></span> YECHIM TOPAMIZ
        </div>
        <!-- Второй текст -->
        <div class="text-animation text-white text-center uppercase text-[46px] absolute w-full" :style="{
            transform: isFirstText ? 'translateY(100%)' : 'translateY(0)',
            opacity: isFirstText ? 0 : 1,
            zIndex: 1
        }">
            Ishingizni <br>
            Osonlashtiramiz
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Управление состоянием текста
const isFirstText = ref(true)
let intervalId: number

// Переключение состояния текста
const toggleText = () => {
    isFirstText.value = !isFirstText.value
}

// Установка интервала для смены текста
onMounted(() => {
    intervalId = setInterval(() => {
        toggleText()
    }, 4000) // Полный цикл (2 сек. анимация + 2 сек. пауза)
})

// Очистка интервала при размонтировании
onUnmounted(() => {
    clearInterval(intervalId)
})
</script>

<style scoped>
.text-animation {
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    position: absolute;
    width: 100%;
}

.text {
    color: rgb(177, 22, 22);
}
</style>

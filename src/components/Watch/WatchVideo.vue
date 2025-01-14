<template>
    <div class="flex justify-center items-center mt-[60px]">
        <div class="relative w-4/5 max-w-[80%] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <video ref="videoRef" :src="videoSrc" class="w-full h-auto rounded-t-lg" @play="onPlay" @pause="onPause"
                controls></video>
            <div class="absolute top-2 left-2">
                <span class="text-white text-lg font-bold">AVALON</span>
            </div>
            <div class="absolute inset-0 flex items-center justify-center" v-if="!isPlaying">
                <button class="bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"
                    @click="togglePlay">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.752 11.168l-5.197-3.074A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.074a1 1 0 000-1.664z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref,onMounted } from "vue";
import api from "../../server/api";

const videos = ref("");
const sendData = async () => {
  try {
    const response = await api.createVideo(6);
    console.log("Успешный ответ:", response.data);
  } catch (error) {
    console.error("Ошибка запроса:", error);
  }
};

// Пропсы
defineProps({
    videoSrc: {
        type: String,
        required: true,
    },
});

// Состояния
const videoRef = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(false);
// Методы
const togglePlay = () => {
    if (videoRef.value) {
        if (videoRef.value.paused) {
            videoRef.value.play();
            isPlaying.value = true;
        } else {
            videoRef.value.pause();
            isPlaying.value = false;
        }
    }
};

const onPlay = () => {
    isPlaying.value = true;
};

const onPause = () => {
    isPlaying.value = false;
};

onMounted(() => {
    sendData();
});
</script>

<style scoped></style>
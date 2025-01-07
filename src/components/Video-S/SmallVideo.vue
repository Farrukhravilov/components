<template>
    <div class="flex justify-center items-center mt-[50px]">
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="(video, index) in videos"
          :key="index"
          class="relative bg-gray-900 rounded-lg overflow-hidden shadow-md"
        >
          <video
            ref="videoRef"
            :src="video.src"
            class="w-full h-auto rounded-lg"
            @play="onPlay(index)"
            @pause="onPause(index)"
            controls
          ></video>
          <div class="absolute top-1 left-1">
            <span class="text-white text-sm font-semibold">AVALON</span>
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center"
            v-if="!video.isPlaying"
          >
            <button
              class="bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
              @click="togglePlay(index)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.752 11.168l-5.197-3.074A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.074a1 1 0 000-1.664z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  
  // Список видео
  const videos = ref([
    { src: "video1.mp4", isPlaying: false },
    { src: "video2.mp4", isPlaying: false },
    { src: "video3.mp4", isPlaying: false },
    { src: "video4.mp4", isPlaying: false },
  ]);
  
  const videoRefs = ref<HTMLVideoElement[]>([]);
  
  // Методы
  const togglePlay = (index: number) => {
    const video = videoRefs.value[index];
    if (video) {
      if (video.paused) {
        video.play();
        videos.value[index].isPlaying = true;
      } else {
        video.pause();
        videos.value[index].isPlaying = false;
      }
    }
  };
  
  const onPlay = (index: number) => {
    videos.value[index].isPlaying = true;
  };
  
  const onPause = (index: number) => {
    videos.value[index].isPlaying = false;
  };
  </script>
  
  <style scoped></style>
  
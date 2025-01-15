<template>
  <div class="flex justify-center items-center mt-[50px]">
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="relative bg-gray-900 rounded-lg overflow-hidden shadow-md"
      >
        <video
          ref="videoRefs"
          :src="`${url}media/${video}.mp4`"
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
          v-if="!isPlaying[index]"
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
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="relative bg-gray-900 rounded-lg overflow-hidden shadow-md"
      >
        <video
          ref="videoRefs"
          :src="`${url}media/${video}.mp4`"
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
          v-if="!isPlaying[index]"
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
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="relative bg-gray-900 rounded-lg overflow-hidden shadow-md"
      >
        <!-- :src="`${url}media/8b0eaec3-e90a-402f-8d7b-6960d09565fb-video.mp4`" -->
        <video
          ref="videoRefs"
          :src="`${url}media/${video}.mp4`"
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
          v-if="!isPlaying[index]"
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
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="relative bg-gray-900 rounded-lg overflow-hidden shadow-md"
      >
        <video
          ref="videoRefs"
          :src="`${url}media/${video}.mp4`"
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
          v-if="!isPlaying[index]"
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
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="relative bg-gray-900 rounded-lg overflow-hidden shadow-md"
      >
        <video
          ref="videoRefs"
          :src="`${url}media/${video}.mp4`"
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
          v-if="!isPlaying[index]"
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
import baseurl from "../../server/baseurl";
import { ref, onMounted } from "vue";
import api from "../../server/api";

const url = baseurl;
const videos = ref(["6b6f8ffa-2f0e-4dcf-8efb-83250b4d3bf8-video"]);
const videoRefs = ref<HTMLVideoElement[]>([]);
const isPlaying = ref<boolean[]>([]);

const sendData = async () => {
  try {
    const res = await api.createVideo(10);
    console.log("Успешный ответ:", res.data);
  } catch (error) {
    console.error("Ошибка запроса:", error);
  }
};

const togglePlay = (index: number) => {
  const video = videoRefs.value[index];
  if (video) {
    if (video.paused) {
      video.play();
      isPlaying.value[index] = true;
    } else {
      video.pause();
      isPlaying.value[index] = false;
    }
  }
};

const onPlay = (index: number) => {
  isPlaying.value[index] = true;
};

const onPause = (index: number) => {
  isPlaying.value[index] = false;
};

onMounted(() => {
  sendData();
});
</script>

<style scoped></style>

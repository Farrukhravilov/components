<template>
  <div>
    <div class="flex items-center justify-center mt-[20px] mb-[20px]">
        <button class="border border-gray-300 bg-blue-500 rounded p-2  text-white" @click="getLocation">Узнать моё местоположение</button>
    </div>
    <div id="map" style="height: 500px"></div>
    <div v-if="neighborhood" style="margin-top: 10px">
      Вы находитесь в районе: {{ neighborhood }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const map = ref<L.Map | null>(null);
const marker = ref<L.Marker | null>(null);
const neighborhood = ref<string | null>(null);

onMounted(() => {
  initMap();
});

function initMap() {
  map.value = L.map("map").setView([55.751244, 37.618423], 13); // Москва по умолчанию

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map.value);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        if (marker.value) {
          map.value?.removeLayer(marker.value);
        }
        marker.value = L.marker([lat, lon]).addTo(map.value);
        map.value?.setView([lat, lon], 13);

        // Параллельно получаем информацию о районе
        getNeighborhood(lat, lon);
      },
      (error) => {
        console.error("Ошибка получения геолокации:", error);
        alert("Не удалось получить ваше местоположение.");
      }
    );
  } else {
    alert("Geolocation не поддерживается данным браузером.");
  }
}

async function getNeighborhood(lat: number, lon: number) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );
    const data = await response.json();
    neighborhood.value = data.display_name; // сохраняем информацию о районе
  } catch (error) {
    console.error("Ошибка при получении района:", error);
  }
}
</script>

<style>
#map {
  height: 500px;
}
button {
    list-style: none;
    text-decoration: none;
}
</style>

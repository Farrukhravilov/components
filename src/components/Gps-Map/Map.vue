<template>
  <h2 class="text-center text-[40px] animate-heading hover:text-blue-500 hover:underline transition-all duration-500 ease-in-out">
      Farrukh MAP!
    </h2>
  <div>
    <div class="flex items-center justify-center mt-[20px] mb-[20px]">
      <button
        class="border border-gray-300 bg-blue-500 rounded p-2 text-white"
        @click="getLocation"
      >
        Узнать моё местоположение
      </button>
    </div>
    <div id="map" style="height: 500px"></div>
    <div v-if="neighborhood" style="margin-top: 10px">
      Вы находитесь в районе: {{ neighborhood }}
    </div>
    <div v-if="myLocation" class="text-center mt-2">
      <p>
        <strong>Вы находитесь здесь:</strong> {{ myLocation.lat }},
        {{ myLocation.lon }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder"; // Добавляем импорт для геокодера
import L from "leaflet";
import "leaflet-routing-machine";

const map = ref<L.Map | null>(null);
const myMarker = ref<L.Marker | null>(null);
const secondMarker = ref<L.Marker | null>(null); // Новый маркер для второй локации
const neighborhood = ref<string | null>(null);
const myLocation = ref<{ lat: number; lon: number } | null>(null);
let routingControl: L.Routing.Control | null = null; // Для управления маршрутом

onMounted(() => {
  initMap();
  // Добавление метода получения места при загрузке карты
  getLocation();
});

function initMap() {
  // Инициализация карты
  map.value = L.map("map").setView([55.751244, 37.618423], 13); // Москва по умолчанию

  // Добавляем слой карты
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map.value);

  // Устанавливаем обработчик кликов на карту
  map.value.on("click", onMapClick);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        myLocation.value = { lat, lon }; // Сохраняем текущие координаты

        // Удаляем предыдущий маркер, если он существует
        if (myMarker.value) {
          map.value?.removeLayer(myMarker.value);
        }

        // Добавляем маркер для текущего местоположения
        myMarker.value = L.marker([lat, lon]).addTo(map.value);
        map.value?.setView([lat, lon], 13); // Центрируем карту на моем местоположении

        // Добавляем всплывающее окно с информацией о текущем местоположении
        myMarker.value.bindPopup("Вы находитесь здесь!").openPopup();

        // Получаем информацию о районе
        getNeighborhood(lat, lon);
      },
      (error) => {
        console.error("Ошибка получения геолокации:", error);
        alert("Не удалось получить ваше местоположение.");
      }
    );
  } else {
    alert("Ваш браузер не поддерживает геолокацию.");
  }
}

async function getNeighborhood(lat: number, lon: number) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );
    const data = await response.json();
    neighborhood.value = data.display_name; // Сохраняем информацию о районе
  } catch (error) {
    console.error("Ошибка при получении района:", error);
  }
}

// Функция обработки клика по карте
function onMapClick(e: L.LeafletEvent) {
  if (!myLocation.value) {
    alert("Сначала нужно узнать ваше местоположение!");
    return;
  }

  // Получаем координаты точки клика
  const destination = L.latLng(e.latlng.lat, e.latlng.lng);

  // Если второй маркер уже существует, удалим его
  if (secondMarker.value) {
    map.value?.removeLayer(secondMarker.value);
  }

  // Добавляем новый маркер для второй локации
  secondMarker.value = L.marker([destination.lat, destination.lng]).addTo(
    map.value
  );

  // Удаляем старый маршрут, если он существует
  if (routingControl) {
    routingControl.setWaypoints([]); // Очищаем старый маршрут
  }

  // Создаем новый маршрут от текущего местоположения до выбранной точки
  routingControl = L.Routing.control({
    waypoints: [
      L.latLng(myLocation.value.lat, myLocation.value.lon), // Текущая позиция
      destination, // Точка назначения
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim(), // Это теперь должно работать
    styles: [
      { color: "blue", opacity: 0.7, weight: 5 }, // Стиль для маршрута от вашей локации
      { color: "green", opacity: 0.7, weight: 5 }, // Стиль для маршрута к точке назначения
    ],
    createMarker: () => null, // Убираем маркеры для промежуточных точек
  }).addTo(map.value);

  // Закрепляем маркеры в текущем месте
  myMarker.value.setLatLng([myLocation.value.lat, myLocation.value.lon]);
  secondMarker.value.setLatLng([destination.lat, destination.lng]);
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
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Применяем анимацию к заголовку */
.animate-heading {
  animation: fadeIn 1s ease-out;
}

h2:hover {
  text-decoration: underline;
  color: #3498db;
  
}
</style>
<!-- 1 -->
<!-- initMap: -->
<!-- Инициализирует карту, устанавливая её в центр Москвы с масштабом 13. -->
<!-- Добавляет слой OpenStreetMap. -->
<!-- Настроен обработчик для кликов на карту, который вызывает функцию onMapClick. -->

<!-- 2 -->
<!-- getLocation:

Проверяет, поддерживает ли браузер геолокацию.
Если поддерживает, запрашивает местоположение пользователя.
Добавляет маркер на карту для текущего местоположения и центрирует карту на этом месте. -->

<!-- 3 -->
<!-- getNeighborhood:

Выполняет запрос к API Nominatim для получения информации о районе на основе широты и долготы.
Сохраняет название района в переменную neighborhood. -->

<!-- 4 -->
<!-- onMapClick:

Обрабатывает клики на карту.
Если местоположение пользователя не определено, показывает сообщение.
Получает координаты точки клика и добавляет маркер для этой точки.
Создаёт маршрут между текущим местоположением и точкой назначения.
Настроены стили маршрута и отключение маркеров для промежуточных точек маршрута. -->
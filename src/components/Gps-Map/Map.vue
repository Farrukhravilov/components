<template>
  <div>
    <h2 class="animate-heading">Выберите категорию меток</h2>
    <div class="category-buttons"></div>
    <div id="mapContainer" style="height: 500px"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

let map: any;
let userLocation: number[] | undefined;
let previousRoute: any;

const initMap = (): void => {
  const mapContainer = document.getElementById("mapContainer");
  if (!mapContainer) return;

  map = new window.ymaps.Map(mapContainer, {
    center: [55.753215, 37.622504], // Центр по умолчанию
    zoom: 14,
  });

  // Установка текущей позиции пользователя
  getUserLocation().then((location) => {
    if (location) {
      userLocation = location;
      map.setCenter(location);
      const userPlacemark = new window.ymaps.Placemark(location, {
        hintContent: "Вы находитесь здесь",
        balloonContent: "Ваше текущее местоположение",
      });
      map.geoObjects.add(userPlacemark);
    }
  });

  // Добавление события на клик по карте
  map.events.add("click", (e: any) => {
    const coords = e.get("coords");
    console.log("Щелчок по карте, координаты:", coords);
    if (userLocation) {
      drawRoute(userLocation, coords);
    }
  });
};

// Получение местоположения пользователя
const getUserLocation = (): Promise<number[] | undefined> => {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          resolve(location);
        },
        (error) => {
          console.error("Ошибка получения местоположения:", error.message);
          resolve(undefined);
        }
      );
    } else {
      console.error("Geolocation не поддерживается браузером");
      resolve(undefined);
    }
  });
};

// Построение маршрута
const drawRoute = (startCoords: number[], endCoords: number[]): void => {
  if (!startCoords || !endCoords) return;

  window.ymaps
    .route([startCoords, endCoords])
    .then((route: any) => {
      if (route) {
        if (previousRoute) map.geoObjects.remove(previousRoute);

        map.geoObjects.add(route);
        previousRoute = route;

        const bounds = route.getBounds();
        if (bounds)
          map.setBounds(bounds, { checkZoomRange: true, zoomMargin: 10 });
      }
    })
    .catch((error) => {
      console.error("Ошибка при построении маршрута:", error.message);
    });
};

// Загрузка карт Yandex
const loadYandexMaps = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.ymaps) {
      resolve();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=431b3393-7782-439f-bbc2-c730862cc80d";
      script.onload = () => resolve();
      script.onerror = () =>
        reject(new Error("Не удалось загрузить Yandex Maps"));
      document.head.appendChild(script);
    }
  });
};

// Инициализация карты при монтировании
onMounted(async () => {
  try {
    await loadYandexMaps();
    await nextTick();
    window.ymaps.ready(initMap);
  } catch (error) {
    console.error("Ошибка загрузки карты:", error.message);
  }
});
</script>

<style scoped>
.category-buttons {
  margin-bottom: 10px;
}

.category-button {
  margin-right: 10px;
}

#mapContainer {
  height: 500px;
}
</style>

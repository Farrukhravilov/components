<template>  
  <div>  
    <h2 class="animate-heading">Выберите категорию меток</h2>  
    <div class="category-buttons">  
    </div>  
    <div id="mapContainer" style="height: 500px;"></div>  
  </div>  
</template>  

<script setup lang="ts">  
import { ref, onMounted, nextTick } from 'vue';  

// Данные категорий и меток  
const categoriesData = {  
  category1: [  
    { lat: 55.75222, lon: 37.61556, name: 'Метка 1 - Категория 1' },  
    { lat: 55.75159, lon: 37.61688, name: 'Метка 2 - Категория 1' },  
  ],  
  category2: [  
    { lat: 55.75583, lon: 37.61778, name: 'Метка 1 - Категория 2' },  
    { lat: 55.75651, lon: 37.61622, name: 'Метка 2 - Категория 2' },  
  ],  
  category3: [  
    { lat: 55.75444, lon: 37.61833, name: 'Метка 1 - Категория 3' },  
    { lat: 55.75333, lon: 37.61722, name: 'Метка 2 - Категория 3' },  
  ],  
};  

const activeCategory = ref('category1'); // Текущая активная категория  
let map: any; // Переменная для карты  
let userLocation: any; // Переменная для хранения местоположения пользователя  
let previousRoute: any; // Переменная для хранения предыдущего маршрута  

// Инициализация карты  
const initMap = () => {  
  const mapContainer = document.getElementById('mapContainer');  
  if (!mapContainer) {  
    console.error("Картографический контейнер не найден");  
    return;  
  }  

  // Создаем экземпляр карты  
  map = new window.ymaps.Map(mapContainer, {  
    center: [55.753215, 37.622504],  
    zoom: 14,  
  });  

  // Получаем текущее местоположение пользователя  
  getUserLocation();  

  // Добавляем обработчик щелчка по карте для построения маршрута  
  map.events.add('click', (e) => {  
    const coords = e.get('coords'); // Получаем координаты щелчка  
    if (userLocation) {  
      drawRoute(userLocation, coords); // Рисуем маршрут от пользователя до выбранных координат  
    }  
  });  

  showCategory(activeCategory.value); // Показываем начальную категорию  
};  

// Функция для отображения меток выбранной категории  
const showCategory = (category: string) => {  
  if (!map) {  
    console.error("Карта не инициализирована");  
    return;  
  }  

  map.geoObjects.removeAll(); // Удаляем все метки на карте  

  categoriesData[category].forEach((item) => {  
    const placemark = new window.ymaps.Placemark([item.lat, item.lon], {  
      hintContent: item.name,  
      balloonContent: item.name,  
    });  

    map.geoObjects.add(placemark); // Добавляем метку на карту  
  });  

  activeCategory.value = category; // Обновляем активную категорию  
};  

// Функция для получения местоположения пользователя  
const getUserLocation = () => {  
  if (navigator.geolocation) {  
    navigator.geolocation.getCurrentPosition(position => {  
      userLocation = [position.coords.latitude, position.coords.longitude]; // Сохраняем местоположение  
      const userPlacemark = new window.ymaps.Placemark(userLocation, {  
        hintContent: 'Вы находитесь здесь',  
        balloonContent: 'Ваше текущее местоположение'  
      });  

      map.geoObjects.add(userPlacemark); // Добавляем маркер пользователя на карту  
      map.setCenter(userLocation); // Центрируем карту на местоположении пользователя  
    }, () => {  
      console.error("Не удалось получить местоположение пользователя");  
    });  
  } else {  
    console.error("Geolocation не поддерживается браузером");  
  }  
};  

// Функция для рисования маршрута  
const drawRoute = (startCoords: number[], endCoords: number[]) => {  
  window.ymaps.route([startCoords, endCoords]).then((route) => {  
    // Проверяем, был ли маршрут успешно найден  
    if (route) {  
      // Удаляем предыдущий маршрут, если он существует  
      if (previousRoute) {  
        map.geoObjects.remove(previousRoute);  
      }  

      map.geoObjects.add(route); // Добавляем новый маршрут на карту  
      previousRoute = route; // Сохраняем текущий маршрут как предыдущий  

      // Центрируем карту на маршруте  
      const bounds = route.getBounds();  
      if (bounds) {  
        map.setBounds(bounds);  
      } else {  
        console.error("Не удалось получить границы маршрута");  
      }  
    } else {  
      console.error("Маршрут не найден");  
    }  
  }).catch((error) => {  
    console.error("Ошибка при построении маршрута:", error);  
  });  
};  

// Функция для загрузки Yandex Maps  
const loadYandexMaps = (): Promise<void> => {  
  return new Promise((resolve, reject) => {  
    if (window.ymaps) {  
      resolve(); // Здесь мы не возвращаем данных, просто вызываем resolve  
    } else {  
      const script = document.createElement('script');  
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=9566ee55-2ca3-40b5-b63b-8723f58700af"; // Замените на ваш API ключ  
      script.onload = () => resolve();  
      script.onerror = () => reject(new Error('Не удалось загрузить Yandex Maps'));  
      document.head.appendChild(script);  
    }  
  });  
};   

// Загрузка Yandex Maps и инициализация карты при монтировании компонента  
onMounted(async () => {  
  try {  
    await loadYandexMaps();  
    await nextTick();  
    window.ymaps.ready(initMap);  
  } catch (error) {  
    console.error('Ошибка загрузки карты:', error);  
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
  height: 500px; /* Высота карты */  
}  
</style>
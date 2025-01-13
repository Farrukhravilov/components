import { createApp } from "vue";  
import "mdb-vue-ui-kit/css/mdb.min.css";  
import "./assets/main.css";  
import "@fortawesome/fontawesome-free/css/all.css";  
import "./assets/global.css";  
import VueTheMask from "vue-the-mask";  
import { createPinia } from 'pinia'; // Подключаем Pinia  
import i18next from "./i18"; // Импортируем i18next  
import 'aos/dist/aos.css'; // Импорт стилей AOS  
import Toast, { POSITION } from 'vue-toastification';   
import AOS from 'aos';  
import App from "./App.vue";  
import router from "./router";  

// Импорт Naive UI и необходимых компонентов  
import { create, NButton, NInput, NDynamicInput } from "naive-ui";  

// Импорт PrimeVue и компонентов  
import PrimeVue from "primevue/config";  
import FloatLabel from "primevue/floatlabel";  
import AutoComplete from "primevue/autocomplete";  

// Создаем инстанс Naive UI с необходимыми компонентами  
const naive = create({  
  components: [NButton, NInput, NDynamicInput],  
});  

// Инициализация AOS для анимации  
AOS.init({  
  duration: 600, // Длительность анимации
  easing: 'ease-in-out', // Тип сглаживания
  once: false, // Анимация выполняется только один раз
});  

window.addEventListener('scroll', function() {
  AOS.refresh(); // Обновляем AOS каждый раз при прокрутке
});

// Создаем приложение Vue  
const app = createApp(App);  

// Регистрация метода для получения переводов  
app.config.globalProperties.$t = (key: string) => {  
  return i18next.t(key); // Используем метод t из i18next  
};  

// Подключаем плагины  
app.use(VueTheMask);  
app.use(naive);  
app.use(PrimeVue);  
app.use(router);  
// app.use(loading);
app.use(createPinia());  

// Подключаем Toast  
app.use(Toast, {  
  position: POSITION.TOP_RIGHT, // Позиция уведомлений  
  timeout: 5000, // Время отображения (в миллисекундах)  
  closeOnClick: true, // Закрыть при клике  
  pauseOnHover: true, // Приостановить таймер при наведении  
  draggable: true, // Сделать уведомления перетаскиваемыми  
  draggablePercent: 0.6, // Процент ширины при перетаскивании  
  showCloseButtonOnHover: true, // Показать кнопку закрытия при наведении  
  // Вы можете добавить другие настройки по желанию  
});  

// Регистрация компонентов PrimeVue  
app.component("FloatLabel", FloatLabel);  
app.component("AutoComplete", AutoComplete);  

// Монтируем приложение  
app.mount("#app");
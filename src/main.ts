import { createApp } from "vue";
import "mdb-vue-ui-kit/css/mdb.min.css";
import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/global.css";
import VueTheMask from "vue-the-mask";
import { createPinia } from 'pinia'  // Подключаем Pinia
import i18next from "./i18"; // Импортируем i18next
import 'aos/dist/aos.css'; // Импорт стилей AOS
import AOS from 'aos';
import App from "./App.vue";
import router from "./router";

// Импорт Naive UI и необходимых компонентов
import { create, NButton, NInput, NDynamicInput } from "naive-ui";

// Импорт PrimeVue и компонентов
import PrimeVue from "primevue/config";
import FloatLabel from "primevue/floatlabel";
import AutoComplete from "primevue/autocomplete";

// Импорт стилей PrimeVue

// Создаем инстанс Naive UI с необходимыми компонентами
const naive = create({
  components: [NButton, NInput, NDynamicInput],
});

AOS.init({
  duration: 800, // Длительность анимации в миллисекундах
  easing: 'ease-in-out', // Стиль анимации
  once: true, // Анимация запускается только один раз
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
app.use(createPinia());
// Регистрация компонентов PrimeVue
app.component("FloatLabel", FloatLabel);
app.component("AutoComplete", AutoComplete);

// Монтируем приложение
app.mount("#app");

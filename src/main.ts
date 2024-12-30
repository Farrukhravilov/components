import { createApp } from "vue";
import "mdb-vue-ui-kit/css/mdb.min.css";
import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/global.css";
import VueTheMask from "vue-the-mask";
import i18next from "./i18"; // Импортируем i18next
import App from "./App.vue";

// Создаем приложение Vue
const app = createApp(App);

// Регистрация метода для получения переводов
app.config.globalProperties.$t = (key: string) => {
  return i18next.t(key); // Используем метод t из i18next
};

// Подключаем остальные плагины
app.use(VueTheMask);
app.mount("#app");

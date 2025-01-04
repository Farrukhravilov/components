import { createApp } from "vue";
import "mdb-vue-ui-kit/css/mdb.min.css";
import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/global.css";
import VueTheMask from "vue-the-mask";
import i18next from "./i18"; // Импортируем i18next
import App from "./App.vue";

// Импорт Naive UI и необходимых компонентов
import { create, NButton, NInput, NDynamicInput } from "naive-ui";

// Создаем инстанс Naive UI с необходимыми компонентами
const naive = create({
  components: [NButton, NInput, NDynamicInput],
});

// Создаем приложение Vue
const app = createApp(App);

// Регистрация метода для получения переводов
app.config.globalProperties.$t = (key: string) => {
  return i18next.t(key); // Используем метод t из i18next
};

// Подключаем плагины и Naive UI
app.use(VueTheMask);
app.use(naive);

app.mount("#app");

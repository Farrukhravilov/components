import { createApp } from "vue";
import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import VueTheMask from "vue-the-mask";
import App from "./App.vue";
const app = createApp(App);
app.use(VueTheMask).mount("#app");

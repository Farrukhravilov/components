import { createApp } from "vue";
import 'mdb-vue-ui-kit/css/mdb.min.css'; 
import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import VueTheMask from "vue-the-mask";
import App from "./App.vue";
const app = createApp(App);
app.use(VueTheMask).mount("#app");

import { createApp } from "vue";
import "@css/style.css";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import "@css/bootstrap.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "@css/vue-slider.css";

const app = createApp(App);

app.use(router);
app.mount("#app");

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

import Tooltip from "primevue/tooltip";

app.directive("tooltip", Tooltip);

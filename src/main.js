import { createApp } from "vue";
import App from "./App.vue";
import i18nSample from "./locales";
import router from "./router";
import VueCookies from "vue-cookies";

createApp(App).use(VueCookies).use(i18nSample).use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import i18nSample from "./locales";
import router from "./router";
import VueCookies from "vue-cookies";
import BootstrapVue3 from "bootstrap-vue-3";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App)
	.use(VueCookies)
	.use(i18nSample)
	.use(router)
	.use(BootstrapVue3)
	.use(VueAwesomeSwiper)
	.mount("#app");

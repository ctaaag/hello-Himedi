import { createI18n } from "vue-i18n";

const messages = {
	"ar-SA": {
		text: "مرحبًا ، عالم vue",
	},
	"en-US": {
		text: "hello,vue world",
	},
	"ru-RU": {
		text: "привет, вью мир",
	},
};

const i18nSample = createI18n({
	locale: navigator.language,
	fallbackLocale: "ar-SA",
	messages,
});

export default i18nSample;

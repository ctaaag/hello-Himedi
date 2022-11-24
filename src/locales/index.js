import { createI18n } from "vue-i18n";

const messages = {
	"ar-SA": {
		text: "مرحبًا ، عالم vue",
	},
	"ar-AE": {
		banana: "{n}موزة | {n}حبة موز  | {n}موز | {n} موزات ",
	},
	"en-US": {
		text: "hello,vue world",
		banana: "banana | bananas",
	},
	"en-GB": {
		banana: "banana | bananas",
	},
	"ru-RU": {
		text: "привет, вью мир",
		banana: "{n} банан | {n} банана | {n} бананов",
	},
};

const i18nSample = createI18n({
	locale: navigator.language,
	fallbackLocale: "ar-AE",
	pluralizationRules: {
		"ar-AE": function (choice) {
			console.log("3", choice);
			if (choice <= 10) {
				if (choice === 1) {
					return 0;
				} else if (choice === 2) {
					return 1;
				} else if (choice === 0 || choice % 2 === 1 || choice === 8) {
					return 2;
				} else {
					return 3;
				}
			} else {
				return 0;
			}
		},
		"ru-RU": function (choice) {
			if (choice >= 5 && choice <= 20) {
				return 2;
			} else {
				if (choice % 10 === 1) {
					return 0;
				} else if (
					choice % 10 === 2 ||
					choice % 10 === 3 ||
					choice % 10 === 4
				) {
					return 1;
				} else {
					return 2;
				}
			}
		},
	},
	messages,
});

export default i18nSample;

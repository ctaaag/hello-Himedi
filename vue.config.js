const { defineConfig } = require("@vue/cli-service");
const WebpackRTLPlugin = require("webpack-rtl-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = defineConfig({
	transpileDependencies: true,

	pluginOptions: {
		i18n: {
			locale: "en",
			fallbackLocale: "en",
			localeDir: "locales",
			enableLegacy: true,
			runtimeOnly: false,
			compositionOnly: true,
			fullInstall: true,
		},
	},

	configureWebpack: {
		plugins: [new WebpackRTLPlugin({})],
	},

	css: {
		extract: {
			filename: "[name].css",
		},
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/assets/scss/index.scss";
				`,
			},
		},
	},
	devServer: {
		proxy: {
			"/api": {
				changeOrigin: true,
				pathRewrite: {
					"/api": "",
				},
				target: "https://dev.gateway.himedi.com/",
			},
		},
	},
});

<template>
	<div style="text-align: center">
		<span>언어 선택 </span>
		<select name="langList" v-model="selectedLang" @change="changeSelect()">
			<option
				v-for="(item, key) in langData"
				v-bind:key="key"
				:value="item.lang"
			>
				{{ item.title }}
			</option>
		</select>

		<br />
		<span>선호하는 언어</span>
		<select
			name="langList"
			v-model="favoriteLang"
			@change="changeFavoriteLang()"
		>
			<option
				v-for="(item, key) in langData"
				v-bind:key="key"
				:value="item.lang"
			>
				{{ item.title }}
			</option>
		</select>

		<p>쿠키값: {{ this.$cookies.get("lang") }}</p>

		<p>결과 : {{ $t("text") }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			langData: [
				{ title: "Arabic", lang: "ar-SA" },
				{ title: "English", lang: "en-US" },
				{ title: "Russian", lang: "ru-RU" },
			],
			selectedLang: "ar-SA",
			favoriteLang: "",
		};
	},
	methods: {
		changeSelect() {
			this.$i18n.locale = this.selectedLang;
		},
		changeFavoriteLang() {
			this.$cookies.set("lang", `${this.favoriteLang}`);
		},
	},
	created() {
		if (this.$cookies.isKey("lang")) {
			this.favoriteLang = this.$cookies.get("lang");
			this.$i18n.locale = this.favoriteLang;
		} else {
			this.$i18n.locale = navigator.language;
			console.log(navigator.language);
		}
	},
};
</script>

<style></style>

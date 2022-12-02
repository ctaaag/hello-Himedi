<template lang="">
	<div style="text-align: center">
		<span>Select Locale </span>
		<select v-model="selectedLangData" @change="selectChange">
			<option v-for="(lang, index) in langData" :key="index" :value="lang">
				{{ lang.title }}
			</option>
		</select>

		<p>Currency : {{ currencyShow() }}</p>
		<!-- vueI18n 메서드 활용 -->
		<!-- <p>{{ $n(3000, "currency", selectedLangData.localeCode) }}</p> -->
		<br />

		<span> Count of 🍌 </span>
		<input type="number" v-model="bananaNumber" />
		<p>{{ countShow() }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			langData: [
				{ title: "Arabic-UAE", localeCode: "ar-AE", currencyCode: "AED" },
				{ title: "English-US", localeCode: "en-US", currencyCode: "USD" },
				{ title: "English-UK", localeCode: "en-GB", currencyCode: "GBP" },
				{ title: "Russian-RU", localeCode: "ru-RU", currencyCode: "RUB" },
			],
			selectedLangData: {
				title: "Arabic-UAE",
				localeCode: "ar-AE",
				currencyCode: "AED",
			},
			currencyNumber: 3000,
			bananaNumber: 0,
		};
	},
	methods: {
		selectChange() {
			this.$i18n.locale = this.selectedLangData.localeCode;
		},
		currencyShow() {
			return new Intl.NumberFormat(this.selectedLangData.localeCode, {
				style: "currency",
				currency: this.selectedLangData.currencyCode,
			}).format(this.currencyNumber);
		},
		countShow() {
			return this.selectedLangData.localeCode === "en-US" ||
				this.selectedLangData.localeCode === "en-GB"
				? this.changeSuffixes()
				: this.$tc("banana", this.bananaNumber);
		},
		changeSuffixes() {
			let suffixes;

			const bananaPluralCheck = new Intl.PluralRules(
				this.selectedLangData.localeCode
			).select(this.bananaNumber);

			if (
				this.selectedLangData.localeCode === "en-US" ||
				this.selectedLangData.localeCode === "en-GB"
			) {
				suffixes = new Map([
					["one", "banana"],
					["other", "bananas"],
				]);
				return `${this.bananaNumber} ${suffixes.get(bananaPluralCheck)}`;
			}
		},
	},
};
</script>
<style lang=""></style>

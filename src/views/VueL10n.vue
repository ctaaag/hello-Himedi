<template lang="">
	<span>Select Locale </span>
	<select v-model="selectedLangData" @change="selectChange">
		<option v-for="(lang, index) in langData" :key="index" :value="lang">
			{{ lang.title }}
		</option>
	</select>

	<p>
		Currency :
		{{
			new Intl.NumberFormat(selectedLangData.localeCode, {
				style: "currency",
				currency: selectedLangData.currencyCode,
			}).format(currencyNumber)
		}}
	</p>
	<br />
	<span> Count of 🍌 </span>
	<input type="number" v-model="bananaNumber" />
	<p>
		{{
			selectedLangData.localeCode === "en-US" ||
			selectedLangData.localeCode === "en-GB"
				? changeSuffixes()
				: $tc("banana", bananaNumber)
		}}
	</p>
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
		changeSuffixes() {
			let suffixes;

			const bananaPluralCheck = new Intl.PluralRules(
				this.selectedLangData.localeCode
			).select(this.bananaNumber);

			console.log("check", bananaPluralCheck);

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
	created() {
		console.log(this.selectedLangData);
	},
};
</script>
<style lang=""></style>

<template lang="">
	<div class="webfont_wrapper">
		<select name="" id="" v-model="selectedLangData" @change="selectChange">
			<option
				v-for="(selectedLang, index) in langData"
				:key="index"
				:value="selectedLang"
			>
				{{ selectedLang.name }}
			</option>
		</select>
		<div :class="[selectedLangData.value === 'en' ? 'english' : 'arabic']">
			<p :lang="selectedLangData.value">{{ selectedLangData.contents }}</p>
			{{ selectedLangData.contents }}
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			langData: [
				{ name: 'English', value: 'en', contents: 'Hello, Font World' },
				{ name: 'Arabic', value: 'ar', contents: 'مرحبا عالم الخط' },
			],
			selectedLangData: {
				name: 'English',
				value: 'en',
				contents: 'Hello, Font World',
			},
		};
	},
	methods: {
		selectChange() {
			console.log(this.selectedLangData);
		},
	},
};
</script>
<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
// @font-face {
// 	font-family: Noto;
// 	src: url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap");
// 	font-weight: 300;
// }

// @font-face {
// 	font-family: Dancing Script;
// 	src: url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap')
// 		format('woff2');
// 	font-weight: 400;
// }

// @font-face {
// 	font-family: Noto;
// 	src: url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap");
// 	font-weight: 700;
// }

// @font-face {
// 	font-family: Noto2;
// 	src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300&display=swap");
// 	font-weight: 300;
// }

// @font-face {
// 	font-family: Noto2;
// 	src: url("https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300&display=swap");
// 	font-weight: 400;
// }

// @font-face {
// 	font-family: Noto2;
// 	src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@700&display=swap");
// 	font-weight: 700;
// }

.webfont_wrapper {
	// font-family: Noto;
	text-align: center;
	margin: 0 auto;
	padding: 20px;
}

.english {
	font-family: 'Dancing Script';
	font-weight: 400;
}

// .arabic {
// 	// font-family: TestFont;
// }
</style>

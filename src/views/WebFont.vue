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
		<div>
			<p :lang="selectedLangData.value" :class="selectedLangData.name">
				{{ selectedLangData.contents }}
			</p>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			langData: [
				{ name: 'none', value: 'ko', contents: '폰트 적용 없음' },
				{ name: 'English', value: 'en-US', contents: 'Hello, Font World' },
				{ name: 'Arabic', value: 'ar', contents: 'مرحبا عالم الخط' },
				{ name: 'British', value: 'en-GB', contents: 'Hello, Font World' },
			],
			selectedLangData: {
				name: 'none',
				value: 'ko',
				contents: '폰트 적용 없음',
			},
		};
	},
	methods: {
		selectChange() {
			console.log(this.selectedLangData);
		},
		// fileUploadClick(e) {
		// 	let file = e.target.files[0];
		// 	let url = URL.createObjectURL(file);
		// 	console.log(url);
		// 	const itemImage = this.$refs.test2;
		// 	itemImage.src = URL.createObjectURL(file);
		// 	console.log(itemImage.src);
		// 	itemImage.width = '200'; // 이미지 넓이

		// },
	},
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;400;500;600');

// @font-face {
// 	font-family: Noto;
// 	src: url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap');
// 	font-weight: 300;
// }

// @font-face {
// 	font-family: Dancing Script;
// 	src: url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
// 	font-weight: 400;
// }

// @font-face {
// 	font-family: Dancing Script;
// 	src: url('https://fonts.gstatic.com/s/dancingscript/v24/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3Sup8hNX6plRP.woff2');
// 	font-weight: 400;
// }

// @font-face {
// 	font-family: Noto Sans;
// 	src: url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');
// 	font-weight: 700;
// }

// @font-face {
// 	font-family: Noto2;
// 	src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300&display=swap');
// 	font-weight: 300;
// }

// @font-face {
// 	font-family: Noto2;
// 	src: url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300&display=swap');
// 	font-weight: 400;
// }

// @font-face {
// 	font-family: Noto2;
// 	src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@700&display=swap');
// 	font-weight: 700;
// }

.webfont_wrapper {
	// font-family: Noto;
	text-align: center;
	margin: 0 auto;
	padding: 20px;
}

:lang(en-US) {
	font-family: Noto Sans;
	// display: swap;
	font-display: swap;
}

:lang(en-GB) {
	font-family: Dancing Script;
	// display: swap;
	font-display: fallback;
}

:lang(ar) {
	font-family: Noto Sans Arabic;
	font-weight: 600;
	font-display: optional;
}
</style>

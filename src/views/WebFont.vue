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
			<p>not use lang</p>
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
	},
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&display=block');
// @import url('https://fonts.googleapis.com/css2?family=Dancing+Script');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;400;500;600&display=optional');

@font-face {
	font-family: Dancing Script;
	src: url('https://fonts.gstatic.com/s/dancingscript/v24/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3Sup8hNX6plRP.woff2');
	font-weight: 400;
	font-display: fallback;
}

.webfont_wrapper {
	// font-family: Noto;
	text-align: center;
	margin: 0 auto;
	padding: 20px;
}

:lang(en-US) {
	font-family: Noto Sans;
	font-display: block;
}

:lang(en-GB) {
	font-family: Dancing Script;
	font-display: fallback;
}

:lang(ar) {
	font-family: Noto Sans Arabic;
	font-weight: 600;
	font-display: optional;
}
</style>

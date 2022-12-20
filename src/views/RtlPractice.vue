<template id="rtlPage" dir="rtl">
	<div style="text-align: center">
		<button
			v-for="(item, key) in buttonState"
			v-bind:key="key"
			v-bind:name="item.id"
			@click="clickButton"
			class="lang_choice_button"
			v-bind:class="{ active: item.state }"
		>
			{{ item.id }}
		</button>
	</div>

	<div class="rtl_option_btn">
		<button @click="clickRtlCssApplyButton">RTLCSS 적용</button>
	</div>

	<div>
		<HtmlComponent v-if="buttonState[0].state" />
		<CssComponent v-if="buttonState[1].state" />
	</div>
</template>
<script>
import HtmlComponent from "../components/HtmlComponent.vue";
import CssComponent from "../components/CssComponent.vue";

export default {
	data() {
		return {
			buttonState: [
				{ id: "HTML", state: false },
				{ id: "CSS", state: false },
			],
		};
	},
	components: {
		HtmlComponent,
		CssComponent,
	},
	methods: {
		clickButton(event) {
			this.buttonState.forEach((item) => {
				if (event.target.name === item.id) {
					item.state = true;
				} else {
					item.state = false;
				}
			});
		},

		clickRtlCssApplyButton() {
			const getCssLink = document.querySelectorAll("link[rel='stylesheet']");

			getCssLink.forEach((item) => {
				if (item.href.includes("rtl")) {
					console.log("일반 css로 전환");
					item.href = item.href.replace(".rtl.css", ".css");
				} else {
					console.log("RTL css로 전환");
					item.href = item.href.replace(".css", ".rtl.css");
				}
			});
		},
	},
};
</script>
<style scoped>
.lang_choice_button {
	border: 1px solid gray;
	border-radius: 5px;
	background-color: white;
	margin: 5px;
	padding: 10px;
}
.active {
	background-color: blue;
	border: 1px solid gray;
	color: white;
}

.rtl_option_btn {
	display: flex;
	justify-content: right;
}
</style>

<template id="rtlPage" dir="rtl">
	<div style="text-align: center">
		<button
			v-for="(item, key) in buttonState"
			v-bind:key="key"
			v-bind:id="item.id"
			@click="clickButton"
		>
			{{ item.id }}
		</button>
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
				if (event.target.id === item.id) {
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
<style scoped></style>

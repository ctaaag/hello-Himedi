<template lang="">
	<div class="footer">{{ message ? "Footer" : "Change" }}</div>
	<button @click="changeText">child component updated</button>
</template>
<script>
export default {
	data() {
		return {
			message: true,
		};
	},
	methods: {
		changeText() {
			this.message = !this.message;
		},
	},
	created() {
		console.log("자식요소 Created");
	},
	mounted() {
		console.log("자식요소 Mounted");
	},
	updated() {
		console.log("자식요소 Updated");
	},
};
</script>
<style scoped>
.footer {
	margin-top: 20px;
	background-color: gray;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
}
</style>

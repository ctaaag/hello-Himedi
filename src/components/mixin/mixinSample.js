let mixinSample = {
	data() {
		return {
			sample: "hi",
		};
	},
	created() {
		console.log("mixin");
	},
	methods: {
		onClick() {
			console.log("hi");
		},
	},
};

export default mixinSample;

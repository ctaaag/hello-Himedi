let mixinSample = {
	props: {
		sample: {
			default: 10,
		},
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

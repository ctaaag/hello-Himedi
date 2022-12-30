<template lang="">
	<div>count is:{{ state.count }}, Double is {{ state.double }}</div>
	<button @click="increment">increment</button>
	<button @click="onClick">mixinButton</button>
</template>
<script>
import { reactive, computed } from "vue";
import mixinSample from "../components/mixin/mixinSample";

console.log(mixinSample.methods.onClick());
export default {
	setup() {
		const state = reactive({
			count: 0,
			double: computed(() => state.count * 2),
		});
		const increment = () => state.count++;
		return {
			state,
			increment,
		};
	},
	mixins: [mixinSample],
};
</script>
<style lang=""></style>

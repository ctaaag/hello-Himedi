import { reactive, computed, toRefs } from "vue";

const compositionReactiveSample = () => {
	const state = reactive({
		number1: 0,
		number2: 0,
		sampleResult: computed(() => state.number1 + state.number2),
	});
	return toRefs(state);
};

export { compositionReactiveSample };

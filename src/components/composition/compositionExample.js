import { reactive, computed, ref } from "vue";

const compositionReactiveSample = () => {
	const samples = reactive({
		number1: 0,
		number2: 0,
		sampleResult: computed(() => samples.number1 + samples.number2),
	});

	const numbers = ref({
		number1: 0,
		number2: 0,
		sampleResult: computed(() => numbers.value.number1 + numbers.value.number2),
	});

	// const number1 = ref(0);
	// const number2 = ref(0);

	const incremented = () => numbers.value.number1++;

	return { numbers, incremented };
	// return { number1, number2, sampleResult, incremented };
};

export { compositionReactiveSample };

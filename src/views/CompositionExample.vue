<template lang="">
	<div>count is:{{ state.count }}, Double is {{ state.double }}</div>
	<button @click="increment">increment</button>
	<div class="mixin_component">
		<div>mixin 예제 : {{ sample }}</div>
		<button @click="onClick">mixinButton</button>
	</div>
	<!-- 일반 composition 사용 -->
	<div class="composition_exam2">
		<span>composition setup state 선언 : </span>
		<input type="number" v-model="state.numExam1" />
		<span>+</span>
		<input type="number" v-model="state.numExam2" />
		<span>=</span>
		<span>{{ state.result }}</span>
	</div>
	<div>
		<span>composition 컴포넌트 내부 선언 : </span>
		<input type="number" v-model="num1" />
		<span>+</span>
		<input type="number" v-model="num2" />
		<span>=</span>
		<span>{{ result }}</span>
	</div>
	<div>
		<span>composition 컴포넌트 외부 선언 : </span>
		<input type="number" v-model="number1" />
		<span>+</span>
		<input type="number" v-model="number2" />
		<span>=</span>
		<span>{{ sampleResult }}</span>
	</div>
</template>
<script>
import { reactive, computed, toRefs } from "vue";
import mixinSample from "../components/mixin/mixinSample";
import { compositionReactiveSample } from "../components/composition/compositionExample";

function plusCalculator() {
	let state = reactive({
		num1: 0,
		num2: 0,
		result: computed(() => state.num1 + state.num2),
	});
	return toRefs(state);
}

export default {
	setup() {
		let { number1, number2, sampleResult } = compositionReactiveSample();
		let { num1, num2, result } = plusCalculator();
		const state = reactive({
			numExam1: 0,
			numExam2: 0,
			count: 0,
			double: computed(() => state.count * 2),
			result: computed(() => state.numExam1 + state.numExam2),
		});
		const increment = () => state.count++;
		return {
			state,
			increment,
			num1,
			num2,
			result,
			number1,
			number2,
			sampleResult,
		};
	},
	mixins: [mixinSample],
};
</script>
<style scoped>
.composition_exam2 {
	margin-top: 30px;
}
.mixin_component {
	margin-top: 30px;
}
</style>

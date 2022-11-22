<template>
	<div class="component_container">
		<table class="locale_table" id="total">
			<thead>
				<tr>
					<th class="datetime_container">List</th>
					<th
						class="datetime_container"
						v-for="(item, key) in dateTimeList"
						v-bind:key="key"
					>
						{{ item }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, key) in localeList" v-bind:key="key">
					{{
						item
					}}
					<td>{{ sampleDate.toLocaleDateString(item, optionList[0]) }}</td>
					<td>{{ sampleDate.toLocaleTimeString(item, optionList[1]) }}</td>
					<td>{{ sampleDate.toLocaleString(item, optionList[2]) }}</td>
				</tr>
			</tbody>
		</table>
		<button class="testfile" id="test" @click="moveRouter">id 값 이동</button>
		<TestFile id="move" class="move"></TestFile>
	</div>
</template>

<script>
import router from "@/router";
import TestFile from "../components/TestComponent.vue";
export default {
	name: "datetimeComponent",
	data() {
		return {
			sampleDate: new Date(),
			dateTimeList: ["date", "time", "dateTime"],
			localeList: ["ar-SA", "ar-AE", "en-US", "en-GB", "ru-RU"],
			optionList: [
				{ year: "numeric", month: "short", day: "numeric" },
				{ minute: "numeric", hour: "numeric" },
				{
					year: "numeric",
					month: "short",
					day: "numeric",
					minute: "numeric",
					hour: "numeric",
				},
			],
		};
	},
	methods: {
		moveRouter() {
			router.push({
				path: "datetime",
				hash: "#move",
			});
		},
	},
	components: {
		TestFile: TestFile,
	},
};
</script>

<style>
.component_container {
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 500px;
	margin: 0 auto;
}

.datetime_container {
	padding: 20px;
}

.table_list {
	border: 1px solid gray;
}

.locale_table {
	text-align: left;
}

.move {
	margin-top: 600px;
}

.testfile {
	width: 100px;
}
</style>

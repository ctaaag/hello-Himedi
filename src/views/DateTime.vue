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
					<td>{{ dateSample.toLocaleDateString(item, optionList[0]) }}</td>
					<td>{{ dateSample.toLocaleTimeString(item, optionList[1]) }}</td>
					<td>{{ dateSample.toLocaleString(item, optionList[2]) }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
console.log("date: ", Date.now());

export default {
	name: "datetimeComponent",
	data() {
		return {
			dateSample: new Date(),
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
	methods: {},
};
</script>

<style>
.component_container {
	display: flex;
	justify-content: center;
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
</style>

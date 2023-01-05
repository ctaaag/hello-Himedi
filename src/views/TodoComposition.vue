<template lang="">
	<div class="todos_wrapper">
		<h1>TO-DO IT!</h1>

		<div class="input_todo">
			<b-form-input
				v-model="todoText"
				placeholder="Enter your todos"
				v-on:keyup.enter="addTodo"
			></b-form-input>
			<b-button variant="success" @click="addTodo">ADD</b-button>
		</div>

		<b-list-group class="list_todo">
			<b-list-group-item
				v-for="item in todoList"
				:key="item.id"
				class="list_todo_container"
			>
				<s v-if="item.completed" class="list_todo_text">{{ item.text }}</s>
				<div v-else>{{ item.text }}</div>
				<div>
					<b-button
						variant="outline-primary"
						size="sm"
						@click="completeTodo(item)"
						>DONE</b-button
					>
					<b-button
						variant="outline-danger"
						size="sm"
						@click="removeTodo(item.id)"
						>DELETE</b-button
					>
				</div>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>
<script>
import { ref } from "vue";
export default {
	setup() {
		let todoText = ref("");
		let todoList = ref([]);

		const addTodo = () => {
			if (!todoText.value) {
				alert("Please enter some text");
				return;
			} else {
				todoList.value.push({
					id: Math.floor(Math.random() * 1000 + 1),
					text: todoText.value,
					completed: false,
				});
				todoText.value = "";
			}
		};

		const completeTodo = (todoItem) => {
			todoItem.completed = !todoItem.completed;
		};

		const removeTodo = (todoItemId) => {
			todoList.value = todoList.value.filter((item) => item.id !== todoItemId);
		};

		return {
			todoText,
			todoList,
			addTodo,
			completeTodo,
			removeTodo,
		};
	},
};
</script>
<style scoped>
.todos_wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.input_todo {
	display: flex;
	width: 30%;
	justify-content: center;
	align-items: center;
}
.list_todo {
	margin-top: 50px;
	width: 30%;
}

.list_todo_container {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.list_todo_text {
	width: 50%;
}
</style>

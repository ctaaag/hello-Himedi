<template lang="">
	<h1>Axios 구현</h1>
	<button @click="getData">getData</button>
	<button @click="postData">postData</button>
	<button @click="deleteData">deleteData</button>
	<button @click="putData">putData</button>
	<button @click="patchData">patchData</button>

	<hr />
	<h1>Proxy 구현</h1>
	<button @click="proxyGetData">getProxy</button>
	<button @click="proxyPostData">postProxy</button>
	<button @click="proxyDeleteData">deleteProxy</button>
	<button @click="proxyPutData">putProxy</button>
	<button @click="proxyPatchData">patchProxy</button>

	<hr />
</template>
<script>
let formData = new FormData();
formData.append("sample", "hi");

import { TestApi } from "../SampleApi";
import axios from "axios";

export default {
	methods: {
		getData() {
			TestApi.getTest("test");
		},
		postData() {
			TestApi.postTest("test", formData);
		},
		deleteData() {
			TestApi.deleteTest("test");
		},
		putData() {
			TestApi.putTest("test", formData);
		},
		patchData() {
			TestApi.patchTest("test", formData);
		},
		proxyGetData() {
			axios
				.get(`/api/test/route`, {
					params: {
						query: "hello",
					},
				})
				.then((res) => console.log(res));
		},
		proxyPostData() {
			let route = "query";
			axios
				.post(`/api/test/${route}`, formData, {
					params: {
						query: "hello",
						form: "sample",
					},
				})
				.then((res) => console.log(res));
		},
		proxyDeleteData() {
			let route = "query";
			axios
				.delete(`/api/test/${route}`, {
					params: {
						query: "hello",
					},
				})
				.then((res) => console.log(res));
		},
		proxyPutData() {
			let route = "query";
			axios
				.put(`/api/test/${route}`, formData, {
					params: {
						query: "hello",
						form: "sample",
					},
				})
				.then((res) => console.log(res));
		},
		proxyPatchData() {
			let route = "query";
			axios
				.patch(`/api/test/${route}`, formData, {
					params: {
						query: "hello",
						form: "sample",
					},
				})
				.then((res) => console.log(res));
		},
	},
};
</script>
<style lang=""></style>

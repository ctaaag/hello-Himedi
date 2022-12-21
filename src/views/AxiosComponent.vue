<template lang="">
	<h1>Axios 구현</h1>
	<button @click="getData">getAxiosData</button>
	<button @click="postData">postAxiosData</button>
	<button @click="deleteData">deleteAxiosData</button>
	<button @click="putData">putAxiosData</button>
	<button @click="patchData">patchAxiosData</button>

	<hr />
	<h1>Proxy 구현</h1>
	<button @click="proxyGetData">getProxy</button>
	<button @click="proxyPostData">postProxy</button>
	<button @click="proxyDeleteData">deleteProxy</button>
	<button @click="proxyPutData">putProxy</button>
	<button @click="proxyPatchData">patchProxy</button>

	<hr />
	<h1>Fetch 구현</h1>
	<button @click="getFetch">getFetch</button>
	<button @click="postFetch">postFetch</button>
	<button @click="deleteFetch">deleteFetch</button>
	<button @click="putFetch">putFetch</button>
	<button @click="patchFetch">patchFetch</button>
</template>
<script>
let formData = new FormData();
formData.append("sample", "hi");

import { TestApi, FetchApi } from "../SampleApi";
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
		getFetch() {
			FetchApi.getFetch("test", "hello")
				.then((res) => {
					return res.json();
				})
				.then((responseData) => console.log("3", responseData));
		},
		postFetch() {
			FetchApi.postFetch("test", "hello", "sample")
				.then((res) => res.json())
				.then((responseData) => console.log(responseData));
		},
		deleteFetch() {
			FetchApi.deleteFetch("test", "hello", "sample")
				.then((res) => res.json())
				.then((data) => console.log(data));
		},
		putFetch() {
			FetchApi.putFetch("test", "hello", "sample")
				.then((res) => res.json())
				.then((data) => console.log(data));
		},
		patchFetch() {
			FetchApi.patchFetch("test", "hello", "sample")
				.then((res) => res.json())
				.then((data) => console.log(data));
		},
	},
};
</script>
<style lang=""></style>

<template lang="">
	<h1>Axios 구현</h1>
	<button
		v-for="(item, index) in axiosList"
		:key="index"
		:id="index"
		@click="axiosData(index)"
	>
		{{ item }}
	</button>
	<hr />

	<h1>Proxy 구현</h1>
	<button
		v-for="(item, index) in proxyList"
		:key="index"
		:id="index"
		@click="proxyData(index)"
	>
		{{ item }}
	</button>

	<hr />
	<h1>Fetch 구현</h1>
	<button
		v-for="(item, index) in fetchList"
		:key="index"
		:id="index"
		@click="fetchData(index)"
	>
		{{ item }}
	</button>
</template>
<script>
let formData = new FormData();
formData.append("sample", "hi");

import { TestAxiosAPI, FetchApi, ProxyAPI } from "../SampleApi";

export default {
	data() {
		return {
			axiosList: [
				"getAxiosData",
				"postAxiosData",
				"deleteAxiosData",
				"putAxiosData",
				"patchAxiosData",
			],
			proxyList: [
				"getProxy",
				"postProxy",
				"deleteProxy",
				"putProxy",
				"patchProxy",
			],
			fetchList: [
				"getFetch",
				"postFetch",
				"deleteFetch",
				"putFetch",
				"patchFetch",
			],
		};
	},
	methods: {
		axiosData(num) {
			switch (num) {
				case 0:
					TestAxiosAPI.getTest("test");
					break;
				case 1:
					TestAxiosAPI.postTest("test", formData);
					break;
				case 2:
					TestAxiosAPI.deleteTest("test");
					break;
				case 3:
					TestAxiosAPI.putTest("test", formData);
					break;
				case 4:
					TestAxiosAPI.patchTest("test", formData);
					break;
			}
		},
		proxyData(num) {
			switch (num) {
				case 0:
					ProxyAPI.getProxy();
					break;
				case 1:
					ProxyAPI.postProxy();
					break;
				case 2:
					ProxyAPI.deleteProxy();
					break;
				case 3:
					ProxyAPI.putProxy(formData);
					break;
				case 4:
					ProxyAPI.patchProxy(formData);
					break;
			}
		},
		fetchData(num) {
			switch (num) {
				case 0:
					FetchApi.getFetch("test", "hello")
						.then((res) => {
							return res.json();
						})
						.then((responseData) => console.log(responseData));
					break;
				case 1:
					FetchApi.postFetch("test", "hello", "sample")
						.then((res) => res.json())
						.then((responseData) => console.log(responseData));
					break;
				case 2:
					FetchApi.deleteFetch("test", "hello", "sample")
						.then((res) => res.json())
						.then((data) => console.log(data));
					break;
				case 3:
					FetchApi.putFetch("test", "hello", "sample")
						.then((res) => res.json())
						.then((data) => console.log(data));
					break;
				case 4:
					FetchApi.patchFetch("test", "hello", "sample")
						.then((res) => res.json())
						.then((data) => console.log(data));
					break;
			}
		},
	},
};
</script>
<style lang=""></style>

import axios from "axios";

const BASE_URL = "https://dev.gateway.himedi.com";

export const api = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Time-Zone": new Date().getTimezoneOffset(),
	},
	validateStatus: (status) => {
		return status < 500;
	},
});

export const TestApi = {
	getTest: (route) =>
		api.get(`/test/${route}`, {
			params: {
				query: "hello",
			},
		}),
	postTest: (route, form) => {
		api.post(`/test/${route}`, form, {
			params: {
				query: "test",
				form: "sample",
			},
		});
	},
	deleteTest: (route) => {
		api.delete(`/test/${route}`, {
			params: {
				query: "test",
				form: "sample",
			},
		});
	},
	putTest: (route, form) => {
		api.put(`/test/${route}`, form, {
			params: {
				query: "test",
				form: "sample",
			},
		});
	},
	patchTest: (route, form) => {
		api.patch(`/test/${route}`, form, {
			params: {
				query: "test",
				form: "sample",
			},
		});
	},
};

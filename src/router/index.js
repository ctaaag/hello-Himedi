import { createRouter, createWebHistory } from "vue-router";
// import { createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import DateTime from "../views/DateTime.vue";
import AxiosComponent from "../views/AxiosComponent";
import RouterLifecycle from "../views/RouterLifecycle";
import ProfileComponent from "../components/ProfileComponent";
import PasswordChange from "../components/PasswordChange";
import ProfileImage from "../components/ProfileImage";
import ProductRouter from "../components/ProductRouter";
import CompositionExample from "../views/CompositionExample";
import TodoComposition from "../views/TodoComposition";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/datetime",
		name: "datetime",
		component: () => import("../views/DateTime.vue"),
	},
	{
		path: "/i18n",
		name: "i18n",
		component: () =>
			import(
				/* webpackChunkName: "i18n" , webpackPrefetch:true */ "../views/VueI18n.vue"
			),
	},
	{
		path: "/l10n",
		name: "l10n",
		component: () =>
			import(
				/* webpackChunkName: "l10n" , webpackPrefetch:true */ "../views/VueL10n.vue"
			),
	},
	{
		path: "/rtl",
		name: "rtl",
		component: () => import("../views/RtlPractice.vue"),
	},
	{
		path: "/axios",
		name: "axios",
		component: AxiosComponent,
	},
	{
		path: "/router",
		name: "router",
		component: RouterLifecycle,
	},
	{
		path: "/router/product",
		name: "product",
		component: ProductRouter,
	},
	{
		path: "/router/profile",
		name: "profile",
		component: ProfileComponent,
		beforeEnter: () => {
			console.log("Router:beforeEnter");
			const getToken = JSON.parse(localStorage.getItem("loginState"));
			if (getToken != null) {
				return;
			} else {
				alert("로그인이 필요합니다");
				return "./router";
			}
		},
	},
	{
		path: "/router/password",
		name: "password",
		component: PasswordChange,
		meta: { test: "123" },
		beforeEnter: (to) => {
			console.log("to", to);
			if (to.query.loginState === "true") {
				return;
			} else {
				console.log(to);
				alert("로그인이 필요합니다");
				return false;
			}
		},
		props: {
			sample: "hi",
		},
	},
	{
		path: "/router/image/:loginState/:enter",
		name: "image",
		component: ProfileImage,
		props: true,
		beforeEnter: (to) => {
			if (to.params.loginState === "true") {
				console.log(to);
				return;
			} else {
				console.log(to);
				alert("로그인이 필요합니다");
				return false;
			}
		},
	},
	{
		path: "/composition",
		name: "composition",
		component: CompositionExample,
	},
	{
		path: "/todoapp",
		name: "todoapp",
		component: TodoComposition,
	},
];

const router = createRouter({
	history: createWebHistory(),
	// history: createWebHashHistory(),
	scrollBehavior(to) {
		// console.log(to.hash);
		if (to.hash) {
			return {
				el: to.hash,
			};
		}
	},
	routes,
});

// console.log(CompositionExample);

router.beforeEach(() => {
	console.log("Router:beforeEach");
	// to and from are both route objects. must call `next`.
});

router.beforeResolve(() => {
	console.log("Router:beforeResolve");
	// to and from are both route objects. must call `next`.
});

router.afterEach(() => {
	console.log("Router:afterEach");
});

export default router;

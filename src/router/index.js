import { createRouter, createWebHistory } from "vue-router";
// import { createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import DateTime from "../views/DateTime.vue";
import AxiosComponent from "../views/AxiosComponent";
import RouterLifecycle from "../views/RouterLifecycle";
import ProfileComponent from "../components/ProfileComponent";
import PasswordChange from "../components/PasswordChange";

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
		path: "/router/profile",
		name: "profile",
		component: ProfileComponent,
		// props: true,
		beforeEnter: () => {
			const getToken = JSON.parse(localStorage.getItem("loginState"));
			if (getToken !== null) {
				if (getToken.state) {
					return;
				} else {
					console.log("ggt");
					alert("로그인해주세요");
					return "./router";
				}
			} else {
				alert("로그인해주세요");
				return "./router";
			}
		},
	},
	{
		path: "/router/password",
		name: "password",
		component: PasswordChange,
		beforeEnter: (to) => {
			if (to.query.loginState === "true") {
				return;
			} else {
				alert("로그인해주세요");
				return false;
			}
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	// history: createWebHashHistory(),
	scrollBehavior(to) {
		console.log(to.hash);
		if (to.hash) {
			return {
				el: to.hash,
			};
		}
	},
	routes,
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
// import { createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/datetime",
		name: "datetime",
		component: () =>
			import(
				/* webpackChunkName: "datetime" , webpackPrefetch:true */ "../views/DateTime.vue"
			),
	},
	{
		path: "/i18n",
		name: "i18n",
		component: () =>
			import(
				/* webpackChunkName: "datetime" , webpackPrefetch:true */ "../views/VueI18n.vue"
			),
	},
];

const router = createRouter({
	// history: createWebHistory(),
	history: createWebHashHistory(),
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

// console.log("createRouter", createRouter);
// console.log("router", router.hasRoute);

export default router;

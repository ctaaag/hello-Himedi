<template>
	<div class="home" style="text-align: center">
		<div>좌충우돌 Vue.js 온보딩</div>
		<img alt="Vue logo" src="../assets/images/logo.png" />
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/datetime">DateTime</router-link>
			<router-link to="/i18n">I18n</router-link>
			<router-link to="/l10n">L10n</router-link>
			<router-link to="/rtl">RTL</router-link>
			<router-link to="/axios">Axios & Fetch</router-link>
			<router-link to="/router">Router & LifeCycle</router-link>
			<router-link to="/composition">Composition</router-link>
			<!-- <router-link to="{name:'todoapp'}">Todo(composition)</router-link> -->
			<router-link to="/todoapp">Todo(composition)</router-link>
			<router-link to="/sassapple">SassApple</router-link>
		</nav>
	</div>
</template>

<script>
export default {
	name: "HomeView",
};
</script>

<style>
nav {
	padding: 30px;
	text-align: center;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
	margin: 15px;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>

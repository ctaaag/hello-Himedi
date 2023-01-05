<template>
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
	</nav>
	<router-view />
	<!-- 라우터 뷰는 해당 자리에 라우터 컴포넌트가 발생하게 됨 -->
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: auto; */
	color: #2c3e50;
}

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

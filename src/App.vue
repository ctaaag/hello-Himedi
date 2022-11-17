<template>
	<nav>
		<router-link to="/">Home</router-link>
		<router-link to="/datetime">DateTime</router-link>
	</nav>
	<router-view />
	<!-- 라우터 뷰는 해당 자리에 라우터 컴포넌트가 발생하게 됨 -->
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
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

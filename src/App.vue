<template>
	<router-view class="view_wrapper" />
	<!-- 라우터 뷰는 해당 자리에 라우터 컴포넌트가 발생하게 됨 -->
</template>

<style>
#app {
	font-family: -apple-system, BlinkMacSystemFont, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: auto; */
	color: #2c3e50;
	/* margin: 50px auto; */
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

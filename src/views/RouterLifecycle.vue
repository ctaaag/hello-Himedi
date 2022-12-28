<template lang="">
	<div className="login_wrapper" v-if="!loginState">
		<form v-on:submit="submitForm">
			<div>
				<span>ID : </span>
				<input type="text" v-model="username" v-on:keyup.enter="submit" />
			</div>
			<div>
				<span>PW : </span>
				<input type="password" v-model="password" v-on:keyup.enter="submit" />
			</div>
			<div>
				<button
					type="submit"
					v-bind:disabled="username.length < 4 || password.length < 4"
				>
					로그인
				</button>
			</div>
		</form>
	</div>
	<div className="login_wrapper" v-if="loginState">
		{{ username }}님 안녕하세요
		<div>
			<button @click="logoutForm">로그아웃</button>
		</div>
	</div>
	<div className="profile_move">
		<hr />
		<router-link to="/router/product" className="link_profile"
			>제품페이지</router-link
		>
		<router-link to="/router/profile" className="link_profile"
			>내 정보</router-link
		>
		<router-link
			:to="{ name: 'password', query: { loginState: loginState } }"
			className="link_profile"
			>비밀번호 변경(query)</router-link
		>
		<router-link
			:to="{
				name: 'image',
				params: { loginState: loginState },
			}"
			className="link_profile"
			>프로필 이미지 변경(params)</router-link
		>
	</div>
</template>
<script>
export default {
	data: function () {
		return {
			username: "",
			password: "",
			loginState: false,
		};
	},
	methods: {
		submitForm(e) {
			e.preventDefault();
			let sampleID = {
				username: "test",
				password: "1234",
			};
			if (
				this.username === sampleID.username &&
				this.password === sampleID.password
			) {
				alert("로그인 성공");
				this.loginState = true;
				let loginToken = {
					username: this.username,
					password: this.password,
					state: this.loginState,
				};
				localStorage.setItem("loginState", JSON.stringify(loginToken));
			} else {
				alert("로그인 실패");
			}
		},
		logoutForm() {
			this.loginState = false;
			this.username = "";
			this.password = "";
			localStorage.removeItem("loginState");
		},
	},
	beforeCreate() {
		console.log("beforeCreate");
		console.log("beforeCreate data:", this.username);
	},
	created() {
		console.log("Created");
		console.log("Created data:", this.username);
		const getToken = JSON.parse(localStorage.getItem("loginState"));
		if (getToken !== null) {
			this.username = getToken.username;
			this.password = getToken.password;
			this.loginState = getToken.state;
		}
	},
	beforeMount() {
		console.log("beforeMount");
	},
	mounted() {
		console.log("mounted");
	},
	beforeUpdate() {
		console.log("beforeUpdate");
	},
	updated() {
		console.log("updated");
	},
	beforeUnmount() {
		console.log("beforeUnmount");
	},
	unmounted() {
		console.log("unmounted");
	},
	setup() {
		console.log("setup");
	},
	beforeRouteLeave() {
		console.log("Router:beforeRouteLeave");
	},
	beforeRouteEnter() {
		console.log("Router:beforeRouteEnter");
	},
	beforeRouteUpdate() {
		console.log("Router:beforeRouteUpdate");
	},
};
</script>

<style scoped>
.login_wrapper {
	text-align: center;
}
.profile_move {
	text-align: center;
}
.link_profile {
	margin: 10px;
}
</style>

<template lang="">
	<div>이미지 변경 컴포넌트 {{ loginState }}</div>
	<div>{{ this.$route.params.loginState }}</div>
</template>
<script>
export default {
	props: ["loginState"],
};
</script>
<style lang=""></style>

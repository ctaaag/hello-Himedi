<template lang="">
	<AppleHeader></AppleHeader>
	<AppleMain></AppleMain>
	<AppleSwiper></AppleSwiper>
	<AppleFooter></AppleFooter>
</template>

<script>
import AppleHeader from "@/components/applecomponent/AppleHeader.vue";
import AppleMain from "@/components/applecomponent/AppleMain.vue";
import AppleFooter from "@/components/applecomponent/AppleFooter.vue";
import AppleSwiper from "@/components/applecomponent/AppleSwiper.vue";

export default {
	components: {
		AppleHeader,
		AppleMain,
		AppleSwiper,
		AppleFooter,
	},
};
</script>
<style lang="scss"></style>

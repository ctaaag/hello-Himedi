<template lang="">
	<AppleHeader></AppleHeader>
	<AppleMain></AppleMain>
	<AppleFooter></AppleFooter>
</template>

<script>
import AppleHeader from "@/components/applecomponent/AppleHeader.vue";
import AppleMain from "@/components/applecomponent/AppleMain.vue";
import AppleFooter from "@/components/applecomponent/AppleFooter.vue";

export default {
	components: {
		AppleHeader,
		AppleMain,
		AppleFooter,
	},
};
</script>
<style lang="scss"></style>

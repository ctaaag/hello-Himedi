<template>
	<swiper
		class="swiper"
		:modules="modules"
		:space-between="30"
		:slides-per-view="1"
		:centered-slides="true"
		:pagination="{ clickable: true }"
		:loop="true"
		:autoplay="{
			delay: 2500,
			disableOnInteraction: false,
		}"
	>
		>

		<swiper-slide class="slide"
			><img class="slide_image" src="@/assets/images/apple_tv_slow.png" alt=""
		/></swiper-slide>
	</swiper>
</template>

<script>
import { defineComponent } from "vue";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SlideList } from "@/store/appleData";

export default defineComponent({
	name: "swiper-example-centered-slides",
	title: "Centered slides",
	url: import.meta.url,
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Pagination, Navigation, Autoplay],
			SlideList,
		};
	},
});
</script>

<style lang="scss" scoped>
.swiper-wrapper {
	height: 500px;
}

.slide_image {
	left: 7.5px;
	width: calc(100% - 15px);
	// height: 100%;
}
// @import "@/styles/variables.scss";
// @import "@/styles/mixins.scss";
// @import "./style.scss";

// .swiper {
// 	@include swiper-wrapper();
// }

// .slide {
// 	@include swiper-slide();
// }
</style>

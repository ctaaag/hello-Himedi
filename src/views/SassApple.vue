<template lang="">
	<header class="header_wrapper">
		<ul class="header_list">
			<li class="header_list_logo">
				<img
					class="header_logo_image"
					src="@/assets/images/apple_icon.png"
					alt=""
				/>
			</li>
			<li
				class="header_logo_link"
				v-for="(item, index) in headerOptionList"
				:key="index"
			>
				{{ item }}
			</li>
			<li>
				<img
					class="header_logo_image"
					src="@/assets/images/search_icon.png"
					alt=""
				/>
			</li>
			<li>
				<img
					class="header_logo_image"
					src="@/assets/images/shopping_icon.png"
					alt=""
				/>
			</li>
		</ul>
	</header>
	<main>
		<section class="section_main_promotion_phone">
			<div class="main_promotion_copy_wrapper">
				<h2 class="section_headline">iPhone 14</h2>
				<h3 class="section_subhead">크게. 더 크게.</h3>
				<a href="">더 알아보기</a>
				<a href="">구입하기</a>
			</div>
			<div><figure class="main_phone_image"></figure></div>

			<div>
				<!-- <h2>새로워진 애플</h2> -->
			</div>
			<figure class="section_main_video">
				<video class="main_video" src="@/assets/images/apple_video.mp4"></video>
			</figure>
		</section>
		<!-- <section class="section_main_video">
			<div>
				<h2>새로워진 애플</h2>
			</div>
			<figure>
				<video src="@/assets/images/apple_video.mp4"></video>
			</figure>
		</section>
		<section class="section_main_promotion_watch"></section>
		<section class="section_sub_product_list"></section>
		<section class="section_sub_tv_list"></section> -->
	</main>
</template>
<script>
export default {
	data() {
		return {
			headerOptionList: [
				"스토어",
				"Mac",
				"iPad",
				"iPhone",
				"Watch",
				"AirPods",
				"TV 및 홈",
				"Apple 독점 제공",
				"액세서리",
				"고객지원",
			],
		};
	},
};
</script>
<style lang="scss">
.header_wrapper {
	position: relative;
	z-index: 43;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.8);
	height: 48px;
}

.header_logo_link {
	text-decoration: none;
	color: #f5f5f7;
	font-size: 12px;
}

.header_list {
	display: flex;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	list-style-position: inside;
	padding: 0;
	margin: 0;
	width: 80%;
}

.header_logo_image {
	height: 18px;
	filter: brightness(0) invert(1);
}

.section_headline {
	font-size: 56px;
}

.section_main_promotion_phone {
	overflow: hidden;
}

.main_phone_image {
	background-image: url("@/assets/images/iphone_main_product.png");
	width: 100%;
	height: 736px;
	background-size: 3000px 624px;
	background-repeat: no-repeat;
	left: calc(50% + 0px);
	z-index: 1;
	position: absolute;
	border: 0;
	margin: 0;
	padding: 0;
	top: 0px;
	-webkit-transform: translatex(-50%);
	transform: translatex(-50%);
	background-position-x: center;
}

.main_promotion_copy_wrapper {
	text-align: center;
	padding-top: 47px;
	position: relative;
	z-index: 4;
	height: 620px;
}

.section_main_video {
	width: 100%;
	height: 736px;
	position: relative;
	// top: 0;
	// left: 0;
	// width: 100%;
	// height: 100%;
	z-index: 4;
}

.main_video {
	height: 100vh;
	width: 100vw;
	object-fit: cover;
	// position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	// z-index: -1;

	height: 100%;
	left: calc(50% + 0px);
	transform: translatex(-50%);
	-webkit-transform: translatex(-50%);
	background-position-x: center;
	left: 0;
	// right: 0;

	top: 0px;
	// background-size: 3000px 624px;
}
</style>

<template lang="">
	<div>
		<header class="header_wrapper">
			<ul class="header_list">
				<li class="header_list_logo_menu">
					<img
						class="header_logo_image"
						src="@/assets/images/menu_icon.png"
						alt=""
						@click="phoneHeaderNavClick"
					/>
				</li>
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
				<li class="header_logo_image_search">
					<img
						class="header_logo_image_search"
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
		<ul
			:class="[isShowHeaderModal ? 'header_menu_show' : 'header_menu_hidden']"
		>
			<div class="menu_inner_items">
				<input class="menu_search" type="text" placeholder="apple.com 검색" />
				<li
					class="header_item"
					v-for="(item, index) in headerOptionList"
					:key="index"
				>
					{{ item }}
				</li>
			</div>
		</ul>
	</div>
</template>
<script>
import { headerOptionList } from "@/store/appleData";

export default {
	data() {
		return {
			isShowHeaderModal: false,
			headerOptionList,
		};
	},
	methods: {
		phoneHeaderNavClick() {
			this.isShowHeaderModal = !this.isShowHeaderModal;
		},
	},
};
</script>
<style lang="scss" scoped>
.section_headline {
	color: black;
}

.header_wrapper {
	@include flex(center, center);
	@include heigth(48);
	position: fixed;
	z-index: 43;
	margin: 0 auto;
	width: 100%;
	background-color: black;
	position: fixed;
}

.header_logo_link {
	@include desktop {
		text-decoration: none;
		color: #f5f5f7;
		font-size: 12px;
	}
	@include mobile {
		// visibility: hidden;
		display: none;
	}
}

.header_logo_image_search {
	display: none;
}

.header_list_logo_menu {
	@include desktop {
		display: none;
	}
}

.header_list {
	@include flex(space-between, center);
	@include width(980);
	list-style: none;
	list-style-position: inside;
	max-width: 980px;
	padding: 10px;
}

.header_logo_image {
	height: 18px;
	filter: brightness(0) invert(1);
}

.header_menu_show {
	// height: 6000px;
	background-color: black;
	list-style: none;
	padding: 0;
	// z-index: 10;
	transition: height 0.5s;
	overflow: hidden;
	visibility: visible;
	height: 100vh;
	// display: none;
}

.header_menu_hidden {
	visibility: hidden;
	display: none;
	height: 0;
	transition: height 0.5s;
}

.header_item {
	color: #f5f5f7;
	border-bottom: 1px solid #f5f5f7;
	padding: 10px;
}

.menu_inner_items {
	width: 80%;
	margin: 0 auto;
}

.menu_search {
	width: 100%;
	// opacity: 1;
	background: none;
	border-radius: 10px;
	color: #6e6e73;
	margin-top: 10px;
}
</style>

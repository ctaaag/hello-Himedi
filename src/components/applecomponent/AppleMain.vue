<template lang="">
	<main>
		<!-- main -->
		<section class="main_promotion_wrapper">
			<div v-for="(item, index) in mainPromotionList" :key="index">
				<figure
					class="main_iphone14_image"
					:style="{ 'background-image': `url(${item.image})` }"
				></figure>
				<div class="main_promotion_copy_wrapper">
					<h2
						v-if="item.title"
						class="section_headline"
						:style="{ color: `${item.color}` }"
					>
						{{ item.title }}
					</h2>
					<h2
						v-else
						:style="{ 'background-image': `url(${item.titleLink})` }"
						class="section_headline_image"
					></h2>
					<h3 class="section_subhead" :style="{ color: `${item.color}` }">
						{{ item.sub }}
					</h3>
					<div class="section_link">
						<a href="" class="section_link_detail">
							<span class="section_link_title">더 알아보기</span>
						</a>
						<a href="" class="section_link_buy">
							<span>구입하기</span>
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- sub-promotion -->
		<section class="sub_promotion">
			<div
				class="sub_promotion_wrapper"
				v-for="(item, index) in subPromotionList"
				:key="index"
			>
				<figure
					class="sub_promotion_image"
					:style="{ 'background-image': `url(${item.image})` }"
				></figure>
				<div class="sub_promotion_copy_wrapper">
					<h4
						v-if="item.title"
						class="sub_promotion_headline"
						:style="{ color: `${item.color}` }"
					>
						{{ item.title }}
					</h4>
					<h4
						v-else
						:style="{ 'background-image': `url(${item.titleLink})` }"
						class="sub_promotion_headline_image"
					></h4>
					<h5 :style="{ color: `${item.color}` }" class="sub_promotion_subline">
						{{ item.sub }}
					</h5>
					<div class="sub_link">
						<a href="" class="section_link_detail">
							<span class="section_link_title">더 알아보기</span>
						</a>
						<a href="" class="section_link_buy">
							<span>구입하기</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
<script>
import { mainPromotionList, subPromotionList } from '@/store/appleData';

export default {
	data() {
		return {
			mainPromotionList,
			subPromotionList,
		};
	},
};
</script>
<style lang="scss">
.main_promotion_wrapper {
	display: -ms-grid;
	display: grid;
}

.section_headline_image {
	height: 72px;
	background-size: 190px 72px;
	background-repeat: no-repeat;
	background-position: center;
	@include mainChange {
		height: 40px;
		background-size: 110px 40px;
	}
}

.section_headline {
	font-size: 56px;
	font-weight: 600;
	@include mainChange {
		font-size: 32px;
	}
}

.section_subhead {
	@include mainChange {
		font-size: 20px;
	}
}

.section_link_detail:hover {
	text-decoration: underline;
}

.section_link_detail {
	text-decoration: none;
	font-size: 21px;
	@include mainChange {
		font-size: 16px;
		font-weight: 400;
	}
}

.section_link_buy:hover {
	text-decoration: underline;
}

.section_link_title::after {
	content: '＞';
}
.section_link_buy::after {
	content: '＞';
}

.section_link_buy {
	text-decoration: none;
	margin-left: 35px;
	font-size: 21px;
	font-weight: 400;
	@include mainChange {
		font-size: 16px;
		font-weight: 400;
	}
}

.link_icon {
	width: 20px;
	-webkit-filter: opacity(0.4) drop-shadow(16px 16px 20px blue);
	filter: opacity(0.4) drop-shadow(16px 16px 20px blue);
}

.section_main_promotion_phone {
	overflow: hidden;
}

.section_main_promotion_iphone14 {
	position: relative;
}

.main_iphone14_image {
	width: 100%;
	height: 720px;
	background-size: 3000px 720px;
	background-repeat: no-repeat;
	z-index: 1;
	position: absolute;
	border: 0;
	margin: 0;
	padding: 0;
	background-position-x: center;
	@include mainChange {
		width: 100%;
		background-size: 1500px 548px;
		height: 548px;
	}
}

.main_promotion_copy_wrapper {
	text-align: center;
	padding-top: 77px;
	position: relative;
	z-index: 4;
	height: 700px;
	@include mainChange {
		height: 548px;
	}
}

//
//
//
//
// sub_promotion

.sub_promotion {
	display: grid;
	grid-template-rows: repeat(2, 580px);
	grid-template-columns: 1fr 1fr;
	// gap: 15px;
	@include mainChange {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 0;
	}
}

.sub_promotion_image {
	width: calc(50%);
	height: 580px;
	background-size: 1500px 624px;
	background-repeat: no-repeat;
	background-position-x: center;
	position: absolute;
	@include mainChange {
		width: 100%;
		background-size: 750px 548px;
		height: 548px;
	}
}

.sub_promotion_copy_wrapper {
	text-align: center;
	padding-top: 47px;
	position: relative;
	z-index: 4;
	height: 620px;
	@include mainChange {
		height: 548px;
	}
}

.sub_promotion_headline {
	text-align: center;
	height: 70px;
	font-size: 45px;
	font-weight: 600;
}

.sub_promotion_headline_image {
	height: 70px;
	background-size: auto 60%;
	background-repeat: no-repeat;
	background-position: center;
}

.sub_promotion_subline {
	font-size: 20px;
	margin-top: -15px;
}

.sub_link > a {
	font-size: 16px;
	font-weight: 700;
}
</style>

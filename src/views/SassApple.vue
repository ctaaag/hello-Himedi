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
					<!-- <h5
						v-if="item.subImage"
						:style="{ color: `${item.color}` }"
						class="sub_promotion_subline"
					>
						{{ item.sub }}
					</h5> -->
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

	<!-- footer -->
	<footer>
		<div class="footer_wrapper">
			<section class="footer_intro">
				<span
					>* 무료 체험 기간이 끝나면 월 6,500원에 이용할 수 있습니다. 가족 공유
					그룹당 하나의 멤버십 이용이 가능합니다. 무료 체험 혜택은 적용 대상
					기기 활성화 이후 3개월 안에 신청할 수 있습니다. 멤버십은 매월 자동으로
					갱신되며, 해지 시 종료됩니다. 특정 제한 사항 및 기타 약관이
					적용됩니다.</span
				>
			</section>
			<nav>
				<div
					class="column"
					v-for="(footerItem, colNum) in footerList"
					:key="colNum"
				>
					<ul v-if="footerItem.length == 2">
						<div v-for="(sameColItems, index) in footerItem" :key="index">
							<li>{{ sameColItems.title }}</li>
							<li
								v-for="(colItemList, index) in sameColItems.list"
								:key="index"
							>
								{{ colItemList }}
							</li>
						</div>
					</ul>
					<ul v-else>
						<li>{{ footerItem.title }}</li>
						<li v-for="(item, index) in footerItem.list" :key="index">
							{{ item }}
						</li>
					</ul>
				</div>
			</nav>
			<section></section>
		</div>
	</footer>
</template>

<script>
import {
	headerOptionList,
	mainPromotionList,
	subPromotionList,
	footerList,
} from "../store/appleData";

export default {
	data() {
		return {
			headerOptionList,
			mainPromotionList,
			subPromotionList,
			footerList,
		};
	},
};
</script>
<style lang="scss">
// header

$color: #232323;

.section_headline {
	color: $color;
}

.header_wrapper {
	// position: fixed;
	z-index: 43;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
	height: 48px;
	position: fixed;
	width: 100%;
	@include mobile {
		display: none;
	}
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
	width: 980px;
	max-width: 980px;
}

.header_logo_image {
	height: 18px;
	filter: brightness(0) invert(1);
}

//
//
//
//
//main_promotion
.main_promotion_wrapper {
	display: grid;
}

.section_headline_image {
	height: 72px;
	background-size: 190px 72px;
	background-repeat: no-repeat;
	background-position: center;
}

.section_headline {
	font-size: 56px;
	font-weight: 600;
}

.section_link_detail:hover {
	text-decoration: underline;
}

.section_link_detail {
	text-decoration: none;
	font-size: 21px;
}

.section_link_buy:hover {
	text-decoration: underline;
}

.section_link_title::after {
	content: "＞";
}
.section_link_buy::after {
	content: "＞";
}

.section_link_buy {
	text-decoration: none;
	margin-left: 35px;
	font-size: 21px;
	font-weight: 400;
}

.link_icon {
	width: 20px;
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
}

.main_promotion_copy_wrapper {
	text-align: center;
	padding-top: 77px;
	position: relative;
	z-index: 4;
	height: 700px;
}

//
//
//
//
// sub_promotion

.sub_promotion {
	display: grid;
	grid-template-rows: repeat(2, 580px);
	grid-template-columns: repeat(2, 50%);
	gap: 15px;
}

.sub_promotion_image {
	width: 50%;
	height: 580px;
	background-size: 1500px 624px;
	background-repeat: no-repeat;
	background-position-x: center;
	position: absolute;
}

.sub_promotion_copy_wrapper {
	text-align: center;
	padding-top: 47px;
	position: relative;
	z-index: 4;
	height: 620px;
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

//
//
//
// footer
footer {
	background-color: #f5f5f7;
}

.footer_wrapper {
	margin: 0 auto;
	max-width: 980px;
	padding: 0 22px;
	font-size: 12px;
}

.footer_intro {
	padding-top: 20px;
}
</style>

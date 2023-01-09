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
				<div class="column" v-for="(item, index) in items" :key="index">
					<ul v-if>
						<li v-for="(item, index) in items" :key="index"></li>
					</ul>
				</div>
				<div>ul</div>
			</nav>
			<section></section>
		</div>
	</footer>
</template>

<script>
import iphone14 from "../assets/images/iphone_main_product.png";
import iphonePro14 from "../assets/images/iphonepro_main_product.png";
import appleWatch from "../assets/images/applewatch_image.png";
import appleWatchLogo from "../assets/images/applewatch_logo.png";
import subAppleWatch from "../assets/images/applewatch_promotion_image.png";
import subAppleWatchLogo from "../assets/images/applewatch_promotion_logo.png";
import ipad from "../assets/images/ipad_image.png";
import appleFitnessLogo from "../assets/images/apple_fitness_logo.png";
import appleFitness from "../assets/images/apple_fitness_promotion.png";
import appleCardLogo from "../assets/images/applecard_logo.png";
import appleCard from "../assets/images/applecard.png";
import ipadPro from "../assets/images/ipadPro.png";
import airPods from "../assets/images/airpods.png";
import m2Chip from "../assets/images/m2chip.png";

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
			mainPromotionList: [
				{
					title: "iPhone 14 Pro",
					sub: "프로 그 이상.",
					image: iphonePro14,
					color: "white",
				},
				{
					title: "iPhone 14",
					sub: "크게. 더 크게.",
					image: iphone14,
					color: "black",
				},
				{
					title: false,
					titleLink: appleWatchLogo,
					sub: "건강하게 앞서 나아가다.",
					image: appleWatch,
					color: "white",
				},
			],
			subPromotionList: [
				{
					title: false,
					titleLink: subAppleWatchLogo,
					sub: "모험을 위한 시간",
					subImage: false,
					image: subAppleWatch,
					color: "black",
				},
				{
					title: "iPad",
					sub: "쓰다. 그리다. 빠져들다.",
					image: ipad,
					subImage: false,
					color: "black",
				},
				{
					title: false,
					titleLink: appleFitnessLogo,
					sub: "건강해지는 시간",
					image: appleFitness,
					subImage: false,
					color: "black",
				},
				{
					title: false,
					titleLink: appleCardLogo,
					sub: "혁신적인 카드",
					image: appleCard,
					subImage: false,
					color: "black",
				},
				{
					title: "iPad Pro",
					titleLink: m2Chip,
					sub: "막강한 성능의 M2 탑재",
					subImage: true,
					image: ipadPro,
					color: "white",
				},
				{
					title: "AirPods Pro",
					sub: "듣는다는 것을 다시 생각하다.",
					image: airPods,
					subImage: false,
					color: "white",
				},
			],
			footerList: [
				{
					col: 1,
					title: "쇼핑 및 알아보기",
					list: [
						"스토어",
						"Mac",
						"iPad",
						"iPhone",
						"Watch",
						"AirPods",
						"TV 및 홈",
						"AirTag",
						"액세서리",
					],
				},
				{
					col: 2,
					title: "서비스",
					list: [
						"Apple Music",
						"Apple TV+",
						"Apple Arcade",
						"iCloud",
						"Apple Books",
						"Apple Podcast",
						"App Store",
					],
				},
				{
					col: 2,
					title: "계정",
					list: ["Apple ID 관리", "Apple Store 계정", "iCloud.com"],
				},
				{
					col: 3,
					title: "Apple Store",
					list: [
						"매장 찾기",
						"Genius Bar",
						"Today at Apple",
						"Apple 캠프",
						"Apple Store 앱",
						"리퍼 및 특가 제품",
						"금융 혜택",
						"Apple Trade In",
						"주문 상태",
						"쇼핑 도움말",
					],
				},
				{
					col: 4,
					title: "비즈니스",
					list: ["Apple과 비즈니스", "비즈니스를 위한 제품 쇼핑하기"],
				},
				{
					col: 4,
					title: "교육",
					list: [
						"Apple과 교육",
						"초중고용 제품 쇼핑하기",
						"대학 생활을 위한 제품 쇼핑하기",
					],
				},
				{
					col: 5,
					title: "Apple의 가치관",
					list: [
						"손쉬운 사용",
						"교육",
						"환경",
						"개인정보 보호",
						"협력업체에 대한 책임",
					],
				},
				{
					col: 5,
					title: "Apple 정보",
					list: [
						"Newsroom",
						"Apple 리더십",
						"채용 안내",
						"윤리 및 규정 준수",
						"이벤트",
						"일자리 창출",
						"Apple 연락처",
					],
				},
			],
		};
	},
	methods: {},
};
</script>
<style lang="scss">
// header
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

// sub_promotion

.sub_promotion {
	display: grid;
	grid-template-rows: repeat(2, 580px);
	grid-template-columns: repeat(2, 50%);
	gap: 15px;
}

// .sub_promotion_wrapper {
// 	position: relative;
// }

.sub_promotion_image {
	width: 50%;
	height: 580px;
	background-size: 1500px 624px;
	background-repeat: no-repeat;
	// left: calc(50% + 0px);
	// transform: translatex(-25%);
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
	// position: relative;
	// z-index: 4;
	height: 70px;
	font-size: 45px;
	font-weight: 600;
}

.sub_promotion_headline_image {
	height: 70px;
	background-size: auto 60%;
	background-repeat: no-repeat;
	background-position: center;
	// z-index: 4;
	// position: absolute;
}

.sub_promotion_subline {
	font-size: 20px;
	margin-top: -15px;
}

.sub_link > a {
	font-size: 16px;
	font-weight: 700;
}

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

<template lang="">
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
			<nav class="footer_nav_wrapper">
				<div
					v-for="(footerItem, colNum) in footerList"
					:key="colNum"
					class="footer_column_wrapper"
				>
					<ul v-if="footerItem.length == 2">
						<div
							v-for="(sameColItems, index) in footerItem"
							:key="index"
							class="coloum_list"
						>
							<li class="column_title">{{ sameColItems.title }}</li>
							<li
								v-for="(colItemList, index) in sameColItems.list"
								:key="index"
							>
								{{ colItemList }}
							</li>
						</div>
					</ul>
					<ul v-else class="coloum_list">
						<li class="column_title">{{ footerItem.title }}</li>
						<li v-for="(item, index) in footerItem.list" :key="index">
							{{ item }}
						</li>
					</ul>
				</div>
			</nav>
			<!-- <nav class="footer_nav_mobile">
				<div
					v-for="(footerItem, colNum) in footerList"
					:key="colNum"
					class="footer_column_wrapper"
				>
					<ul v-if="footerItem.length == 2">
						<div
							v-for="(sameColItems, index) in footerItem"
							:key="index"
							class="coloum_list"
						>
							<li class="column_title">{{ sameColItems.title }}</li>
							<li
								v-for="(colItemList, index) in sameColItems.list"
								:key="index"
							>
								{{ colItemList }}
							</li>
						</div>
					</ul>
					<ul v-else class="coloum_list">
						<li class="column_title">{{ footerItem.title }}</li>
						<li v-for="(item, index) in footerItem.list" :key="index">
							{{ item }}
						</li>
					</ul>
				</div>
			</nav> -->
			<section></section>
		</div>
	</footer>
</template>
<script>
import { footerList } from "@/store/appleData";

export default {
	data() {
		return {
			footerList,
		};
	},
};
</script>
<style lang="scss">
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
	padding: 20px 0px;
	border-bottom: 1px solid #d2d2d7;
}

.footer_nav_wrapper {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20%, auto));
	// justify-content: space-between;
	padding: 0;
	@include mobile {
		display: none;
	}
}

.footer_nav_wrapper ul {
	list-style: none;
	text-align: left;
	padding-left: 0;
}

.coloum_list {
	margin-top: 20px;
}

.column_title {
	font-weight: 900;
}

.footer_nav_mobile {
	@include desktop {
		display: none;
	}
}
</style>

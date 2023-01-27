<template lang="">
	<div class="css_wrapper">
		<h1>CSS</h1>
		<div>
			<h2>bullet or number list</h2>
			<ul>
				<li>html is hi</li>
				<li>bullet</li>
				<li>list</li>
			</ul>
			<ol>
				<li>html</li>
				<li>hi</li>
				<li>hello</li>
			</ol>
		</div>
		<section>
			<h1 class="title">Image</h1>
			<div>
				<!-- <img src="../assets/images/신짱구.png" alt="" />
				<img src="../assets/images/신짱구.png" alt="" /> -->
			</div>
		</section>
		<section>
			<h1>DateTime</h1>
			<div>
				<div v-for="(item, index) in locales" :key="index">
					{{
						new Date().toLocaleDateString(item, {
							year: 'numeric',
							month: 'short',
							day: 'numeric',
						})
					}}
				</div>
			</div>
		</section>
		<section>
			<h1>Button</h1>
			<div>
				넥스트버튼
				<button>next</button>
			</div>
		</section>
		<hr />
		<section>
			<h1>Input 3개</h1>
			<div>
				<span>아이디</span>
				<input type="text" />
				<span>비밀번호</span>
				<input type="text" />
				<span>댓글</span>
				<input type="text" />
			</div>
		</section>
		<hr />
		<section>
			<h1>Table</h1>
			<table class="table_rtl">
				<thead>
					<tr>
						<th>test</th>
						<th>testtest</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>test22</td>
						<td>test33</td>
					</tr>
				</tbody>
			</table>
		</section>
		<hr />
		<section>
			<h1>Textarea</h1>
			<textarea name="" id="" cols="30" rows="10"></textarea>
		</section>
		<hr />
	</div>
</template>
<script>
export default {
	data() {
		return {
			locales: ['ar-SA', 'en-US', 'ru-RU'],
		};
	},
};
</script>
<style scoped>
.css_wrapper {
	direction: rtl;
}

.table_rtl {
	width: 300px;
}
</style>

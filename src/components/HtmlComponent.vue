<template lang="">
	<div dir="rtl">
		<h1>HTML</h1>
		<div>
			<h2>bullet or number list</h2>
			<ul dir="rtl">
				<li>html is hi</li>
				<li>bullet</li>
				<li>list</li>
			</ul>
			<ol dir="rtl" type="1">
				<li>html</li>
				<li>hi</li>
				<li>hello</li>
			</ol>
		</div>
		<section>
			<h1>Image</h1>
			<div dir="rtl">
				<img dir="rtl" src="../assets/신짱구.png" alt="" />
				<img src="../assets/신짱구.png" alt="" />
			</div>
		</section>
		<section>
			<h1>DateTime</h1>
			<div dir="rtl">
				<div v-for="(item, index) in locales" :key="index">
					{{
						new Date().toLocaleDateString(item, {
							year: "numeric",
							month: "short",
							day: "numeric",
						})
					}}
				</div>
			</div>
		</section>
		<section>
			<h1>Button</h1>
			<div dir="rtl">
				버튼 CSS
				<button>button</button>
			</div>
		</section>
		<hr />
		<section>
			<h1>Input 3개</h1>
			<div dir="rtl">
				<span>아이디</span>
				<input dir="rtl" type="text" />
				<span>비밀번호</span>
				<input type="text" />
				<span>댓글</span>
				<input type="text" />
			</div>
		</section>
		<hr />
		<section>
			<h1>Table</h1>
			<table class="table_rtl" dir="rtl">
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
			<textarea dir="rtl" name="" id="" cols="30" rows="10"></textarea>
		</section>
		<hr />
		<!-- <section>
			<div>
				<span>입력</span>
				<input type="text" />
				<img dir="rtl" src="../assets/arrow.png" alt="" />
			</div>
		</section> -->
	</div>
</template>
<script>
export default {
	data() {
		return {
			locales: ["ar-SA", "en-US", "ru-RU"],
		};
	},
};
</script>
<style lang=""></style>

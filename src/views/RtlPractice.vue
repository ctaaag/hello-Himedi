<template>
	<section class="bullet_list">
		<h1>Bullet List</h1>
		<div dir="rtl">
			<h2>html</h2>
			<li>html</li>
			<li>bullet</li>
			<li>list</li>
			<div>
				<span>입력</span>
				<input type="text" />
				<img dir="rtl" src="../assets/arrow.png" alt="" />
			</div>
		</div>
		<div class="bullet_list_css">
			<h2>css</h2>
			<li>css</li>
			<li>bullet</li>
			<li class="list_korean" dir="rtl">한국어입니다</li>
			<p><bdo dir="rtl">hi i'm teacher</bdo></p>
		</div>
		<div class="">
			<h2>rtlcss</h2>
			<li>rtlcss 라이브러리 사용</li>
			<li>bullet</li>
			<li>list</li>
		</div>
	</section>
	<hr />
	<section class="number_list">
		<h1>Number List</h1>
		<div dir="rtl">
			<h2>html</h2>
			<ol type="1">
				<li>html</li>
				<li>hi</li>
				<li>hello</li>
			</ol>
		</div>
		<div class="number_list_css">
			<h2>css</h2>
			<ol type="1">
				<li>css</li>
				<li>hi</li>
				<li>hello</li>
			</ol>
		</div>
		<div></div>
	</section>
	<hr />
	<section>
		<h1>Div</h1>
		<div dir="rtl">i'm html div</div>
		<div class="div_list_css">i'm css div</div>
		<p dir="auto">
			هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.
		</p>
	</section>
	<hr />
	<section>
		<h1>Image</h1>
		<span dir="rtl">hi</span>
		<div class="image_rtl">
			<img
				FlowDirection="RightToLeft"
				dir="rtl"
				src="../assets/신짱구.png"
				alt=""
			/>
			<img class="image_rtl" src="../assets/신짱구.png" alt="" />
		</div>
	</section>
	<hr />
	<section>
		<h1>Image</h1>
		<img dir="rtl" src="../assets/신짱구.png" alt="" />
		<img class="image_rtl" src="../assets/신짱구.png" alt="" />
	</section>
	<hr />
	<section>
		<h1>DateTime</h1>
		<div dir="rtl">
			<div>{{ sampleDate.toLocaleDateString("ar-SA", optionList[0]) }}</div>
			<div>{{ sampleDate.toLocaleTimeString("en-US", optionList[1]) }}</div>
			<div>{{ sampleDate.toLocaleString("ru-RU", optionList[2]) }}</div>
		</div>
	</section>
	<hr />
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
			<input dir="rtl" type="text" />
			<input type="text" />
			<input type="text" />
		</div>
		<input type="text" class="input_class" />
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
				<!-- <tr>
					<th>testtest</th>
				</tr> -->
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
</template>
<script>
// var rtlcss = require("rtlcss");
// var result = rtlcss.process("body { direction:ltr; }");
// console.log(result);
//result == body { direction:rtl; }

export default {
	data() {
		return {
			sampleDate: new Date(),
			dateTimeList: ["date", "time", "dateTime"],
			localeList: ["ar-SA", "ar-AE", "en-US", "en-GB", "ru-RU"],
			optionList: [
				{ year: "numeric", month: "short", day: "numeric" },
				{ minute: "numeric", hour: "numeric" },
				{
					year: "numeric",
					month: "short",
					day: "numeric",
					minute: "numeric",
					hour: "numeric",
				},
			],
		};
	},
};
</script>
<style>
.bullet_list_css {
	direction: rtl;
}

.list_korean {
	direction: rtl;
}

.number_list_css {
	direction: rtl;
}

.div_list_css {
	direction: rtl;
}

.image_rtl {
	direction: rtl;
}

.input_class {
	display: inline-block;
	direction: rtl;
}

.table_rtl {
	width: 200px;
	border: 1px solid red;
	direction: rtl;
}
</style>

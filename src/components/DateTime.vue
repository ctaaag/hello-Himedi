<template>
	<div>hi</div>
</template>

<script>
let date = new Date();

const dateOptions = {
	// weekday: "short",
	year: "numeric",
	month: "short",
	day: "numeric",
};

const timeOptions = {
	minute: "numeric",
	hour: "numeric",
};

const dateTimeOptions = { ...dateOptions, ...timeOptions };

console.log("-----------date----------");
console.log("Korean (Korea)", date.toLocaleDateString("ko-KR", dateOptions));
console.log("Arabic (Saudi Arabia)", date.toLocaleDateString("ar-SA"));
console.log("Arabic (U.A.E.)", date.toLocaleDateString("ar-AE"));
console.log(
	"English (United States)",
	date.toLocaleDateString("en-US", dateOptions)
);
console.log(
	"English (United Kingdom)",
	date.toLocaleDateString("en-GB", dateOptions)
);
console.log("Russian (Russia)", date.toLocaleDateString("ru-RU", dateOptions));

console.log("-----------time----------");
console.log("Korean (Korea)", date.toLocaleTimeString("ko-KR"));
console.log("Arabic (Saudi Arabia)", date.toLocaleTimeString("ar-SA"));
console.log("Arabic (U.A.E.)", date.toLocaleTimeString("ar-AE"));
console.log(
	"English (United States)",
	date.toLocaleTimeString("en-US", timeOptions)
);
console.log("English (United Kingdom)", date.toLocaleTimeString("en-GB"));
console.log("Russian (Russia)", date.toLocaleTimeString("ru-RU"));

console.log("-----------datetime----------");
console.log("Korean (Korea)", date.toLocaleString("ko-KR"));
console.log("Arabic (Saudi Arabia)", date.toLocaleString("ar-SA"));
console.log("Arabic (U.A.E.)", date.toLocaleString("ar-AE"));
console.log(
	"English (United States)",
	date.toLocaleString("en-US", dateTimeOptions)
);
console.log("English (United Kingdom)", date.toLocaleString("en-GB"));
console.log("Russian (Russia)", date.toLocaleString("ru-RU"));
export default {};
</script>

<style></style>

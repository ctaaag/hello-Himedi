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

const headerOptionList = [
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
];

const mainPromotionList = [
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
];

const subPromotionList = [
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
];

const footerList = [
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
	[
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
	],
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
	[
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
	],
	[
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
];

export { headerOptionList, mainPromotionList, subPromotionList, footerList };

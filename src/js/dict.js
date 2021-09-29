const roleList = {
	//術師
	Ceobe: {
		rolename: "刻俄柏",
		type: "caster",
		star: 6
	},
	Ifrit: {
		rolename: "伊芙利特",
		type: "caster",
		star: 6
	},
	Eyjafjalla: {
		rolename: "艾雅法拉",
		type: "caster",
		star: 6
	},
	Mostima: {
		rolename: "莫斯提馬",
		type: "caster",
		star: 6
	},
	Amiya: {
		rolename: "阿米婭",
		type: "caster",
		star: 5
	},
	Nightmare: {
		rolename: "夜魔",
		type: "caster",
		star: 5
	},
	Absinthe: {
		rolename: "苦艾",
		type: "caster",
		star: 5
	},
	Tomimi: {
		rolename: "特米米",
		type: "caster",
		star: 5
	},
	Skyfire: {
		rolename: "天火",
		type: "caster",
		star: 5
	},
	Leonhardt: {
		rolename: "萊恩哈特",
		type: "caster",
		star: 5
	},
	Leizi: {
		rolename: "驚蜇",
		type: "caster",
		star: 5
	},
	Beeswax: {
		rolename: "蜜蠟",
		type: "caster",
		star: 5
	},
	Mint: {
		rolename: "薄綠",
		type: "caster",
		star: 5
	},
	Haze: {
		rolename: "夜煙",
		type: "caster",
		star: 4
	},
	Gitano: {
		rolename: "遠山",
		type: "caster",
		star: 4
	},
	Greyy: {
		rolename: "格雷伊",
		type: "caster",
		star: 4
	},
	Click: {
		rolename: "卡達",
		type: "caster",
		star: 4
	},
	Steward: {
		rolename: "史都華德",
		type: "caster",
		star: 3
	},
	Lava: {
		rolename: "炎熔",
		type: "caster",
		star: 3
	},
	Durin: {
		rolename: "杜林",
		type: "caster",
		star: 2
	},
	F12: {
		rolename: "12F",
		type: "caster",
		star: 2
	},
	//先鋒
	Bagpipe: {
		rolename: "風笛",
		type: "vanguard",
		star: 6
	},
	Siege: {
		rolename: "推進之王",
		type: "vanguard",
		star: 6
	},
	Chiave: {
		rolename: "賈維",
		type: "vanguard",
		star: 5
	},
	Elysium: {
		rolename: "極境",
		type: "vanguard",
		star: 5
	},
	Grani: {
		rolename: "格拉尼",
		type: "vanguard",
		star: 5
	},
	Texas: {
		rolename: "德克薩斯",
		type: "vanguard",
		star: 5
	},
	Zima: {
		rolename: "凜冬",
		type: "vanguard",
		star: 5
	},
	Myrtle: {
		rolename: "桃金娘",
		type: "vanguard",
		star: 4
	},
	Vigna: {
		rolename: "紅豆",
		type: "vanguard",
		star: 4
	},
	Scavenger: {
		rolename: "清道夫",
		type: "vanguard",
		star: 4
	},
	Courier: {
		rolename: "訊使",
		type: "vanguard",
		star: 4
	},
	Plume: {
		rolename: "翎羽",
		type: "vanguard",
		star: 3
	},
	Vanilla: {
		rolename: "香草",
		type: "vanguard",
		star: 3
	},
	Fang: {
		rolename: "芬",
		type: "vanguard",
		star: 3
	},
	Yato: {
		rolename: "夜刀",
		type: "vanguard",
		star: 2
	},
	//近衛
	Surtr: {
		rolename: "史爾特爾",
		type: "guard",
		star: 6
	},
	Thorns: {
		rolename: "棘刺",
		type: "guard",
		star: 6
	},
	Blaze: {
		rolename: "煌",
		type: "guard",
		star: 6
	},
	Hellagur: {
		rolename: "赫拉格",
		type: "guard",
		star: 6
	},
	Chen: {
		rolename: "陳",
		type: "guard",
		star: 6
	},
	Skadi: {
		rolename: "斯卡蒂",
		type: "guard",
		star: 6
	},
	Silverash: {
		rolename: "銀灰",
		type: "guard",
		star: 6
	},
	Whislash: {
		rolename: "鞭刃",
		type: "guard",
		star: 5
	},
	Flint: {
		rolename: "燧石",
		type: "guard",
		star: 5
	},
	Ayerscarpe: {
		rolename: "斷崖",
		type: "guard",
		star: 5
	},
	Sideroca: {
		rolename: "鑄鐵",
		type: "guard",
		star: 5
	},
	Bibeak: {
		rolename: "柏喙",
		type: "guard",
		star: 5
	},
	Broca: {
		rolename: "布洛卡",
		type: "guard",
		star: 5
	},
	Flamebringer: {
		rolename: "炎客",
		type: "guard",
		star: 5
	},
	Astesia: {
		rolename: "星極",
		type: "guard",
		star: 5
	},
	Swire: {
		rolename: "詩懷雅",
		type: "guard",
		star: 5
	},
	Savage: {
		rolename: "暴行",
		type: "guard",
		star: 5
	},
	Specter: {
		rolename: "幽靈鯊",
		type: "guard",
		star: 5
	},
	Lappland: {
		rolename: "拉普蘭德",
		type: "guard",
		star: 5
	},
	Indra: {
		rolename: "因陀羅",
		type: "guard",
		star: 5
	},
	Franka: {
		rolename: "芙蘭卡",
		type: "guard",
		star: 5
	},
	Guardamiya: {
		rolename: "阿米婭",
		type: "guard",
		star: 5
	},
	Tachanka: {
		rolename: "Tachanka",
		type: "guard",
		star: 5
	},
	Arene: {
		rolename: "芳汀",
		type: "guard",
		star: 4
	},
	Cutter: {
		rolename: "刻刀",
		type: "guard",
		star: 4
	},
	Conviction: {
		rolename: "斷罪者",
		type: "guard",
		star: 4
	},
	Utage: {
		rolename: "宴",
		type: "guard",
		star: 4
	},
	Beehunter: {
		rolename: "獵蜂",
		type: "guard",
		star: 4
	},
	Mousse: {
		rolename: "慕斯",
		type: "guard",
		star: 4
	},
	Estelle: {
		rolename: "艾絲黛爾",
		type: "guard",
		star: 4
	},
	Frostleaf: {
		rolename: "霜葉",
		type: "guard",
		star: 4
	},
	Matoimaru: {
		rolename: "纏丸",
		type: "guard",
		star: 4
	},
	Dobermann: {
		rolename: "杜賓",
		type: "guard",
		star: 4
	},
	Jackie: {
		rolename: "杰克",
		type: "guard",
		star: 4
	},
	Popukar: {
		rolename: "泡芙卡",
		type: "guard",
		star: 3
	},
	Midnight: {
		rolename: "月見夜",
		type: "guard",
		star: 3
	},
	Melantha: {
		rolename: "玫蘭莎",
		type: "guard",
		star: 3
	},
	Castle3: {
		rolename: "Castle-3",
		type: "guard",
		star: 1
	},
	//狙擊
	Rosmontis: {
		rolename: "迷迭香",
		type: "sniper",
		star: 6
	},
	Poca: {
		rolename: "早露",
		type: "sniper",
		star: 6
	},
	W: {
		rolename: "W",
		type: "sniper",
		star: 6
	},
	Schwarz: {
		rolename: "黑",
		type: "sniper",
		star: 6
	},
	Exusiai: {
		rolename: "能天使",
		type: "sniper",
		star: 6
	},
	Ash: {
		rolename: "Ash",
		type: "sniper",
		star: 6
	},
	April: {
		rolename: "四月",
		type: "sniper",
		star: 5
	},
	Andreana: {
		rolename: "安哲拉",
		type: "sniper",
		star: 5
	},
	Sesa: {
		rolename: "欇砂",
		type: "sniper",
		star: 5
	},
	GreyThroat: {
		rolename: "灰喉",
		type: "sniper",
		star: 5
	},
	Executor: {
		rolename: "送葬人",
		type: "sniper",
		star: 5
	},
	Firewatch: {
		rolename: "守林人",
		type: "sniper",
		star: 5
	},
	Provence: {
		rolename: "普羅旺斯",
		type: "sniper",
		star: 5
	},
	Meteorite: {
		rolename: "隕星",
		type: "sniper",
		star: 5
	},
	Platinum: {
		rolename: "白金",
		type: "sniper",
		star: 5
	},
	Bluepoison: {
		rolename: "藍毒",
		type: "sniper",
		star: 5
	},
	Aosta: {
		rolename: "奧斯塔",
		type: "sniper",
		star: 5
	},
	Aciddrop: {
		rolename: "酸糖",
		type: "sniper",
		star: 4
	},
	Ambriel: {
		rolename: "安比爾",
		type: "sniper",
		star: 4
	},
	May: {
		rolename: "梅",
		type: "sniper",
		star: 4
	},
	Vermeil: {
		rolename: "紅雲",
		type: "sniper",
		star: 4
	},
	Shirayuki: {
		rolename: "白雪",
		type: "sniper",
		star: 4
	},
	Meteor: {
		rolename: "流星",
		type: "sniper",
		star: 4
	},
	Jessica: {
		rolename: "杰西卡",
		type: "sniper",
		star: 4
	},
	Catapult: {
		rolename: "空爆",
		type: "sniper",
		star: 3
	},
	Adnachiel: {
		rolename: "安德切爾",
		type: "sniper",
		star: 3
	},
	Kroos: {
		rolename: "克洛絲",
		type: "sniper",
		star: 3
	},
	Rangers: {
		rolename: "巡林者",
		type: "sniper",
		star: 2
	},
	//輔助
	Suzuran: {
		rolename: "鈴蘭",
		type: "supporter",
		star: 6
	},
	Magallan: {
		rolename: "麥哲倫",
		type: "supporter",
		star: 6
	},
	Angelina: {
		rolename: "安潔莉娜",
		type: "supporter",
		star: 6
	},
	Scene: {
		rolename: "稀音",
		type: "supporter",
		star: 5
	},
	Tsukinogi: {
		rolename: "月禾",
		type: "supporter",
		star: 5
	},
	Shamare: {
		rolename: "巫戀",
		type: "supporter",
		star: 5
	},
	Glaucus: {
		rolename: "格勞克斯",
		type: "supporter",
		star: 5
	},
	Sora: {
		rolename: "空",
		type: "supporter",
		star: 5
	},
	Istina: {
		rolename: "真理",
		type: "supporter",
		star: 5
	},
	Pramanix: {
		rolename: "初雪",
		type: "supporter",
		star: 5
	},
	Mayer: {
		rolename: "梅爾",
		type: "supporter",
		star: 5
	},
	Podenco: {
		rolename: "波登可",
		type: "supporter",
		star: 4
	},
	Earthspirit: {
		rolename: "地靈",
		type: "supporter",
		star: 4
	},
	Deepcolor: {
		rolename: "深海色",
		type: "supporter",
		star: 4
	},
	Orchid: {
		rolename: "梓蘭",
		type: "supporter",
		star: 3
	},
	//醫療
	Nightingale: {
		rolename: "夜鶯",
		type: "medic",
		star: 6
	},
	Shining: {
		rolename: "閃靈",
		type: "medic",
		star: 6
	},
	Whisperain: {
		rolename: "絮雨",
		type: "medic",
		star: 5
	},
	Folinic: {
		rolename: "亞葉",
		type: "medic",
		star: 5
	},
	Breeze: {
		rolename: "微風",
		type: "medic",
		star: 5
	},
	Ceylon: {
		rolename: "錫蘭",
		type: "medic",
		star: 5
	},
	Warfarin: {
		rolename: "華法琳",
		type: "medic",
		star: 5
	},
	Silence: {
		rolename: "赫默",
		type: "medic",
		star: 5
	},
	Ptilopsis: {
		rolename: "白面鴞",
		type: "medic",
		star: 5
	},
	Sussurro: {
		rolename: "蘇蘇洛",
		type: "medic",
		star: 4
	},
	Perfumer: {
		rolename: "調香師",
		type: "medic",
		star: 4
	},
	Gavial: {
		rolename: "嘉維爾",
		type: "medic",
		star: 4
	},
	Myrrh: {
		rolename: "末藥",
		type: "medic",
		star: 4
	},
	Ansel: {
		rolename: "安賽爾",
		type: "medic",
		star: 3
	},
	Hibiscus: {
		rolename: "芙蓉",
		type: "medic",
		star: 3
	},
	Lancet2: {
		rolename: "Lancet-2",
		type: "medic",
		star: 1
	},
	//重裝
	Hoshiguma: {
		rolename: "星熊",
		type: "defender",
		star: 6
	},
	Nian: {
		rolename: "年",
		type: "defender",
		star: 6
	},
	Saria: {
		rolename: "塞雷婭",
		type: "defender",
		star: 6
	},
	Blemishine: {
		rolename: "瑕光",
		type: "defender",
		star: 6
	},
	Mudrock: {
		rolename: "泥岩",
		type: "defender",
		star: 6
	},
	Eunectes: {
		rolename: "森蚺",
		type: "defender",
		star: 6
	},
	Croissant: {
		rolename: "可頌",
		type: "defender",
		star: 5
	},
	Bison: {
		rolename: "拜松",
		type: "defender",
		star: 5
	},
	Liskarm: {
		rolename: "雷蛇",
		type: "defender",
		star: 5
	},
	Nearl: {
		rolename: "臨光",
		type: "defender",
		star: 5
	},
	Hung: {
		rolename: "吽",
		type: "defender",
		star: 5
	},
	Vulcan: {
		rolename: "火神",
		type: "defender",
		star: 5
	},
	Asbestos: {
		rolename: "石棉",
		type: "defender",
		star: 5
	},
	Blitz: {
		rolename: "Blitz",
		type: "defender",
		star: 5
	},
	Cuora: {
		rolename: "蛇屠箱",
		type: "defender",
		star: 4
	},
	Matterhorn: {
		rolename: "角峰",
		type: "defender",
		star: 4
	},
	Bubble: {
		rolename: "泡泡",
		type: "defender",
		star: 4
	},
	Gummy: {
		rolename: "古米",
		type: "defender",
		star: 4
	},
	Durnar: {
		rolename: "堅雷",
		type: "defender",
		star: 4
	},
	Cardigan: {
		rolename: "卡緹",
		type: "defender",
		star: 3
	},
	Beagle: {
		rolename: "米格魯",
		type: "defender",
		star: 3
	},
	Spot: {
		rolename: "斑點",
		type: "defender",
		star: 3
	},
	Noircorne: {
		rolename: "黑角",
		type: "defender",
		star: 2
	},
	//特種
	Weedy: {
		rolename: "溫蒂",
		type: "specialist",
		star: 6
	},
	Phantom: {
		rolename: "魁影",
		type: "specialist",
		star: 6
	},
	Aak: {
		rolename: "阿",
		type: "specialist",
		star: 6
	},
	Snowsant: {
		rolename: "雪雉",
		type: "specialist",
		star: 5
	},
	Waaifu: {
		rolename: "槐琥",
		type: "specialist",
		star: 5
	},
	Feater: {
		rolename: "食鐵獸",
		type: "specialist",
		star: 5
	},
	Manticore: {
		rolename: "獅蠍",
		type: "specialist",
		star: 5
	},
	Cliffheart: {
		rolename: "崖心",
		type: "specialist",
		star: 5
	},
	Projektred: {
		rolename: "紅",
		type: "specialist",
		star: 5
	},
	Frost: {
		rolename: "Frost",
		type: "specialist",
		star: 5
	},
	Jaye: {
		rolename: "孑",
		type: "specialist",
		star: 4
	},
	Ethan: {
		rolename: "伊桑",
		type: "specialist",
		star: 4
	},
	Shaw: {
		rolename: "阿消",
		type: "specialist",
		star: 4
	},
	Rope: {
		rolename: "暗索",
		type: "specialist",
		star: 4
	},
	Gravel: {
		rolename: "礫",
		type: "specialist",
		star: 4
	},
	Thermalex: {
		rolename: "Thermal-EX",
		type: "specialist",
		star: 1
	}
};

const itemList = {
	test1: {
		itemname: "測試道具1",
		cost: 10,
		text: ""
	},
	test2: {
		itemname: "測試道具2",
		cost: 20,
		text: ""
	},
	test3: {
		itemname: "測試道具3",
		cost: 30,
		text: ""
	},
	test4: {
		itemname: "測試道具4",
		cost: 40,
		text: ""
	},
	test5: {
		itemname: "測試道具5",
		cost: 50,
		text: ""
	},
	test6: {
		itemname: "測試道具6",
		cost: 60,
		text: ""
	},
	test7: {
		itemname: "測試道具7",
		cost: 70,
		text: ""
	},
	test8: {
		itemname: "測試道具8",
		cost: 80,
		text: ""
	},
	test9: {
		itemname: "測試道具9",
		cost: 90,
		text: ""
	},
	test10: {
		itemname: "測試道具10",
		cost: 100,
		text: ""
	},
	test11: {
		itemname: "測試道具11",
		cost: 10,
		text: ""
	},
	test12: {
		itemname: "測試道具12",
		cost: 20,
		text: ""
	},
	test13: {
		itemname: "測試道具13",
		cost: 30,
		text: ""
	},
	test14: {
		itemname: "測試道具14",
		cost: 40,
		text: ""
	},
	test15: {
		itemname: "測試道具15",
		cost: 50,
		text: ""
	},
	test16: {
		itemname: "測試道具16",
		cost: 60,
		text: ""
	},
	test17: {
		itemname: "測試道具17",
		cost: 70,
		text: ""
	},
	test18: {
		itemname: "測試道具18",
		cost: 80,
		text: ""
	},
	test19: {
		itemname: "測試道具19",
		cost: 90,
		text: ""
	},
	test20: {
		itemname: "測試道具20",
		cost: 100,
		text: ""
	},
	vanguard: {
		itemname: "先鋒招募卷",
		cost: 4,
		text: "戰鬥之中不可或缺的夥伴，您的開局好幫手。",
		effect: "招募或晉升一名先鋒幹員。"
	},
	sniper: {
		itemname: "狙擊招募卷",
		cost: 4,
		text: "面對空襲，狙擊手往往是你的最佳首選。",
		effect: "招募或晉升一名狙擊幹員。"
	},
	guard: {
		itemname: "近衛招募卷",
		cost: 4,
		text: "我們近衛方舟可不是叫假的，當你不知道要帶什麼幹員時，選近衛就對了。",
		effect: "招募或晉升一名近衛幹員。"
	},
	caster: {
		itemname: "術師招募卷",
		cost: 4,
		text: "術師的能耐，絕不是只有殺重甲單位而已！",
		effect: "招募或晉升一名術師幹員。"
	},
	defender: {
		itemname: "重裝招募卷",
		cost: 4,
		text: "羅德島的防禦專家，各個都是博士的爹親娘親。",
		effect: "招募或晉升一名重裝幹員。"
	},
	medic: {
		itemname: "醫療招募卷",
		cost: 4,
		text: "方舟綜合戰鬥能力最強的醫療部門，隨時準備好給敵人最強的物理治療！",
		effect: "招募或晉升一名醫療幹員。"
	},
	specialist: {
		itemname: "特種招募卷",
		cost: 4,
		text: "不要再問我特種的定位是什麼了，特種就是...特 別 強 的 那 種！",
		effect: "招募或晉升一名特種幹員。"
	},
	supporter: {
		itemname: "輔助招募卷",
		cost: 4,
		text: "戰鬥中不一定有我，但是有我，你可能會很輕鬆。",
		effect: "招募或晉升一名輔助幹員。"
	},
	all: {
		itemname: "高級招募卷",
		cost: 0,
		text: ""
	},
	merge: {
		itemname: "組合招募卷",
		cost: 0,
		text: ""
	},
	chocolate: {
		itemname: "一盒Pocky",
		cost: 0,
		text: "某隻可愛的魯柏族喜歡的零嘴，帶給你想不到的體驗。",
		effect: "幹員招募再也無法招募三星或以下幹員。",
		ban: true
	},
	greenhat: {
		itemname: "綠色貓耳帽",
		cost: 0,
		text: "一位喪心病狂的博士設計的產品，於黑市中流通，人人聞而懼之。",
		effect: "初始招募卷減少兩張，同時隨機降低一種職業的招募卷出現的機率50%。",
		ban: true
	},
	pudding: {
		itemname: "布丁通商證",
		cost: 0,
		text: "咆嘯深淵的最新道具，不只可以合法販售布丁相關食品，也可以販售長劍類武器。",
		effect: "招募與晉升幹員時，需要支付與所需希望等量的源石粒。",
		ban: true
	},
	dying: {
		itemname: "走馬燈",
		cost: 0,
		text: "",
		ban: true
	},
	panadol: {
		itemname: "普拿疼",
		cost: 0,
		text: "",
		ban: true
	},
	brochure: {
		itemname: "紫色語錄小冊",
		cost: 0,
		text: "",
		ban: true
	},
	vrglasses: {
		itemname: "古式VR護具",
		cost: 0,
		text: "",
		ban: true
	},
	licenseD: {
		itemname: "實習生駕照",
		cost: 0,
		text: "",
		ban: true
	},
	licenseC: {
		itemname: "丙級駕照",
		cost: 0,
		text: "",
		ban: true
	},
	licenseB: {
		itemname: "乙級駕照",
		cost: 0,
		text: "",
		ban: true
	},
	licenseA: {
		itemname: "甲級駕照",
		cost: 0,
		text: "",
		ban: true
	},
	spraypaint: {
		itemname: "萬用噴漆",
		cost: 0,
		text: "",
		ban: true
	},
	covid153: {
		itemname: "Covid-153",
		cost: 0,
		text: "",
		ban: true
	},
	map: {
		itemname: "地圖",
		cost: 0,
		text: "",
		ban: true
	},
	strategy: {
		itemname: "攻略",
		cost: 0,
		text: "",
		ban: true
	},
	rickroll: {
		itemname: "瑞克柔麥克風",
		cost: 0,
		text: "",
		ban: true
	},
	businesscard: {
		itemname: "紳士的名片",
		cost: 0,
		text: "",
		ban: true
	},
	collar: {
		itemname: "紫色項圈",
		cost: 0,
		text: "",
		ban: true
	},
	tetrapods: {
		itemname: "東京灣消波塊",
		cost: 0,
		text: "",
		ban: true
	},
	stylus: {
		itemname: "電繪筆",
		cost: 0,
		text: "",
		ban: true
	},
	necklace: {
		itemname: "齒輪護符",
		cost: 0,
		text: "",
		ban: true
	},
	basementkey: {
		itemname: "鑰匙",
		cost: 0,
		text: "",
		ban: true
	},
	torch: {
		itemname: "絕望的火炬",
		cost: 0,
		text: "",
		ban: true
	},
	leash: {
		itemname: "狗繩",
		cost: 0,
		text: "",
		ban: true
	}
};

const storyList = [
	[
		"L1S1", "L1S2", "L1S3", "L1S4", "L1S5",
		"L1S1r1", "L1S1r2",
		"L1S2r1", "L1S2r2",
		"L1S3r1", "L1S3r2", "L1S3r3",
		"L1S4r1", "L1S4r2", "L1S4r3",
		"L1S5r1", "L1S5r2", "L1S5r3", "L1S5r4", "L1S5r5", "L1S5r6"
	],
	[
		"L2S1", "L2S2", "L2S3", "L2S4", "L2S5",
		"L2S1r1", "L2S1r2", "L2S1r3",
		"L2S2r1", "L2S2r2", "L2S2r3",
		"L2S3r1", "L2S3r2",
		"L2S4r1", "L2S4r2", "L2S4r3", "L2S4r4",
		"L2S5r1", "L2S5r2", "L2S5r3"
	],
	["L3S1", "L3S2", "L3S3", "L3S4", "L3S5"],
	["L4S1", "L4S2", "L4S3", "L4S4", "L4S5"]
];

const fightList = {
	F1: "作戰 - 風蝕高地", F2: "作戰 - 破碎大道", F3: "作戰 - 6區廢墟", F4: "作戰 - 中轉站",
	F5: "作戰 - 荒廢工廠", F6: "作戰 - 霜凍廢墟", F7: "作戰 - 黃鐵峽谷", F8: "作戰 - 軍械庫東",
	S1: "緊急作戰 - 風蝕高地", S2: "緊急作戰 - 破碎大道", S3: "緊急作戰 - 6區廢墟", S4: "緊急作戰 - 中轉站",
	S5: "緊急作戰 - 荒廢工廠", S6: "緊急作戰 - 霜凍廢墟", S7: "緊急作戰 - 黃鐵峽谷", S8: "緊急作戰 - 軍械庫東",
	X2: "作戰 - H5-4", X3: "作戰 - H6-4", X4: "作戰 - H7-4"
};

const medalList = {
	medal1: {
		medalname: "凱旋而歸",
		text: "使用任意模式完成任意一個結局。"
	},
	medal2: {
		medalname: "紫華之巔",
		text: "完成隱藏結局：紫氣東來。"
	},
	medal3: {
		medalname: "星街死鬥",
		text: "完成隱藏結局：眾星雲集。"
	},
	medal4: {
		medalname: "歸於姨國",
		text: "完成隱藏結局：姨國之戰。"
	},
	medal5: {
		medalname: "大難不死",
		text: "使用禿頭模式完成任意一個結局。"
	},
	medal6: {
		medalname: "風蝕挑戰",
		text: "完成任意一個任務。"
	},
	medal7: {
		medalname: "盡收囊中",
		text: "收集完全部戰利品。"
	},
	medal8: {
		medalname: "謎語人的遺志",
		text: "？？？"
	}
}

const ticketList = {
	vanguard: ["vanguard"],
	sniper: ["sniper"],
	medic: ["medic"],
	caster: ["caster"],
	guard: ["guard"],
	defender: ["defender"],
	supporter: ["supporter"],
	specialist: ["specialist"],
	all: ["vanguard", "sniper", "medic", "caster", "guard", "defender", "supporter", "specialist"],
	merge: [""]
}

export {roleList, itemList, storyList, fightList, medalList, ticketList};
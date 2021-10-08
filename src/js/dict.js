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
	Greythroat: {
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
		cost: 10,
		text: "幹員全家餐，絕對讓你招到滿意的幹員...蛤，你說你沒希望了，那當我沒說...",
		effect: "招募或晉升任意一名幹員。"
	},
	merge: {
		itemname: "組合招募卷",
		cost: 6,
		text: "幹員隨機套餐，這次會出現哪些職業呢？好期待喔~",
		effect: "招募或晉升隨機兩種職業的一位幹員。"
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
		text: "據說人死前會看到自己一生的經過，但是你是能死而復活的人，帶著死亡回歸的記憶，下次一定...",
		effect: "獲得時希望降至-999，探險直接失敗。",
		carry: "初始希望+4。",
		ban: true
	},
	panadol: {
		itemname: "普拿疼",
		cost: 0,
		text: "道行高深的方丈精煉自己的頭髮而成，對Covid-153病毒有良好的防護力。",
		effect: "免除 Covid-153 的暈船效果。",
		ban: true
	},
	brochure: {
		itemname: "紫色語錄小冊",
		cost: 0,
		text: "城內的變態們共同傳閱的聖經，除了各種露骨與犯罪的詞句外，還有一些讓人看不懂的編碼。",
		ban: true
	},
	vrglasses: {
		itemname: "古式VR護具",
		cost: 0,
		text: "古早時期就盛傳著VR技術了，靠著這個護具不只能穿越空間，更能穿越時間、穿越陰陽，在現代我們都稱他為觀落陰。番車城的人們也流行使用這護具，大家都稱為：通靈。",
		carry: "超時空借貸，犧牲自己探險結算時的10點總分，換得初始希望與源石粒各+5。",
		ban: true
	},
	licenseD: {
		itemname: "實習生駕照",
		cost: 0,
		text: "初來乍到的新人們，駕車總里程數<100，請更加努力，讓自己能存活在這凶險無數的城市中吧！",
		effect: "四星角色招募與晉升消耗希望-1。",
		ban: true
	},
	licenseC: {
		itemname: "丙級駕照",
		cost: 0,
		text: "此駕照專為剛熟悉城市的人們打造，第一次交通違規時以口頭勸戒即可，通常里程數界在100~500之間。",
		effect: "五星角色招募與晉升消耗希望-1。",
		ban: true
	},
	licenseB: {
		itemname: "乙級駕照",
		cost: 0,
		text: "差一點點就可以甲級了，里程數大於500後即可使用此駕照，多多練習駕車吧！",
		effect: "六星角色招募與晉升消耗希望-1。",
		ban: true
	},
	licenseA: {
		itemname: "甲級駕照",
		cost: 0,
		text: "恭喜你已經是城中熟練的駕車人，里程數超過1000，請注意交通規則，大家一起開開心心的飆車吧！",
		effect: "全部角色招募與晉升消耗希望-1。",
		ban: true
	},
	spraypaint: {
		itemname: "萬用噴漆",
		cost: 0,
		text: "獲得甲級駕照後，監理所會額外附贈噴漆罐，供你幫車子自由著色，讓你成為城中獨一無二的存在。",
		ban: true
	},
	covid153: {
		itemname: "Covid-153",
		cost: 0,
		text: "城中現正流行的病毒，病毒以某位病原體的身高命名，若是中標，會出現暈船的症狀，請小心城中年輕的女孩們。",
		effect: "發動暈船效果：選擇路線時有30%機會手抖選錯選項。",
		ban: true
	},
	map: {
		itemname: "地圖",
		cost: 0,
		text: "城內的地圖，從好心的旅館主人手上拿到的，這...到底是公車路線、捷運路線、還是什麼呢？",
		ban: true
	},
	strategy: {
		itemname: "攻略",
		cost: 0,
		text: "城主調查城周圍的關卡所做出來的攻略，雖然城內大多數人根本不看，但城外的人基本評價還是很高的(？",
		ban: true
	},
	rickroll: {
		itemname: "瑞克柔麥克風",
		cost: 0,
		text: "某位出名的歌手用過的麥克風，目前是迷因界的老大，能夠光靠圖像讓人腦袋產生旋律，目前仍是醫學上一大謎團。",
		effect: "選擇路線時有20%機會出現彩蛋。",
		ban: true
	},
	businesscard: {
		itemname: "紳士的名片",
		cost: 0,
		text: "紳士們的夜店，城內會玩的人都知道在哪，這名片，是天堂的邀請。",
		effect: "開啟故事：紳士的夜店。",
		ban: true
	},
	collar: {
		itemname: "紫色項圈",
		cost: 0,
		text: "深紫人士的正字標記，出門在外需要配戴此項圈，這在某些業界是種獎勵。",
		ban: true
	},
	tetrapods: {
		itemname: "東京灣消波塊",
		cost: 0,
		text: "少林寺大師的信物，聽說是大師認識的一位大姐送的，不過比起禮物，看起來更像是某種...威脅？",
		effect: "立即隨機獲得一位尚未招募的術師幹員。",
		carry: "不會再出現術師招募卷。",
		ban: true
	},
	stylus: {
		itemname: "電繪筆",
		cost: 0,
		text: "少林寺大師的信物，是大師的吃飯工具，這次活動也幫助城內繪製宣傳，是位有才的禿頭。",
		effect: "立即隨機獲得一位尚未招募的重裝幹員。",
		carry: "不會再出現重裝招募卷。",
		ban: true
	},
	necklace: {
		itemname: "齒輪護符",
		cost: 0,
		text: "少林寺大師的信物，此身為機械所成，身若鋼鐵，心如玻璃，已被卡池們殘害而碎裂，這護符能保佑他不受機率之神迫害。",
		effect: "立即隨機獲得一位尚未招募的狙擊幹員。",
		carry: "不會再出現狙擊招募卷。",
		ban: true
	},
	basementkey: {
		itemname: "地下室鑰匙",
		cost: 0,
		text: "少林寺大師的信物，他畢生的心血都藏在這地下室中，但是打開地下室，你會發現他的\"畢生\"有一半是蘿莉。",
		effect: "立即隨機獲得一位尚未招募的先鋒幹員。",
		carry: "不會再出現先鋒招募卷。",
		ban: true
	},
	earplugs: {
		itemname: "一對耳塞",
		cost: 0,
		text: "城內的某位資深成員分送給人的東西，曾經是城中快閃演唱會先驅的她，現在她的吼聲仍舊為城市帶來快活的空氣。",
		effect: "立即隨機獲得一位尚未招募的特種或輔助幹員。",
		ban: true
	},
	torch: {
		itemname: "絕望的火炬",
		cost: 0,
		text: "你敢嘴，就要承受詛咒。在壓力測試的挑戰面前，究竟你是笑著離開，或是當個狂暴土下座組長呢？",
		effect: "作戰結束時，獎勵有30%機會減少一張招募卷(機率可疊加)。",
		ban: true
	},
	leash: {
		itemname: "狗繩",
		cost: 0,
		text: "獵犬組長御用韁繩，越夜越嗨的牠沒有人制得住，請用這個牽好牠吧！",
		effect: "若攜帶此道具成功完成探險，即可將 車牌號碼單 道具加入收藏。",
		ban: true
	},
	licenseplate: {
		itemname: "車牌號碼單",
		cost: 0,
		text: "與一般的車牌號碼不同，這些號碼是一種密碼，紳士們都知道該去哪裡輸入密碼。",
		ban: true
	},
	avocadomilk: {
		itemname: "酪梨側門牛乳",
		cost: 0,
		text: "酪梨與機器人愛的結晶，簡稱酪梨側乳，喝了能夠增強探險的戰力。",
		effect: "立即希望+2、源石粒+2。",
		ban: true
	},
	vaccine: {
		itemname: "姨苗",
		cost: 0,
		text: "當時姨苗一推出，就瘋迷全城，大家都想要擁有美麗的膚色，但要注意它的副作用可不是一般的大，請務必多喝水多休息。",
		effect: "立即隨機失去一位幹員，並且免除 Covid-153 的暈船效果。",
		ban: true
	},
	mask: {
		itemname: "口罩",
		cost: 0,
		text: "防疫期間，人人都應該要戴口罩，戴好口罩以免受到奇怪病毒的感染。",
		carry: "免除 Covid-153 的暈船效果以及 瑞克柔麥克風 的彩蛋效果。",
		ban: true
	},
	resign: {
		itemname: "辭呈",
		cost: 0,
		text: "止不住的怒氣，攔不住的離去，這道具，是對曾經的城主的紀念，讓我們懷念她。",
		carry: "減少初始2點希望，並於結算時額外獲得12點總積分。",
		ban: true
	},
	invitation: {
		itemname: "喜帖",
		cost: 0,
		text: "抽中PU六星的機率只有1%，但是離婚的機率絕對超過100%，這場婚姻終究是場悲劇，帶給你希望，也帶給你絕望。",
		effect: "立即減少10點源石粒，並增加5點希望。",
		ban: true
	},
	guava: {
		itemname: "甘草芭樂",
		cost: 0,
		text: "神秘的女孩最愛吃的水果，吃了就能暫時獲得女孩的系統權限，黑一個幹員到你的box裡。",
		effect: "立即隨機獲得一位幹員，並且將技能全部解放。",
		ban: true
	},
	blessing: {
		itemname: "阿德的祝福",
		cost: 0,
		text: "即將遠走高飛的他，留下最後一份祝福給你，接受他最後的波紋吧！",
		effect: "完成探險時，額外獲得10點總積分。",
		ban: true
	},
	clueA: {
		itemname: "線索A",
		cost: 0,
		text: "沒有無用的道具，若你覺得他沒用，表示它有別的用途。",
		ban: true
	},
	clueB: {
		itemname: "線索B",
		cost: 0,
		text: "來自一位城中大佬的訊息：當敵人一碰即碎，無須理會他怎麼死的，只要注意他死在哪就好。",
		ban: true
	},
	clueC: {
		itemname: "線索C",
		cost: 0,
		text: "道具可以組合使用，請善加利用你的想像力。",
		ban: true
	},
	///////////////////////////////////////////
	africaflag: {
		itemname: "部落聯盟旗",
		cost: 20,
		text: "天景族的部落聯盟旗，集結全部落的力量，祝你一臂之力！",
		effect: "作戰結束時，獎勵有30%機會增加一張招募卷(機率可疊加)。"
	},
	///////////////////////////////////////////
	lunch: {
		itemname: "鹿姨健康餐",
		cost: 20,
		text: "不同於芙蓉的健康餐，鹿姨健康餐好吃美味，價格公道，幹員吃了精神百倍。",
		carry: "重裝幹員初始招募後，能在背包裏吃完健康餐，直接化為全解放狀態。"
	},
	record: {
		itemname: "神秘錄音檔",
		cost: 20,
		text: "此錄音檔音源來自城內一名為可可的男子，因曾經名字又色又長，被督察處以大聲喊出自己的名字之刑。錄音檔僅供政府調閱紀錄使用。",
		carry: "狙擊幹員初始招募後，應著大喊名字的氣勢，直接自行解放所有技能。"
	},
	strategyrecord: {
		itemname: "攻略側錄檔",
		cost: 20,
		text: "此檔案由城主的秘書小草提供，時常幫助城主播報攻略的她，看著城主從小時候動不動翻車，到現在動不動壓人的成長過程，實在是…城中的叛徒！城內的人怎麼可以去看城主對外的表演呢？",
		carry: "側錄檔80%以上都是輔助幹員，因此輔助幹員初始招募後，即可迅速獲得經驗值，解放所有技能。"
	},
	hentaigraph: {
		itemname: "SCP圖組",
		cost: 20,
		text: "博士最愛偷偷看的東西，藥頭雖然已經從他陸續繼承到N大以及其他深紫人士，但貨永遠一樣純，一樣讓人血脈噴張，只是要小心…不要被背後偶爾冒出的凱爾希發現…",
		carry: "醫療幹員初始招募後，因凱爾希誓要清除所有博士房間的穢物，所以強制讓幹員技能解放完畢。"
	},
	issue: {
		itemname: "一份論文",
		cost: 20,
		text: "論文著作者為城中著名的弦魚教授，論文中探討深紫人士的心態與行為上的轉變，對政府管理人民有重大的貢獻。",
		carry: "因教授是個深海愛好者，蒂蒂、鯊鯊與他的一幫近衛同事們都能夠受到教授最先進的教育，近衛幹員初始招募後可直接解放所有技能。"
	},
	rodFA: {
		itemname: "大Fa杖",
		cost: 20,
		text: "這法杖的使用者與城內少林寺中的某位大師是競爭關係，時常挑戰術師或狙擊幹員的極限。",
		carry: "法杖能以髮換法，將髮量換為術師幹員的法力，術師幹員一經招募，即可被灌滿，解放所有技能。"
	},
	transsexualsphoto: {
		itemname: "滅Q女裝照",
		cost: 20,
		text: "現已絕版，目前只有城中足夠資深的人士會擁有，不過比起他的女裝，更讓人性奮的是他晚間的嬌喘聲。",
		carry: "先鋒幹員一經招募，就會性奮的將身心靈與所有技能解放。"
	},
	ghost: {
		itemname: "願魂之靈",
		cost: 20,
		text: "城中死者的冤魂集結，死因都是因為城主的代抽也偶爾會翻車，城主代抽有歐有非，代抽前請先詳閱公開說明書。",
		carry: "其中一個死者特別受到幹員傀影的愛戴，以他為首的特種們受到感召，招募後能夠直接解放所有技能。"
	},
	///////////////////////////////////////////
	transcript: {
		itemname: "一份成績單",
		cost: 15,
		text: "某位國中女童，因誤闖破碎大道，在裡面樂(？)不私蜀，成績大幅下滑，因此隱居於城中苦讀，甚至放棄紫色居民的殊榮。",
		carry: "破碎大道出現機率1.5倍。"
	},
	furniture: {
		itemname: "A級家具",
		cost: 15,
		text: "家具店新販售組合，廣受城內資深居民好評，尤其是愛妻的A姓大佬，上市第一天就為了居家的舒適馬上添購。",
		carry: "6區廢墟出現機率1.5倍。"
	},
	vegetable: {
		itemname: "蔬菜總匯",
		cost: 15,
		text: "菜市場的幕飛老闆每日新鮮販售，每天菜色都會變換，城中老小都非常喜愛，就連整合運動那些營養不均衡的大胖子小瘦子都慕名而來。",
		carry: "中轉站出現機率1.5倍。"
	},
	sugarbag: {
		itemname: "薑糖包",
		cost: 15,
		text: "某位攻略者的化名，於城內前次討伐戰中與其他各路神仙攻略了無數次浮士德，現在的他，沒看到浮士德就渾身不對勁。",
		carry: "荒廢工廠出現機率1.5倍。"
	},
	compressor: {
		itemname: "冷氣壓縮機",
		cost: 15,
		text: "日本製造的壓縮機很稀少，會穿女裝的壓縮機更稀少。一位城中青年因違反拐帶女童，被法官判罰女裝或是易科罰金，沒錢的他只好變賣器官，輾轉到了你的手上。",
		carry: "霜凍廢墟出現機率1.5倍。"
	},
	chimera: {
		itemname: "奇美拉",
		cost: 15,
		text: "以海豹與狗為首的多重組合獸，城內迫害對策專家，每當城內出現迫害現象時就會浮出水面，但有時候不知是面對迫害，還是享受迫害…",
		carry: "黃鐵峽谷出現機率1.5倍。"
	},
	rice: {
		itemname: "紫米飯",
		cost: 15,
		text: "吃了之後，不只更健康了，人也變得更色情了，能抵禦所有紫色的攻擊，甚至你的攻擊力比A2飛機還厲害。",
		carry: "軍械庫東出現機率1.5倍。"
	},
	//////////////////////////////////////////
	noF2: {
		itemname: "七星地火",
		cost: 25,
		text: "哇~這地火，又是四秒地火，還讓不讓人玩遊戲啊！！ - 城外某位攻略組成員",
		carry: "不會再出現破碎大道。"
	},
	noF3: {
		itemname: "防爆玻璃心",
		cost: 25,
		text: "整合運動的某幹部狂笑不止，你的幹員轉眼之間全變成了屍塊，只能等待大佬來幫幫。",
		carry: "不會再出現6區廢墟。"
	},
	noF4: {
		itemname: "內鬼型裝置",
		cost: 25,
		text: "鷹角新設計的道具，讓玩家花錢買一個脆皮到被敵人打爆就會扣減生命值的東西，爆了還直接讓人長驅直入，真的陰間。",
		carry: "不會再出現中轉站。"
	},
	noF5: {
		itemname: "防彈衣",
		cost: 25,
		text: "被射到怕的你，還不快來試試這件新型防彈衣，號稱能防禦所有狙擊彈，但是重量很重請當心。",
		carry: "不會再出現荒廢工廠。"
	},
	noF6: {
		itemname: "會辣的糖果",
		cost: 25,
		text: "雪怪小隊可能不認識你，但是一定認得這種糖，大家和和氣氣不要交戰，坐下聊聊吧。",
		carry: "不會再出現霜凍廢墟。"
	},
	noF7: {
		itemname: "反重力模組",
		cost: 25,
		text: "某位整合運動幹部最害怕的東西，買下它，她就不會再出現騷擾你了！",
		carry: "不會再出現黃鐵峽谷。"
	},
	noF8: {
		itemname: "防空雷達",
		cost: 25,
		text: "「我市區剿滅代理又失誤了啦...」『模擬器不順，代裡漏幀，又讓你漏飛機了嗎？你一定要使用看看防空雷達，一鍵清除所有飛機，代裡再也不失誤！』「我是被大槌敲死...」",
		carry: "不會再出現軍械庫東。"
	},
	//////////////////////////////////////////
	skipcard: {
		itemname: "抄越卡",
		cost: 0,
		text: "打不過，我們就抄過，抄不過，我們就跳過！",
		carry: "所有作戰會轉化為不期而遇，此次探險無法開啟隱藏終關。(不期而遇出現的對戰仍無法避免，請小心謹慎)",
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
	[
		"L3S1", "L3S2", "L3S3", "L3S4", "L3S5",
		"L3S1r1", "L3S1r2", "L3S1r3",
		"L3S2r1",
		"L3S3r1", "L3S3r2", "L3S3r3", "L3S3r4", "L3S3r5", "L3S3r6", "L3S3r7", "L3S3r8", "L3S3r9", "L3S3r0",
		"L3S3ra", "L3S3rb",
		"L3S4r1", "L3S4r2",
		"L3S5r1", "L3S5r2", "L3S5r3"
	],
	[
		"L4S1", "L4S2", "L4S3", "L4S4", "L4S5",
		"L4S1r1", "L4S1r2",
		"L4S2r1", "L4S2r2",
		"L4S3r1", "L4S3r2",
		"L4S4r1", "L4S4r2"
	]
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
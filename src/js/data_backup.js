var identifier = "德諾索";

var score = {
	totle: 300,
	finish: 10,
	fightcount: 20,
	mission: {
		mission1: {
			missionname: "衛冕之戰",
			text: "戰鬥禁止使用任意近衛幹員。",
			finish: false
		}
	},
	medal: {
		medal: {
			medalname: "紫華之巔",
			text: "完成隱藏結局：紫氣東來。"
		}
	}
}

var collection = {
	chocolate: 1,
	pudding: 1,
	vanguard: 1,
	greenhat: 1,
	caster: 1
}

var state = {
	phase: "Undefine",
	layer: 1,
	hope: 20,
	coin: 30,
	buffer2: ["Fight"],
	buffer: [["mission1", "衛免之戰"]],
	buffer3: 3,
	buffer1: ["caster", "vanguard"],
	buffer5: [["guard", 4], ["caster", 4], ["chocolate", 10], ["greenhat", 20], ["pudding", 40]],
	buffer4: [["guard", true], ["caster", true], ["caster", false], ["specialist", true], ["vanguard", true], ["supporter", true], ["defender", true], ["sniper", true]],
	message: ["", false],
	starttime: 1631870146906,
	fight: 8,
	extreme: 3,
	totalscore: 50,
	upgrade: [[0, 0, 0], [0, 0, 0], [0, 0, 0], [2, 1, 0], [4, 2, 0], [6, 3, 0]]
}

var box = {
	Silverash: 3,
	Surtr: 1,
	Amiya: 2,
	Sussurro: 2,
	Spot: 1,
	F12: 1
};

var item = {
	pudding: 1
}

const db = {identifier, score, state, box, item, collection};
export default db;
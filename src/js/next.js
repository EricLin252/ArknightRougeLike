import sha1 from 'sha1';
import d from './data';
import {clone, randSelect, merge} from './functions';
import {get, push, send} from './backend';
import {roleList, itemList, fightList, ticketList, storyList} from './dict';

const generateSkillmax = role => {
	if(roleList[role].star <= 3) return 1;
	if(roleList[role].star === 6 || roleList[role].rolename === "Amiya") return 3;
	return 2;
}

const generateRolecost = item => {
	let origin = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [2, 1, 0], [4, 2, 0], [6, 3, 0]];
	if("chocolate" in item){
		for(let i = 0; i < 3; i++){
			for(let j = 0; j < 3; j++) origin[i][j] = 999;
		}
	}
	if("licenseD" in item){
		origin[3][0] -= 1;
		origin[3][1] -= 1;
	}
	else if("licenseC" in item){
		origin[4][0] -= 1;
		origin[4][1] -= 1;
	}
	else if("licenseB" in item){
		origin[5][0] -= 1;
		origin[5][1] -= 1;
	}
	else if("licenseA" in item){
		origin[3][0] -= 1;
		origin[3][1] -= 1;
		origin[4][0] -= 1;
		origin[4][1] -= 1;
		origin[5][0] -= 1;
		origin[5][1] -= 1;
	}
	return clone(origin, []);
}

const generateFight = (prefix, carry) => {
	let probability = {};
	for(let i = 2; i <= 8; i++) probability[prefix + i] = 1/7;

	const special = {
		transcript: prefix + 2,
		furniture: prefix + 3,
		vegetable: prefix + 4,
		sugarbag: prefix + 5,
		compressor: prefix + 6,
		chimera: prefix + 7,
		rice: prefix + 8
	}
	if(carry in special){
		let target = special[carry];
		let p = probability[target] / 12;
		probability[target] *= 1.5;
		Object.keys(probability).forEach(el => {
			if(el !== target){
				probability[el] -= p;
			}
		});
	}
	const banmap = {
		noF2: prefix + 2,
		noF3: prefix + 3,
		noF4: prefix + 4,
		noF5: prefix + 5,
		noF6: prefix + 6,
		noF7: prefix + 7,
		noF8: prefix + 8
	}
	if(carry in banmap){
		let target = banmap[carry];
		probability[target] = 0;
		Object.keys(probability).forEach(el => {
			if(el !== target){
				probability[el] = 1/6;
			}
		});
	}

	return randSelect(1, probability)[0];
}

const generateWay = (layer, count, carry, item, box) => {
	const layers = [
		[
			{weight: {fight: 1}, amt: 1},
			{weight: {story: 0.75, house: 0.25}, amt: 2},
			{weight: {story: 0.4, fight: 0.4, extreme: 0.2}, amt: 3},
			{weight: {item: 1}, amt: 1}
		],
		[
			{weight: {story: 0.25, fight: 0.5, extreme: 0.25}, amt: 2},
			{weight: {story: 0.8, item: 0.2}, amt: 3},
			{weight: {house: 0.3, story: 0.7}, amt: 3},
			{weight: {fight: 0.75, extreme: 0.25}, amt: 2},
			{weight: {shop: 1}, amt: 1}
		],
		[
			{weight: {story: 0.33, house: 0.33, item: 0.34}, amt: 1},
			{weight: {extreme: 0.5, story: 0.5}, amt: 3},
			{weight: {shop: 0.4, fight: 0.2, house: 0.4}, amt: 2},
			{weight: {item: 0.5, story: 0.5}, amt: 1},
			{weight: {fight: 1}, amt: 1}
		],
		[
			{weight: {story: 1}, amt: 3},
			{weight: {house: 1}, amt: 1},
			{weight: {story: 1}, amt: 2},
			{weight: {shop: 1}, amt: 1},
			{weight: {fight: 1}, amt: 1}
		]
	];

	if(layer === 1 && count === 4){
		console.log("layer: " + layer + " / count: " + count + "：index out of limit");
		return [];
	}
	if(layer !== 1 && count === 5){
		console.log("layer: " + layer + " / count: " + count + "：index out of limit");
		return [];
	}

	let output = [];
	const L = layers[layer-1][count];
	for(let i = 0; i < L.amt; i++) output.push(randSelect(1, layers[layer-1][count].weight)[0]);
	for(let i = 0; i < output.length; i++){
		switch(output[i]){
			case "fight":
				if(carry === "skipcard") output[i] = "story";
				else if(layer === 3 && count === 4){
					if("brochure" in item && "collar" in item) output[i] = "X2";
					else{
						let count = {vanguard:0, defender:0, sniper:0, caster:0};
						Object.keys(box).forEach(el => {
							if(roleList[el].type in count) count[roleList[el].type] += 1;
						});
						if("tetrapods" in item && count.caster >= 4) output[i] = "X3";
						else if("stylus" in item && count.defender >= 4) output[i] = "X3";
						else if("necklace" in item && count.sniper >= 4) output[i] = "X3";
						else if("basementkey" in item && count.vanguard >= 4) output[i] = "X3";
						else output[i] = "F1";
					}
				}
				else if(layer === 4 && count === 4) output[i] = "X4";
				else output[i] = generateFight("F", carry);
				break;
			case "extreme":
				if(carry === "skipcard") output[i] = "story";
				else output[i] = generateFight("S", carry);
				break;
			default:
				break;
		}
	}
	return output;
}

const generateRick = () => {
	switch(randSelect(1, {A:0.8, B:0.05, C:0.05, D:0.05, E:0.05})[0]){
		case "A": break;
		case "B": window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); break;
		case "C": window.open("https://www.youtube.com/watch?v=zi7s5-33ty8"); break;
		case "D": window.open("https://www.youtube.com/watch?v=072tU1tamd0"); break;
		case "E": window.open("https://www.youtube.com/watch?v=xjO8BFnNk9c"); break;
		default: break;
	}
}

const generateDizzy = (ans, buffer) => {
	let ansArr = [ans];
	buffer.forEach(el => {
		if(el !== ans) ansArr.push(el);
	});
	let probability = {};
	ansArr.forEach(el => probability[el] = 1/ansArr.length);
	let new_ans = randSelect(1, probability)[0];
	return new_ans === "item"? ans : new_ans;
}

const generateLevel = (layer, map) => {
	if(map[0] === "X") return "?";
	else if(map === "F1") return 8;
	switch(layer){
		case 1: return 0 + (map[0] === "S"? 1 : 0);
		case 2: return 3 + (map[0] === "S"? 1 : 0);
		case 3: return 6 + (map[0] === "S"? 1 : 0);
		default: return "";
	}
}

const generateTickets = (amt, carry, item) => {
	let probability = {
		vanguard: 0.125,
		sniper: 0.125,
		medic: 0.125,
		caster: 0.125,
		guard: 0.125,
		defender: 0.125,
		supporter: 0.125,
		specialist: 0.125
	}
	const special = {
		basementkey:"vanguard",
		necklace:"sniper",
		C:"medic",
		tetrapods:"caster",
		E:"guard",
		stylus:"defender",
		G:"supporter",
		H:"specialist"
	};

	if(carry in special){
		let target = special[carry];
		let tp = probability[target];
		probability[target] = 0;
		Object.keys(probability).forEach(el => {
			if(el !== target){
				probability[el] += tp / 7;
			}
		});
	}
	if("greenhat" in item){
		let target = item["greenhat"];
		let tp = probability[target];
		probability[target] *= 0.5;
		Object.keys(probability).forEach(el => {
			if(el !== target){
				probability[el] += tp / 14;
			}
		});
	}
	return randSelect(amt, probability);
}

const generateReward = (layer, buffer, item, carry) => {
	let hope = layer * 2;
	let coin = buffer[1] * 2 + 3;

	let result = "作戰成果$";
	let keyword = [];
	if(hope > 0){
		result += "$H" + hope;
		keyword.push("H" + hope);
	}
	if(coin > 0){
		result += "$C" + coin;
		keyword.push("C" + coin);
	}

	const items = generateItem(layer <= 2? 1 : 2, item);
	items.forEach(el => {
		result += "$" + el;
		keyword.push(el);
	});

	if(!(buffer[0] in {F1:1, X2:1, X3:1, X4:1})){
		let ticketP = {};
		if("torch" in item && "africaflag" in item) ticketP = {A: 0.21, B: 0.58, C: 0.21};
		else if("torch" in item) ticketP = {A: 0.3, B: 0.7};
		else if("africaflag" in item) ticketP = {B: 0.7, C: 0.3};
		else ticketP = {B: 1};
		let ticketamt = randSelect(1, ticketP)[0];
		let tickets = [];
		console.log(tickets);
		switch(ticketamt){
			case "A":
				break;
			case "B":
				tickets = generateTickets(1, carry, item);
				break;
			case "C":
				tickets = generateTickets(2, carry, item);
				break;
			default:
				break;
		}
		tickets.forEach(el => {
			result += "$" + el;
			keyword.push(el);
		});
	}

	result += "$離開";
	keyword.push("showSkip");

	return ["fight", result].concat(keyword);
}

const generateRole = (amt, type, box) => {
	const arr = Object.keys(roleList).filter(r => type.includes(roleList[r].type) && !(r in box));
	let probability = {};
	arr.forEach(el => probability[el] = 1/arr.length);
	return randSelect(amt, probability);
}

const generateNext = (st, medal, item, box) => {
	let result = {
		layer: st.layer,
		layercount: st.layercount + 1,
		phase: "SelectWay",
		buffer: []
	};
	if((st.layer === 1 && st.layercount >= 3) || (st.layer === 2 && st.layercount >= 4)){
		result.layer = st.layer + 1;
		result.layercount = 0;
		result.phase = "Phase";
	}
	else if(st.layer === 3 && st.layercount >= 4){
		if(medal.includes("medal2") && medal.includes("medal3") && "vaccine" in item){
			result.layer = st.layer + 1;
			result.layercount = 0;
			result.phase = "Phase";
		}
		else{
			result.phase = "Success";
			result.buffer = [];
			switch(st.last_buffer[0]){
				case "F1": result.buffer.push(1); break;
				case "X2": result.buffer.push(2); break;
				case "X3": result.buffer.push(3); break;
				default: result.buffer.push(1); break;
			}
		}
	}
	else if(st.layer === 4 && st.layercount === 4){
		result.phase = "Success";
		result.buffer = [4];
	}
	else{
		result.buffer = generateWay(result.layer, result.layercount, st.carry, item, box);
	}

	return result;
}

const generateStory = (state, st, item, pool, box) => {
	const story = storyList[st.layer-1].filter(r => !(pool.includes(r)) && r[4] !== "r");
	if(st.layer === 3 && !("businesscard" in item)){
		story.splice(story.indexOf("L3S1"), 1);
	}

	const probability = {};
	story.forEach(el => probability[el] = 1/story.length);
	const keyword = randSelect(1, probability)[0];

	return getStory(state, st, keyword, item, box);
}

const getStory = (state, st, story, item, box) => {
	return get("global/storyList/layer" + st.layer + "/" + story)
		.then(re => {
			let result = {};
			let new_item = {};
			let new_box = {};
			for(let i = 0; i < re.result.length; i++){
				if(re.result[i][0] === "R"){
					const rand = re.result[i].split("$");
					const randP = {};
					for(let j = 1; j < rand.length; j+=2) randP[rand[j]] = parseFloat(rand[j+1]);
					re.result[i] = randSelect(1, randP)[0];
				}
				else if(re.result[i][0] === "F"){
					const fight = re.result[i].split("$");
					if(fight[1] === "rand"){
						fight[1] = generateFight("F", st.carry);
					}
					re.result[i] = "";
					for(let j = 0; j < fight.length; j++){
						if(re.result[i] !== "") re.result[i] += "$";
						re.result[i] += fight[j];
					}
				}
				else if(re.result[i][0] === "E"){
					const fight = re.result[i].split("$");
					if(fight[1] === "rand"){
						fight[1] = generateFight("S", st.carry);
					}
					re.result[i] = "";
					for(let j = 0; j < fight.length; j++){
						if(re.result[i] !== "") re.result[i] += "$";
						re.result[i] += fight[j];
					}
				}
				else if(re.result[i][0] === "H"){
					result["hope"] = state.hope + parseInt(re.result[i].slice(1), 10);
				}
				else if(re.result[i][0] === "C"){
					result["coin"] = state.coin + parseInt(re.result[i].slice(1), 10);
				}
				else if(re.result[i] === "ticket"){
					re.result[i] = generateTickets(1, st.carry, item)[0];
					re.selection[i] = re.result[i];
				}
				else if(re.result[i] in itemList){
					new_item[re.result[i]] = 1;
					if(re.result[i] === "dying") result["hope"] = -999;
					else if(re.result[i] === "avocadomilk"){
						result["hope"] = state.hope + 2;
						result["coin"] = state.coin + 2;
					}
					else if(re.result[i] === "invitation"){
						result["hope"] = state.hope + 5;
						result["coin"] = state.coin - 10;
					}
					else if(re.result[i] === "tetrapods") new_box[generateRole(1, ["caster"], box)[0]] = 1;
					else if(re.result[i] === "stylus") new_box[generateRole(1, ["defender"], box)[0]] = 1;
					else if(re.result[i] === "necklace") new_box[generateRole(1, ["sniper"], box)[0]] = 1;
					else if(re.result[i] === "basementkey") new_box[generateRole(1, ["vanguard"], box)[0]] = 1;
					else if(re.result[i] === "earplugs") new_box[generateRole(1, ["supporter", "specialist"], box)[0]] = 1;
					else if(re.result[i] === "guava"){
						const new_role = generateRole(1, ticketList["all"], box)[0];
						new_box[new_role] = generateSkillmax(new_role);
					}
					else if(re.result[i] === "vaccine"){
						const arr = Object.keys(box);
						let probability = {};
						arr.forEach(el => probability[el] = 1/arr.length);
						d.del("box", randSelect(1, probability)[0]);
					}
				}
			}

			result["buffer"] = [story, re.storyname + "$" + re.text].concat(re.result);
			for(let i = 0; i < re.selection.length; i++){
				result["buffer"][1] += "$" + re.selection[i];
			}
			return new Promise(resolve => resolve({
				state: clone(result, {}),
				item: clone(new_item, {}),
				box: clone(new_box, {})
			}));
		});
}

const generateShop = (st, item, afterFight) => {
	const isFight = randSelect(1, {shop: 0.9, fight: 0.1})[0] === "fight";
	if(isFight && !afterFight) return ["fight"];
	else{
		const t = generateTickets(2, st.carry, item);
		const items = generateItem(3, item);

		const re = [];
		t.forEach(el => {
			if(afterFight) re.push([el, 0, true]);
			else re.push([el, itemList[el].cost, true]);
		});
		items.forEach(el => {
			if(afterFight) re.push([el, 0, true]);
			else re.push([el, itemList[el].cost, true]);
		});
		return re;
	}
}

const generateItem = (amt, item) => {
	let objs = Object.keys(itemList).filter(el => !(el in ticketList) && !(el in item) && !(itemList[el].ban === true));
	const p = 1/objs.length;
	let probability = {};
	objs.forEach(el => probability[el] = p);
	return randSelect(amt, probability);
}
////////////////////////////////////////////////////////////////////////////////////////////
const handleEscape = state => {
	const score = d.getter("score");
	if(score.escape){
		if(score.escape > 3){
			d.setter("score", {
				total: Math.max(0, score.total - score.escape + 3),
			});
		}
		d.setter("score", {
			escape: score.escape + 1
		});

		const fightID = d.getter("state").fightID;
		d.init("state");
		d.init("box");
		d.init("item");
		d.init("backup");
		d.init("pool");

		return new Promise(resolve => resolve({
			result: {
				phase: "Lobby",
				buffer: [],
				hope: 0,
				coin: 0
			},
			upload: {state:1, score:1, box:1, item:1, backup:1, pool:1},
			fightID
		}));
	}
	else{
		d.setter("state", {
			last_phase: "",
			last_buffer: []
		});

		return new Promise(resolve => resolve({
			result: {
				phase: "Fail",
				buffer: [0],
				hope: Math.max(0, state.hope),
				coin: Math.max(0, state.coin)
			},
			upload: {state:1}
		}));
	}
}

const handleLobby = (state, ans) => {
	const st = d.getter("state"), item = d.getter("item");
	if(ans === "easy" || ans === "hard"){
		const fightID = sha1(d.getter("id") + Date.now());
		d.setter("state", {
			fightID,
			layer: 1,
			layercount: 0,
			last_phase: "",
			last_buffer: []
		});
		const escape = d.getter("score").escape;
		d.setter("score", {
			escape: escape? escape : 1
		});
		d.setter("backup", {
			fightcount: 0,
			extremecount: 0,
			item: [],
			time: Date.now(),
			totalscore: 0
		});

		if(ans === "hard"){
			const x = randSelect(1, {chocolate: 0.34, greenhat: 0.33, pudding: 0.33})[0];
			if(x === "greenhat"){
				const t = generateTickets(1, "", {})[0];
				d.setter("item", {greenhat: t});
			}
			else{
				const o = {};
				o[x] = 1;
				d.setter("item", o);
			}

			let buffer = [];
			let amt = 10;
			if(x === "greenhat") amt = 8;
			for(let i = 0; i < amt; i++){
				let ticket = generateTickets(1, st.carry, item);
				buffer.push([ticket[0], true]);
			}

			return new Promise(resolve => resolve({
				result: {
					buffer: clone(buffer, []),
					coin: 30,
					hope: 24,
					message: [
						"獲得 " + itemList[x].itemname + "，$效果：" + itemList[x].effect + "$祝旅途愉快~",
						false,
						""
					]
				},
				upload: {state:1, score:1, backup:1, item: 1},
				fightID
			}));
		}
		else{
			let buffer = [];
			for(let i = 0; i < 10; i++){
				let ticket = generateTickets(1, st.carry, item);
				buffer.push([ticket[0], true]);
			}

			return new Promise(resolve => resolve({
				result: {
					buffer: clone(buffer, []),
					coin: 30,
					hope: 24
				},
				upload: {state:1, score:1, backup:1},
				fightID
			}));
		}
	}
	if(Number.isInteger(ans)){
		let last_buffer = clone(state.buffer, []);
		last_buffer[ans][1] = false;
		let flag = true;

		for(let i = 0; i < last_buffer.length; i++){
			if(last_buffer[i][1]){
				flag = false;
				break;
			}
		}
		d.setter("state", {
			last_phase: flag? "Phase" : "Lobby",
			last_buffer: flag? [] : clone(last_buffer, [])
		});

		return new Promise(resolve => resolve({
			result: {
				phase: "SelectRole",
				buffer: [state.buffer[ans][0]]
			},
			upload: {state:1}
		}));
	}
	const col = d.getter("col");
	if(ans in col){
		d.setter("state", {carry: ans});
		const item = d.getter("item");
		let result = {};
		if(ans === "dying") result["hope"] = state.hope + 4;
		else if(ans === "resign") result["hope"] = state.hope - 2;
		else if(ans === "vrglasses"){
			result["hope"] = state.hope + 5;
			result["coin"] = state.coin + 5;
		}
		else if(ans in {basementkey:1, necklace:1, tetrapods:1, stylus:1}){
			if("greenhat" in item) result["buffer"] = generateTickets(8, ans, item);
			else result["buffer"] = generateTickets(10, ans, item);
		}

		return new Promise(resolve => resolve({
			result: clone(result, {}),
			upload: {state:1}
		}));
	}
	return null;
}

const handleSelectRole = (state, ans) => {
	if(ans === "showSkip"){
		return new Promise(resolve => resolve({
			result: {
				message: [
					"確認放棄招募或晉升幹員嗎？",
					true,
					"skip"
				]
			}
		}));
	}
	if(ans === "skip"){
		const st = d.getter("state");
		d.setter("state", {
			last_phase: "",
			last_buffer: []
		});

		if(st.last_buffer[0] === "house"){
			const next = generateNext(st, d.getter("medal"), d.getter("item"), d.getter("box"));
			d.setter("state", {
				layer: next.layer,
				layercount: next.layercount
			});
			st.last_phase = next.phase;
			st.last_buffer = next.buffer;
		}
		return new Promise(resolve => resolve({
			result: {
				phase: st.last_phase,
				buffer: st.last_buffer
			},
			upload: {state:1}
		}));
	}
	if(ans in roleList){
		const st = d.getter("state");
		const box = d.getter("box");
		const item = d.getter("item");
		const role = roleList[ans];

		if(box[ans] && box[ans] > 2) return null;
		if(role.rolename !== "Amiya" && (role.star <= 5 && box[ans] && box[ans] > 1)) return null;
		if(role.star <= 3 && box[ans]) return null;

		const need = generateRolecost(item)[role.star-1][box[ans]? box[ans] : 0];
		if(need > state.hope) return null;
		if("pudding" in item && need > state.coin) return null;

		let newBox = {};
		if(st.carry === "lunch" && roleList[ans].type === "defender") newBox[ans] = generateSkillmax(ans);
		else if(st.carry === "record" && roleList[ans].type === "sniper") newBox[ans] = generateSkillmax(ans);
		else if(st.carry === "strategyrecord" && roleList[ans].type === "supporter") newBox[ans] = generateSkillmax(ans);
		else if(st.carry === "hentaigraph" && roleList[ans].type === "medic") newBox[ans] = generateSkillmax(ans);
		else if(st.carry === "issue" && roleList[ans].type === "guard") newBox[ans] = generateSkillmax(ans);
		else if(st.carry === "rodFA" && roleList[ans].type === "caster") newBox[ans] = generateSkillmax(ans);
		else if(st.carry === "transsexualsphoto" && roleList[ans].type === "vanguard") newBox[ans] = generateSkillmax(ans);
		else if(st.carry === "ghost" && roleList[ans].type === "specialist") newBox[ans] = generateSkillmax(ans);
		else newBox[ans] = box[ans]? box[ans] + 1 : 1;
		d.setter("box", newBox);
		d.setter("state", {
			last_phase: "",
			last_buffer: []
		});

		if(st.last_buffer[0] === "house"){
			const next = generateNext(st, d.getter("medal"), d.getter("item"), d.getter("box"));
			d.setter("state", {
				layer: next.layer,
				layercount: next.layercount
			});
			st.last_phase = next.phase;
			st.last_buffer = next.buffer;
		}
		return new Promise(resolve => resolve({
			result: {
				phase: st.last_phase,
				buffer: st.last_buffer,
				hope: state.hope - need,
				coin: state.coin - ("pudding" in item? need : 0)
			},
			upload: {state:1, box:1}
		}));
	}
}

const handleSelectWay = (state, ans) => {
	let message = ["", false, ""];
	let item = d.getter("item");
	let st = d.getter("state");
	if("rickroll" in item && st.carry !== "mask") generateRick();
	if("covid153" in item && !("panadol" in item) && !("vaccine" in item) && st.carry !== "mask"){
		let new_ans = generateDizzy(ans, state.buffer);
		if(ans !== new_ans){
			message = ["你受Covid-153所苦，暈船的效果導致你選錯了選項...", false, ""];
			ans = clone(new_ans, "");
		}
	}

	switch(ans){
		case "story":{
			const st = d.getter("state");
			return generateStory(state, st, item, d.getter("pool"), d.getter("box"))
				.then(re => {
					let result = clone(re.state, {});
					result["phase"] = "Story";
					result["message"] = clone(message, []);
					d.setter("pool", re.state.buffer[0]);
					d.setter("item", re.item);
					let new_col = {};
					Object.keys(re.item).forEach(el => new_col[el] = st.fightID);
					d.setter("col", new_col);
					d.setter("box", re.box);
					return new Promise(resolve => {
						resolve({
							result,
							upload: {state:1, pool:1, item:1, col:1, box:1}
						});
					});
				});
		}
		case "shop":{
			d.setter("state", {
				last_phase: "",
				last_buffer: []
			});
			const st = d.getter("state");
			const new_buffer = generateShop(st, item, false);
			if(new_buffer[0] === "fight"){
				d.setter("state", {
					photoID: sha1(d.getter("id") + Date.now())
				});
			}

			return new Promise(resolve => resolve({
				result: {
					phase: "Shop",
					buffer: clone(new_buffer, []),
					message: clone(message, [])
				},
				upload: {state:1}
			}));
		}
		case "house":{
			const st = d.getter("state");
			const item = d.getter("item");
			let A = (Math.random() <= 0.5)? "H" + (Math.floor(Math.random()*3)+2) : "C" + (Math.floor(Math.random()*3)+5);
			let B = randSelect(1, {all: 0.1, merge: 0.2, ticket: 0.7})[0];
			if(B === "ticket") B = generateTickets(1, st.carry, item)[0];
			let C = generateItem(1, item)[0];

			const new_buffer = ["house", "練舞室$街上好安靜，都沒有番車城的人，休息一下再出發吧！", A, B, C];
			if(A[0] === "H") new_buffer[1] += "$獲得 " + parseInt(A.slice(1), 10) + " 點希望";
			else if(A[0] === "C") new_buffer[1] += "$獲得 " + parseInt(A.slice(1), 10) + " 點源石粒";
			new_buffer[1] += "$" + itemList[B].itemname + "$獲得 " + itemList[C].itemname;

			d.setter("state", {
				last_phase: "",
				last_buffer: []
			});
			return new Promise(resolve => resolve({
				result: {
					phase: "Story",
					buffer: clone(new_buffer, []),
					message: clone(message, [])
				},
				upload: {state:1}
			}));
		}
		case "item":{
			let item = d.getter("item");
			const something = generateItem(1, item)[0];

			const st = d.getter("state");
			let new_item = {};
			new_item[something] = 1;
			d.setter("item", new_item);
			let new_col = {};
			new_col[something] = st.fightID;
			d.setter("col", new_col);
			const message = ["你獲得了 " + itemList[something].itemname + " ！", false, ""];

			item = d.getter("item");
			const medal = d.getter("medal");
			const box = d.getter("box");
			const next = generateNext(st, medal, item, box);
			d.setter("state", {
				last_phase: "",
				last_buffer: [],
				layer: next.layer,
				layercount: next.layercount
			});

			return new Promise(resolve => resolve({
				result: {
					phase: next.phase,
					buffer: next.buffer,
					message: clone(message, [])
				},
				upload: {state:1, item:1, col:1}
			}));
		}
		default:
			if(ans in fightList){
				d.setter("state", {
					last_phase: "",
					last_buffer: [],
					photoID: sha1(d.getter("id") + Date.now())
				});

				const st = d.getter("state");
				return new Promise(resolve => resolve({
					result: {
						phase: "Fight",
						buffer: [ans, generateLevel(st.layer, ans)],
						message: clone(message, [])
					},
					upload: {state:1}
				}));
			}
			return null;
	}
}

const handleFight = (state, ans) => {
	if(ans === "showCode"){
		const photoID = d.getter("state").photoID;
		return new Promise(resolve => resolve({
			result: {
				message: [
					"作戰驗證碼：$" + photoID + "$請將通關截圖或影片與驗證碼一起上傳至DC。$點選完成以離開戰鬥。",
					true,
					"finish"
				]
			}
		}));
	}
	if(ans === "finish"){
		const st = d.getter("state");
		const box = d.getter("box");
		let item = d.getter("item");
		const backup = d.getter("backup");
		const score = d.getter("score");
		const fightID = st.fightID;
		const photoID = st.photoID;
		let photo = {
			fightID: st.fightID,
			box,
			map: state.buffer[0],
			level: state.buffer[1],
			time: Date.now()
		};

		if(state.buffer[1] === "?") state.buffer[1] = 0;

		d.setter("state", {
			last_phase: "Fight",
			last_buffer: clone(state.buffer, []),
			photoID: ""
		});
		d.setter("score", {
			escape: 0,
			fightcount: score.fightcount + 1,
			total: score.total + state.buffer[1] + 3
		});
		if(state.buffer[0][0] === "S"){
			d.setter("backup", {
				extremecount: backup.extremecount + 1,
				totalscore: backup.totalscore + state.buffer[1] + 5
			});
		}
		else{
			d.setter("backup", {
				fightcount: backup.extremecount + 1,
				totalscore: backup.totalscore + state.buffer[1] + 3
			});
		}

		const reward = st.last_phase === "Story"? clone(st.last_buffer, []) : generateReward(st.layer, state.buffer, item, st.carry);
		let result = {};
		let new_item = {};
		let new_box = {};
		for(let i = 2; i < reward.length; i++){
			if(reward[i][0] === "H") result["hope"] = state.hope + parseInt(reward[i].slice(1), 10);
			else if(reward[i][0] === "C") result["coin"] = state.coin + parseInt(reward[i].slice(1), 10);
			else if(reward[i] in ticketList) continue;
			else if(reward[i] in itemList){
				new_item[reward[i]] = 1;
				if(reward[i] === "dying") result["hope"] = -999;
				else if(reward[i] === "avocadomilk"){
					result["hope"] = state.hope + 2;
					result["coin"] = state.coin + 2;
				}
				else if(reward[i] === "invitation"){
					result["hope"] = state.hope + 5;
					result["coin"] = state.coin - 10;
				}
				else if(reward[i] === "tetrapods") new_box[generateRole(1, ["caster"], box)[0]] = 1;
				else if(reward[i] === "stylus") new_box[generateRole(1, ["defender"], box)[0]] = 1;
				else if(reward[i] === "necklace") new_box[generateRole(1, ["sniper"], box)[0]] = 1;
				else if(reward[i] === "basementkey") new_box[generateRole(1, ["vanguard"], box)[0]] = 1;
				else if(reward[i] === "earplugs") new_box[generateRole(1, ["supporter", "specialist"], box)[0]] = 1;
				else if(reward[i] === "guava"){
					const new_role = generateRole(1, ticketList["all"], box)[0];
					new_box[new_role] = generateSkillmax(new_role);
				}
				else if(reward[i] === "vaccine"){
					const arr = Object.keys(box);
					let probability = {};
					arr.forEach(el => probability[el] = 1/arr.length);
					d.del("box", randSelect(1, probability)[0]);
				}
			}
		}
		result["phase"] = "Story";
		result["buffer"] = clone(reward, []);

		d.setter("item", new_item);
		item = d.getter("item");
		let new_col = {};
		Object.keys(item).forEach(el => new_col[el] = st.fightID);
		d.setter("col", new_col);
		d.setter("box", new_box);

		return new Promise(resolve => resolve({
			result: clone(result, {}),
			upload: {
				state: 1,
				score: 1,
				item: 1,
				col: 1,
				box: 1,
				backup: 1,
				photo: clone(photo, {})
			},
			photoID, fightID
		}));
	}
}

const handleStory = (state, ans) => {
	if(ans === "showSkip"){
		for(let i = 2; i < state.buffer.length; i++){
			if(state.buffer[i] in ticketList){
				return new Promise(resolve => resolve({
					result: {
						message: [
							"你還有招募卷沒有使用，確定要離開嗎？",
							true,
							"skip"
						]
					}
				}));
			}
		}
		ans = "skip";
	}
	if(ans === "skip"){
		const st = d.getter("state");
		const item = d.getter("item");
		const medal = d.getter("medal");
		const box = d.getter("box");
		let next = generateNext(st, medal, item, box);

		d.setter("state", {
			layer: next.layer,
			layercount: next.layercount
		});
		if(st.last_phase !== "Fight"){
			d.setter("state", {
				last_phase: "",
				last_buffer: []
			});
		}

		if(state.hope < 0 || state.coin < 0){
			return handleEscape(state);
		}

		return new Promise(resolve => resolve({
			result: {
				phase: next.phase,
				buffer: next.buffer
			},
			upload: {state:1}
		}));
	}
	if(ans[0] === "H"){
		const st = d.getter("state");
		const item = d.getter("item");
		const medal = d.getter("medal");
		const box = d.getter("box");
		let next = generateNext(st, medal, item, box);

		d.setter("state", {
			layer: next.layer,
			layercount: next.layercount
		});
		d.setter("state", {
			last_phase: "",
			last_buffer: []
		});

		return new Promise(resolve => resolve({
			result: {
				phase: next.phase,
				buffer: next.buffer,
				hope: state.hope + parseInt(ans.slice(1), 10)
			},
			upload: {state:1}
		}));
	}
	if(ans[0] === "C"){
		const st = d.getter("state");
		const item = d.getter("item");
		const medal = d.getter("medal");
		const box = d.getter("box");
		let next = generateNext(st, medal, item, box);

		d.setter("state", {
			layer: next.layer,
			layercount: next.layercount
		});
		d.setter("state", {
			last_phase: "",
			last_buffer: []
		});

		return new Promise(resolve => resolve({
			result: {
				phase: next.phase,
				buffer: next.buffer,
				coin: state.coin + parseInt(ans.slice(1), 10)
			},
			upload: {state:1}
		}));
	}
	if(ans[0] === "E" || ans[0] === "F"){
		const arr = ans.split("$");
		const st = d.getter("state");
		return getStory(state, st, arr[2], d.getter("item"), d.getter("box"))
			.then(re => {
				d.setter("state", {
					last_phase: "Story",
					last_buffer: re.state.buffer,
					photoID: sha1(d.getter("id") + Date.now())
				});

				const st = d.getter("state");
				return new Promise(resolve => resolve({
					result: {
						phase: "Fight",
						buffer: [arr[1], generateLevel(st.layer, arr[1])]
					},
					upload: {state:1}
				}));
			});
	}
	if(ans in ticketList){
		let last_buffer = clone(state.buffer, []);
		for(let i = 0; i < last_buffer.length; i++){
			if(last_buffer[i] === ans){
				last_buffer[i] = "";
				break;
			}
		}
		
		d.setter("state", {
			last_phase: "Story",
			last_buffer: clone(last_buffer, [])
		});

		const st = d.getter("state");
		const item = d.getter("item");
		return new Promise(resolve => resolve({
			result: {
				phase: "SelectRole",
				buffer: ans === "merge"? generateTickets(2, st.carry, item) : ticketList[ans]
			},
			upload: {state:1}
		}));
	}
	if(ans in itemList){
		const st = d.getter("state");
		const medal = d.getter("medal");
		const box = d.getter("box");

		let new_item = {};
		new_item[ans] = 1;
		d.setter("item", new_item);
		let new_col = {};
		new_col[ans] = st.fightID;
		d.setter("col", new_col);

		const item = d.getter("item");
		let next = generateNext(st, medal, item, box);

		d.setter("state", {
			layer: next.layer,
			layercount: next.layercount
		});
		d.setter("state", {
			last_phase: "",
			last_buffer: []
		});

		return new Promise(resolve => resolve({
			result: {
				phase: next.phase,
				buffer: next.buffer
			},
			upload: {state:1, item:1, col:1}
		}));
	}
	const st = d.getter("state");
	if(storyList[st.layer-1].includes(ans)){
		d.setter("state", {
			last_phase: "",
			last_buffer: []
		});
		return getStory(state, st, ans, d.getter("item"), d.getter("box"))
			.then(re => {
				let result = clone(re.state, {});
				result["phase"] = "Story";
				d.setter("item", re.item);
				let col = {};
				Object.keys(re.item).forEach(el => col[el] = st.fightID);
				d.setter("col", col);
				d.setter("box", re.box);
				return new Promise(resolve => {
					resolve({
						result,
						upload: {state:1, item:1, col:1, box:1}
					});
				});
			});
	}
}

const handleShop = (state, ans) => {
	if(ans === "showCode"){
		const photoID = d.getter("state").photoID;
		return new Promise(resolve => resolve({
			result: {
				message: [
					"作戰驗證碼：$" + photoID + "$請將通關截圖或影片與驗證碼一起上傳至DC。$點選完成以離開戰鬥。",
					true,
					"finish"
				]
			}
		}));
	}
	if(ans === "finish"){
		const st = d.getter("state");
		const box = d.getter("box");
		const backup = d.getter("backup");
		const score = d.getter("score");
		const fightID = st.fightID;
		const photoID = st.photoID;
		let map = "";
		switch(st.layer){
			case 2: map = "H2"; break;
			case 3: map = "H3"; break;
			case 4: map = "H4"; break;
			default: break;
		}
		let photo = {
			fightID: st.fightID,
			box,
			map,
			time: Date.now()
		}

		d.setter("state", {
			last_phase: "",
			last_buffer: [],
			photoID: ""
		});
		d.setter("score", {
			escape: 0,
			fightcount: score.fightcount + 1
		});
		d.setter("backup", {
			extremecount: backup.extremecount + 1
		});

		const item = d.getter("item");
		return new Promise(resolve => resolve({
			result: {
				phase: "Shop",
				buffer: generateShop(st, item, true)
			},
			upload: {
				state: 1,
				score: 1,
				backup: 1,
				photo: clone(photo, {})
			},
			photoID, fightID
		}));
	}
	if(ans === "showSkip"){
		return new Promise(resolve => resolve({
			result: {
				message: [
					"確認要離開商店嗎？",
					true,
					"skip"
				]
			}
		}));
	}
	if(ans === "skip"){
		const st = d.getter("state");
		const item = d.getter("item");
		const medal = d.getter("medal");
		const box = d.getter("box");
		let next = generateNext(st, medal, item, box);

		d.setter("state", {
			layer: next.layer,
			layercount: next.layercount
		});
		d.setter("state", {
			last_phase: "",
			last_buffer: []
		});

		return new Promise(resolve => resolve({
			result: {
				phase: next.phase,
				buffer: next.buffer
			},
			upload: {state:1}
		}));
	}
	if(state.buffer[ans][0] in ticketList){
		if(state.buffer[ans][1] > state.coin) return new Promise(resolve => resolve({}));
		let new_buffer = clone(state.buffer, []);
		new_buffer[ans][2] = false;
		d.setter("state", {
			last_phase: "Shop",
			last_buffer: clone(new_buffer, [])
		});

		return new Promise(resolve => resolve({
			result: {
				phase: "SelectRole",
				buffer: [state.buffer[ans][0]],
				coin: state.coin - state.buffer[ans][1]
			},
			upload: {state:1}
		}));
	}
	if(state.buffer[ans][0] in itemList){
		if(state.buffer[ans][1] > state.coin) return new Promise(resolve => resolve({}));
		let new_buffer = clone(state.buffer, []);
		new_buffer[ans][2] = false;
		d.setter("state", {
			last_phase: "",
			last_buffer: []
		});
		let new_item = {};
		new_item[state.buffer[ans][0]] = 1;
		d.setter("item", new_item);
		const st = d.getter("state");
		let new_col = {};
		new_col[state.buffer[ans][0]] = st.fightID;
		d.setter("col", new_col);

		return new Promise(resolve => resolve({
			result: {
				buffer: clone(new_buffer, []),
				coin: state.coin - state.buffer[ans][1]
			},
			upload: {state:1, item:1, col:1}
		}));
	}
}

const handlePhase = ans => {
	if(ans === "skip"){
		d.setter("state", {
			last_phase: "",
			last_buffer: [],
			layercount: 0
		});

		const st = d.getter("state");
		const item = d.getter("item");
		const box = d.getter("box");
		const way = generateWay(st.layer, st.layercount, st.carry, item, box);
		return new Promise(resolve => resolve({
			result: {
				phase: "SelectWay",
				buffer: way
			},
			upload: {state:1}
		}));
	}
}

const handleSuccess = ans => {
	if(ans === "skip"){
		return d.getFlag()
			.then(() => {
				if(d.getter("flag").missionFlag){
					return get("global/missionList")
						.then(r => {
							let probability = {};
							const mArr = Object.keys(r).filter(a => !(r[a].enable));
							mArr.forEach(el => probability[el] = 1/mArr);
							let new_buffer = [];
							const rand = randSelect(3, probability);
							rand.forEach(el => new_buffer.push([el, r[el].missionname]));

							const mission = d.getter("mission");
							let enabledMission = Object.keys(r).filter(a => r[a].enable && !(a in mission));
							let m = {};
							enabledMission.forEach(el => {
								m[el] = {
									missionname: r[el].missionname,
									text: r[el].text,
									finish: false
								}
							});
							d.setter("mission", clone(m, {}));

							return new Promise(resolve => resolve({
								result: {
									buffer: clone(new_buffer, [])
								},
								upload: {state:1}
							}));
						});
				}
				else{
					const st = d.getter("state");
					d.init("state");
					d.init("box");
					const item = d.getter("item");
					if("leash" in item){
						d.setter("item", {licenseplate:1});
						d.setter("col", {licenseplate:st.fightID});
					}
					d.setter("item", {skipcard:1});
					d.setter("col", {skipcard:st.fightID});
					d.setter("backup", {
						item: Object.keys(d.getter("item")),
						time: Date.now()
					});
					const score = d.getter("score");
					let new_score = {};
					new_score["finish"] = score.finish + 1;
					if(st.carry === "vrglasses") new_score["total"] = Math.max(0, score.total - 10);
					else if(st.carry === "resign") new_score["total"] = score.total + 12;
					if("blessing" in item) new_score["total"] = ("total" in new_score)? new_score["total"] + 10 : score.total + 10;
					d.setter("score", new_score);
					d.init("pool");
					d.setter("medal", "medal1");
					if(st.last_buffer[0] === "X2") d.setter("medal", "medal2");
					else if(st.last_buffer[0] === "X3") d.setter("medal", "medal3");
					else if(st.last_buffer[0] === "X4") d.setter("medal", "medal4");
					if(Object.keys(d.getter("col")).length === Object.keys(itemList).filter(r => !(r in ticketList)).length){
						d.setter("medal", "medal7");
					}

					const hardArr = ["greenhat", "chocolate", "pudding"];
					for(let i = 0; i < hardArr.length; i++){
						if(hardArr[i] in item){
							d.setter("medal", "medal5");
							break;
						}
					}
					d.init("item");

					return get("global/missionList")
						.then(r => {
							const mission = d.getter("mission");
							const m = {};
							Object.keys(r).filter(a => r[a].enable && !(a in mission)).forEach(el => {
								m[el] = {
									missionname: r[el].missionname,
									text: r[el].text,
									finish: false
								};
							});
							d.setter("mission", m);
							return new Promise(resolve => resolve({
								result: {
									phase: "Lobby",
									buffer: [],
									hope: 0,
									coin: 0
								},
								upload: {state:1, score:1, box:1, item:1, pool:1, backup:1, medal:1, col:1},
								fightID: st.fightID
							}));
						});
				}
			});
	}
	else if(ans.substr(0, 7) === "mission"){
		const st = d.getter("state");
		d.init("state");
		d.init("box");
		const item = d.getter("item");
		if("leash" in item){
			d.setter("item", {licenseplate:1});
			d.setter("col", {licenseplate:st.fightID});
		}
		d.setter("item", {skipcard:1});
		d.setter("col", {skipcard:st.fightID});
		d.setter("backup", {
			item: Object.keys(d.getter("item")),
			time: Date.now()
		});
		const score = d.getter("score");
		let new_score = {};
		new_score["finish"] = score.finish + 1;
		if(st.carry === "vrglasses") new_score["total"] = Math.max(0, score.total - 10);
		d.setter("score", new_score);
		d.init("pool");
		d.setter("medal", "medal1");
		if(st.last_buffer[0] === "X2") d.setter("medal", "medal2");
		else if(st.last_buffer[0] === "X3") d.setter("medal", "medal3");
		else if(st.last_buffer[0] === "X4") d.setter("medal", "medal4");
		const hardArr = ["greenhat", "chocolate", "pudding"];
		for(let i = 0; i < hardArr.length; i++){
			if(hardArr[i] in item){
				d.setter("medal", "medal5");
				break;
			}
		}
		d.init("item");
		if(Object.keys(d.getter("col")).length === Object.keys(itemList).filter(r => !(r in ticketList)).length){
			d.setter("medal", "medal7");
		}

		return push("global/missionList/" + ans + "/enable", true)
			.catch(() => new Promise(resolve => resolve({message: ["似乎有人比你搶先一步了喔，明天再加油吧！", false, ""]})))
			.then(m => {
				push("global/flag/missionFlag", false);
				return new Promise(resolve => resolve(m));
			})
			.then(m => {
				if(m && m.message){
					return new Promise(resolve => resolve(m));
				}
				else{
					return get("global/missionList/" + ans)
						.then(r => {
							let m = {};
							m[ans] = {
								missionname: r.missionname,
								text: r.text,
								finish: false
							};
							d.setter("mission", m);
							return new Promise(resolve => resolve());
						});
				}
			})
			.then(m => new Promise(resolve => resolve({
				result: {
					phase: "Lobby",
					buffer: [],
					hope: 0,
					coin: 0,
					message: (m && m.message)? m.message : ["", false, ""]
				},
				upload: {state:1, score:1, box:1, item:1, pool:1, backup:1, medal:1, col:1},
				fightID: st.fightID
			})));
	}
}

const handleFail = () => {
	const st = d.getter("state");
	const fightID = st.fightID;

	d.init("state");
	d.init("box");
	d.setter("backup", {
		item: Object.keys(d.getter("item")),
		time: Date.now()
	});
	d.init("item");
	d.init("pool");
	const score = d.getter("score");
	let new_score = {};
	if(st.carry === "vrglasses") new_score["total"] = Math.max(0, score.total - 10);
	else if(st.carry === "resign") new_score["total"] = score.total + 12;
	d.setter("score", new_score);
	if(Object.keys(d.getter("col")).length === Object.keys(itemList).filter(r => !(r in ticketList)).length){
		d.setter("medal", "medal7");
	}

	return new Promise(resolve => resolve({
		result: {
			phase: "Lobby",
			buffer: [],
			hope: 0,
			coin: 0
		},
		upload: {state:1, score:1, box:1, item:1, pool:1, backup:1},
		fightID
	}));
}
//////////////////////////////////////////////////////////////////////////////////////////
const submit = (state, ans) => {
	console.log("submit: [" + state.phase + "] " + ans);
	let result = null;

	if(ans === "showEscape"){
		let message = "";
		const escape = d.getter("score").escape;
		if(escape){
			message = "確認放棄嗎？放棄將無法獲得任何戰利品。";
			if(escape > 3){
				message += "$因多次入場即放棄，此次放棄會額外扣除 ";
				message += Math.min(5, escape - 3);
				message += " 點總積分(最低扣至0)。";
			}
		}
		else message = "確定要放棄這次探險嗎？點選確認進入結算。"

		result = new Promise(resolve => resolve({
			result: {
				message: [message, true, "escape"]
			}
		}));
	}
	else if(ans === "escape") result = handleEscape(state);
	else if(String(ans).substr(0, 11) === "showmission"){
		if(d.getter("score").escape){
			result = new Promise(resolve => resolve({
				result: {
					message: [
						"你在這次探險中尚未參與任何一次作戰，因此無法執行任務。",
						false,
						""
					]
				}
			}));
		}
		else{
			result = new Promise(resolve => {
				const photoID = sha1(d.getter("id") + Date.now());
				resolve({
					result: {
						message: [
							"作戰驗證碼：$" + photoID + "$請將通關截圖或影片與驗證碼一起上傳至DC。$點選完成以完成任務，若取消驗證碼則失效。",
							true,
							"complete" + parseInt(ans.slice(11), 10) + "$" + photoID
						]
					}
				});
			});
		}
	}
	else if(String(ans).substr(0, 8) === "complete"){
		let arr = ans.split("$");
		const mkey = "mission" + parseInt(arr[0].slice(8), 10);
		const mission = d.getter("mission");
		let m = {};
		m[mkey] = {
			missionname: mission[mkey].missionname,
			text: mission[mkey].text,
			finish: true
		};
		d.setter("mission", m);
		let photo = {
			fightID: d.getter("state").fightID,
			box: d.getter("box"),
			mission: mkey,
			time: Date.now()
		};
		d.setter("medal", "medal6");
		d.setter("score", {
			total: d.getter("score").total + 50
		});

		result = new Promise(resolve => resolve({
			result: {},
			upload: {
				mission:1,
				medal:1,
				score: 1,
				photo: clone(photo, {})
			},
			photoID: arr[1]
		}));
	}
	else{
		switch(state.phase){
			case "Lobby":
				result = handleLobby(state, ans);
				break;
			case "SelectRole":
				result = handleSelectRole(state, ans);
				break;
			case "SelectWay":
				result = handleSelectWay(state, ans);
				break;
			case "Fight":
				result = handleFight(state, ans);
				break;
			case "Story":
				result = handleStory(state, ans);
				break;
			case "Shop":
				result = handleShop(state, ans);
				break;
			case "Phase":
				result = handlePhase(ans);
				break;
			case "Success":
				result = handleSuccess(ans);
				break;
			case "Fail":
				result = handleFail();
				break;
			default: break;
		}
	}

	if(result){
		return result.then(re => {
			const upload = {};
			if(re && re.upload){
				Object.keys(re.upload).forEach(el => {
					switch(el){
						case "id":		upload["identifier"] = d.getter(el); break;
						case "state":	upload["state"] = merge(merge(state, re.result), d.getter(el)); break;
						case "score":	upload["score"] = d.getter(el); break;
						case "box":		upload["box"] = d.getter(el); break;
						case "item":	upload["item"] = d.getter(el); break;
						case "pool":	upload["pool"] = d.getter(el); break;
						case "col":		upload["collection"] = d.getter(el); break;
						case "mission":
							const mission = d.getter(el);
							upload["mission"] = Object.keys(mission).filter(r => mission[r].finish);
							break;
						case "medal":	upload["medal"] = d.getter(el); break;
						case "backup":	upload["backup"] = d.getter(el); break;
						case "photo":	upload["photo"] = clone(re.upload[el], {}); break;
						default:		break;
					}
				});
			}
			if("state" in upload) upload["state"]["message"] = null;

			console.log(upload);
			const fightID = re? re.fightID : null;
			const photoID = re? re.photoID : null;

			return send(upload, fightID, photoID).then(() => {
				return new Promise(resolve => {
					if(re) resolve(clone(re.result, {}));
					else resolve({});
				});
			});
		});
	}
	else return new Promise(resolve => resolve({}));
}

const next = {submit, generateRolecost};
export default next;
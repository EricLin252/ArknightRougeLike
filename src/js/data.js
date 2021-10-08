import {get, push} from './backend';
import {clone} from './functions';

var identifier = "", state = {}, box = {}, item = {}, pool = [],
score = {}, collection = {}, mission = [], medal = [], backup = {}, flag = {};

const newdb = reload => ({
	state: {
		phase: "Lobby",
		buffer: [],
		hope: 0,
		coin: 0,
		layer: 1,
		layercount: 0,
		fightID: "",
		photoID: "",
		last_phase: "",
		last_buffer: [],
		carry: ""
	},
	score: {
		total: 0,
		finish: 0,
		fightcount: 0,
		escape: 0
	},
	reload: reload
});

const state0 = setter => ({
	phase: clone(setter.phase, "Lobby"),
	buffer: clone(setter.buffer, []),
	hope: clone(setter.hope, 0),
	coin: clone(setter.coin, 0),
	message: clone(setter.message, ["", false, ""])
});

const getMission = () => {
	return get("global/missionList")
		.then(d => {
			let enabledMission = Object.keys(d).filter(r => d[r].enable);
			let m = {};
			enabledMission.forEach(el => {
				m[el] = {
					missionname: d[el].missionname,
					text: d[el].text,
					finish: mission.includes(el)
				}
			});
			mission = clone(m, {});
			return new Promise(resolve => resolve());
		});
}

const getFlag = () => {
	return get("global/flag")
		.then(d => {
			setter("flag", d);
			return new Promise(resolve => resolve());
		});
}

const getBackup = user => {
	if(state.fightID !== ""){
		return get("users/" + user.uid + "/backup/fight/" + state.fightID)
			.then(d => {
				setter("backup", d);
				return new Promise(resolve => resolve());
			});
	}
	else return new Promise(resolve => resolve());
}

const getID = user => {
	return get("users/" + user.uid + "/identifier")
		.then(d => {
			setter("id", d);
			return new Promise(resolve => resolve());
		});
}

const init = filter => {
	if(filter){
		switch(filter){
			case "id":
				identifier = "";
				break;
			case "state":
				state = {
					layer: 1,
					layercount: 0,
					fightID: "",
					photoID: "",
					last_phase: "",
					last_buffer: [],
					carry: ""
				};
				break;
			case "box":
				box = {};
				break;
			case "item":
				item = {};
				break;
			case "pool":
				pool = [];
				break;
			case "score":
				score = {
					total: 0,
					finish: 0,
					fightcount: 0,
					escape: 0
				};
				break;
			case "col":
				collection = {};
				break;
			case "mission":
				mission = {};
				break;
			case "medal":
				medal = [];
				break;
			case "backup":
				backup = {};
				break;
			default:
				break;
		}
	}
	else{
		identifier = "";
		state = {
			layer: 1,
			layercount: 0,
			fightID: "",
			photoID: "",
			last_phase: "",
			last_buffer: [],
			carry: ""
		};
		box = {};
		item = {};
		pool = [];
		score = {
			total: 0,
			finish: 0,
			fightcount: 0,
			escape: 0
		};
		collection = {};
		mission = {};
		medal = [];
		backup = {};
	}
}

const setter = (filter, d) => {
	let ptr;
	switch(filter){
		case "id":		ptr = identifier; break;
		case "state":	ptr = state; break;
		case "score":	ptr = score; break;
		case "box":		ptr = box; break;
		case "item":	ptr = item; break;
		case "pool":	ptr = pool; break;
		case "col":		ptr = collection; break;
		case "mission":	ptr = mission; break;
		case "medal":	ptr = medal; break;
		case "backup":	ptr = backup; break;
		case "flag":	ptr = flag; break;
		default:		break;
	}
	if(filter === "id"){
		identifier = d;
		return;
	}
	else if(filter === "pool" || filter === "medal"){
		if(!ptr.includes(d)) ptr.push(d);
		return;
	}

	Object.keys(d).forEach(el => ptr[el] = clone(d[el], ""));
}

const update = (user, userData, reload) => {
	init();
	setter("state", userData.state);
	box = clone(userData.box, {});
	item = clone(userData.item, {});
	pool = clone(userData.pool, []);
	setter("score", userData.score);
	collection = clone(userData.collection, {});
	mission = clone(userData.mission, []);
	medal = clone(userData.medal, []);

	if("phase" in state) delete state["phase"];
	if("buffer" in state) delete state["buffer"];
	if("hope" in state) delete state["hope"];
	if("coin" in state) delete state["coin"];

	return getMission()
		.then(() => getFlag())
		.then(() => getBackup(user))
		.then(() => getID(user))
		.then(() => push("users/" + user.uid + "/fetch/reload", reload))
		.catch(err => console.log("Data update: " + err));
}

const getter = filter => {
	switch(filter){
		case "id":		return clone(identifier, "");
		case "state":	return clone(state, {});
		case "score":	return clone(score, {});
		case "box":		return clone(box, {});
		case "item":	return clone(item, {});
		case "pool":	return clone(pool, []);
		case "col":		return clone(collection, {});
		case "mission":	return clone(mission, {});
		case "medal":	return clone(medal, []);
		case "backup":	return clone(backup, {});
		case "flag":	return clone(flag, {});
		default:		return;
	}
}

const del = (filter, key) => {
	let ptr;
	switch(filter){
		case "id":		ptr = identifier; break;
		case "state":	ptr = state; break;
		case "score":	ptr = score; break;
		case "box":		ptr = box; break;
		case "item":	ptr = item; break;
		case "pool":	ptr = pool; break;
		case "col":		ptr = collection; break;
		case "mission":	ptr = mission; break;
		case "medal":	ptr = medal; break;
		case "backup":	ptr = backup; break;
		case "flag":	ptr = flag; break;
		default:		break;
	}

	if(filter === "id"){
		identifier = "";
		return;
	}
	else if(filter === "pool" || filter === "medal"){
		if(ptr.includes(key)) ptr.splice(ptr.indexOf(key), 1);
		return;
	}

	if(key in ptr) delete ptr[key];
}

const tester = filter => {
	switch(filter){
		case "id":		console.log(clone(identifier, "")); break;
		case "state":	console.log(clone(state, {})); break;
		case "score":	console.log(clone(score, {})); break;
		case "box":		console.log(clone(box, {})); break;
		case "item":	console.log(clone(item, {})); break;
		case "pool":	console.log(clone(pool, [])); break;
		case "col":		console.log(clone(collection, {})); break;
		case "mission":	console.log(clone(mission, {})); break;
		case "medal":	console.log(clone(medal, [])); break;
		case "backup":	console.log(clone(backup, {})); break;
		case "flag":	console.log(clone(flag, {})); break;
		default:		return;
	}
}

const db = {newdb, state0, getMission, getFlag, update, getter, setter, tester, init, del};
export default db;
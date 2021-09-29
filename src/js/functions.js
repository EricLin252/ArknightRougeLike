import {roleList} from './dict';
import d from './data';

//回傳招募或晉升幹員所需希望數，不可使用的會回傳-1
const checkRole = role => {
	const star = roleList[role].star;
	const skill = d.box[role]? d.box[role]+1 : 1;
	const need = d.state.upgrade[star-1][skill-1];
	if(d.state.hope < need) return -1;
	if(d.item["pudding"] && d.state.coin < need) return -1;
	return need;
}

//回傳amt數量的隨機抽樣array
const randSelect = (amt, w) => {
	let V = [];
	Object.keys(w).forEach(v => {
		let weight = w[v] <= 0? 0.0001 : w[v];
		V.push([v, Math.pow(Math.random(), 1/weight)]);
	});
	V.sort((a, b) => b[1] - a[1]);
	let output = [];
	for(let i = 0; i < amt; i++){
		output.push(V[i][0]);
	}
	return output;
}

//深複製物件，當無物件可複製，回傳d
const clone = (o, d) => {
	return (o !== null && o !== undefined)? JSON.parse(JSON.stringify(o)) : JSON.parse(JSON.stringify(d));
}

//深融合物件
const merge = (a, b) => {
	const x = clone(a, {});
	Object.keys(b).forEach(el => x[el] = clone(b[el], null));
	return clone(x, {});
}

export {checkRole, randSelect, clone, merge};
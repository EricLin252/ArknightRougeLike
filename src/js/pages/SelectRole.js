import React, {useState, useRef} from 'react';
import {createUseStyles} from 'react-jss';
import d from '../data';
import n from '../next';
import {Role} from './Role';
import {roleList} from '../dict';

function RoleComfirm(props){
	const classes = createUseStyles({
		root: {
			position: "fixed",
			top: "10vh",
			left: "20vw",
			width: "60vw",
			height: "80vh",
			overflowY: "scroll",
			backgroundColor: "rgba(54, 57, 64, 0.9)",
			borderRadius: "15px",
			border: "gray solid 1px",
			zIndex: 8
		},
		roleOuter: {
			position: "absolute",
			top: "50%",
			left: "20%",
			width: "30%",
			transform: "translate(-50%, -50%)"
		},
		description: {
			position: "absolute",
			top: "50%",
			transform: "translate(0%, -50%)",
			width: "60%",
			left: "40%",
			color: "whitesmoke",
			"& p": {
				marginTop: "0%",
				position: "relative",
				fontSize: "3vw",
				fontWeight: "bold"
			},
			"& p span": {
				position: "absolute",
				display: "block",
				width: "20%",
				top: "0%",
				right: "0%",
				borderRadius: "10px",
				textAlign: "center"
			},
			"& button": {
				display: "inline-block",
				width: "30%",
				margin: "auto 5%",
				fontSize: "3vw",
				fontWeight: "bold",
				borderRadius: "10px",
				cursor: "pointer"
			},
			"& button:hover": {
				backgroundColor: "gray",
				color: "whitesmoke"
			}
		},
		hope: {
			width: "80%",
			backgroundImage: "url(/img/icon/hopecoin.png)",
			backgroundPosition: "left center",
			backgroundSize: "auto 100%",
			color: "rgb(255, 207, 48)",
			textAlign: "center",
			"& span": {
				border: "rgb(255, 207, 48) solid 1px"
			}
		},
		coin: {
			width: "80%",
			backgroundImage: "url(/img/icon/coin.png)",
			backgroundPosition: "left center",
			backgroundSize: "auto 100%",
			color: "rgb(22, 255, 181)",
			textAlign: "center",
			"& span": {
				border: "rgb(22, 255, 181) solid 1px"
			}
		},
		comfirm: {
			backgroundColor: "rgb(255, 255, 119)"
		},
		blocker: {
			position: "fixed",
			top: "0%",
			left: "0%",
			width: "100vw",
			height: "100vh",
			backgroundColor: "rgba(0, 0, 0, 0.6)",
			zIndex: 7
		}
	})();

	const generateCost = () => {
		const output = [];
		output.push(
			<p className={classes.hope}>
				{props.hope + " ➠ " + (props.hope - props.cost)}
				<span>-{props.cost}</span>
			</p>
		);
		if(d.getter("item")["pudding"]) output.push(
			<p className={classes.coin}>
				{props.coin + " ➠ " + (props.coin - props.cost)}
				<span>-{props.cost}</span>
			</p>
		);
		return output;
	}

	const generateRole = () => {
		const r = roleList[props.role];
		const skill = d.getter("box")[props.role];
		return(
			<Role
				width={"100%"}
				role={props.role}
				rolename={r.rolename}
				star={r.star}
				skill={skill+1}
				selectable={false}
			/>
		);
	}

	return(props.show && <>
		<div className={classes.root}>
			<div className={classes.roleOuter}>
				{generateRole()}
			</div>
			<div className={classes.description}>
				<p className="title">
					幹員{d.getter("box")[props.role]? "晉升" : "招募"}
				</p>
				{generateCost()}
				<button className={classes.comfirm} onClick={props.comfirm}>
					確認
				</button><button onClick={props.cancel}>
					取消
				</button>
			</div>
		</div>
		<div className={classes.blocker}></div>
	</>);
}

function SelectRole(props){
	const [opening, setOpening] = useState(6);
	const [selection, setSelection] = useState("");
	const [cost, setCost] = useState(0);
	const myRef = useRef();

	const classes = createUseStyles({
		root: {
			position: "relative",
			width: "100%",
			height: "100%",
			overflowY: "scroll"
		},
		block: {
			width: "100%",
			marginBottom: "10px",
			borderBottom: "solid gray 2px",
			"& p": {
				margin: "10px",
				fontSize: "2vw",
				cursor: "pointer",
				color: "ghostwhite"
			}
		},
		blockContent: {
			width: "100%"
		},
		quit: {
			width: "60%",
			margin: "auto",
			fontSize: "2vw",
			textAlign: "center",
			marginTop: "10px",
			cursor: "pointer",
			color: "ghostwhite",
			"&:hover": {
				backgroundColor: "gray",
				color: "black"
			}
		}
	})();

	const roleSelector = (filter) => {
		let result = Object.keys(roleList);
		if(filter.type){
			result = result.filter(r => roleList[r].type === filter.type);
		}
		if(filter.star){
			result = result.filter(r => roleList[r].star === filter.star);
		}
		return result;
	}

	const roleClick = (role, c, flag) => {
		if(!flag) return;
		setSelection(role);
		setCost(c);
	}

	const judgeRole = (cost, flag) => {
		if(props.hope < cost) return false;
		if(flag && props.coin < cost) return false;
		return true;
	}

	const generateUpgrade = (star, box, rolecost, pudding) => {
		const output = [];
		const dd = Object.keys(box);
		props.content.forEach(tt => {
			const up3 = dd.filter(r => ((star === 6 || r === "Amiya") && roleList[r].star === star && roleList[r].type === tt && box[r] === 2));
			up3.forEach(el => {
				const c = rolecost[roleList[el].star-1][2];
				const flag = judgeRole(c, pudding);
				output.push(<Role
					width={"10%"}
					role={el}
					skill={3}
					selectable={true}
					overcost={!flag}
					clickFunc={() => roleClick(el, c, flag)}
				/>);
			});
			const up2 = dd.filter(r => (star >= 4 && roleList[r].star === star && roleList[r].type === tt && box[r] === 1));
			up2.forEach(el => {
				const c = rolecost[roleList[el].star-1][1];
				const flag = judgeRole(c, pudding);
				output.push(<Role
					width={"10%"}
					role={el}
					skill={2}
					selectable={true}
					overcost={!flag}
					clickFunc={() => roleClick(el, c, flag)}
				/>);
			});
		});
		return output;
	}

	const generateRole = (star, box, rolecost, pudding) => {
		const output = [];
		props.content.forEach(tt => {
			const filter = {type: tt, star};
			const data = roleSelector(filter);
			data.forEach(el => {
				const c = rolecost[roleList[el].star-1][0];
				const flag = judgeRole(c, pudding);
				output.push(box[el]? null : <Role
					width={"10%"}
					role={el}
					skill={1}
					selectable={true}
					overcost={!flag}
					clickFunc={() => roleClick(el, c, flag)}
				/>);
			});
		});
		return output;
	}

	const toggleBlock = star => {
		setOpening(star);
		if(myRef.current) myRef.current.scrollTo(0, 0);
	}

	const generateBlock = () => {
		const output = [];
		const starsign = "⭐";
		const box = d.getter("box");
		const item = d.getter("item");
		const rolecost = n.generateRolecost(item);
		const pudding = "pudding" in item;
		for(let i = 6; i > 0; i--){
			output.push(
				<div className={classes.block}>
					<p onClick={() => toggleBlock(i)}>{opening === i ? "▾" : "▸"}{starsign.repeat(i)}</p>
					<div className={classes.blockContent} style={(opening === i)? {} : {display: "none"}}>
						{generateUpgrade(i, box, rolecost, pudding)}
						{generateRole(i, box, rolecost, pudding)}
					</div>
				</div>
			);
		}
		return output;
	}

	return(props.show &&
		<div className={classes.root} ref={myRef}>
			{generateBlock()}
			<p className={classes.quit} onClick={() => props.response("showSkip")}>放棄招募晉升</p>
			<RoleComfirm
				show={selection !== ""}
				role={selection}
				cost={cost}
				hope={props.hope}
				coin={props.coin}
				comfirm={() => {props.response(selection); setSelection("");}}
				cancel={() => setSelection("")}
			/>
		</div>
	);
}

export {SelectRole};
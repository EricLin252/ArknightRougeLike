import React, {useState, useRef, useEffect} from 'react';
import {createUseStyles} from 'react-jss';
import {itemList} from '../dict';
import d from '../data';
import {Role} from './Role';
import {Item} from './Item';

function Box(props){
	const classes = createUseStyles({
		root: {
			width: "100%",
			padding: "0% 5%"
		}
	})();

	const generateMember = () => {
		let output = [];
		let box = d.getter("box");
		let members = Object.keys(box);
		members.forEach(el => {
			output.push(
				<Role
					width={"16.6%"}
					role={el}
					skill={box[el]}
					selectable={false}
				/>
			);
		});
		return output;
	}

	return(props.show &&
		<div className={classes.root}>
			{generateMember()}
		</div>
	);
}

function Items(props){
	const [selection, setSelection] = useState("");

	useEffect(() => {
		setSelection("");
	}, [props.show]);

	const classes = createUseStyles({
		root: {
			width: "100%",
			height: "100%",
			padding: "0% 2%"
		},
		description: {
			display: "inline-block",
			width: "30%",
			height: "100%",
			padding: "10px",
			borderRight: "gray solid 1px",
			color: "whitesmoke",
			fontSize: "1.2vw",
			overflowY: "scroll"
		},
		items: {
			display: "inline-block",
			width: "70%",
			height: "100%",
			padding: "10px 30px",
			verticalAlign: "top",
			overflowY: "scroll"
		}
	})();

	const generateDescription = () => {
		let output = [];
		if(selection !== ""){
			output.push(itemList[selection].text);
			if(itemList[selection].effect){
				output.push(<br/>);
				output.push(<br/>);
				output.push("效果：");
				output.push(<br/>);
				output.push(itemList[selection].effect);
			}
		}
		return output;
	}

	const generateItem = () => {
		let output = [];
		let items = Object.keys(d.getter("item"));
		items.forEach(el => {
			output.push(
				<Item
					width={"20%"}
					item={el}
					state={"exhibit"}
					selected={selection === el}
					clickFunc={() => setSelection(el)}
				/>
			);
		});
		return output;
	}

	return(props.show &&
		<div className={classes.root}>
			<div className={classes.description}>
				{generateDescription()}
			</div>
			<div className={classes.items}>
				{generateItem()}
			</div>
		</div>
	);
}

function Mission(props){
	const classes = createUseStyles({
		root: {
			position: "relative",
			width: "100%",
			borderBottom: "gray solid 1px",
			color: "whitesmoke"
		},
		image: {
			display: "inline-block",
			width: "10%",
			backgroundImage: "url(/img/mission/" + props.mission + ".png)",
			verticalAlign: "middle"
		},
		description: {
			display: "inline-block",
			width: "100%",
			verticalAlign: "middle",
			"& p": {
				position: "relative",
				display: "inline-block",
				width: "100%",
				fontSize: "1.5vw",
				paddingLeft: "20px",
				fontWeight: "bold"
			},
			"& div": {
				width: "100%",
				fontSize: "1.2vw",
				display: "block",
				marginBottom: "10px"
			},
			"& span": {
				display: theme => theme.finish? "block" : "none",
				position: "absolute",
				top: "0%",
				right: "0%",
				fontSize: "3.5vw",
				fontStyle: "italic",
				color: "yellow",
				pointerEvents: "none",
				zIdex: "-1",
				opacity: "0.5"
			},
			"& button": {
				display: theme => theme.finish? "none" : "block",
				position: "absolute",
				bottom: "0%",
				right: "0%",
				fontSize: "3vw",
				color: "gray",
				backgroundColor: "transparent",
				border: "none",
				cursor: "pointer",
				"&:hover": {
					color: "cornflowerblue"
				}
			}
		}
	})(props);

	return(
		<div className={classes.root}>
			<div className={classes.description}>
				<p>
					{props.missionname}
				</p>
				<div>
					{props.text}
				</div>
				<span>COMPLETE</span>
				<button onClick={() => props.response("show" + props.mission)}>提交任務 ▶</button>
			</div>
		</div>
	);
}

function Missions(props){
	const classes = createUseStyles({
		root: {
			width: "100%",
			padding: "0% 5%"
		}
	})();

	const generateMission = () => {
		let output = [];
		const mission = d.getter("mission");
		Object.keys(mission).forEach(m => {
			output.push(
				<Mission
					mission={m}
					missionname={mission[m].missionname}
					text={mission[m].text}
					finish={mission[m].finish}
					response={props.response}
				/>
			);
		});
		return output;
	}

	return(props.show &&
		<div className={classes.root}>
			{generateMission()}
		</div>
	);
}

function Backpack(props){
	const [checked, setChecked] = useState("member");
	const myRef = useRef();

	const classes = createUseStyles({
		root: {
			position: "fixed",
			top: "5vh",
			left: "5vw",
			width: "90vw",
			height: "90vh",
			backgroundColor: "rgba(54, 57, 64, 0.9)",
			borderRadius: "15px",
			border: "gray solid 1px",
			zIndex: 8
		},
		nav: {
			width: "100%",
			padding: "0px 2vw",
			borderBottom: "solid ghostwhite 2.5px",
			"& span": {
				display: "inline-block",
				padding: "2px 2vw",
				fontSize: "2vw",
				lineHeight: "2.5vw",
				borderTopLeftRadius: "15px",
				borderTopRightRadius: "15px",
				cursor: "pointer"
			}
		},
		checked: {
			border: "solid ghostwhite 2.5px",
			borderBottom: "unset",
			color: "ghostwhite",
			fontWeight: "bold"
		},
		unchecked: {
			color: "rgb(129, 132, 137)",
			"&:hover": {
				background: "linear-gradient(rgb(164, 164, 164), transparent)",
				color: "ghostwhite"
			}
		},
		content: {
			width: "100%",
			height: "70vh",
			overflowY: "scroll"
		},
		cancel: {
			position: "absolute",
			top: "0px",
			right: "0px",
			height: "3vw",
			color: "rgb(129, 132, 137)",
			"&:hover": {
				color: "ghostwhite",
				fontWeight: "bold"
			}
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

	const toggleBlock = (state) => {
		setChecked(state);
		if(myRef.current) myRef.current.scrollTo(0, 0);
	}

	return(props.show && <>
		<div className={classes.root}>
			<div className={classes.nav}>
				<span className={checked === "member"? classes.checked : classes.unchecked} onClick={() => toggleBlock("member")}>
					幹員
				</span><span className={checked === "item"? classes.checked : classes.unchecked} onClick={() => toggleBlock("item")}>
					戰利品
				</span><span className={checked === "mission"? classes.checked : classes.unchecked} onClick={() => toggleBlock("mission")}>
					任務
				</span><span className={classes.cancel} onClick={() => {toggleBlock("member"); props.cancel();}}>
					✕
				</span>
			</div>
			<div className={classes.content} ref={myRef}>
				<Box show={checked === "member"}/>
				<Items show={checked === "item"}/>
				<Missions show={checked === "mission"} response={props.response}/>
			</div>
		</div>
		<div className={classes.blocker}></div>
	</>);
}

function UI(props){
	const [backpackstate, setBackpackstate] = useState(false);

	const classes = createUseStyles({
		root: {
			position: "relative",
			width: "100%",
			height: "3vw",
			paddingLeft: "10px",
			zIndex: 5,
			"& span": {
				display: "inline-block",
				height: "100%",
				padding: "0px 5px",
				fontSize: "2.5vw",
				lineHeight: "2.5vw",
				backgroundPosition: "top left",
				backgroundSize: "auto 100%",
				backgroundRepeat: "no-repeat"
			}
		},
		stagename: {
			position: "relative",
			width: "30%",
			color: "ghostwhite",
			textShadow: "black 0.1em 0.1em 0.2em",
			fontWeight: "bolder"
		},
		quit: {
			position: "relative",
			width: "10%",
			left: "27%",
			textAlign: "right",
			color: "rgb(54, 57, 64)",
			backgroundImage: "linear-gradient(right, rgb(216, 0, 0), transparent), url(/img/icon/quit.png)",
			cursor: "pointer",
			"&:hover": {
				backgroundColor: "rgba(110, 110, 110, 0.5)",
				borderBottom: "solid whitesmoke 2px",
				color: "whitesmoke"
			}
		},
		backpack: {
			position: "relative",
			width: "10%",
			left: "28%",
			textAlign: "right",
			color: "rgb(54, 57, 64)",
			backgroundImage: "linear-gradient(right, rgb(213, 213, 213), transparent), url(/img/icon/backpack.png)",
			cursor: "pointer",
			"&:hover": {
				backgroundColor: "rgba(110, 110, 110, 0.5)",
				borderBottom: "solid whitesmoke 2px",
				color: "whitesmoke"
			}
		},
		hope: {
			position: "relative",
			width: "10%",
			left: "29%",
			textAlign: "right",
			color: "rgb(54, 57, 64)",
			background: "linear-gradient(right, rgb(255, 207, 48), transparent), url(/img/icon/hopecoin.png)"
		},
		coin: {
			position: "relative",
			width: "10%",
			left: "30%",
			textAlign: "right",
			color: "rgb(54, 57, 64)",
			background: "linear-gradient(right, rgb(22, 255, 181), transparent), url(/img/icon/coin.png)"
		},
		content: {
			margin: "auto",
			width: "95%",
			height: "90%"
		}
	})();

	return(props.show && <>
		<div className={classes.root}>
			<span className={classes.stagename}>
				{props.stagename}
			</span><span className={classes.quit} onClick={() => props.response("showEscape")}>
				放棄
			</span><span className={classes.backpack} onClick={() => setBackpackstate(true)}>
				背包
			</span><span className={classes.hope}>
				{props.hope}
			</span><span className={classes.coin}>
				{props.coin}
			</span>
		</div>
		<div className={classes.content}>
			{props.children}
		</div>
		<Backpack show={backpackstate} cancel={() => setBackpackstate(false)} response={props.response}/>
	</>);
}

export {UI};
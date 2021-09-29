import React, {useState, useRef, useEffect} from 'react';
import {createUseStyles} from 'react-jss';
import d from '../data';
import {itemList, ticketList, medalList} from '../dict';
import {Item} from './Item';
import {login, logout, makeAccount, credit} from '../backend';

function BG(props){
	const classes = createUseStyles({
		normal: {
			position: "absolute",
			width: "100%",
			height: "100%",
			backgroundImage: "url(/img/bg/lobby.png)",
			display: theme => theme.difficulty === "easy"? "block" : "none"
		},
		hard: {
			position: "absolute",
			width: "100%",
			height: "100%",
			backgroundImage: "url(/img/bg/lobby_hard.png)",
			display: theme => theme.difficulty === "hard"? "block" : "none"
		}
	})(props);

	return(<>
		<div className={classes.normal}></div>
		<div className={classes.hard}></div>
	</>);
}

function Account(props){
	const [state, setState] = useState("login");
	const [nickname, setNickname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [code, setCode] = useState("");

	useEffect(() => {
		if(!props.show){
			setState("login");
			setNickname("");
			setEmail("");
			setPassword("");
			setCode("");
		}
		else if(props.user === null) setState("login");
		else if(!props.credit) setState("credit");
	}, [props]);

	const classes = createUseStyles({
		root: {
			position: "absolute",
			backgroundColor: "whitesmoke",
			padding: "20px",
			width: "50%",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			borderRadius: "15px",
			textAlign: "center",
			boxShadow: "5px 5px 5px black",
			zIndex: 8,
			"& span": {
				display: "inline-block",
				width: "20%",
				fontWeight: "bold",
				textAlign: "left",
				marginBottom: "20px"
			},
			"& input": {
				width: "60%",
				fontSize: "inherit"
			}
		},
		title: {
			fontWeight: "bolder",
			fontSize: "2vw",
			textAlign: "center"
		},
		comfirm: {
			minWidth: "15%",
			fontSize: "1.5vw",
			borderRadius: "5px",
			backgroundColor: "cornflowerblue",
			cursor: "pointer",
			marginBottom: "15px"
		},
		toggle: {
			display: "inline",
			fontWeight: "normal",
			textDecoration: "underline",
			cursor: "pointer"
		},
		blocker: {
			position: "absolute",
			top: "0%",
			left: "0%",
			width: "100%",
			height: "100%",
			backgroundColor: "rgba(255, 255, 255, 0.6)",
			zIndex: 7
		}
	})();

	const toggleState = () => {
		setEmail("");
		setPassword("");
		if(state === "login") setState("mkaccount");
		else setState("login");
	}

	const generateView = () => {
		switch(state){
			case "login": return(<>
				<p className={classes.title}>登入</p>
				<span>Email:</span><input type="text" value={email} onChange={e => setEmail(e.target.value)}/><br/>
				<span>密碼:</span><input type="password" value={password} onChange={e => setPassword(e.target.value)}/><br/>
				<button className={classes.comfirm} onClick={submit}>登入</button><br/>
				<p className={classes.toggle} onClick={toggleState}>創建新帳號</p>
			</>);
			case "mkaccount": return(<>
				<p className={classes.title}>創建帳號</p>
				<span>Email:</span><input type="text" value={email} onChange={e => setEmail(e.target.value)}/><br/>
				<span>密碼:</span><input type="password" value={password} onChange={e => setPassword(e.target.value)}/><br/>
				<button className={classes.comfirm} onClick={submit}>創建帳號</button><br/>
				<p className={classes.toggle} onClick={toggleState}>登入已有帳號</p>
			</>);
			case "credit": return(<>
				<p className={classes.title}>驗證</p>
				<span>設定暱稱:</span><input type="text" value={nickname} onChange={e => setNickname(e.target.value)}/><br/>
				<span>驗證碼:</span><input type="text" value={code} onChange={e => setCode(e.target.value)}/><br/>
				<button className={classes.comfirm} onClick={submit}>驗證</button><br/>
			</>)
			default: return null;
		}
	}

	const submit = () => {
		if(state === "login"){
			const regex = /^[^[\]()\\<>:;,@.]+[^[\]()\\<>:;,@]*@[a-z0-9A-Z]+(([.]?[a-z0-9A-Z]+)*[-]*)*[.]([a-z0-9A-Z]+[-]*)+$/g;
			setPassword(password.replace(/\s+/g, ""));
			if(!regex.test(email) || password === "") window.alert("請將資訊填寫完整");
			else{
				login(email, password)
				.then(() => {
					setEmail("");
					setPassword("");
				});
			}
		}
		else if(state === "mkaccount"){
			const regex = /^[^[\]()\\<>:;,@.]+[^[\]()\\<>:;,@]*@[a-z0-9A-Z]+(([.]?[a-z0-9A-Z]+)*[-]*)*[.]([a-z0-9A-Z]+[-]*)+$/g;
			setPassword(password.replace(/\s+/g, ""));
			if(!regex.test(email) || password === "") window.alert("請將資訊填寫完整");
			else{
				makeAccount(email, password)
				.then(() => {
					setEmail("");
					setPassword("");
				});
			}
		}
		else if(state === "credit"){
			setCode(code.replace(/\s+/g, ""));
			setNickname(nickname.replace(/\s+/g, ""));
			if(code === "" || nickname === "") window.alert("請將資訊填寫完整");
			else{
				credit(code, nickname)
				.then(() => {
					setNickname("");
					setCode("");
					logout();
					window.alert("驗證成功，請重新登入");
				})
				.catch(() => window.alert("驗證碼錯誤"));
			}
		}
	}

	return(props.show && <>
		<div className={classes.root}>
			{generateView()}
		</div>
		<div className={classes.blocker}></div>
	</>);
}

function Doctor(props){
	const classes = createUseStyles({
		root: {
			width: "100%",
			backgroundColor: "rgba(54, 57, 64, 0.9)",
			borderRadius: "15px",
			padding: "10px",
			color: "whitesmoke"
		},
		headshot: {
			verticalAlign: "middle",
			display: "inline-block",
			marginRight: "5%",
			width: "20%",
			borderRadius: "50%",
			backgroundImage: "url(/img/icon/headshot.png)",
			backgroundSize: "100% 100%",
			backgroundPosition: "center center"
		},
		doctorName: {
			display: "inline-block",
			width: "45%",
			paddingRight: "5px",
			verticalAlign: "middle",
			fontSize: "2.5vw",
			fontWeight: "bold"
		},
		score: {
			display: "inline-block",
			width: "30%",
			verticalAlign: "middle"
		},
		num: {
			display: "",
			height: "6vw",
			lineHeight: "6vw",
			fontSize: "6vw",
			fontWeight: "bolder",
			color: "#a7f5ff",
			fontStyle: "italic"
		}
	})();

	return(
		<div className={classes.root}>
			<div>
				<div className={classes.headshot + " square"}>
				</div><span className={classes.doctorName}>
					{d.getter("id")}
				</span><div className={classes.score}>
					<span>總積分</span><br/>
					<div className={classes.num}>{d.getter("score").total}</div>
				</div>
			</div>
		</div>
	);
}

function ItemCol(props){
	const classes = createUseStyles({
		root: {
			position: "relative",
			width: "100%",
			borderBottom: "gray solid 1px"
		},
		image: {
			display: "inline-block",
			width: theme => theme.selected? "30%" : "10%",
			backgroundImage: "url(/img/item/" + props.item + ".png)",
			verticalAlign: "middle"
		},
		description: {
			display: "inline-block",
			width: theme => theme.selected? "70%" : "90%",
			verticalAlign: "middle",
			"& p": {
				position: "relative",
				display: "inline-block",
				width: "100%",
				paddingLeft: "20px",
				fontWeight: "bold",
				"& span": {
					position: "absolute",
					display: "block",
					width: "1.5vw",
					height: "1.5vw",
					top: "50%",
					right: "20px",
					transform: "translate(0%, -50%)",
					lineHeight: "1.5vw",
					fontSize: "1.5vw",
					textAlign: "center",
					cursor: "pointer"
				}
			},
			"& div": {
				width: "100%",
				fontSize: "1.2vw",
				display: theme => theme.selected? "block" : "none",
				marginBottom: "10px",
				"& span": {
					color: "gold"
				}
			}
		}
	})(props);

	const generateDescription = () => {
		let output = [];
		output.push(props.text);
		if(props.effect){
			output.push(<br/>);
			output.push(<br/>);
			output.push(<span>效果：</span>);
			output.push(props.effect);
		}
		if(props.carry){
			output.push(<br/>);
			output.push(<br/>);
			output.push(<span>攜帶入場：</span>);
			output.push(props.carry);
		}
		return output;
	}

	const toggleDescription = () => {
		if(props.selected) props.clickFunc("");
		else props.clickFunc(props.item);
	}

	return(
		<div className={classes.root}>
			<div className={classes.image + " square"}>
			</div><div className={classes.description}>
				<p>
					{props.itemname}
					<span onClick={toggleDescription}>
						{props.selected? "▲" : "▼"}
					</span>
				</p>
				<div>
					{generateDescription()}
				</div>
			</div>
		</div>
	);
}

function Mission(props){
	const classes = createUseStyles({
		root: {
			position: "relative",
			width: "100%",
			borderBottom: "gray solid 1px"
		},
		image: {
			display: "inline-block",
			width: "20%",
			backgroundImage: "url(/img/mission/" + props.mission + ".png)",
			verticalAlign: "middle"
		},
		description: {
			display: "inline-block",
			width: "80%",
			verticalAlign: "middle",
			"& p": {
				position: "relative",
				display: "inline-block",
				width: "100%",
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
				display: props.finish? "block" : "none",
				position: "absolute",
				top: "0%",
				right: "0%",
				fontSize: "3.5vw",
				fontStyle: "italic",
				color: "yellow",
				pointerEvents: "none",
				zIdex: "-1",
				opacity: "0.5"
			}
		}
	})();

	return(
		<div className={classes.root}>
			<div className={classes.image + " square"}>
			</div><div className={classes.description}>
				<p>
					{props.missionname}
				</p>
				<div>
					{props.text}
				</div>
				<span>COMPLETE</span>
			</div>
		</div>
	);
}

function Medal(props){
	const classes = createUseStyles({
		root: {
			position: "relative",
			width: "100%",
			borderBottom: "gray solid 1px"
		},
		image: {
			display: "inline-block",
			width: "20%",
			backgroundImage: theme => theme.finish? "url(/img/medal/" + theme.medal + ".png)" : "url(/img/medal/nomedal.png)",
			verticalAlign: "middle"
		},
		description: {
			display: "inline-block",
			width: "80%",
			verticalAlign: "middle",
			"& p": {
				position: "relative",
				display: "inline-block",
				width: "100%",
				paddingLeft: "20px",
				fontWeight: "bold"
			},
			"& div": {
				width: "100%",
				fontSize: "1.2vw",
				display: "block",
				marginBottom: "10px"
			}
		}
	})(props);

	return(
		<div className={classes.root}>
			<div className={classes.image + " square"}>
			</div><div className={classes.description}>
				<p>
					{medalList[props.medal].medalname}
				</p>
				<div>
					{medalList[props.medal].text}
				</div>
			</div>
		</div>
	);
}

function List(props){
	let score = d.getter("score");
	let cL = d.getter("col");
	let mL = d.getter("mission");
	const [checked, setChecked] = useState("achievement");
	const [selected, setSelected] = useState("");
	const myRef = useRef();

	const classes = createUseStyles({
		root: {
			width: "100%",
			height: "70%",
			backgroundColor: "rgba(54, 57, 64, 0.9)",
			borderRadius: "15px"
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
			height: "80%",
			overflowY: "scroll"
		},
		achievement: {
			display: theme => theme.checked === "achievement"? "block" : "none",
			width: "100%",
			color: "whitesmoke",
			"& p": {
				width: "80%",
				margin: "2vh auto",
				borderBottom: "solid gray 1px",
				"& span:nth-child(1)": {
					display: "inline-block",
					width: "60%",
					fontSize: "2vw"
				},
				"& span:nth-child(2)": {
					display: "inline-block",
					width: "40%",
					textAlign: "right",
					fontSize: "2vw",
					fontStyle: "italic"
				}
			}
		},
		collection: {
			display: theme => theme.checked === "collection"? "block" : "none",
			width: "100%",
			color: "whitesmoke",
			padding: "0% 5%"
		},
		mission: {
			display: theme => theme.checked === "mission"? "block" : "none",
			width: "100%",
			color: "whitesmoke",
			padding: "0% 5%"
		},
		medal: {
			display: theme => theme.checked === "medal"? "block" : "none",
			width: "100%",
			color: "whitesmoke",
			padding: "0% 5%"
		}
	})({checked});

	const toggleBlock = state => {
		setChecked(state);
		setSelected("");
		if(myRef.current) myRef.current.scrollTo(0, 0);
	}

	const generateCollection = () => {
		let output = [];
		Object.keys(cL).forEach(c => {
			output.push(
				<ItemCol
					item={c}
					itemname={itemList[c].itemname}
					text={itemList[c].text}
					effect={itemList[c].effect}
					carry={itemList[c].carry}
					selected={selected === c}
					clickFunc={setSelected}
				/>
			);
		});
		return output;
	}

	const generateMission = () => {
		let output = [];
		Object.keys(mL).forEach(m => {
			output.push(
				<Mission
					mission={m}
					missionname={mL[m].missionname}
					text={mL[m].text}
					finish={mL[m].finish}
				/>
			);
		});
		return output;
	}

	const generateMedal = () => {
		let output = [];
		let mL = d.getter("medal");
		Object.keys(medalList).forEach(m => {
			output.push(
				<Medal medal={m} finish={mL.includes(m)}/>
			);
		});
		return output;
	}

	const missionCount = () => {
		const a = Object.keys(mL);
		const b = a.filter(el => mL[el].finish);
		return b.length;
	}

	return(
		<div className={classes.root}>
			<div className={classes.nav}>
				<span className={checked === "achievement"? classes.checked : classes.unchecked} onClick={() => toggleBlock("achievement")}>
					戰績
				</span><span className={checked === "collection"? classes.checked : classes.unchecked} onClick={() => toggleBlock("collection")}>
					戰利品
				</span><span className={checked === "mission"? classes.checked : classes.unchecked} onClick={() => toggleBlock("mission")}>
					任務
				</span><span className={checked === "medal"? classes.checked : classes.unchecked} onClick={() => toggleBlock("medal")}>
					蝕刻章
				</span>
			</div>
			<div className={classes.content} ref={myRef}>
				<div className={classes.achievement}>
					<p><span>完成探險次數</span><span>{score.finish}</span></p>
					<p><span>完成任務總數</span><span>{missionCount()}</span></p>
					<p><span>完成戰鬥次數</span><span>{score.fightcount}</span></p>
					<p><span>戰利品數量</span><span>{Object.keys(cL).length + "/" + Object.keys(itemList).filter(r => !(r in ticketList)).length}</span></p>
				</div>
				<div className={classes.collection}>
					{generateCollection()}
				</div>
				<div className={classes.mission}>
					{generateMission()}
				</div>
				<div className={classes.medal}>
					{generateMedal()}
				</div>
			</div>
		</div>
	);
}

function MedalGraph(props){
	const classes = createUseStyles({
		root: {
			width: "100%",
			height: "100%",
			marginTop: "10px",
			backgroundImage: "url(/img/bg/lobby.png)",
			backgroundSize: "100% auto",
			backgroundPosition: "top center"
		}
	})();

	const generateMedal = () => {
	}

	return(
		<div className={classes.root}>
			{generateMedal()}
		</div>
	);
}

function Record(props){
	const classes = createUseStyles({
		root: {
			position: "relative",
			width: "100%",
			height: "100%",
			padding: "15px",
			overflow: "hidden",
			zIndex: 8
		},
		block: {
			display: "inline-block",
			position: "relative",
			width: "50%",
			height: "100%",
			padding: "10px",
			verticalAlign: "top"
		},
		back: {
			position: "absolute",
			width: "40%",
			bottom: "0%",
			right: "10px",
			textAlign: "right",
			fontSize: "3vw",
			background: "linear-gradient(right, rgba(54, 57, 64, 0.8), transparent)",
			backgroundColor: "transparent",
			color: "whitesmoke",
			border: "none",
			cursor: "pointer",
			"&:hover": {
				background: "linear-gradient(right, rgb(54, 57, 64), transparent)",
				fontWeight: "bold"
			}
		},
		logout: {
			position: "absolute",
			width: "40%",
			bottom: "0%",
			left: "10px",
			textAlign: "left",
			fontSize: "3vw",
			background: "linear-gradient(left, rgba(200, 0, 0, 0.8), transparent)",
			backgroundColor: "transparent",
			color: "whitesmoke",
			border: "none",
			cursor: "pointer",
			"&:hover": {
				background: "linear-gradient(left, rgb(200, 0, 0), transparent)",
				fontWeight: "bold"
			}
		},
		blocker: {
			position: "absolute",
			top: "0%",
			left: "0%",
			width: "100%",
			height: "100%",
			backgroundColor: "rgba(255, 255, 255, 0.6)",
			zIndex: 7
		}
	})();

	return(props.show && <>
		<div className={classes.root}>
			<div className={classes.block}>
				<Doctor/>
				<MedalGraph/>
				<button className={classes.logout} onClick={() => logout().then(props.back)}>登出</button>
			</div><div className={classes.block}>
				<List/>
				<button className={classes.back} onClick={props.back}>回首頁</button>
			</div>
		</div>
		<div className={classes.blocker}></div>
	</>);
}

function FirstSelect(props){
	const classes = createUseStyles({
		root: {
			position: "absolute",
			width: "100%",
			height: "98%",
			top: "2%",
			textAlign: "center",
			overflowY: "scroll",
			color: "whitesmoke",
			zIndex: 8
		},
		title: {
			fontSize: "2vw",
			fontWeight: "bold",
			marginBottom: "10px"
		},
		blocker: {
			position: "absolute",
			top: "0%",
			left: "0%",
			width: "100%",
			height: "100%",
			backgroundColor: "rgba(0, 0, 0, 0.6)",
			zIndex: 7
		}
	})();

	const generateItem = () => {
		let output = [];
		for(let i = 0; i < props.tickets.length; i++){
			output.push(
				<Item
					width={"17%"}
					item={props.tickets[i][0]}
					state={props.tickets[i][1]? "exhibit" : "sold"}
					clickFunc={() => props.response(i)}
				/>
			);
		}
		return output;
	}

	return(props.show && <>
		<div className={classes.root}>
			<p className={classes.title}>開始探險</p>
			{generateItem()}
		</div>
		<div className={classes.blocker}></div>
	</>);
}

function Carry(props){
	const [selection, setSelection] = useState("");

	useEffect(() => {
		if(!props.show) setSelection("");
	}, [props.show]);

	const classes = createUseStyles({
		root: {
			position: "absolute",
			width: "95%",
			height: "95%",
			top: "2.5%",
			left: "2.5%",
			color: "whitesmoke",
			backgroundColor: "rgb(54, 57, 64)",
			borderRadius: "15px",
			border: "gray solid 1px",
			zIndex: 10
		},
		title: {
			textAlign: "center",
			fontSize: "2vw",
			fontWeight: "bold",
			marginBottom: "10px"
		},
		content: {
			width: "100%",
			height: "80%"
		},
		items: {
			display: "inline-block",
			width: "70%",
			height: "100%",
			padding: "10px 30px",
			verticalAlign: "top",
			overflowY: "scroll"
		},
		description: {
			display: "inline-block",
			width: "30%",
			height: "100%",
			padding: "10px",
			borderLeft: "gray solid 1px",
			color: "whitesmoke",
			fontSize: "1.2vw",
			overflowY: "scroll"
		},
		text: {
			width: "100%",
			height: "80%"
		},
		buttons: {
			width: "100%",
			height: "20%",
			"& button": {
				width: "40%",
				height: "100%",
				margin: "0% 5%",
				fontSize: "2vw",
				borderRadius: "10px",
				border: "none",
				boxShadow: "5px 5px 5px black",
				cursor: "pointer",
				"&:hover": {
					backgroundColor: "gray",
					color: "white"
				}
			}
		},
		comfirm: {
			opacity: theme => theme.selection === ""? 0.5 : 1,
			pointerEvents: theme => theme.selection === ""? "none" : "all",
			backgroundColor: "cornflowerblue",
			color: "whitesmoke"
		},
		cancel: {
			backgroundColor: "whitesmoke",
			color: "black"
		},
		blocker: {
			position: "absolute",
			top: "0%",
			left: "0%",
			width: "100%",
			height: "100%",
			zIndex: 9
		}
	})({selection});

	const generateItems = () => {
		let output = [];
		let items = Object.keys(d.getter("col"));
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

	const generateDescription = () => {
		let output = [];
		if(selection !== ""){
			output.push(itemList[selection].text);
			if(itemList[selection].carry){
				output.push(<br/>);
				output.push(<br/>);
				output.push("攜帶入場：");
				output.push(<br/>);
				output.push(itemList[selection].carry);
			}
		}
		return output;
	}

	return(props.show && <>
		<div className={classes.root}>
			<p className={classes.title}>選擇攜帶道具</p>
			<div className={classes.content}>
				<div className={classes.items}>{generateItems()}</div>
				<div className={classes.description}>
					<div className={classes.text}>
						{generateDescription()}
					</div>
					<div className={classes.buttons}>
						<button className={classes.comfirm} onClick={() => props.response(selection)}>
							確認
						</button><button className={classes.cancel} onClick={props.close}>
							略過
						</button>
					</div>
				</div>
			</div>
		</div>
		<div className={classes.blocker}></div>
	</>);
}

function Lobby(props){
	const [state, setState] = useState("lobby");
	const [selectcarry, setSelectcarry] = useState(false);
	const [difficulty, setDifficulty] = useState("easy");

	useEffect(() => {
		if(!props.show){
			setState("lobby");
			setSelectcarry(false);
			setDifficulty("easy");
		}
		else if(props.user === null || !props.credit) setState("account");
		else if(props.content.length !== 0) setState("firstselect");
		else setState("lobby");
	}, [props]);

	const classes = createUseStyles({
		root: {
			position: "absolute",
			width: "100vw",
			height: "50vw",
			top: "50%",
			left: "0%",
			transform: "translate(0%, -50%)",
			fontSize: "1.5vw"
		},
		buttons: {
			position: "absolute",
			top: "70%",
			right: "0%",
			height: "25%",
			width: "40%",
			transform: "translate(0%, -50%)"
		},
		block: {
			position: "relative",
			width: "100%",
			height: "50%"
		},
		difficulty: {
			position: "absolute",
			paddingRight: "15%",
			top: "50%",
			right: "0%",
			width: "60%",
			transform:  "translate(0%, -50%)",
			fontSize: "2vw",
			background: "linear-gradient(left, whitesmoke, transparent)",
			textAlign: "right",
			color: "rgb(54, 57, 64)"
		},
		easy: {
			cursor: "pointer",
			filter: "drop-shadow(0px 0px 5px whitesmoke)",
			fontSize: theme => (theme.difficulty === "easy") && "3vw",
			fontWeight: theme => (theme.difficulty === "easy") && "bold"
		},
		hard: {
			cursor: "pointer",
			filter: "drop-shadow(0px 0px 5px whitesmoke)",
			fontSize: theme => (theme.difficulty === "hard") && "3vw",
			fontWeight: theme => (theme.difficulty === "hard") && "bold"
		},
		rect: {
			position: "absolute",
			top: "50%",
			left: "40%",
			width: "8vw",
			height: "8vw",
			backgroundColor: theme => theme.difficulty === "hard"? "rgb(193, 0, 0)" : "rgb(35, 35, 255)",
			zIndex: 2,
			transform: "translate(-50%, -50%) rotate(0.125turn)",
			boxShadow: "10px 10px 10px black",
			border: "solid whitesmoke 1px",
			cursor: "pointer",
			"&:hover": {
				backgroundColor: theme => theme.difficulty === "hard"? "rgb(255, 66, 66)" : "rgb(72, 72, 255)",
				borderWidth: "5px"
			}
		},
		word: {
			position: "absolute",
			top: "50%",
			left: "40%",
			transform: "translate(-50%, -50%)",
			zIndex: 3,
			fontSize: "2vw",
			color: "white",
			fontWeight: "bolder",
			filter: "drop-shadow(5px 5px 5px gray)",
			pointerEvents: "none"
		},
		torecord: {
			position: "absolute",
			padding: "2vh 10% 2vh 0px",
			top: "70%",
			right: "0%",
			width: "60%",
			transform:  "translate(0%, -50%)",
			fontSize: "2.5vw",
			background: "linear-gradient(right, whitesmoke, transparent)",
			textAlign: "right",
			color: "rgb(54, 57, 64)",
			filter: "drop-shadow(0px 0px 5px whitesmoke)",
			cursor: "pointer",
			"&:hover": {
				background: "linear-gradient(right, gray, transparent)",
				color: "whitesmoke"
			}
		}
	})({difficulty});

	const start = () => {
		const arr = Object.keys(d.getter("col"));
		if(d.getter("flag").carryFlag && arr.length !== 0) setSelectcarry(true);
		props.response(difficulty);
	}

	return(props.show &&
		<div className={classes.root}>
			<BG difficulty={difficulty}/>
			<Account
				show={state === "account"}
				user={props.user}
				credit={props.credit}
			/>
			<Record
				show={state === "record"}
				back={() => setState("lobby")}
			/>
			<Carry
				show={selectcarry}
				response={ans => {props.response(ans); setSelectcarry(false);}}
				close={() => setSelectcarry(false)}
			/>
			<FirstSelect
				show={state === "firstselect"}
				tickets={props.content}
				response={props.response}
			/>
			{state === "lobby" &&
				<div className={classes.buttons}>
					<div className={classes.block}>
						<div className={classes.difficulty}>
							<span className={classes.easy} onClick={() => setDifficulty("easy")}>養生模式</span><br/>
							<span className={classes.hard} onClick={() => setDifficulty("hard")}>禿頭模式</span>
						</div>
						<div className={classes.rect} onClick={start}></div>
						<div className={classes.word}>開始探險</div>
					</div>
					<div className={classes.block}>
						<div className={classes.torecord} onClick={() => setState("record")}>戰績與收藏 ➤</div>
					</div>
				</div>
			}
		</div>
	);
}

export {Lobby};
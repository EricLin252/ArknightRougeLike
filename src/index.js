import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {createUseStyles} from 'react-jss';
import {fightList} from './js/dict';

import {SelectRole} from './js/pages/SelectRole';
import {Fight} from './js/pages/Fight';
import {SelectWay} from './js/pages/SelectWay';
import {Story} from './js/pages/Story';
import {Shop} from './js/pages/Shop';
import {Phase} from './js/pages/Phase';
import {Lobby} from './js/pages/Lobby';
import {UI} from './js/pages/UI';
import {Result} from './js/pages/Result';
import {Message} from './js/pages/Message';
import d from './js/data';
import n from './js/next';

import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, get, push} from './js/backend';

import reportWebVitals from './js/reportWebVitals';

import './css/index.css';
import './css/default.css';

function Sys(props){
	const [state, setState] = useState(d.state0({}));
	const [storyname, setStoryname] = useState("不期而遇");
	const [credit, setCredit] = useState(false);
	const [user, loading] = useAuthState(auth);
	const [posting, setPosting] = useState(true);

	useEffect(() => {
		if(user){
			get("users/" + user.uid + "/fetch")
			.then(fetch => get("global/reload").then(reload => new Promise(resolve => resolve({fetch: fetch, reload: reload}))))
			.then(re => {
				if(re.fetch){
					console.log("登入成功，讀取資料成功");
					d.update(user, re.fetch, re.reload)
					.then(() => {
						setState(d.state0(re.fetch.state));
						setCredit(true);
						setPosting(false);
					})
					.catch(err => console.log(err));
				}
				else{
					console.log("登入成功，新建資料");
					push("users/" + user.uid + "/fetch", d.newdb(re.reload))
					.then(() => {
						d.init();
						get("users/" + user.uid + "/identifier").then(id => {
							d.setter("id", id);
							setState(d.state0({}));
							setCredit(true);
							setPosting(false);
						});
					})
					.catch(err => console.log("新創資料庫：" + err));
				}
			})
			.catch(() => {
				console.log("登入成功，尚未輸入驗證碼");
				setPosting(false);
			});
		}
		else{
			console.log("尚未登入，清除內存");
			d.init();
			setCredit(false);
			setState(d.state0({}));
			setPosting(false);
		}
	}, [user]);

	const setPart = s => {
		setState(prev => ({
			phase: s.phase !== null && s.phase !== undefined? s.phase : prev.phase,
			buffer: s.buffer !== null && s.buffer !== undefined? s.buffer : prev.buffer,
			hope: s.hope !== null && s.hope !== undefined? s.hope : prev.hope,
			coin: s.coin !== null && s.coin !== undefined? s.coin : prev.coin,
			message: s.message !== null && s.message !== undefined? s.message : prev.message
		}));
	}

	const post = ans => {
		setPosting(true);
		get("global/reload").then(gRe => get("users/" + user.uid + "/fetch/reload").then(lRe => new Promise(resolve => resolve(gRe !== lRe))))
		.then(reload => {
			if(reload){
				window.location.reload();
				return new Promise((resolve, reject) => reject());
			}
			else return new Promise(resolve => resolve());
		})
		.then(() => n.submit(state, ans))
		.then(re => {
			setPart(re);
			setPosting(false);
		})
		.catch(err => console.log("提交：" + err));
	}

	const generateBG = (P, L) => {
		if(P in {Lobby:1, Undefine:1, Success:1, Fail:1, SelectMission:1}) return "none";
		else return "url(/img/bg/layer" + L + ".png)";
	}

	const classes = createUseStyles({
		root: {
			position: "absolute",
			top: "0px",
			left: "0px",
			width: "100%",
			height: "100%",
			overflow: "hidden",
			backgroundSize: "100% 100%",
			backgroundImage: theme => generateBG(theme.phase, theme.layer)
		},
		loading: {
			position: "absolute",
			top: "0px",
			left: "0px",
			width: "100%",
			height: "100%",
			background: "linear-gradient(bottom, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0.4))",
			zIndex: 20,
			"& div": {
				position: "absolute",
				top: "90%",
				left: "50%",
				width: "7vw",
				height: "7vw",
				transform: "translate(-50%, -50%) rotate(0.125turn)",
				border: "solid white 10px"
			},
			"& span": {
				position: "absolute",
				top: "90%",
				left: "60%",
				transform: "translate(0%, -50%)",
				color: "white",
				fontWeight: "bold",
				fontSize: "3vw"
			}
		}
	})({phase: state.phase, layer: d.getter("state").layer});

	const generateStagename = () => {
		switch(state.phase){
			case "SelectRole":	return "幹員招募晉升";
			case "Fight":		return fightList[state.buffer[0]];
			case "SelectWay":
				switch(d.getter("state").layer){
					case 1:		return "I - 初來乍到";
					case 2:		return "II - 五紫亂華";
					case 3:		return "III - 流星之眾";
					case 4:		return "IV - 化險為姨";
					default:	return "";
				}
			case "Story":		return storyname;
			case "Shop":		return "商店";
			case "FirstSelect":	return "開始探險";
			default:			return "";
		}
	}

	return(<>
		{(loading || posting) && <div className={classes.loading}><div></div><span>loading...</span></div>}
		<div className="orientation"><span>請將畫面放橫</span></div>
		<div className={classes.root}>
			<Lobby
				show={state.phase === "Lobby"}
				user={user}
				credit={credit}
				content={state.buffer}
				response={post}
			/>
			<UI
				show={!(state.phase in {Lobby:1, Success:1, Fail:1, Phase:1})}
				stagename={generateStagename()}
				hope={state.hope}
				coin={state.coin}
				response={post}
			>
				<SelectRole
					show={state.phase === "SelectRole"}
					content={state.buffer}
					hope={state.hope}
					coin={state.coin}
					response={post}
				/>
				<Fight
					show={state.phase === "Fight"}
					content={state.buffer}
					response={post}
				/>
				<SelectWay
					show={state.phase === "SelectWay"}
					content={state.buffer}
					response={post}
				/>
				<Story
					show={state.phase === "Story"}
					content={state.buffer}
					returnStoryname={setStoryname}
					response={post}
				/>
				<Shop
					show={state.phase === "Shop"}
					coin={state.coin}
					content={state.buffer}
					response={post}
				/>
			</UI>
			<Phase
				show={state.phase === "Phase"}
				response={post}
			/>
			<Result
				show={state.phase in {Success:1, Fail:1}}
				hope={state.hope}
				coin={state.coin}
				phase={state.phase}
				content={state.buffer}
				response={post}
			/>
			<Message 
				show={state.message[0] !== ""}
				content={state.message[0]}
				enableCancel={state.message[1]}
				cancel={() => setPart({message: ["", false, ""]})}
				response={() => {setPart({message: ["", false, ""]}); post(state.message[2]);}}
			/>
		</div>
	</>);
}

ReactDOM.render(
	<React.StrictMode>
		<Sys/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

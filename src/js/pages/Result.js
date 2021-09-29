import React, {useState} from 'react';
import {createUseStyles} from 'react-jss';
import d from '../data';

function Role(props){
	const grade = level => {
		if(level === 3) return "drop-shadow(0px 0px 5px rgb(255, 0, 0))";
		if(level === 2) return "drop-shadow(0px 0px 5px rgb(255, 224, 124))";
		return "none";
	}

	const classes = createUseStyles({
		root: {
			display: "inline-block",
			width: "10%",
			margin: "1vw",
			backgroundImage: "url(/img/role/" + props.role + ".png)",
			filter: grade(props.level)
		}
	})();

	return(
		<div className={classes.root + " square"}></div>
	);
}

function Item(props){
	const classes = createUseStyles({
		root: {
			display: "inline-block",
			width: "10%",
			margin: "1vw",
			backgroundImage: "url(/img/item/" + props.item + ".png)"
		}
	})();

	return(
		<div className={classes.root + " square"}></div>
	);
}

function Mission(props){
	const classes = createUseStyles({
		root: {
			display: "inline-block",
			position: "relative",
			width: "25%",
			padding: "10px",
			textAlign: "center",
			background: theme => theme.selected && "linear-gradient(bottom, rgba(255, 224, 124, 0.8), transparent)",
			zIndex: 8,
			cursor: "pointer"
		},
		image: {
			width: "100%",
			backgroundImage: theme => "url(/img/mission/" + theme.mission[0] + ".png)"
		}
	})(props);

	return(
		<div className={classes.root} onClick={props.clickFunc}>
			<div className={classes.image + " square"}></div>
			<span>{props.mission[1]}</span>
		</div>
	);
}

function Result(props){
	const [selection, setSelection] = useState("");

	const classes = createUseStyles({
		root: {
			position: "absolute",
			width: "100vw",
			height: "50vw",
			top: "50%",
			left: "0%",
			transform: "translate(0%, -50%)",
			fontSize: "1.5vw",
			color: theme => theme.phase === "Success"? "rgb(54, 57, 64)" : "whitesmoke",
			backgroundImage: theme => "url(/img/bg/" + (theme.phase === "Success"? "success" : "fail") + ".png)"
		},
		title: {
			position: "relative",
			width: "100%",
			margin: "2vh 0px",
			textAlign: "center",
			fontSize: "3.5vw",
			fontWeight: "bold",
			background: theme => theme.phase === "Success"? 
				"linear-gradient(90deg, rgb(255, 224, 124), transparent, rgb(255, 224, 124))"
				:
				"linear-gradient(90deg, rgb(255, 100, 100), transparent, rgb(255, 100, 100))",
			zIndex: 8
		},
		description: {
			position: "relative",
			width: "100%",
			padding: "0% 2%",
			fontSize: "1.5vw",
			zIndex: 8
		},
		achievement: {
			position: "relative",
			display: "inline-block",
			width: "50%",
			verticalAlign: "middle",
			zIndex: 8,
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
		total: {
			width: "100%",
			margin: "2vh auto",
			padding: "0% 10%",
			borderTop: "solid gray 3px",
			color: "#a7f5ff",
			fontSize: "3vw",
			textShadow: "0em 0em 0.4em black",
			"& span:nth-child(1)": {
				display: "inline-block",
				width: "60%"
			},
			"& span:nth-child(2)": {
				display: "inline-block",
				width: "40%",
				textAlign: "right",
				fontStyle: "italic"
			}
		},
		backpack: {
			position: "relative",
			display: "inline-block",
			verticalAlign: "middle",
			width: "50%",
			height: "60%",
			marginTop: "2vh",
			padding: "1vw",
			color: "whitesmoke",
			borderRadius: "1vw",
			border: "gray 1px solid",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			overflowY: "scroll",
			zIndex: 8
		},
		image: {
			display: "inline-block",
			width: "10%",
			margin: "1vw"
		},
		back: {
			position: "absolute",
			width: "40%",
			top: "85%",
			right: "10px",
			textAlign: "right",
			fontSize: "3vw",
			background: "linear-gradient(right, rgba(54, 57, 64, 0.8), transparent)",
			backgroundColor: "transparent",
			color: "whitesmoke",
			border: "none",
			cursor: "pointer",
			zIndex: 8,
			"&:hover": {
				background: "linear-gradient(right, rgb(54, 57, 64), transparent)",
				fontWeight: "bold"
			}
		},
		content: {
			width: "100vw",
			textAlign: "center"
		},
		comfirm: {
			display: theme => theme.selection === ""? "none" : "inline-block",
			position: "relative",
			minWidth: "15%",
			fontSize: "1.5vw",
			borderRadius: "5px",
			backgroundColor: "cornflowerblue",
			cursor: "pointer",
			marginTop: "20px",
			zIndex: 8
		},
		blocker: {
			position: "absolute",
			top: "0%",
			left: "0%",
			width: "100%",
			height: "100%",
			backgroundColor: theme => theme.phase === "Success"? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)",
			zIndex: 7
		}
	})({phase: props.phase, selection});

	const generateTitle = () => {
		if(props.phase === "Success"){
			if(props.content[0] in [1, 2, 3, 4]) return "探險成功";
			else return "任務選擇";
		}
		else return "探險失敗";
	}

	const generateTime = () => {
		let time = Math.round((Date.now() - d.getter("backup").time)/1000);
		let s = time % 60;
		let m = Math.round((time % 3600)/60);
		let h = Math.round((time % 216000)/3600);
		return h + "小時" + m + "分" + s + "秒";
	}

	const generateDescription = () => {
		if(props.phase === "Success"){
			switch(props.content[0]){
				case 1:		return "探險員 " + d.getter("id") + " 共花費 " + generateTime() + " 完成 風蝕突破 的難題，收穫豐碩，相信此成果能為找到謎語人的任務貢獻許多。";
				case 2:		return "探險員 " + d.getter("id") + " 共花費 " + generateTime() + " 通過 紫氣東來 的考驗，不過在最終的探尋任務前，還有許多路要走，繼續加油！";
				case 3:		return "探險員 " + d.getter("id") + " 共花費 " + generateTime() + " 戰勝 眾星雲集 的死鬥，以性命相搏之後，離找到謎底只剩一步之遙了。";
				case 4:		return "探險員 " + d.getter("id") + " 共花費 " + generateTime() + " 突破 姨國之戰 的絕境，你已知曉整個城市的秘密，使用你的一切所知，傳承謎語人的遺志吧！";
				default:	return "恭喜你！你是今天首次探險成功的探險員，請選擇一項任務，任務會新增至所有人的任務列表，並持續至活動結束。";
			}
		}
		else{
			switch(d.getter("state").layer){
				case 1:		return "屍橫荒野，但是不要灰心，還好你不是死在城裡...城裡有很多比死還恐怖的事在等著你...";
				case 2:		return "城中的警司在排水道下發現了你的遺體，精盡而亡的乾屍讓人不忍直視，如果有下次，千萬不要接近那股紫色的氛圍...";
				case 3:		return "戰敗了，卻從不倒下，我們流星一族不怕一切苦難，凹不過，我們就禿到過！";
				case 4:		return "城中最隱密也最危險的一帶，一切行動需要更加謹慎，即使是死，也要把挖掘出來的秘密帶回...";
				default:	return "";
			}
		}
	}

	const generateBox = () => {
		let output = [];
		let box = d.getter("box");
		Object.keys(box).forEach(el => {
			output.push(
				<Role role={el} level={box[el]}/>
			);
		});
		return output;
	}

	const generateItems = () => {
		let output = [];
		Object.keys(d.getter("item")).forEach(el => {
			output.push(
				<Item item={el}/>
			);
		});
		return output;
	}

	const generateMission = () => {
		let output = [];
		props.content.forEach(el => {
			output.push(
				<Mission mission={el} selected={selection === el[0]} clickFunc={() => setSelection(el[0])}/>
			);
		});
		return output;
	}

	const generateAchievement = () => {
		const backup = d.getter("backup");
		return(<>
			<p><span>完成一般作戰次數</span><span>{backup.fightcount}</span></p>
			<p><span>完成緊急作戰次數</span><span>{backup.extremecount}</span></p>
			<p><span>殘餘希望</span><span>{props.hope}</span></p>
			<p><span>殘餘源石粒</span><span>{props.coin}</span></p>
			<div className={classes.total}><span>總獲得積分</span><span>{backup.totalscore}</span></div>
		</>);
	}

	return(props.show &&
		<div className={classes.root}>
			<p className={classes.title}>{generateTitle()}</p>
			<div className={classes.description}>
				{generateDescription()}
			</div>
			{props.content[0] in [0, 1, 2, 3, 4]? 
			<>
				<div className={classes.achievement}>
					{generateAchievement()}
				</div><div className={classes.backpack}>
					已招募幹員：<br/>
					{generateBox()}<br/>
					已獲得戰利品：<br/>
					{generateItems()}
				</div>
				<button className={classes.back} onClick={() => props.response("skip")}>返回</button>
			</>
			:
			<div className={classes.content}>
				{generateMission()}<br/>
				<button className={classes.comfirm} onClick={() => {props.response(selection); setSelection("");}}>確認</button>
			</div>
			}
			<div className={classes.blocker}></div>
		</div>
	);
}

export {Result};
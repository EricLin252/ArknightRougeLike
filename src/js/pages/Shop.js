import React, {useState} from 'react';
import {createUseStyles} from 'react-jss';
import {itemList} from '../dict';
import d from '../data';
import {Item} from './Item';

function Shop(props){
	const [selection, setSelection] = useState(0);

	const judgeState = (selection, coin, content) => {
		if(selection === 0) return false;
		if(content && content[selection-1] && coin < content[selection-1][1]) return false;
		return true;
	}

	const classes = createUseStyles({
		root: {
			position: "relative",
			top: "2%",
			width: "100%",
			height: "98%",
			background: "linear-gradient(right, rgba(0, 0, 0, 0.7), transparent)"
		},
		clerk: {
			position: "relative",
			display: "inline-block",
			width: "30%",
			height: "100%",
			backgroundPosition: "top center",
			backgroundImage: "url(/img/bg/clerk" + d.getter("state").layer + ".png)"
		},
		description: {
			position: "absolute",
			width: "80%",
			height: "40%",
			bottom: "10%",
			left: "10%",
			padding: "10px",
			backgroundColor: "rgba(0, 0, 0, 0.8)",
			border: "gray 1px solid",
			borderRadius: "10px",
			color: "whitesmoke",
			fontSize: "1.2vw",
			overflowY: "scroll"
		},
		items: {
			verticalAlign: "top",
			display: "inline-block",
			width: "70%",
			height: "100%",
			padding: "10px 30px",
			overflowY: "scroll"
		},
		buttons: {
			position: "relative",
			verticalAlign: "top",
			display: "inline-block",
			margin: "0% 2%",
			padding: "10px",
			width: "26%",
			"& button": {
				display: "block",
				position: "absolute",
				width: "100%",
				height: "40%",
				left: "0%",
				fontSize: "2vw",
				fontWeight: "bold",
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				border: "gray 1px solid",
				borderRadius: "10px",
				color: "whitesmoke",
				cursor: "pointer",
				"&:hover": {
					backgroundColor: "gray",
					color: "black"
				}
			},
			"& div": {
				width: "100%",
				zIndex: "-1"
			},
			"& span": {
				display: "block",
				width: "100%",
				height: "2.9vw",
				zIndex: "-1"
			}
		},
		comfirm: {
			top: "5%",
			opacity: theme => judgeState(theme.selection, theme.coin, theme.content)? 1 : 0.5,
			pointerEvents: theme => judgeState(theme.selection, theme.coin, theme.content)? "all" : "none"
		},
		cancel: {
			bottom: "5%"
		},
		map: {
			position: "relative",
			display: "inline-block",
			width: "70%",
			height: "100%",
			backgroundSize: "100% auto",
			backgroundImage: "url(/img/map/mapH" + d.getter("state").layer + ".png)",
			zIndex: 1,
			filter: "drop-shadow(10px 10px 15px black)"
		},
		infor: {
			position: "relative",
			display: "inline-block",
			padding: "5% 0%",
			width: "30%",
			height: "100%",
			zIndex: 1
		},
		block: {
			position: "relative",
			width: "100%",
			height: "50%"
		},
		restrict: {
			position: "absolute",
			top: "50%",
			left: "10%",
			width: "70%",
			transform: "translate(0%, -50%)",
			fontSize: "1.5vw",
			color: "whitesmoke",
			background: "linear-gradient(right, rgb(0, 115, 255), transparent)",
			textAlign: "left",
			"& span": {
				fontSize: "3vw",
				fontWeight: "bold"
			}
		},
		finish: {
			position: "absolute",
			top: "50%",
			right: "10%",
			width: "70%",
			transform: "translate(0%, -50%)",
			fontSize: "1.5vw",
			color: "whitesmoke",
			background: "linear-gradient(left, rgb(0, 115, 255), transparent)",
			textAlign: "right",
			"& span": {
				fontSize: "2vw",
				fontWeight: "bold"
			}
		},
		leftRect: {
			position: "absolute",
			top: "50%",
			left: "20%",
			width: "6vw",
			height: "6vw",
			backgroundColor: "darkblue",
			zIndex: 2,
			transform: "translate(-50%, -50%) rotate(0.125turn)",
			boxShadow: "10px 10px 10px black",
			border: "solid whitesmoke 1px",
			cursor: "pointer",
			"&:hover": {
				backgroundColor: "rgb(0, 115, 255)",
				borderWidth: "5px"
			}
		},
		rightRect: {
			position: "absolute",
			top: "50%",
			left: "80%",
			width: "6vw",
			height: "6vw",
			backgroundColor: "darkblue",
			zIndex: 2,
			transform: "translate(-50%, -50%) rotate(0.125turn)",
			boxShadow: "10px 10px 10px black",
			border: "solid whitesmoke 1px"
		},
		level: {
			position: "absolute",
			top: "50%",
			left: "80%",
			transform: "translate(-50%, -50%)",
			zIndex: 3,
			fontSize: "5vw",
			color: "white",
			fontWeight: "bolder",
			height: "5vw",
			lineHeight: "5vw",
			filter: "drop-shadow(5px 5px 5px gray)"
		},
		upload: {
			position: "absolute",
			top: "50%",
			left: "10%",
			width: "20%",
			backgroundImage: "url(/img/icon/upload.png)",
			zIndex: 3,
			transform: "translate(0%, -50%)",
			filter: "drop-shadow(5px 5px 5px gray)",
			pointerEvents: "none"
		}
	})({coin: props.coin, selection, content: props.content});

	const generateDescription = () => {
		let output = [];
		if(props.content[0] === "fight"){
			switch(d.getter("state").layer){
				case 2:
					output.push("好久不見阿！讓我們繼續之前中門對狙的對決吧！如果你挑戰成功了，商店的東西任你拿！");
					break;
				case 3: 
					output.push("博士，許久未見，讓我來測測你現在的指揮能力吧。如果你挑戰成功了，商店的東西任你拿！");
					break;
				case 4:
					output.push("想娶我女兒，先過我這關！如果你挑戰成功了，商店的東西任你拿！");
					break;
				default: 
					output.push("");
					break;
			}
		}
		else if(selection === 0){
			switch(d.getter("state").layer){
				case 2:
					output.push("這裡十分危險，買完東西就快離開！");
					break;
				case 3: 
					output.push("我一直都在你們身邊，休息一下，帶走自己所需的吧。");
					break;
				case 4:
					output.push("...");
					break;
				default: 
					output.push("");
					break;
			}
		}
		else{
			const item = itemList[props.content[selection-1][0]];
			output.push(item.text);
			if(item.effect){
				output.push(<br/>);
				output.push(<br/>);
				output.push("效果：");
				output.push(<br/>);
				output.push(item.effect);
			}
		}
		return output;
	}

	const generateItemstate = (itemArr, col) => {
		if(!itemArr[2]) return "sold";
		if(itemArr[1] > props.coin) return "overcost";
		if(!(itemArr[0] in col)) return "new";
		return false;
	}

	const generateItems = () => {
		const col = d.getter("col");
		let output = [];
		for(let i = 0; i < props.content.length; i++){
			output.push(<Item
				width={"26%"}
				item={props.content[i][0]}
				cost={props.content[i][1]}
				state={generateItemstate(props.content[i], col)}
				selected={selection === i+1}
				clickFunc={() => setSelection(i+1)}
			/>);
		}
		return output;
	}

	const generateFight = () => {
		let fightname = "";
		switch(d.getter("state").layer){
			case 2: fightname = "5-10"; break;
			case 3: fightname = "6-16"; break;
			case 4: fightname = "7-18"; break;
			default: break;
		}
		
		return(<>
			<div className={classes.map}></div>
			<div className={classes.infor}>
				<div className={classes.block}>
					<div className={classes.restrict}>
						<span>{fightname}</span><br/>
						危機等級
					</div>
					<div className={classes.rightRect}></div>
					<div className={classes.level}>?</div>
				</div>
				<div className={classes.block}>
					<div className={classes.finish}>
						<span>完成作戰</span><br/>
						上傳作戰紀錄
					</div>
					<div className={classes.leftRect} onClick={() => props.response("showCode")}></div>
					<div className={classes.upload + " square"}></div>
				</div>
			</div>
		</>);
	}

	const buy = () => {
		props.response(selection-1);
		setSelection(0);
	}

	return(props.show &&
		<div className={classes.root}>
			<div className={classes.clerk}>
				<div className={classes.description}>
					{generateDescription()}
				</div>
			</div><div className={classes.items}>
				{props.content[0] === "fight"?
				generateFight()
				:
				<>
					{generateItems()}
					<div className={classes.buttons}>
						<button className={classes.comfirm} onClick={buy}>確認購買</button>
						<button className={classes.cancel} onClick={() => {props.response("showSkip"); setSelection(0);}}>離開</button>
						<div className="square"></div>
						<span></span>
					</div>
				</>
				}
			</div>
		</div>
	);
}

export {Shop};
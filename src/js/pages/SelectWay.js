import React from 'react';
import {createUseStyles} from 'react-jss';
import {fightList} from '../dict';

function Selection(props){
	const generateColor = type => {
		switch(type){
			case "final": return "rgba(204, 31, 31, 0.7)";
			case "extreme": return "rgba(231, 62, 0, 0.7)";
			case "fight": return "rgba(238, 143, 0, 0.7)";
			case "shop": return "rgba(33, 98, 220, 0.7)";
			case "story": return "rgba(7, 123, 196, 0.7)";
			default: return "rgba(100, 100, 100, 0.7)";
		}
	}

	const classes = createUseStyles({
		root: {
			display: "block",
			width: "60%",
			height: "100%",
			margin: "auto",
			fontSize: "4vw",
			lineHeight: "4vw",
			backgroundColor: theme => generateColor(theme.type),
			color: "whitesmoke",
			fontWeight: "bold",
			boxShadow: "10px 10px 10px rgba(245, 245, 245, 0.6)",
			borderRadius: "5px",
			cursor: "pointer",
			zIndex: 2,
			"&:hover": {
				backgroundColor: "rgba(81, 81, 81, 0.7)"
			}
		}
	})(props);

	return(
		<button className={classes.root} onClick={props.clickFunc}>{props.content}</button>
	);
}

function SelectWay(props){
	const classes = createUseStyles({
		root: {
			position: "relative",
			display: "flex",
			width: "100%",
			height: "100%",
			alignItems: "center",
			flexDirection: "column",
			justifyContent: "space-evenly"
		},
		selectBox: {
			position: "relative",
			display: "block",
			width: "100%",
			height: "14%"
		},
		leftLine: {
			position: "absolute",
			width: "20%",
			height: "1vw",
			top: "50%",
			left: "0%",
			transform: "translate(0%, -50%)",
			background: "linear-gradient(right, white, transparent)"
		},
		rightLine: {
			position: "absolute",
			width: "20%",
			height: "1vw",
			top: "50%",
			right: "0%",
			transform: "translate(0%, -50%)",
			background: "linear-gradient(left, white, transparent)"
		}
	})();
	
	const generateSelection = () => {
		let output = [];
		props.content.forEach(el => {
			let content = "";
			let type = "";
			if(el in fightList){
				content = fightList[el];
				if(el === "F1" || el === "S1" || el[0] === "X") type = "final";
				else if(el[0] === "S") type = "extreme";
				else type = "fight";
			}
			else if(el === "shop"){
				content = "商店";
				type = el;
			}
			else if(el === "house"){
				content = "練舞室";
				type = el;
			}
			else if(el === "item"){
				content = "撿到奇怪的東西";
				type = el;
			}
			else if(el === "story"){
				content = "不期而遇";
				type = el;
			}

			output.push(
				<div className={classes.selectBox}>
					<div className={classes.leftLine}></div>
					<Selection type={type} content={content} clickFunc={() => props.response(el)}/>
					<div className={classes.rightLine}></div>
				</div>
			);
		});
		return output;
	}

	return(props.show &&
		<div className={classes.root}>
			{generateSelection()}
		</div>
	);
}

export {SelectWay};
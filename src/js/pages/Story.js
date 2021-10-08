import React, {useEffect} from 'react';
import {createUseStyles} from 'react-jss';
import {itemList, ticketList} from '../dict';

function Item(props){
	const classes = createUseStyles({
		root: {
			display: "inline-block",
			width: "80%",
			height: "15vh",
			margin: "10px",
			paddingRight: "15px",
			textAlign: "right",
			fontSize: "3vw",
			fontWeight: "bold",
			lineHeight: "15vh",
			color: "rgb(54, 57, 64)",
			background: "url(/img/item/"+ props.item +".png)",
			backgroundPosition: "top left",
			backgroundSize: "auto 100%",
			backgroundRepeat: "no-repeat"
		}
	})();

	return(
		<div className={classes.root}>{itemList[props.item].itemname}</div>
	);
}

function Ticket(props){
	const classes = createUseStyles({
		root: {
			display: "inline-block",
			width: "80%",
			height: "15vh",
			margin: "10px",
			paddingRight: "15px",
			textAlign: "right",
			fontSize: "3vw",
			fontWeight: "bold",
			lineHeight: "15vh",
			color: "rgb(54, 57, 64)",
			background: "linear-gradient(right, rgb(255, 255, 255), transparent), url(/img/item/"+ props.ticket +".png)",
			backgroundPosition: "top left",
			backgroundSize: "auto 100%",
			backgroundRepeat: "no-repeat",
			opacity: theme => theme.selectable? 1 : 0.5,
			pointerEvent: theme => theme.selectable? "all" : "none",
			cursor: "pointer",
			"&:hover": {
				background: "linear-gradient(right, rgb(88, 88, 88), transparent), url(/img/item/"+ props.ticket +".png)",
				backgroundPosition: "top left",
				backgroundSize: "auto 100%",
				backgroundRepeat: "no-repeat",
				color: "whitesmoke"
			}
		}
	})(props);

	return(
		<div className={classes.root} onClick={props.response}>{itemList[props.ticket].itemname}</div>
	);
}

function Story(props){
	useEffect(() => {
		if(props.show) props.returnStoryname(String(props.content[1]).split("$")[0]);
	}, [props]);

	const classes = createUseStyles({
		root: {
			position: "relative",
			top: "2%",
			width: "100%",
			height: "98%",
			margin: "auto",
			padding: "5vw 10vw",
			backgroundColor: "rgba(245, 245, 245, 0.5)",
			borderRadius: "10px",
			fontSize: "2vw",
			overflowY: "scroll"
		},
		selections: {
			width: "60%",
			margin: "auto",
			textAlign: "center"
		},
		hope: {
			display: "inline-block",
			width: "40%",
			margin: "auto 5%",
			paddingRight: "15px",
			textAlign: "right",
			fontSize: "3vw",
			fontWeight: "bold",
			color: "rgb(54, 57, 64)",
			background: "linear-gradient(right, rgb(255, 207, 48), transparent), url(/img/icon/hopecoin.png)",
			backgroundPosition: "top left",
			backgroundSize: "auto 100%",
			backgroundRepeat: "no-repeat"
		},
		coin: {
			display: "inline-block",
			width: "40%",
			margin: "auto 5%",
			paddingRight: "15px",
			textAlign: "right",
			fontSize: "3vw",
			fontWeight: "bold",
			color: "rgb(54, 57, 64)",
			background: "linear-gradient(right, rgb(22, 255, 181), transparent), url(/img/icon/coin.png)",
			backgroundPosition: "top left",
			backgroundSize: "auto 100%",
			backgroundRepeat: "no-repeat"
		},
		selection: {
			display: "block",
			width: "100%",
			height: "5vw",
			margin: "10px auto",
			fontSize: "2vw",
			lineHeight: "5vw",
			color: "black",
			backgroundColor: "rgba(255, 255, 255, 0.2)",
			border: "whitesmoke 1px solid",
			cursor: "pointer",
			"&:hover": {
				backgroundColor: "rgba(81, 81, 81, 0.7)",
				color: "whitesmoke"
			}
		}
	})();

	const generateStory = () => {
		const origin = String(props.content[1]).split("$")[1];
		let output = [];
		const text = origin? origin.split("@") : [];
		text.forEach(el => {
			if(output.length !== 0) output.push(<br/>);
			output.push(el);
		});
		return output;
	}

	const generateSelection = () => {
		let output = [];
		let content = String(props.content[1]).split("$");
		for(let i = 2; i < content.length; i++){
			if(content[i][0] === "H"){
				let amt = parseInt(content[i].slice(1), 10);
				output.push(
					<span className={classes.hope}>{amt >= 0? ("+" + amt) : amt}</span>
				);
			}
			else if(content[i][0] === "C"){
				let amt = parseInt(content[i].slice(1), 10);
				output.push(
					<span className={classes.coin}>{amt >= 0? ("+" + amt) : amt}</span>
				);
			}
			else if(content[i] in ticketList){
				output.push(
					<Ticket ticket={content[i]} selectable={props.content[i] !== ""} response={() => props.response(props.content[i])}/>
				);
			}
			else if(content[i] in itemList){
				output.push(
					<Item item={content[i]}/>
				);
			}
			else{
				output.push(
					<button className={classes.selection} onClick={() => props.response(props.content[i])}>
						{content[i]}
					</button>
				);
			}
		}
		return output;
	}

	return(props.show &&
		<div className={classes.root}>
			{generateStory()}
			<div className={classes.selections}>{generateSelection()}</div>
		</div>
	);
}

export {Story};
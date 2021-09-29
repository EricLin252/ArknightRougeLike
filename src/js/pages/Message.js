import React from 'react';
import {createUseStyles} from 'react-jss';

function Message(props){
	const classes = createUseStyles({
		root: {
			position: "absolute",
			width: "50%",
			height: "50%",
			top: "25%",
			left: "25%",
			backgroundColor: "whitesmoke",
			borderRadius: "15px",
			fontSize: "2vw",
			color: "rgb(54, 57, 64)",
			textAlign: "center",
			zIndex: 19
		},
		before: {
			display: "inline-block",
			width: "0%",
			height: "100%",
			verticalAlign: "middle"
		},
		content: {
			display: "inline-block",
			width: "95%",
			margin: "auto",
			padding: "20px",
			verticalAlign: "middle"
		},
		comfirm: {
			minWidth: "15%",
			margin: "0% 20px",
			borderRadius: "5px",
			backgroundColor: "cornflowerblue",
			cursor: "pointer",
			fontSize: "2vw"
		},
		cancel: {
			display: theme => theme.enableCancel? "inline-block" : "none",
			minWidth: "15%",
			margin: "0% 20px",
			borderRadius: "5px",
			backgroundColor: "gray",
			cursor: "pointer",
			fontSize: "2vw"
		},
		blocker: {
			position: "fixed",
			top: "0%",
			left: "0%",
			width: "100vw",
			height: "100vh",
			backgroundColor: "rgba(0, 0, 0, 0.6)",
			zIndex: 18
		}
	})(props);

	const generateContent = () => {
		let output = [];
		let text = props.content.split("$");
		text.forEach(seg => {
			if(output.length !== 0) output.push(<br/>);
			output.push(seg);
		});
		return output;
	}

	return(props.show && <>
		<div className={classes.root}>
			<div className={classes.before}></div>
			<div className={classes.content}>
				{generateContent()}<br/>
				<br/>
				<button className={classes.comfirm} onClick={props.response}>
					確定
				</button><button className={classes.cancel} onClick={props.cancel}>
					取消
				</button>
			</div>
		</div>
		<div className={classes.blocker}></div>
	</>);
}

export {Message};
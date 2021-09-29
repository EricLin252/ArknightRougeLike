import React from 'react';
import {createUseStyles} from 'react-jss';

function Fight(props){
	const generateMapidx = content => {
		if(content[0][0] === "X") return content[0];
		else return content[0].slice(1);
	}

	const classes = createUseStyles({
		root: {
			position: "relative",
			top: "2%",
			width: "100%",
			height: "98%",
			overflow: "hidden",
			backgroundSize: "100% 100%",
			backgroundImage: 
				theme => "linear-gradient(right, rgba(245, 245, 245, 0.8), transparent), url(/img/map/sign" + generateMapidx(theme.content) + ".png)"
		},
		map: {
			position: "relative",
			display: "inline-block",
			width: "70%",
			height: "100%",
			backgroundSize: "80% auto",
			backgroundImage: theme => "url(/img/map/map" + generateMapidx(theme.content) + ".png)",
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
			left: "0%",
			width: "70%",
			transform: "translate(0%, -50%)",
			fontSize: "2.5vw",
			color: "rgb(54, 57, 64)",
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
			fontSize: "2.5vw",
			color: "rgb(54, 57, 64)",
			background: "linear-gradient(left, rgb(0, 115, 255), transparent)",
			textAlign: "right",
			"& span": {
				fontSize: "3vw",
				fontWeight: "bold"
			}
		},
		leftRect: {
			position: "absolute",
			top: "50%",
			left: "10%",
			width: "10vw",
			height: "10vw",
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
			left: "70%",
			width: "10vw",
			height: "10vw",
			backgroundColor: "darkblue",
			zIndex: 2,
			transform: "translate(-50%, -50%) rotate(0.125turn)",
			boxShadow: "10px 10px 10px black",
			border: "solid whitesmoke 1px"
		},
		level: {
			position: "absolute",
			top: "50%",
			left: "70%",
			transform: "translate(-50%, -50%)",
			zIndex: 3,
			fontSize: "8vw",
			color: "white",
			fontWeight: "bolder",
			height: "8vw",
			lineHeight: "7vw",
			filter: "drop-shadow(5px 5px 5px gray)"
		},
		upload: {
			position: "absolute",
			top: "50%",
			left: "0%",
			width: "20%",
			backgroundImage: "url(/img/icon/upload.png)",
			zIndex: 3,
			transform: "translate(0%, -50%)",
			filter: "drop-shadow(5px 5px 5px gray)",
			pointerEvents: "none"
		}
	})(props);

	return(props.show &&
		<div className={classes.root}>
			<div className={classes.map}></div>
			<div className={classes.infor}>
				<div className={classes.block}>
					<div className={classes.restrict}>
						<span>作戰目標</span><br/>
						危機等級
					</div>
					<div className={classes.rightRect}></div>
					<div className={classes.level}>{props.content[1]}</div>
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
		</div>
	);
}

export {Fight};
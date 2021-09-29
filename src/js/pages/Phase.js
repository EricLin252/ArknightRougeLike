import React from 'react';
import {createUseStyles} from 'react-jss';
import d from '../data';

function Phase(props){
	const classes = createUseStyles({
		root: {
			position: "relative",
			width: "100%",
			height: "100%",
			color: "ghostwhite",
			cursor: "pointer"
		},
		content: {
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			textAlign: "center"
		},
		phasename: {
			height: "7vw",
			textShadow: "black 0.1em 0.1em 0.2em",
			fontWeight: "bolder",
			fontSize: "7vw",
			lineHeight: "7vw"
		},
		tips: {
			fontSize: "1.5vw"
		}
	})();

	const generatePhasename = () => {
		const layer = d.getter("state").layer;
		switch(layer){
			case 1:     return "I - 初來乍到";
			case 2:     return "II - 五紫亂華";
			case 3:		return "III - 流星之眾";
			case 4:		return "IV - 化險為姨";
			default:	return "";
		}
	}

	return(props.show &&
		<div className={classes.root} onClick={() => props.response("skip")}>
			<div className={classes.content}>
				<p className={classes.phasename}>{generatePhasename()}</p>
				<span className={classes.tips}>- tap to start -</span>
			</div>
		</div>
	);
}

export {Phase};

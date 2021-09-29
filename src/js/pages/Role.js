import React from 'react';
import {createUseStyles} from 'react-jss';
import {roleList} from '../dict';

function Role(props){
	//role:			角色keyword
	//skill:		技能解放階段
	//selectable:	角色欄位是否可選擇
	//overcost:		角色無法購買
	//width:		欄位寬度
	//clickFunc:	物件點擊執行

	const classes = createUseStyles({
		root: {
			display: "inline-block",
			width: props.width,
			padding: "10px",
			opacity: (props.selectable && props.overcost)? 0.5 : 1,
			color: (props.selectable && props.skill > 1)? "rgb(30, 255, 240)" : "ghostwhite",
			"&:hover": (props.selectable && !props.overcost) && {
				cursor: "pointer",
				backgroundColor: (props.skill > 1)? "rgba(30, 255, 240, 0.7)" : "rgba(211, 211, 211, 0.7)",
				color: "rgb(54, 57, 64)"
			}
		},
		image: {
			width: "100%",
			filter: props.selectable && (props.skill > 1? 
				"drop-shadow(0px 0px 8px rgba(30, 255, 240, 0.7))" : "drop-shadow(0px 0px 5px rgba(211, 211, 211, 0.7))"
			),
			backgroundImage: "url(/img/role/" + props.role + ".png)"
		},
		roleName: {
			display: "inline-block",
			width: "100%",
			textAlign: "center",
			fontSize: "1.2vw",
			filter: "drop-shadow(5px 5px 5px rgb(79, 79, 79))"
		},
		skills: {
			width: "100%",
			textAlign: "center"
		},
		skill1: {
			display: "inline-block",
			width: "28%",
			margin: "0px 2%",
			backgroundImage: "url(/img/skill/" + props.role + "_1.png)"
		},
		skill2: {
			display: roleList[props.role].star > 3? "inline-block" : "none",
			width: "28%",
			margin: "0px 2%",
			backgroundImage: "url(/img/skill/" + props.role + "_2.png)",
			opacity: (props.skill >= 2)? 1: 0.2
		},
		skill3: {
			display: (roleList[props.role].star > 5 || props.role === "Amiya")? "inline-block" : "none",
			width: "28%",
			margin: "0px 2%",
			backgroundImage: "url(/img/skill/" + props.role + "_3.png)",
			opacity: (props.skill >= 3)? 1: 0.2
		}
	})();

	return(
		<div className={classes.root} onClick={props.clickFunc}>
			<div className={classes.image + " square"}></div>
			<div>
				<div className={classes.skills}>
					<div className={classes.skill1 + " square"}></div>
					<div className={classes.skill2 + " square"}></div>
					<div className={classes.skill3 + " square"}></div>
				</div>
				<div className={classes.roleName}>{roleList[props.role].rolename}</div>
			</div>
		</div>
	);
}

export {Role};
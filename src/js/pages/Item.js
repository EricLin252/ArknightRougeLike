import React from 'react';
import {createUseStyles} from 'react-jss';
import {itemList} from '../dict';

function Item(props){
	//item:			道具keyword
	//cost:			道具現時售價
	//state:		道具狀態，exhibit: 純展示 / sold: 已使用/已售出 / overcost: 無法購買 / new: 未收集
	//selected:		道具是否已選擇
	//width:		欄位寬度
	//clickFunc:	物件點擊執行

	const classes = createUseStyles({
		root: {
			display: "inline-block",
			position: "relative",
			width: props.width,
			margin: "0% 2%",
			padding: "10px",
			cursor: "pointer",
			background: theme => theme.selected && "linear-gradient(bottom, rgba(245, 245, 245, 0.653), transparent)",
			opacity: theme => theme.state === "sold"? 0.5 : 1,
			"&:hover": {
				backgroundColor: "rgba(211, 211, 211, 0.7)"
			}
		},
		image: {
			width: "100%",
			backgroundImage: "url(/img/item/" + props.item + ".png)"
		},
		name: {
			display: "inline-block",
			textAlign: "center",
			width: "100%",
			fontSize: "1.2vw",
			color: theme => theme.state === "overcost"? "red" : (theme.state === "new"? "gold" : "ghostwhite"),
			filter: theme => theme.selected? "drop-shadow(2px 2px 2px rgb(54, 57, 64))" : ""
		},
		cost: {
			display: theme => theme.state === "exhibit"? "none" : "block",
			width: "60%",
			margin: "auto",
			color: theme => theme.state === "overcost"? "red" : "rgb(22, 255, 181)",
			backgroundImage: "url(/img/icon/coin.png)",
			backgroundPosition: "center left",
			backgroundSize: "auto 100%",
			textAlign: "center",
			fontSize: "1.7vw",
			filter: theme => theme.selected? "drop-shadow(2px 2px 2px rgb(54, 57, 64))" : ""
		}
	})(props);

	return(
		<div className={classes.root} onClick={props.state === "sold"? null : props.clickFunc}>
			<div className={classes.image + " square"}></div>
			<div>
				<div className={classes.name}>{itemList[props.item].itemname}</div>
				<div className={classes.cost}>{props.cost}</div>
			</div>
		</div>
	);
}

export {Item};
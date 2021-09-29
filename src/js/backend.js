import d from './data';
import {clone} from './functions';
import {initializeApp} from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase, ref, set, update, onValue} from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDCeesRxSXGWPhpC04IrFGiKMs2Rf71O6I",
	authDomain: "arknightrougelike-e47c0.firebaseapp.com",
	projectId: "arknightrougelike-e47c0",
	storageBucket: "arknightrougelike-e47c0.appspot.com",
	messagingSenderId: "521678388783",
	appId: "1:521678388783:web:479e32ecad1f2e412150da",
	measurementId: "G-TE0S6DVNBT"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const login = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password)
	.catch((err) => {
		console.log(err.code + ": " + err.message);
		if(err.code === "auth/invalid-email") window.alert("email格式錯誤");
		else if(err.code === "auth/user-not-found") window.alert("你還沒創建帳號喔！");
		else if(err.code === "auth/wrong-password") window.alert("密碼錯誤");
		else if(err.code === "auth/network-request-failed") window.alert("網路錯誤");
		else window.alert("登入或是創建帳號時資料發生錯誤，請聯絡管理員");
	});
}

const logout = () => {
	return signOut(auth)
	.catch((err) => {
		console.log(err.code + ": " + err.message);
		window.alert("出現問題，請聯絡管理員");
	});
}

const makeAccount = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password)
	.catch((err) => {
		console.log(err.code + ": " + err.message);
		if(err.code === "auth/email-already-in-use") window.alert("email已經被使用過了，請改用其他email");
		else if(err.code === "auth/invalid-email") window.alert("email格式錯誤");
		else if(err.code === "auth/weak-password") window.alert("密碼強度太弱了，建議換其他密碼喔！");
		else window.alert("創建帳號時資料發生錯誤，請聯絡管理員");
	});
}

const credit = (code, nickname) => {
	const user = auth.currentUser;
	if(user) return push("users/" + user.uid + "/credit", code)
		.then(() => push("users/" + user.uid + "/identifier", nickname));
	else return new Promise((resolve, reject) => {console.log("no user"); reject();});
}

const get = path => {
	return new Promise((resolve, reject) => {
		onValue(
			ref(db, path),
			result => {
				if(result.exists()) resolve(result.val());
				else resolve(null);
			},
			error => reject(error),
			{onlyOnce: true}
		);
	});
}

const push = (path, data) => {
	return new Promise((resolve, reject) => {
		set(ref(db, path), data)
		.then(() => resolve())
		.catch(err => reject(err));
	});
}

const send = (data, fightID = "", photoID = "") => {
	const updates = {};
	const user = auth.currentUser;
	Object.keys(data).forEach(d => {
		if(d === "backup"){
			if(fightID === "") return new Promise((resolve, reject) => reject("Send backup without fightID"));
			updates["users/" + user.uid + "/backup/fight/" + fightID] = clone(data[d], {});
		}
		else if(d === "photo"){
			if(photoID === "") return new Promise((resolve, reject) => reject("Send photo without photoID"));
			updates["users/" + user.uid + "/backup/photo/" + photoID] = clone(data[d], {});
		}
		else if(d === "identifier") updates["users/" + user.uid + "/identifier"] = data[d];
		else updates["users/" + user.uid + "/fetch/" + d] = clone(data[d], {});
	});

	return update(ref(db), updates);
}

export {auth, db, login, logout, makeAccount, credit, get, push, send};
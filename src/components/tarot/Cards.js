import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardInfo from "./CardInfo";
import cardInfo from "../../store/cardUrl.json";

import "../../scss/tarot/Card.scss";
import "../../scss/font.css";

function Card({ number, onClick, arrow }) {
	return <div className="card" onClick={onClick} style={{ "--bg": `url(${cardInfo[number].img})` }} />;
}

function Cards() {
	const [cardNum, setCardNum] = useState(0);

	const [check, setCheck] = useState([]);
	const [arrow, setArrow] = useState([]);

	useEffect(() => {
		let set = new Set();
		while (set.size !== 5) {
			let index = parseInt(Math.random() * 22) + 1;
			set.add(index);
		}
		let arr = Array.from(set);
		setCheck(arr);
	}, []);

	useEffect(() => {
		let arr = [];
		for (let i = 0; i < 5; i++) {
			arr.push(parseInt(Math.random() + 0.7));
		}
		setArrow(arr);
	}, []);

	return (
		<>
			<div className="CardContainer">
				<div className="cards">
					{(() => {
						let a = [];
						for (let i of check.values()) {
							a.push(<Card key={i} number={i} onClick={() => setCardNum(i)} />);
						}
						return a;
					})()}
				</div>
				<CardInfo
					number={cardNum}
					onClick={() => setCardNum(0)}
					arrow={arrow[check.indexOf(cardNum)] === 0 ? false : true}
				/>
			</div>
		</>
	);
}

export default Cards;

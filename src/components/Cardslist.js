import React from "react";
import Card from "./Card";

function CardList({ reborts }) {
	const cardsArray = reborts.map((user, i) => {
		return <Card key={i} id={reborts[i].id} name={reborts[i].name} username={reborts[i].username} email={reborts[i].email} />;
	});

	return <div>{cardsArray}</div>;
}

export default CardList;

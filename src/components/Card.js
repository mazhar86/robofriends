import React from "react";

function Card(props) {
	const { name, email, id } = props;
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}?set=set1&size=150x150`} alt="img" />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;

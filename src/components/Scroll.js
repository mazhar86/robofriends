import React from "react";

function Scroll(props) {
	return <div style={{ overflowY: "scroll", height: "300px" }}>{props.children}</div>;
}

export default Scroll;

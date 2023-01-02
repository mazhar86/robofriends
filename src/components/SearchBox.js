import React from "react";

function SearchBox({ searchchange }) {
	return (
		<div className="pa2">
			<input onChange={searchchange} className="pa3 customInput ba b--green bg-lightest-blue" type="search" placeholder="Search robots" />
		</div>
	);
}

export default SearchBox;

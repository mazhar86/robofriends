import React, { Component } from "react";
import CardList from "../components/Cardslist";
// import { reborts } from "./robots";
import SearchBox from "../components/SearchBox";
import "../containers/App";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
	constructor() {
		super();
		this.state = {
			roborts: [],
			searchfield: "",
		};
	}
	onSearchChange = (e) => {
		this.setState({ searchfield: e.target.value });
	};
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
			return response.json().then((user) => {
				this.setState({ roborts: user });
			});
		});
	}
	render() {
		const filterRobots = this.state.roborts.filter((rebotname) => {
			return rebotname.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox searchchange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList reborts={filterRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;

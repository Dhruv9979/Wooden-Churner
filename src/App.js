import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";

const OilsPage = () => (
	<div>
		<h1>Oils Page</h1>
	</div>
);

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={ HomePage } />
				<Route path="/shop/oils" component = { OilsPage } />
			</Switch>
		</div>
	);
}

export default App;

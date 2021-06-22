import React from "react";
import "./assets/css/App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EpisodePage from "./pages/EpisodePage";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/episode:id" component={EpisodePage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

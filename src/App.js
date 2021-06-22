import React from "react";
import "./assets/css/App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EpisodePage from "./pages/EpisodePage";
import PlayerProvider from "./context/PlayerContext";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<PlayerProvider>
						<Route path="/" exact component={Home} />
						<Route path="/episode:id" component={EpisodePage} />
					</PlayerProvider>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

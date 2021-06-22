import React from "react";
import Episodes from "../components/Episodes";
import PodcastHeader from "../components/PodcastHeader";

const Home = () => {
	return (
		<div className="container-episodesList">
			<PodcastHeader />
			<Episodes />
		</div>
	);
};

export default Home;

import React from "react";
import EpisodesList from "../components/EpisodesList/EpisodesList";
import PodcastHeader from "../components/PodcastHeader";

const Home = () => {
	return (
		<>
			<PodcastHeader />
			<EpisodesList />
		</>
	);
};

export default Home;

import React, { useEffect, useState } from "react";
import { getPodcastDetails } from "../../api/PodLogicAPI";
import "../../assets/css/responsive.css";
import "../../assets/css/Episodes.css";
import EpisodesList from "./EpisodesList";
import PodcastAbout from "./PodcastAbout";

const Episodes = () => {
	const [podcastInfo, setPodcastInfo] = useState([]);

	useEffect(() => {
		const loadAll = async () => {
			const podcastDetails = await getPodcastDetails();
			setPodcastInfo(podcastDetails);
		};
		loadAll();
	}, []);

	return (
		<main className="episodes-container">
			<PodcastAbout aboutInfo={podcastInfo} />
			<EpisodesList episodesInfo={podcastInfo} />
		</main>
	);
};

export default Episodes;

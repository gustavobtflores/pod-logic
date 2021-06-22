import React, { useEffect, useState } from "react";
import { getPodcastDetails } from "../../api/PodLogicAPI";
import "../../assets/css/PodcastHeader.css";

const PodcastHeader = () => {
	const [podcastInfo, setPodcastInfo] = useState([]);

	useEffect(() => {
		const loadAll = async () => {
			let podcastDetails = await getPodcastDetails();
			setPodcastInfo(podcastDetails);
		};
		loadAll();
	}, []);

	const homeCover = { background: `url(${podcastInfo.cover}) center/cover` };

	return (
		<header className="homepage-banner" style={homeCover}>
			<div className="header-container">
				<h1 className="header-title">{podcastInfo.name}</h1>
				<h2 className="header-description">{podcastInfo.episodes && `${podcastInfo.episodes.length} episódios`}</h2>
			</div>
		</header>
	);
};

export default PodcastHeader;

import React, { useEffect, useState } from "react";
import { basicFetch } from "../podLogicAPI";
import "./style.css";

function PodcastHeader() {
	const [details, setDetails] = useState([]);

	useEffect(() => {
		const loadAll = async () => {
			let podcastDetails = await basicFetch(`/podcast/details.json`);
			setDetails(podcastDetails);
		};
		loadAll();
	}, []);

	return (
		<header className="homepage-banner" style={{ background: `url(${details.cover}) center/cover` }}>
			<div className="header-box">
				<h2 className="header-title">{details.name}</h2>
				<h3 className="header-title">{details.episodes.length + " episódios"}</h3>
			</div>
		</header>
	);
}

export default PodcastHeader;

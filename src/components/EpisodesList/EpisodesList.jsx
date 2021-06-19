import React, { useEffect, useState } from "react";
import getPodcastDetails from "../../api/FetchAPI";
import "../../assets/css/responsive.css";
import "./EpisodeList.css";
import readMoreIcon from "../../assets/img/read-more-icon.svg";

const EpisodesList = () => {
	const [podcastInfo, setPodcastInfo] = useState([]);
	const [readMore, setReadMore] = useState(true);

	useEffect(() => {
		const loadAll = async () => {
			let podcastDetails = await getPodcastDetails();
			setPodcastInfo(podcastDetails);
		};
		loadAll();
	}, []);

	const ReadMore = () => {
		const description = document.querySelector(".podcast-about-description");
		setReadMore(!readMore);
		if (readMore) {
			description.classList.remove("hidden");
		} else {
			description.classList.add("hidden");
		}
	};

	return (
		<main className="episodes-section">
			<section className="podcast-about">
				<h3 className="section-title about-title">Sobre o Podcast</h3>
				<p className="podcast-about-description hidden">{podcastInfo.description}</p>
				<span className="read-more-btn" onClick={ReadMore}>
					{readMore ? "Ler mais" : "Ler menos"}
					{<img src={readMoreIcon} className={readMore ? "read-more-icon icon" : "read-less-icon icon"} alt=""></img>}
				</span>
			</section>
			<h3 className="section-title episodes-title">Lista de episódios</h3>
			<ol className="episodes-list">
				{podcastInfo.episodes &&
					podcastInfo.episodes.map((episode, key) => {
						return (
							<li className="episode-item" key={key}>
								<img className="episode-image" src={episode.cover} alt={`Imagem do episódio + ${episode.id}`} key={key}></img>
								<div className="episode-title">
									<span>{`Episódio ${episode.episodeNumber} - ${episode.name}`}</span>
									<span className="episode-duration">{`${parseInt(episode.duration / 60)} : ${episode.duration % 60}`}</span>
								</div>
							</li>
						);
					})}
			</ol>
		</main>
	);
};

export default EpisodesList;

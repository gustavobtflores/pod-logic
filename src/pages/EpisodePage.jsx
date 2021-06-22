import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getEpisodeInfo } from "../api/PodLogicAPI";
import EpisodePlayerController from "../components/EpisodePage/EpisodePlayerController";
import "../assets/css/EpisodePage.css";
import EpisodeDescription from "../components/EpisodePage/EpisodeDescription";

const EpisodePage = () => {
	const [episodeInfo, setEpisodeInfo] = useState({
		id: "",
		name: "",
		description: "",
		duration: "",
		participants: [],
		episodeNumber: "",
	});
	const history = useHistory();
	const backgroundEpisode = {
		background: `url(${episodeInfo.cover}) center/cover`,
	};
	const episode = useParams();

	useEffect(() => {
		const loadAll = async () => {
			const episodeDetails = await getEpisodeInfo(episode.id);
			setEpisodeInfo(episodeDetails);
		};
		loadAll();
	}, [episode.id]);

	return (
		<div className="episodePage-container">
			<div className="episode-details-container">
				<header className="episode-banner" style={backgroundEpisode}>
					<button
						title="Botão de fechar"
						className="close-btn"
						onClick={() => {
							history.push("/");
						}}
					/>
				</header>
				<img
					src={episodeInfo.cover}
					alt="Capa do episódio"
					className="episode-cover-image"
				></img>
				<section className="episode-information">
					<div className="description-container">
						<h2>{`Episódio ${episodeInfo.episodeNumber} - ${episodeInfo.name}`}</h2>
						<EpisodeDescription episodeInfo={episodeInfo} />
					</div>
					<span className="episode-participants">{`Participantes: ${episodeInfo.participants.join(
						", "
					)}`}</span>
				</section>
			</div>
			<EpisodePlayerController AudioURL={episodeInfo.audio} />
		</div>
	);
};

export default EpisodePage;

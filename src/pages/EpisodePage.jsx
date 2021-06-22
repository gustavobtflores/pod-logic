import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getEpisodeInfo } from "../api/PodLogicAPI";
import EpisodePlayerController from "../components/EpisodePage/EpisodePlayerController";
import "../assets/css/EpisodePage.css";
import EpisodeDescription from "../components/EpisodePage/EpisodeDescription";
import closeBtnDesktop from "../assets/img/close-btn-desktop.svg";
import { usePlayer } from "../context/PlayerContext";
import PlayerProvider from "../context/PlayerContext";

const EpisodePage = () => {
	const [episodeInfo, setEpisodeInfo] = useState({
		id: "",
		name: "",
		description: "",
		participants: [],
		episodeNumber: "",
	});
	const history = useHistory();
	const backgroundEpisode = {
		background: `url(${episodeInfo.cover}) center/cover`,
	};
	const episode = useParams();
	const { setIsPlaying } = usePlayer(false);

	useEffect(() => {
		const loadAll = async () => {
			const episodeDetails = await getEpisodeInfo(episode.id);
			setEpisodeInfo(episodeDetails);
		};
		loadAll();
	}, [episode.id]);

	const backHome = async () => {
		await setIsPlaying(false);
		history.push("/");
	};

	return (
		<PlayerProvider>
			<div className="episodePage-container">
				<div className="episode-details-container">
					<header className="episode-banner" style={backgroundEpisode}>
						<button
							title="Botão de fechar"
							className="close-btn"
							onClick={backHome}
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
					<button
						className="close-btn-desktop btn"
						onClick={() => {
							history.push("/");
						}}
					>
						<img src={closeBtnDesktop} alt="" />
					</button>
				</div>
				<EpisodePlayerController
					AudioURL={episodeInfo.audio}
					episodeInfo={episodeInfo}
				/>
			</div>
		</PlayerProvider>
	);
};

export default EpisodePage;

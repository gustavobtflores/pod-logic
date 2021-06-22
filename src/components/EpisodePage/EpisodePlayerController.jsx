import React, { useEffect, useState } from "react";
import PlayBtn from "../../assets/img/play-btn.svg";
import PauseBtn from "../../assets/img/pause-btn.svg";
import SkipPrevious from "../../assets/img/skipPrevious-btn.svg";
import SkipNext from "../../assets/img/skipNext-btn.svg";
import "../../assets/css/EpisodePlayerController.css";
import { EpisodesList } from "../../api/PodLogicAPI";
import { useParams, useHistory } from "react-router-dom";

const EpisodePlayerController = ({ AudioURL }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [episodesList, setEpisodesList] = useState([]);
	const episode = useParams();
	let history = useHistory();
	var nextPage = "";
	var previousPage = "";

	useEffect(() => {
		const getEpisodesList = async () => {
			const info = await EpisodesList();
			setEpisodesList(info);
		};
		getEpisodesList();
	}, []);

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	const SkipBackEpisode = () => {
		for (let i = 0; i < episodesList.length; i++) {
			if (episodesList[i].id === parseInt(episode.id)) {
				if (episodesList[i + 1]) nextPage = episodesList[i + 1].id;
				if (episodesList[i - 1]) previousPage = episodesList[i - 1].id;
			}
		}
	};

	SkipBackEpisode();

	return (
		<div className="episode-player">
			{AudioURL && <audio src={AudioURL} />}
			<div className="episode-player-slider">
				<span>0:00</span>
				<input type="range" className="progress-bar" />
				<span>2:45</span>
			</div>
			<div className="episode-player-controllers">
				<button
					className="skip-previous btn"
					onClick={() => {
						previousPage && history.push(`/episode${previousPage}`);
					}}
				>
					<img src={SkipPrevious} alt="Botão de voltar"></img>
				</button>
				<button className="play-pause btn" onClick={togglePlayPause}>
					{isPlaying ? (
						<img src={PauseBtn} alt="Botão de pause"></img>
					) : (
						<img src={PlayBtn} alt="Botão de play"></img>
					)}
				</button>
				<button
					className="skip-next btn"
					onClick={() => {
						nextPage && history.push(`/episode${nextPage}`);
					}}
				>
					<img src={SkipNext} alt="Botão de avançar"></img>
				</button>
			</div>
		</div>
	);
};

export default EpisodePlayerController;

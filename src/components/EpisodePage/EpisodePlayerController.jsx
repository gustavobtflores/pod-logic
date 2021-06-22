import React, { useState } from "react";
import PlayBtn from "../../assets/img/play-btn.svg";
import PauseBtn from "../../assets/img/pause-btn.svg";
import SkipPrevious from "../../assets/img/skipPrevious-btn.svg";
import SkipNext from "../../assets/img/skipNext-btn.svg";
import "../../assets/css/EpisodePlayerController.css";

const EpisodePlayerController = ({ AudioURL }) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="episode-player">
			{AudioURL && <audio src={AudioURL} />}
			<div className="episode-player-slider">
				<span>0:00</span>
				<input type="range" className="progress-bar" />
				<span>2:45</span>
			</div>
			<div className="episode-player-controllers">
				<button className="skip-previous btn">
					<img src={SkipPrevious} alt="Botão de voltar"></img>
				</button>
				<button className="play-pause btn" onClick={togglePlayPause}>
					{isPlaying ? (
						<img src={PauseBtn} alt="Botão de pause"></img>
					) : (
						<img src={PlayBtn} alt="Botão de play"></img>
					)}
				</button>
				<button className="skip-next btn">
					<img src={SkipNext} alt="Botão de avançar"></img>
				</button>
			</div>
		</div>
	);
};

export default EpisodePlayerController;

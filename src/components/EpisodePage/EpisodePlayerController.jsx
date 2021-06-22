import React, { useEffect, useState, useRef } from "react";
import PlayBtn from "../../assets/img/play-btn.svg";
import PauseBtn from "../../assets/img/pause-btn.svg";
import SkipPrevious from "../../assets/img/skipPrevious-btn.svg";
import SkipNext from "../../assets/img/skipNext-btn.svg";
import "../../assets/css/EpisodePlayerController.css";
import { EpisodesList } from "../../api/PodLogicAPI";
import { useParams, useHistory } from "react-router-dom";
import { usePlayer } from "../../context/PlayerContext";
import PlayerProvider from "../../context/PlayerContext";

const EpisodePlayerController = ({ AudioURL, episodeInfo }) => {
	//states
	const [episodesList, setEpisodesList] = useState([]);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const { isPlaying, setIsPlaying } = usePlayer(false);

	//variables
	const episode = useParams();
	let history = useHistory();
	var nextPage = "";
	var previousPage = "";

	//references
	const audioPlayer = useRef();
	const progressBar = useRef();
	const animationRef = useRef();

	useEffect(() => {
		const seconds = Math.floor(audioPlayer.current.duration);
		setDuration(seconds);
		progressBar.current.max = seconds;
	}, [
		audioPlayer?.current?.loadedmetadata,
		audioPlayer?.current?.readyState,
		episode,
	]);

	const convertTime = (secs) => {
		const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${returnedMinutes}:${returnedSeconds}`;
	};

	useEffect(() => {
		const getEpisodesList = async () => {
			const info = await EpisodesList();
			setEpisodesList(info);
		};
		getEpisodesList();
	}, []);

	const togglePlayPause = () => {
		const prevValue = isPlaying;
		setIsPlaying(!prevValue);
		if (!prevValue) {
			audioPlayer.current.play();
			animationRef.current = requestAnimationFrame(whilePlaying);
		} else {
			audioPlayer.current.pause();
			cancelAnimationFrame(animationRef.current);
		}
	};

	const whilePlaying = () => {
		if (audioPlayer.current) {
			progressBar.current.value = audioPlayer.current.currentTime;
			changePlayerCurrentTime();
			animationRef.current = requestAnimationFrame(whilePlaying);
		}
	};

	const changeRange = () => {
		audioPlayer.current.currentTime = progressBar.current.value;
		changePlayerCurrentTime();
	};

	const changePlayerCurrentTime = () => {
		progressBar.current.style.setProperty(
			"--seek-before-width",
			`${(progressBar.current.value / duration) * 100}%`
		);
		setCurrentTime(progressBar.current.value);
	};

	//Set navigate between episodes pages
	const SkipBackEpisode = () => {
		for (let i = 0; i < episodesList.length; i++) {
			if (episodesList[i].id === parseInt(episode.id)) {
				if (episodesList[i + 1]) nextPage = episodesList[i + 1].id;
				if (episodesList[i - 1]) previousPage = episodesList[i - 1].id;
			}
		}
	};

	SkipBackEpisode();

	const PreviousPage = () => {
		if (previousPage) {
			setIsPlaying(false);
			history.push(`/episode${previousPage}`);
		}
	};

	const NextPage = () => {
		if (nextPage) {
			setIsPlaying(false);
			history.push(`/episode${nextPage}`);
		}
	};

	return (
		<PlayerProvider>
			<div className="episode-player">
				<audio src={AudioURL} ref={audioPlayer} />
				<div className="episode-player-slider">
					<span className="time-track">{convertTime(currentTime)}</span>
					<input
						type="range"
						className="progress-bar"
						defaultValue="0"
						ref={progressBar}
						onChange={changeRange}
					/>
					<span className="time-track">
						{duration
							? convertTime(duration)
							: convertTime(episodeInfo.duration)}
					</span>
				</div>
				<div className="episode-player-controllers">
					<button className="skip-previous btn" onClick={PreviousPage}>
						<img src={SkipPrevious} alt="Botão de voltar"></img>
					</button>
					<button className="play-pause btn" onClick={togglePlayPause}>
						{isPlaying ? (
							<img src={PauseBtn} alt="Botão de pause"></img>
						) : (
							<img src={PlayBtn} alt="Botão de play"></img>
						)}
					</button>
					<button className="skip-next btn" onClick={NextPage}>
						<img src={SkipNext} alt="Botão de avançar"></img>
					</button>
				</div>
			</div>
		</PlayerProvider>
	);
};

export default EpisodePlayerController;

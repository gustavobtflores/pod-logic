import React from "react";
import { Link } from "react-router-dom";

const EpisodesList = ({ episodesInfo }) => {
	return (
		<section className="episodes-section">
			<h3 className="section-title episodes-title">Lista de episódios</h3>
			<ol className="episodes-list">
				{episodesInfo.episodes &&
					episodesInfo.episodes.map((episode) => {
						return (
							<Link to={`/episode${episode.id}`} key={episode.id}>
								<li className="episode-item">
									<img className="episode-image" src={episode.cover} alt={`Capa do episódio ${episode.episodeNumber}`}></img>
									<div className="episode-title">
										<p>{`Episódio ${episode.episodeNumber} - ${episode.name}`}</p>
										<span className="episode-duration">{`${parseInt(episode.duration / 60)} : ${episode.duration % 60}`}</span>
									</div>
								</li>
							</Link>
						);
					})}
			</ol>
		</section>
	);
};

export default EpisodesList;

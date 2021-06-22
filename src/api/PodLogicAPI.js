const API_BASE = "https://api-frontend-test.brlogic.com";

export const basicFetch = async (endpoint) => {
	const req = await fetch(`${API_BASE}${endpoint}`);
	const data = await req.json();
	return data;
};

export const getPodcastDetails = async () => {
	const podcastDetails = await basicFetch(`/podcast/details.json`);
	return podcastDetails;
};

export const getEpisodeInfo = async (id) => {
	const episodeInfo = await basicFetch(`/podcast/episodes/${id}/details.json`);
	return episodeInfo;
};

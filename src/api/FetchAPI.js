const API_BASE = "https://api-frontend-test.brlogic.com";

export const basicFetch = async (endpoint) => {
	const req = await fetch(`${API_BASE}${endpoint}`);
	const data = await req.json();
	return data;
};

const getPodcastDetails = async () => {
	const podcastDetails = await basicFetch(`/podcast/details.json`);
	return podcastDetails;
};

export default getPodcastDetails;

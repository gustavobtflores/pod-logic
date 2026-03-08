import { mockPodcastDetails, getMockEpisodeById } from "./mockData";

// Simulates network delay for realistic behavior
const simulateNetworkDelay = () => new Promise(resolve => setTimeout(resolve, 300));

export const basicFetch = async (endpoint) => {
	await simulateNetworkDelay();
	
	// Mock implementation - returns mock data based on endpoint
	if (endpoint === "/podcast/details.json") {
		return mockPodcastDetails;
	}
	
	// Handle episode-specific endpoints like /podcast/episodes/{id}/details.json
	const episodeMatch = endpoint.match(/\/podcast\/episodes\/(\d+)\/details\.json/);
	if (episodeMatch) {
		const episodeId = episodeMatch[1];
		const episode = getMockEpisodeById(episodeId);
		if (episode) {
			return episode;
		}
		throw new Error(`Episode ${episodeId} not found`);
	}
	
	throw new Error(`Unknown endpoint: ${endpoint}`);
};

export const getPodcastDetails = async () => {
	await simulateNetworkDelay();
	return mockPodcastDetails;
};

export const getEpisodeInfo = async (id) => {
	await simulateNetworkDelay();
	const episode = getMockEpisodeById(id);
	if (!episode) {
		throw new Error(`Episode ${id} not found`);
	}
	return episode;
};

export const EpisodesList = async () => {
	await simulateNetworkDelay();
	return mockPodcastDetails.episodes;
};

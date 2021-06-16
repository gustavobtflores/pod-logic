const API_BASE = "https://api-frontend-test.brlogic.com";

export const basicFetch = async (endpoint) => {
	const req = await fetch(`${API_BASE}${endpoint}`);
	const data = await req.json();
	return data;
};

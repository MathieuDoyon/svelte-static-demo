import * as api from '$lib/api.js';

const getIDFromUrl = (charURL) => {
	const regex = /\/starships\/(\d+)\//;
	const test = charURL.match(regex);
	return test[1];
};

export async function get() {
	const starships = await api.get(`starships`);

	return {
		body: {
			...starships,
			results: starships.results.map((starship) => ({
				...starship,
				id: +getIDFromUrl(starship.url)
			}))
		}
	};
}

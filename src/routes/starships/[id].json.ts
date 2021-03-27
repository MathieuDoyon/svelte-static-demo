import * as api from '$lib/api.js';

export async function get({ params }) {
	const starship = await api.get(`starships/${params.id}`);

	if (starship) {
		return {
			body: starship
		};
	}

	return {
		status: 404
	};
}

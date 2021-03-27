<script context="module">
	export const prerender = true;

	export async function load({ page, fetch }) {
		const res = await fetch(`/starships/${page.params.id}.json`);

		return {
			props: {
				starship: await res.json()
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	export let starship;

	const forceHttps = (url) => url.replace('http:', 'https:');

	const fetchSWApi = (url) => fetch(forceHttps(url)).then((response) => response.json());

	// Load films list on client only
	let filmsPromise;
	onMount(async () => {
		filmsPromise = Promise.all((starship?.films || []).map(fetchSWApi)).then((films) => films);
	});

	//     {
	//     "MGLT": "10 MGLT",
	//     "cargo_capacity": "1000000000000",
	//     "consumables": "3 years",
	//     "cost_in_credits": "1000000000000",
	//     "created": "2014-12-10T16:36:50.509000Z",
	//     "crew": "342953",
	//     "edited": "2014-12-10T16:36:50.509000Z",
	//     "hyperdrive_rating": "4.0",
	//     "length": "120000",
	//     "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
	//     "max_atmosphering_speed": "n/a",
	//     "model": "DS-1 Orbital Battle Station",
	//     "name": "Death Star",
	//     "passengers": "843342",
	//     "films": [
	//         "https://swapi.dev/api/films/1/"
	//     ],
	//     "pilots": [],
	//     "starship_class": "Deep Space Mobile Battlestation",
	//     "url": "https://swapi.dev/api/starships/9/"
	// }
</script>

<svelte:head>
	<title>{starship.name}</title>
</svelte:head>

<h1>{starship.name}</h1>
<div class="starship">
	<div class="feature">
		<div>MGLT :</div>
		<div>{starship.MGLT}</div>
	</div>
	<div class="feature">
		<div>manufacturer :</div>
		<div>{starship.manufacturer}</div>
	</div>
	<div class="feature">
		<div>model :</div>
		<div>{starship.model}</div>
	</div>
	<div class="feature">
		<div>starship_class :</div>
		<div>{starship.starship_class}</div>
	</div>
</div>

<div class="film-list">
	<h2>Films list <span>(fetch on client only for demo)</span></h2>
	<!-- This section is call on client only -->
	{#await filmsPromise}
		<!-- promise is pending -->
		<p>waiting for the films to resolve...</p>
	{:then films}
		<!-- promise was fulfilled -->
		{#each films || [] as film}
			<div class="film">
				<div class="feature">
					<div>Episode :</div>
					<div>{film.episode_id}</div>
				</div>
				<div class="feature">
					<div>Title :</div>
					<div>{film.title}</div>
				</div>
				<div class="feature">
					<div>Director :</div>
					<div>{film.director}</div>
				</div>
				<div class="feature">
					<div>Producer :</div>
					<div>{film.producer}</div>
				</div>
				<div class="feature opening-crawl">
					<div>Opening Crawl :</div>
					<div>{film.opening_crawl}</div>
				</div>
			</div>
		{/each}
	{:catch error}
		<!-- promise was rejected -->
		<p>Something went wrong: {error.message}</p>
	{/await}
</div>

<style>
	h2 span {
		font-style: italic;
		font-weight: 500;
		font-size: 0.5em;
	}
	.starship,
	.film {
		display: grid;
		max-width: 650px;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}

	.film-list {
		padding-top: 1.5em;
	}

	.film {
		padding: 0.5em 0;
		border-bottom: 1px solid #999;
	}

	.feature > div:nth-child(1) {
		color: var(--fg-light);
	}

	.feature > div:nth-child(2) {
		color: var(--fg);
		font-weight: 600;
	}

	.opening-crawl {
		grid-column-start: 1;
		grid-column-end: 3;
	}

	.opening-crawl > div:nth-child(2) {
		font-size: 0.8rem;
		font-weight: 500;
	}
</style>

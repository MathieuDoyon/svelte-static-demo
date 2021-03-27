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
	export let starship;

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

<style>
	h1 {
		color: rgb(0, 0, 0);
	}

	.starship {
		display: grid;
		max-width: 650px;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}

	.feature > div:nth-child(1) {
		color: rgb(128, 128, 128);
	}

	.feature > div:nth-child(2) {
		color: rgb(0, 0, 0);
		font-weight: 600;
	}
</style>

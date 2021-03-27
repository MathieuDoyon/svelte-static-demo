<script context="module">
	export async function load({ fetch }) {
		const starships = await fetch(`/starships.json`).then((response) => response.json());

		return {
			props: { starships }
		};
	}
</script>

<script>
	export let starships;
</script>

<svelte:head>
	<title>Starships</title>
</svelte:head>

<ul>
	{#each starships.results as starship}
		<li><a sveltekit:prefetch href="/starships/{starship.id}">{starship.name}</a></li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;
	}

	a {
		display: block;
		padding: 0.5em 0;
		border-bottom: 1px solid #999;
	}
</style>

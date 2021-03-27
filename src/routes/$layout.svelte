<script context="module">
	export const prerender = true;
</script>

<script>
	import './_global.css';

	import { page, navigating } from '$app/stores';

	import Nav from '$lib/Nav.svelte';
	import PreloadingIndicator from '$lib/PreloadingIndicator.svelte';

	$: path = $page.path;
</script>

<Nav {path} />

{#if $navigating}
	<PreloadingIndicator />
{/if}

<main>
	<slot />
</main>

<style>
	:root {
		font-family: sans-serif;
	}

	main {
		max-width: 40em;
		margin: 0 auto;
	}
</style>

<script context="module">
	export const prerender = true;
</script>

<script>
	import { page, navigating } from '$app/stores';

	import Nav from '$lib/Nav.svelte';
	import PreloadingIndicator from '$lib/PreloadingIndicator.svelte';
	import ThemeToggler from '$lib/ThemeToggler.svelte';

	$: path = $page.path;
</script>

{#if $navigating}
	<PreloadingIndicator />
{/if}

<Nav {path} />

<main>
	<ThemeToggler />
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

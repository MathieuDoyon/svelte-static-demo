<script context="module">
	export const prerender = true;
</script>

<script>
	import Logo from '$lib/Logo.svelte';
</script>

<svelte:head>
	<title>Star Wars</title>
</svelte:head>

<div class="center">
	<Logo />
</div>

<style>
	.center {
		display: flex;
		width: 100%;
		height: 100%;
		min-height: 40em;
		align-items: center;
		justify-content: center;
	}

	img {
		width: 200px;
	}
</style>

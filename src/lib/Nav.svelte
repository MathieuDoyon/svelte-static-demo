<script>
	export let path;

	console.log('path', path);
</script>

<nav>
	<a href="/" sveltekit:prefetch class:active={path === '/'}>home</a>
	<a href="/starships" sveltekit:prefetch class:active={path.startsWith('/starships')}>starships</a>
</nav>

<style>
	nav {
		border-bottom: 1px solid var(--fg);
		padding: 1em 0;
		margin: 0 0 1em 0;
		display: flex;
		justify-content: center;
	}

	nav::after {
		content: '';
		display: table;
		clear: both;
	}

	a {
		display: block;
		float: left;
		color: var(--fg-light);
		margin: 0 1em 0 0;
		text-decoration: none;
	}

	a + a::before {
		content: '•';
		color: var(--fg-light);
		margin: 0 1em 0 0;
	}

	a:hover,
	a:focus,
	.active {
		color: var(--fg);
	}
</style>

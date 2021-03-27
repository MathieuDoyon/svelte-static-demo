<script>
	export let path;

	console.log('path', path);
</script>

<nav>
	<a href="/" sveltekit:prefetch class:active={path === '/'}>home</a>
	<a href="/starships" sveltekit:prefetch class:active={path === '/starships'}>starships</a>
</nav>

<style>
	nav {
		border-bottom: 1px solid black;
		padding: 0 0 1em 0;
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
		color: rgba(0, 0, 0, 1);
		margin: 0 1em 0 0;
		text-decoration: none;
		color: rgba(0, 0, 0, 0.6);
	}

	a + a::before {
		content: '•';
		color: rgba(0, 0, 0, 0.4);
		margin: 0 1em 0 0;
	}

	a:hover,
	a:focus,
	.active {
		color: rgba(0, 0, 0, 1);
	}
</style>

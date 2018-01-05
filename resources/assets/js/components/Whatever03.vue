<template>
	<div>
		<div class="container">
			<header>
				<slot name="header"></slot>
			</header>
			<main>
				<slot></slot>
			</main>
			<footer>
				<slot name="footer"></slot>
			</footer>
		</div>
	</div>

</template>

<script>Vue.config.devtools = true;</script>
<script>
	export default {}
</script>
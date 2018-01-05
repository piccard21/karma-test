<template>
	<div>
		<div>String: {{ message }}</div>
		<div>bound: {{ passmedown }}</div>
		<div>passmultiple: {{ passmultiple.aaa }} / {{ passmultiple.bbb }}</div>
	</div>
</template>

<script>
	export default {
		// declare the props
		props: [
			'message',
			'passmedown',
			'passmultiple',
		],
		data() {
			return {}
		}
	}
</script>
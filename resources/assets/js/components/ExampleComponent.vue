<template>
    <span><h1>{{ message }}</h1></span>
</template>
<script>
	export default {
		data () {
			return {
				message: 'hello!'
			}
		},
		created () {
			this.message = 'bye!'
		},
		mounted() {
			this.message = 'bye, bye!'
		}
	}
</script>
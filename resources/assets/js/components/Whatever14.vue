<template>
	<div>
		<p>{{ total }}</p>
		<btn-counter v-on:increment="incrementTotal"></btn-counter>
		<btn-counter v-on:increment="incrementTotal"></btn-counter>
	</div>
</template>

<script>
	import BtnCounter from './Whatever15.vue'

	export default {
		components: {
			BtnCounter
		},
		data() {
			return {
				total: 0
			}
		},
		methods: {
			incrementTotal: function () {
				this.total += 1
			}
		}
	}
</script>
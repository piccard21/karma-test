<template>
	<div>
		<div class="alert" :class="type" v-show="isVisible">
			This is a danger alert—check it out!
			<button type="button" class="close delete-me" @click="hideAlert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			'typeClass': {
				type: String,   // inArray
				default: 'info'
			}
		},
		data() {
			return {
				isVisible: true
			}
		},
		methods: {
			hideAlert() {
				this.isVisible = false;
			}
		},
		computed: {
			type() {
				return 'alert-' + this.typeClass
			}
		},
	}
</script>

<style>
	.close {
		cursor: pointer;
	}
</style>
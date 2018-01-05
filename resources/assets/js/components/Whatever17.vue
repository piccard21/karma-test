<template>
	<div class="alert alert-warning" v-show="isApplied">
		applied!!!
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isApplied: false
			}
		},
		methods: {
			onCouponApplied() {
				console.info("applied!!!");
				Event.fire('applied');
			}
		},
		created() {
//			Event.$on('applied', () => console.info('Handling it ... '));
			Event.listen('applied', () => {
				console.info('applied ... ');
				this.isApplied = true;
			});
		}
	}

</script>
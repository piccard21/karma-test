<template>
	<div class="container">
		<div>
			<input placeholder="Enter code" @blur="onCouponApplied">
		</div>

		<h1 v-if="couponApplied">You use a coupon!</h1>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				couponApplied: true
			}
		},
		methods: {
			onCouponApplied() {
				console.info("Handling it ... ");
				Event.fire('applied');
			}
		}

	}
</script>
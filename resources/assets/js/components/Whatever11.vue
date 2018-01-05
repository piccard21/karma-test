<template>
	<div>
		<div>String: {{ propA }}</div>
		<div>Array: {{ propB }}</div>
		<div>string or number: {{ propC }}</div>
		<div>required: {{ propD }}</div>
		<div>default: {{ propE }}</div>
		<div>object: {{ propF }}</div>
		<div>val-function: {{ propG }}</div>
	</div>
</template>

<script>



	export default {
		props: {
			propA: String,
			propB: Array,
			// multiple possible types
			propC: [String, Number],
			// a required string
			propD: {
				type: String,
				required: true
			},
			// a number with default value
			propE: {
				type: Number,
				default: 100
			},
			// object/array defaults should be returned from a
			// factory function
			propF: {
				type: Object,
				default: function () {
					return { message: 'hello' }
				}
			},
			// custom validator function
			propG: {
				validator: function (value) {
					return value > 10
				}
			}
		},
		data() {
			return {}
		}
	}
</script>
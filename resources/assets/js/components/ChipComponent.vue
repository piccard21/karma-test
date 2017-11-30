<template>
	<button type="button" class="btn btn-sm chip" :class="'btn-'+type">
		{{ value }} <span class="badge badge-light" @click="deleteChip">x</span>
	</button>
</template>

<script>

	export default {
		props: {
			value: {
				type: String,
				default: ""
			},
			type: {
				type: String,
				default: "info"
			}
		},
		methods: {
			deleteChip() {
				this.$emit("delete");
			}

		},
		data() {
			return {};
		},
		computed: {},
		mounted() {
		}
	}

</script>


<style>

</style>

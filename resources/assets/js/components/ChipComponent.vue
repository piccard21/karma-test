<template>
	<button type="button" class="btn btn-sm chip" :class="'btn-'+type">
		<span class="chip-value">{{ value }} </span>
		<span class="badge badge-light chip-delete" @click="deleteChip">x</span>
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

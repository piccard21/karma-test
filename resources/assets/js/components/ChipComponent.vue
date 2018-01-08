<template>
	<button
			type="button"
			class="btn btn-sm chip-single"
			:class="'btn-'+chipType">
		<span class="">{{chipValue}}</span>
		<span class="badge badge-light" @click="deleteChip">x</span>
	</button>
</template>

<script>

	export default {
		props: {
			chipType: {
				type: String,
				default: "warning",
				validator: function (type) {
					let types = ["danger", "warning", "info", "success"];
					return types.includes(type);
				}
			},
			chipValue: {
				type: String,
				required: true
			}

		},
		methods: {
			deleteChip() {
				this.$emit("chip-delete");
			}
		},
		data() {
			return {};
		}
	}

</script>


<style>
	.chip-single {
		margin: 0 2px;
	}
</style>

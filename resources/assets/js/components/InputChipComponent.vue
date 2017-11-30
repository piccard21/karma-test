<template>
	<div class="chip-wrapper form-control">
		<chip-component v-for="(chip, i) in chips" :type="chipType" :key="chip" :value="chip" @delete="deleteChip(i)"></chip-component>
		<input class="chip-input" type="text" :value="chipValue" @keyup.enter="updateChip($event.target.value)" @keyup.space="updateChip($event.target.value)" ref="inputchip" placeholder="Enter ...">
	</div>
</template>

<script>

	import Chip from './ChipComponent.vue';

	export default {
		components: {
			'chip-component': Chip
		},
		props: {
			chips: {
				type: Array,
				default: function() {
					return []
				}
			},
			chipType: {
				type: String,
				default:"warning"   // pass on to chip-component
//				validator: function (type) {
//					let types = ["danger", "warning", "info", "success"];
//					return types.includes(type);
//				}
			}
		},

		model: {
			prop: "chips",
			event: "change"
		},

		data() {
			return {
				chipValue: "",
			}
		},

		methods: {
			updateChip(chipValue) {
				event.preventDefault();

				chipValue = chipValue.trim();

				// validation
				if (chipValue.length < 1) {
					return;
				}

				this.$emit("chip_add", chipValue);
				this.chips.push(chipValue.trim());
				this.$emit("chip_added", chipValue);
				this.$emit("chips_changed", this.chips);
			},
			deleteChip(chipIndex) {

				let chipInfo = {
					index: chipIndex,
					value: this.chips[chipIndex]
				};

				this.$emit("chip_delete",chipInfo);
				this.chips.splice(chipIndex, 1);
				this.$emit("chip_deleted",chipInfo);
				this.$emit("chips_changed", this.chips);
			}
		},
		computed: {},
		mounted() {
		}
	}
</script>


<style>
	.chip-hint {
		color: #868e96 !important;
	}

	.chip-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.chip {
		margin: 3px;
	}

	.chip-input {
		flex: 1;
		min-width: 210px;
		border: none !important;
		margin-left: 8px;
	}

	.chip-input:focus {
		box-shadow: none !important;
		color: #495057;
		background-color: #fff;
		border-color: #80bdff;
		outline: none;
	}
</style>

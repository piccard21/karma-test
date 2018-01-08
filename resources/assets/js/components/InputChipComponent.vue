<template>
	<div class="chip-wrapper form-control">
		<chip class="" v-for="(chip, i) in chips"
		      :key="i"
		      :chip-type="chipType"
		      :chip-value="chip"
		      @chip-delete="removeChip(i)">{{ chip }}
		</chip>
		<input class="chip-input"
		       type="text"
		       @keyup.enter="addChip($event.target.value)"
		       @keyup.space="addChip($event.target.value)"
		       placeholder="Enter ..."
		       ref="inputchip">
	</div>
</template>


<script>

	import Chip from './ChipComponent.vue';


	export default {
		components: {
			Chip
		},
		props: {
			chipType: {
				type: String,
				default: 'info'
			}
		},
		data() {
			return {
				chips: []
			}
		},
		methods: {
			addChip(chipValue) {
				chipValue = chipValue.trim();

				if (chipValue.length < 1) {
					this.$refs.inputchip.value = "";
					return;
				}

				this.$emit("chip-add", chipValue);
				this.chips.push(chipValue);
				this.$emit("chip-added", chipValue);
				this.$emit("chips-changed", this.chips);

				this.$refs.inputchip.value = "";

			},
			removeChip(chipIndex) {

				let chipInfo = {
					index: chipIndex,
					value: this.chips[chipIndex]
				};

				this.$emit("chip-delete",chipInfo);
				this.chips.splice(chipIndex, 1);
				this.$emit("chip-deleted",chipInfo);
				this.$emit("chips-changed", this.chips);
			}
		}
	}
</script>

<style>
	.chip-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
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
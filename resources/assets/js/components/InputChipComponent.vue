<template>
	<div class="chip-wrapper form-control" ref="chipWrapper">
		<chip class="" v-for="(chip, i) in currentChips"
		      :key="i"
		      :chip-type="chipType"
		      :chip-value="chip"
		      @chip-delete="removeChip(i)">{{ chip }}
		</chip>
		<input class="chip-input"
		       type="text"
		       @keyup.enter="addChip($event.target.value)"
		       @keyup.space="addChip($event.target.value)"
		       :disabled="isInputDisabled"
		       ref="inputchip">

		<input v-for="(chip, i) in currentChips" :key="'input' + chip" type="hidden" :name="name" :value="chip">

	</div>
</template>


<script>

	import Chip from './ChipComponent.vue';


	export default {
		components: {
			Chip
		},
		model: {
			prop: 'chips',
			event: 'chips-changed'
		},
		props: {
			chips: {
				type: Array,
				default: function () {
					return [];
				}
			},
			chipType: {
				type: String,
				default: 'info'
			},
			name: {
				type: String,
				default: 'nsInputChips[]'
			}
		},
		data() {
			return {
				isInputDisabled: false,
				inputFieldPlaceholder: [
					"domain: example.com",
					"ipv4: 123.123.123.123",
					"ipv6: 2001:cdba:0000:0000:0000:0000:3257:9652",
				]
			}
		},
		computed: {
			currentChips: function () {
				return this.chips
			}
		},
		methods: {
			addChip(chipValue) {
				chipValue = chipValue.trim();

				this.$emit("chip-add", chipValue);
				this.currentChips.push(chipValue);
				this.$emit("chip-added", chipValue);
				this.$emit("chips-changed", this.currentChips);

				this.$refs.inputchip.value = "";
				return true;
			},
			removeChip(chipIndex) {
				let chipInfo = {
					index: chipIndex,
					value: this.chips[chipIndex]
				};

				this.$emit("chip-delete", chipInfo);
				this.chips.splice(chipIndex, 1);
				this.$emit("chip-deleted", chipInfo);
				this.$emit("chips-changed", this.currentChips);

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
		background: #fff;
	}

	.chip-input:focus {
		box-shadow: none !important;
		color: #495057;
		background-color: #fff;
		border-color: #80bdff;
		outline: none;
	}
</style>
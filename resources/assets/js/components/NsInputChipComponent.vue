<template>
	<div class="chip-wrapper form-control" ref="chipWrapper">
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
		       :disabled="isInputDisabled"
		       ref="inputchip">

		<input v-for="(chip, i) in chips" :key="'input' + chip" type="hidden" :name="name" :value="chip">

	</div>
</template>


<script>

	import Chip from './ChipComponent.vue';
	import parseDomain from 'parse-domain';
	import ipRegex from 'ip-regex';


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
			now: function () {
				return Date.now()
			}
		},
		methods: {
			addChip(chipValue) {
				chipValue = chipValue.trim();

				if (this.chips.length <= 3 && this.checkChip(chipValue)) {
					this.$emit("chip-add", chipValue);
					this.chips.push(chipValue);
					this.$emit("chip-added", chipValue);
					this.$emit("chips-changed", this.chips);
				}

				this.checkInputField();
				this.$refs.inputchip.value = "";
				return true;
			},
			removeChip(chipIndex) {
				let chipInfo = {
					index: chipIndex,
					value: this.chips[chipIndex]
				};

				this.$emit("chip-delete", chipInfo);
				this.chips.splice(chipIndex);
				this.$emit("chip-deleted", chipInfo);
				this.$emit("chips-changed", this.chips);

				this.checkInputField();
			},
			checkChip(chipValue) {
				let errorMsg = null;

				switch (this.chips.length) {
					case 0:
						// hostname must be valid
						if (!parseDomain(chipValue)) {
							errorMsg = "domain is not valid";
						}
						break;
					case 1:
						// ipv4
						if (!ipRegex({exact: true}).test(chipValue)) {
							errorMsg = "not an IPv4 address";
						}
						break;
					case 2:
						// ipv6: 2001:cdba:0000:0000:0000:0000:3257:9652
						if (!ipRegex.v6({exact: true}).test(chipValue)) {
							errorMsg = "not an IPv6 address";
						}
						break;
					default:
						errorMsg = "don't know index";
				}

				if (errorMsg) {
					this.$emit("chip-error", {
						msg: errorMsg
					});
					return false;
				}
				return true;
			},
			checkInputField() {
				if (this.chips.length >= 3) {
					this.isInputDisabled = true;
					this.$refs.inputchip.placeholder = "";
				}
				else {
					this.isInputDisabled = false;
					this.$refs.inputchip.placeholder = this.inputFieldPlaceholder[this.chips.length];
				}
			}
		},
		// mounted() {
		// 	for (let chip of this.$root.$data.chipsInitial) {
		// 		if (typeof chip === 'string') {
		// 			this.addChip(chip);
		// 		}
		// 	}
		// }
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
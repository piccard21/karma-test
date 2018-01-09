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
	import parseDomain from 'parse-domain';
	import ipRegex from 'ip-regex';


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
		computed: {
			now: function () {
				return Date.now()
			}
		},
		methods: {
			addChip(chipValue) {
				chipValue = chipValue.trim();

				if (chipValue.length < 1 || this.chips.length > 4) {
					this.$refs.inputchip.value = "";
					return;
				}

				if (this.checkChip(chipValue)) {
					this.$emit("chip-add", chipValue);
					this.chips.push(chipValue);
					this.$emit("chip-added", chipValue);
					this.$emit("chips-changed", this.chips);
				}

				this.$refs.inputchip.value = "";

			},
			removeChip(chipIndex) {

				let chipInfo = {
					index: chipIndex,
					value: this.chips[chipIndex]
				};

				this.$emit("chip-delete", chipInfo);
				this.chips.splice(chipIndex, 1);
				this.$emit("chip-deleted", chipInfo);
				this.$emit("chips-changed", this.chips);
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
						// ipv6
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
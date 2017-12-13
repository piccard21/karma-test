<template>
	<div class="chip-wrapper form-control">
		<chip-component v-for="(chip, i) in chips" :type="chipType" :key="chip" :value="chip"
		                @delete="deleteChip(i)"></chip-component>
		<input class="chip-input" type="text" :value="chipValue" @keyup.enter.prevent="addChip($event.target.value)"
		       @keyup.space.prevent="addChip($event.target.value)" ref="inputchip" placeholder="Enter ...">
	</div>
</template>

<script>

	import Chip from './ChipComponent.vue';
	import ipRegex from 'ip-regex';
	import parseDomain from 'parse-domain';

	export default {
		components: {
			'chip-component': Chip
		},
		props: {
			chips: {
				type: Array,
				default: function () {
					return []
				}
			},
			chipType: {
				type: String,
				default: "warning",
				validator: function (type) {
					let types = ["danger", "warning", "info", "success"];
					return types.includes(type);
				}
			}
		},

		model: {
			prop: "chips",
			event: "change"
		},

		data() {
			return {
				chipValue: ""
			}
		},

		methods: {
			addChip(chipValue) {
				chipValue = chipValue.trim();

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

				this.$emit("chip_delete", chipInfo);
				this.chips.splice(chipIndex);
				this.$emit("chip_deleted", chipInfo);
				this.$emit("chips_changed", this.chips);
			}
		},
		computed: {},
		mounted() {
		},
		watch: {
			chips: {
				handler:
					function (chips) {

						// too many chips
						if (chips.length > 3) {
							this.$emit("chip_error", {
								msg: "too many chips"
							});
							return false;
						}

						let breakLoop = false;

						// loop each chip
						for (let i in chips) {

							// chip is empty
							if (chips[i].length < 1) {
								this.$emit("chip_error", {
									msg: "chip is empty"
								});
								return false;
							}

							switch (i) {
								case "0":
									// hostname must be valid
									if (parseDomain(chips[i]) === null) {

										this.$emit("chip_error", {
											msg: "wrong domain"
										});
										chips.splice(i);
										breakLoop = true;
									}
									break;
								case "1":
									// ipv4
									if (!ipRegex({exact: true}).test(chips[i])) {
										this.$emit("chip_error", {
											msg: "not an IPv4 address"
										});
										chips.splice(i);
										breakLoop = true;
									}
									break;
								case "2":
									// ipv6
									if (!ipRegex.v6({exact: true}).test(chips[i])) {
										this.$emit("chip_error", {
											msg: "not an IPv6 address"
										});
										chips.splice(i);
										breakLoop = true;
									}
									break;
							}


							// break loop if sth went wrong
							if (breakLoop) {
								break;
							}
						}

						console.info("chips", chips)
					},
				immediate: true
			}
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

	.chip-single {
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


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
// https://www.npmjs.com/package/parse-domain
window.parseDomain = require('parse-domain');
// https://www.npmjs.com/package/ip-regex
window.ipRegex = require('ip-regex');


import Whatever from './components/Whatever01.vue';
import Sloty from './components/Whatever02.vue';
import AppLayout from './components/Whatever03.vue';
import ScopedSlot from './components/Whatever04.vue';
import TaskList from './components/Whatever06.vue';
import PassDown from './components/Whatever08.vue';
import PropValidation from './components/Whatever10.vue';
import BsAlert from './components/Whatever12.vue';



// empty
new Vue({
	el: "#app",
	components: {
		Whatever,
		Sloty,
		AppLayout,
		ScopedSlot,
		TaskList,
		PassDown,
		PropValidation,
		BsAlert
	},
	methods: {},
	computed: {},
	created() {	},
	mounted() {}
})


//
//
// // ------------------------------------------------------------------
// // ---------------------INPUT-CHIPS -------------------------------
// // ------------------------------------------------------------------
//
// import InputChip from './components/InputChipComponent.vue';
//
//
//
// // empty
// new Vue({
// 	el: "#input-chip-component-empty",
// 	components: {
// 		InputChip
// 	},
// 	methods: {},
// 	computed: {},
//
// 	created() {
// 		console.info("created")
// 	},
// 	mounted() {
// 		console.info("mounted")
// 	}
// })
//
//
//
//
//
//
// // color
// new Vue({
// 	el: "#input-chip-component-color",
// 	// template: '#chip-test-template',
// 	components: {
// 		InputChip
// 	},
// 	data: {
// 		initialChips: ["hallo", "out", "there"]
// 	},
// 	methods: {
// 		test_chip_callback(args) {
// 			console.info('test_chip_callback', args);
// 		}
// 	},
// 	computed: {},
// 	created() {
// 		console.info("created")
// 	},
// 	mounted() {
// 		console.info("mounted")
// 	}
// })
//
//
//
//
// // ------------------------------------------------------------------
// // ---------------------NS-INPUT-CHIPS -------------------------------
// // ------------------------------------------------------------------
//
// import NsInputChip from './components/NsInputChip.vue';
//
//
//
// // empty
// new Vue({
// 	el: "#ns-input-chip-component-empty",
// 	components: {
// 		NsInputChip
// 	},
// 	methods: {},
// 	computed: {},
//
// 	created() {
// 		console.info("created")
// 	},
// 	mounted() {
// 		console.info("mounted")
// 	}
// })
//
//
//
//
//
//
// // color
// new Vue({
// 	el: "#ns-input-chip-component-color",
// 	// template: '#chip-test-template',
// 	components: {
// 		NsInputChip
// 	},
// 	data: {
// 		initialChips: ["hallo", "out", "there"]
// 	},
// 	methods: {
// 		test_chip_callback(args) {
// 			console.info('test_chip_callback', args);
// 		}
// 	},
// 	computed: {},
// 	created() {
// 		console.info("created")
// 	},
// 	mounted() {
// 		console.info("mounted")
// 	}
// })
//

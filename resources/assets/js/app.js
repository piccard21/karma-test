
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


// ------------------------------------------------------------------
// ---------------------EXAMPLE -------------------------------
// ------------------------------------------------------------------


// Vue.component('example-component', require('./components/ExampleComponent.vue'));
//
// const app = new Vue({
//     el: '#example-component'
// });




// ------------------------------------------------------------------
// ---------------------CHIPS -------------------------------
// ------------------------------------------------------------------

import NsInputChip from './components/NsInputChip.vue';



// empty
new Vue({
	el: "#input-chip-component-empty",
	components: {
		NsInputChip
	},
	methods: {},
	computed: {},

	created() {
		console.info("created")
	},
	mounted() {
		console.info("mounted")
	}
})






// color
let vm1 = new Vue({
	el: "#input-chip-component-color",
	// template: '#chip-test-template',
	components: {
		NsInputChip
	},
	data: {
		initialChips: ["hallo", "out", "there"]
	},
	methods: {
		test_chip_callback(args) {
			console.info('test_chip_callback', args);
		}
	},
	computed: {},
	created() {
		console.info("created")
	},
	mounted() {
		console.info("mounted")
	}
})





// initial values
// new Vue({
// 	el: "#input-chip-component-initial-values",
// 	components: {
// 		InputChip
// 	},
//
// 	data: {
// 		initialChips: ["hallo", "out", "there"]
// 	},
//
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

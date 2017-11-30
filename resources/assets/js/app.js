
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


// ------------------------------------------------------------------
// ---------------------EXAMPLE -------------------------------
// ------------------------------------------------------------------


Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#example-component'
});




// ------------------------------------------------------------------
// ---------------------CHIPS -------------------------------
// ------------------------------------------------------------------

import InputChip from './components/InputChipComponent.vue';

new Vue({
	el: "#input-chip-component-empty",
	components: {
		InputChip
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






new Vue({
	el: "#input-chip-component-color",
	// template: '#chip-test-template',
	components: {
		InputChip
	},

	data: {
		whatever: ["hallo", "out", "there"]
	},

	methods: {
		test_chip_added(args) {
			console.info('test_chip_added', args);
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

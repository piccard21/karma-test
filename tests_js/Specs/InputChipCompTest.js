import Vue from 'vue'
import InputChip from '../../resources/assets/js/components/InputChipComponent.vue'

describe('InputChip initial', () => {

	beforeEach(() => {
		this.vm = new Vue(InputChip);
		this.vm.$mount();
	});

	afterEach(() => {
		this.vm.$destroy();
	});


	it("karma is running", function() {
		expect(true).toBe(true);
	});

	it('instance mounts correctly', () => {
		expect(this.vm.$el).toEqual(jasmine.any(Element));
	});
});

describe('InputChip props', () => {

	beforeEach(() => {
		this.vm = new Vue(InputChip);
		this.vm.$mount();
	});

	afterEach(() => {
		this.vm.$destroy();
	});




	// Mount an instance and inspect the render output (created)
	it('props' , () => {
		// build component
		const Constructor = Vue.extend(InputChip)
		let vm = new Constructor({
			propsData: {
				"chip-type": "danger"
			}
		}).$mount();


		// set value of new item
		vm.
	})
});
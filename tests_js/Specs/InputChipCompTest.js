import Vue from 'vue'
import InputChip from '../../resources/assets/js/components/InputChipComponent.vue'

describe('InputChip', () => {

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

	// it('loads and extends models correctly', done => {
	// 	this.vm.$_dataModel_load({});
	// 	// watch (extend value!) is executed in next tick!
	// 	this.vm.$nextTick(() => {
	// 		expect(this.vm.value.hasOwnProperty('name')).toBeTruthy();
	// 		done();
	// 	});
	// });
	//
	// it('decoupled instance loads correctly', () => {
	// 	expect(this.vm).not.toEqual(jasmine.any(Vue));
	// });
	//
	// describe('InputChip:Instance', () => {
	//
	// 	beforeEach(() => {
	// 		this.vm.$mount();
	// 	});
	//
	// 	it('instance mounts correctly', () => {
	// 		expect(this.vm.$el).toEqual(jasmine.any(Element));
	// 	});
	//
	// 	it('loads and extends models correctly', done => {
	// 		this.vm.$_dataModel_load({});
	// 		// watch (extend value!) is executed in next tick!
	// 		this.vm.$nextTick(() => {
	// 			expect(this.vm.value.hasOwnProperty('name')).toBeTruthy();
	// 			done();
	// 		});
	// 	});
	// });
});
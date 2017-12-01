import Vue from 'vue'
import InputChip from '../../resources/assets/js/components/InputChipComponent.vue'


function getCustomInstance(Component, propsData) {
	const C = Vue.extend(Component)
	return new C({ propsData: propsData }).$mount()
}


describe('InputChip initial', () => {

	beforeEach(() => {
		this.vm = new Vue(InputChip);
		this.vm.$mount();
	});

	afterEach(() => {
		this.vm.$destroy();
	});

	it('instance mounts correctly', () => {
		expect(this.vm.$el).toEqual(jasmine.any(Element));
	});

	// data
	it('instance\'s default chipValue is empty', () => {
		expect(typeof InputChip.data).toBe('function');
		const defaultData = InputChip.data();
		expect(defaultData.chipValue).toBe("");
	});

	// props
	it('check default props', () => {
		const defaultProps = this.vm.$props;
		expect(defaultProps.chipType).toBe('warning');
		expect(Array.isArray(defaultProps.chips)).toBeTruthy();
		expect(defaultProps.chips.length).toBe(0);
	})
});


describe('InputChip modify', () => {
	afterEach(() => {
		this.vm.$destroy();
	});

	it('set prop: chipType', () => {
		this.vm = getCustomInstance(InputChip, {
			chipType: 'danger'
		});

		expect(this.vm.$props.chipType).toBe('danger');
	})

	it('set prop: chips', () => {
		this.vm = getCustomInstance(InputChip, {
			chips: ['abc', 'def']
		});

		expect(this.vm.$props.chips.length).toBe(2);
		expect(this.vm.$props.chips.indexOf('def') > -1).toBeTruthy();
	})

	it('delete from props: chips', () => {
		this.vm = getCustomInstance(InputChip, {
			chips: ['abc', 'def']
		});

		this.vm.chips.pop();
		expect(this.vm.$props.chips.length).toBe(1);
	});

	it('chipType sets correct default-class', () => {
		this.vm = getCustomInstance(InputChip, {
			chips: ['abc']
		});

		expect(this.vm.$el.querySelector('.btn-warning')).not.toBeNull();

		this.vm.chips.pop();

		// wait a "tick" after state change before asserting DOM updates
		Vue.nextTick(() => {
			expect(this.vm.$el.querySelector('.btn-warning')).not.toBeNull();
			done()
		})
	});


	it('chipType sets correct class', () => {
		this.vm = getCustomInstance(InputChip, {
			chips: ['abc'],
			chipType: 'info'
		});

		expect(this.vm.$el.querySelector('.btn-info')).not.toBeNull();

		this.vm.chips.pop();

		// wait a "tick" after state change before asserting DOM updates
		Vue.nextTick(() => {
			expect(this.vm.$el.querySelector('.btn-info')).not.toBeNull();
			done()
		})
	})

	// it('chipType sets correct class', () => {
	// 	this.vm = getCustomInstance(InputChip, {
	// 		chipType: 'danger',
	// 		chips: ['abc']
	// 	});
	//
	// 	expect(this.vm.$el.querySelector('.btn-danger')).not.toBeNull();
	//
	// 	this.vm.chips.pop();
	// 	expect(this.vm.$el.querySelector('.btn-danger')).toBeNull();
	//
	// })
});
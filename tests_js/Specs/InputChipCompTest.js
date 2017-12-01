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


describe('InputChip props', () => {
	afterEach(() => {
		this.vm.$destroy();
	});

	it('set custom prop: chipType', () => {
		this.vm = getCustomInstance(InputChip, {
			chipType: 'danger'
		});

		expect(this.vm.$props.chipType).toBe('danger');
	})

	it('set custom prop: chips', () => {
		this.vm = getCustomInstance(InputChip, {
			chips: ['abc', 'def']
		});

		expect(this.vm.$props.chips.length).toBe(2);
		expect(this.vm.$props.chips.indexOf('def') > -1).toBeTruthy();
	})

	it('delete from prop: chips', () => {
		this.vm = getCustomInstance(InputChip, {
			chips: ['abc', 'def']
		});

		this.vm.chips.pop();
		expect(this.vm.$props.chips.length).toBe(1);
	});
});
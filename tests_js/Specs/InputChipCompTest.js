import Vue from 'vue'
import InputChip from '../../resources/assets/js/components/InputChipComponent.vue'


function getCustomInstance(Component, propsData) {
	const C = Vue.extend(Component)
	return new C({propsData: propsData}).$mount()
}

function keyboardEvent(eventType, init) {
	try {
		return new KeyboardEvent(eventType, init);
	} catch (error) {
		const modKeys = [
			init.ctrlKey ? 'Control' : '',
			init.shiftKey ? 'Shift' : '',
			init.altKey ? 'Alt' : '',
			init.altGrKey ? 'AltGr' : '',
			init.metaKey ? 'Meta' : '',
		].join(' ');
		const keyEvent = document.createEvent('KeyboardEvent');
		keyEvent.initKeyboardEvent(
			eventType,
			false,
			false,
			window,
			init.char || '',
			init.keyCode || 0,
			modKeys,
			init.repeat || false,
		);
		keyEvent.key = init.key;

		return keyEvent;
	}
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

	it('chipType sets correct default-class', done => {
		this.vm = getCustomInstance(InputChip, {
			chips: ['abc']
		});

		expect(this.vm.$el.querySelector('.btn-warning')).not.toBeNull();
		this.vm.chips.pop();


		// wait a "tick" after state change before asserting DOM updates
		Vue.nextTick(() => {
			expect(this.vm.$el.querySelector('.btn-warning')).toBeNull();
			done()
		})
	});


	it('chipType sets correct custom class',  done  => {
		this.vm = getCustomInstance(InputChip, {
			chips: ['abc'],
			chipType: 'info'
		});

		expect(this.vm.$el.querySelector('.btn-info')).not.toBeNull();
		this.vm.chips.pop();

		// wait a "tick" after state change before asserting DOM updates
		Vue.nextTick(() => {
			expect(this.vm.$el.querySelector('.btn-info')).toBeNull();
			done()
		})
	});

	it('trigger delete-event', done => {
		this.vm = getCustomInstance(InputChip, {
			chips: ['abc'],
			chipType: 'info'
		});

		// find button
		const delButton = this.vm.$el.querySelector('.chip-delete');

		// simulate click event
		const clickEvent = new window.Event('click');
		delButton.dispatchEvent(clickEvent);

		Vue.nextTick(() => {
			expect(this.vm.$el.querySelector('.chip')).toBeNull();
			done()
		})
	});


	// TODO: Cannot trigger keyboard-event in Chrome & PhantomJS


	// it('trigger add-event', done => {
	// 	this.vm = getCustomInstance(InputChip, {
	// 		chipType: 'info'
	// 	});
	//
	// 	let keyEvent;
	//
	// 	// try {
	// 	// 	console.info("----TRY");
	// 	// 	// Chrome, Safari, Firefox
	// 	// 	keyEvent = new KeyboardEvent('keyup');
	// 	// } catch (e) {
	// 	// 	console.info("----CATCH");
	// 	// 	// PhantomJS (wait!)
	// 	// 	keyEvent = document.createEvent('KeyboardEvent');
	// 	// 	keyEvent.initEvent('keyup', true, false);
	// 	// }
	// 	// keyEvent.keyCode = 13;
	//
	// 	// if (window._phantom) {
	// 	// 	keyEvent = document.createEvent('KeyboardEvent');
	// 	// 	keyEvent.initEvent('keyup', true, false);
	// 	// } else {
	// 	// 	// Chrome, Safari, Firefox
	// 	// 	keyEvent = new KeyboardEvent('keyup');
	// 	// }
	// 	// keyEvent.keyCode = 13;
	//
	// 	const chipInputField = this.vm.$el.querySelector('.chip-input');
	// 	chipInputField.value = 'whatever';
	// 	chipInputField.dispatchEvent(keyEvent);
	//
	//
	// 	Vue.nextTick(() => {
	// 		expect(this.vm.$el.querySelector('.chip-value').textContent).toBe('whatever')
	// 		done()
	// 	})
	// });
});
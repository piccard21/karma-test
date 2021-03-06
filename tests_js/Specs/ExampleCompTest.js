// Import Vue and the component being tested
import Vue from 'vue'
import ExampleComponent from '../../resources/assets/js/components/ExampleComponent.vue'
// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('ExampleComponent', () => {

	// Inspect the raw component options
	it('has a created hook', () => {
		expect(typeof ExampleComponent.created).toBe('function')
	})
	it('has a mounted hook', () => {
		expect(typeof ExampleComponent.mounted).toBe('function')
	})

	// Evaluate the results of functions in
	// the raw component options
	it('sets the correct default data', () => {
		expect(typeof ExampleComponent.data).toBe('function')
		const defaultData = ExampleComponent.data()
		expect(defaultData.message).toBe('hello!')
	})

	// Inspect the component instance on mount
	it('correctly sets the message when >mounted<', () => {
		const vm = new Vue(ExampleComponent).$mount()
		expect(vm.message).toBe('bye, bye!')
	})

	// Mount an instance and inspect the render output (created)
	it('renders the correct message when >created<' , () => {
		const Ctor = Vue.extend(ExampleComponent)
		const vm = new Ctor().$mount()
		expect(vm.$el.textContent).toBe('bye!')
	})
})
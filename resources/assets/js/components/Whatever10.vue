<template>
	<child :propA="aString" :propB="anArray" :propC="aNumber" :propD="aString" :propE="aNumber" :propF="anObject"
	       :propG="anotherNumber"></child>
</template>

<script>
	import Child from './Whatever11.vue';

	export default {
		components: {
			Child
		},
		data() {
			return {
				aString: 'Whatever it is ...',
				anArray: [1, 2, 3, 4, 5],
				aNumber: 21,
				anObject: {a: 1},
				anotherNumber: 121
			}
		}
	}
</script>
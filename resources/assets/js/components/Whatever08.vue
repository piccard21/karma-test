<template>
	<child message="hello!" :passmedown="whatever" :passmultiple="multipleBind" :valme="validateMe"></child>
</template>

<script>
	import Child from './Whatever09.vue';

	export default {
		components: {
			Child
		},
		data() {
			return {
				whatever: 'Whatever it is ...',
				multipleBind:  {
					aaa: 'aaa1',
					bbb: 'bbb2',
					ccc: 'ccc3',
				},
				validateMe: 'Should be a string',
			}
		}
	}
</script>
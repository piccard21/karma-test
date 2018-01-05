<template>
	<ul class="list-group">
		<task v-for="task in tasks" :key="task.id">{{ task.description }}</task>
	</ul>
</template>


<script>
	import Task from './Whatever07.vue';

	export default {
		components: {
			Task
		},
		data() {
			return {
				tasks: [
					{
						id: 1,
						description: 'Goto the store',
						completed: true
					},
					{
						id: 2,
						description: 'Goto the cinema',
						completed: false
					},
					{
						id: 3,
						description: 'Goto the grocery',
						completed: false
					}
				]
			}
		}
	}
</script>
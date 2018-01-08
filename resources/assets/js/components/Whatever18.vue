<template>
	<ul>
		<li class="list-group-item" v-for="skill in skills">{{ skill }}</li>
	</ul>
</template>


<script>
	export default {
		data() {
			return {
				skills: []
			};
		},
		created() {
			axios.get('/skills').then(response => this.skills= response.data);

		}
	}
</script>
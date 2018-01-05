<template>
	<div>
		<form>
			<!--model-->
			<h5>:model</h5>
			<div class="form-group">
				<!--Mustaches cannot be used inside HTML attributes. Instead, use a v-bind directive-->
				<input type="text" class="form-control" id="testinger" :placeholder="testinger" v-model="message">
			</div>

			<ul class="list-group">
				<li class="list-group-item list-group-item-success">{{message}}</li>
			</ul>

			<hr>

			<!--v:for-->
			<h5>v:for</h5>
			<ul class="list-group">
				<li v-for="name in names" class="list-group-item">{{name}}</li>
			</ul>

			<div class="form-group">
				<input id="new-name" type="text" v-model="newName">

				<button class="btn" @click.prevent="addName" :title="title">Add Name</button>
				<button class="btn" @click.prevent="popName" v-text="btnText"></button>
				<button class="btn" @click.prevent="toggleClass" :class="{ 'btn-danger': isDanger }">Toggle Class
				</button>
			</div>

			<hr>

			<!--computed properties in v:for-->
			<h5>computed properties in v:for</h5>
			<h6>incomplete task</h6>
			<ul class="list-group">
				<li v-for="(task ,index) in incompleteTasks" class="list-group-item list-group-item-info">{{++index}}: {{task.description}}
				</li>
			</ul>
	</form>

	</div>
</template>

<script>Vue.config.devtools = true;</script>
<script>
	export default {
		data() {
			return {
				testinger: 'Test Inger',
				message: 'message',
				names: ['hans', 'berta', 'marc', 'alex'],
				newName: "",
				btnText: "Pop Name",
				isDanger: false,
				tasks: [
					{
						description: 'Goto the store',
						completed: false
					},
					{
						description: 'Goto the cinema',
						completed: false
					},
					{
						description: 'Goto the grocery',
						completed: true
					},
					{
						description: 'Goto the school',
						completed: true
					},
				],
				completeTasks: 1
			}
		},
		methods: {
			addName() {
				this.names.push(this.newName);
				this.newName = "";
			},
			popName() {
				this.names.pop();
			},
			toggleClass() {
				this.isDanger = !this.isDanger;
			}
		},
		computed: {
			title() {
				return new Date().getFullYear();
			},
			incompleteTasks() {
				return this.tasks.filter(task => !task.completed)
			}
		},
		created() {
			this.message = 'message bye!'
		},
		mounted() {
			this.message = 'message bye, bye!'
		}
	}
</script>
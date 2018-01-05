<template>
	<div>
		<child-component>
			<p slot-scope="defaultSlotScope">
				{{defaultSlotScope.text}}
				<!-- Renders <p>I'll get rendered inside the default slot.</p> -->
			</p>
			<p slot="literally-the-best" slot-scope="bestSlotScope">
				{{bestSlotScope.text}}
				<!-- Renders <p>I'll get rendered inside the *best* slot.</p> -->
			</p>
		</child-component>
	</div>
</template>

<script>
	import ChildComponent from './Whatever05.vue';

	export default {
		components: {
			ChildComponent
		}
	}
</script>
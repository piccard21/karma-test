<template>
	<div>
		<p>Look, there's a slot below me!</p>
		<slot :text="defaultSlotText"></slot>
		<slot name="literally-the-best" :text="namedSlotText"></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				defaultSlotText: "I'll get rendered inside the default slot.",
				namedSlotText: "I'll get rendered inside the *best* slot."
			}
		}
	}
</script>
<template>
	<div id="exampleAccordion" data-children=".item">
		<div class="item">
			<a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion1" role="button"
			   aria-expanded="true" aria-controls="exampleAccordion1">
				Tabs Example
			</a>
			<div id="exampleAccordion1" class="collapse" role="tabpanel">
				<p class="mb-3">

					<a href="https://laracasts.com/series/learn-vue-2-step-by-step/episodes/11" target="_blank">please see example
						Nr.11 </a>

				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>
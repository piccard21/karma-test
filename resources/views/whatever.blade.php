<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
	<meta charset="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>

	<link rel="stylesheet" href="{{ asset('css/app.css') }}"/>
	<title>whatever</title>

	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css"/>

	<!-- Styles -->
	<style>
	</style>
</head>
<body>


{{--WHATEVER--}}
<div class="container" style="margin-top: 1rem;">
	<div id="app">
		{{--basics--}}
		<h3>Basics</h3>
		<whatever></whatever>

		<hr>

		{{--slots--}}
		<h3>Single Slot</h3>
		<ul class="list-group">
			<sloty>Goto the store</sloty>
			<sloty>Goto the school</sloty>
			<sloty></sloty>
			<sloty>Goto the cinema</sloty>
		</ul>

		<hr>

		<h3>Named Slot</h3>
		<app-layout>
			<h5 slot="header">Here might be a page title</h5>

			<p>A paragraph for the main content.</p>
			<p>And another one.</p>

			<p slot="footer">Here's some contact <strong>info</strong></p>
		</app-layout>

		<hr>

		{{-- see: https://alligator.io/vuejs/scoped-component-slots/--}}
		<h3>Scoped Slot</h3>
		<scoped-slot></scoped-slot>
		TODO: check list-example in doc

		<hr>

		{{--components within components--}}
		<h3>Components within Components</h3>
		<task-list></task-list>

		<hr>

		<h3>Pass down data</h3>
		<pass-down></pass-down>
		
		<hr>

		<h3>Validate passed down data</h3>
		<prop-validation></prop-validation>

		<hr>

		<h3>BS-Component</h3>
		<bs-alert type-class="danger"></bs-alert>
		<hr>
		<tabs-ex></tabs-ex>
		<hr>

		{{--Events--}}
		<h3>Events</h3>
		<button-counter></button-counter>
		<hr>
		<h3>Shared Instance</h3>
		<share-an-instance></share-an-instance>
		<share-another-instance></share-another-instance>

		<hr>

		{{--Ajax--}}
		<h3>Ajax</h3>
		<ajax></ajax>

		<hr>
		<hr>
		<hr>
		<hr>
		<hr>
		<p>
			model - bind wie in
			inputChip
			examples doc: https://vuejs.org/v2/guide/components.html#One-Way-Data-Flow
		</p>

	</div>
</div>


<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>

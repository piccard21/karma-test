<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
	<meta charset="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>

	<link rel="stylesheet" href="{{ asset('css/app.css') }}"/>
	<title>Karma</title>

	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css"/>

	<!-- Styles -->
	<style>
	</style>
</head>
<body>


<div class="container" style="margin-top: 2rem;">

	{{--example-component--}}
	<div id="example-component">
		<example-component></example-component>
	</div>

	<hr>


	{{--input-chip-component: EMPTY--}}
	<div class="form-group">
		<label for="input-chip-component-empty" style="display: block">Input-Chip: empty</label>
		<div id="input-chip-component-empty">
			<input-chip></input-chip>
		</div>
		<small id="" class="chip-hint">Lorem ipsum dolor set amed</small>
	</div>

	<hr>


	{{--input-chip-component: COLOR--}}
	<div class="form-group">
		<label for="input-chip-component-color" style="display: block">Input-Chip: color</label>
		<div id="input-chip-component-color">
			<input-chip v-model="initialChips" chip-type="info" @chip_added="test_chip_added"></input-chip>
		</div>
		<small id="" class="chip-hint">Lorem ipsum dolor set amed</small>
	</div>


	{{--input-chip-component: INITIAL-VALUES--}}
	{{--<div class="form-group">--}}
		{{--<label for="input-chip-component-initial-values" style="display: block">Input-Chip: color</label>--}}
		{{--<div id="input-chip-component-initial-values">--}}
			{{--<input-chip v-model="initialChips"  :chips="['Vue','Testing', 'is', 'Bullshit']" chip-type="danger"></input-chip>--}}
		{{--</div>--}}
		{{--<small id="" class="chip-hint">Lorem ipsum dolor set amed</small>--}}
	{{--</div>--}}

	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>

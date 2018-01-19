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


{{--INPUTCHIP--}}
<div id="app">

	<div class="container" style="margin-top: 1rem;">
		<h3>InputChip</h3>

		<div class="form-group">
			<label for="input-chip-component-basic" style="display: block">InputChip</label>
			<div id="input-chip-component-basic">
				<input-chip chip-type="warning"
				            v-model="nsChips"
				            @chip-add="chipAddCb"
				            @chip-added="chipAddedCb"
				            @chips-changed="chipsChangedCb"
				            @chip-delete="chipDeleteCb"
				            @chip-deleted="chipDeletedCb">

				</input-chip>
			</div>
			<small id="" class="chip-hint">Lorem ipsum dolor set amed</small>
		</div>


		{{--<h3>NsInputChip</h3>--}}

		{{--<div class="form-group">--}}
			{{--<label for="input-chip-component-basic" style="display: block">NsInputChip</label>--}}
			{{--<div id="input-chip-component-basic">--}}
				{{--<ns-input-chip v-model="nsChips"--}}
				               {{--name="nameserver[]"--}}
				               {{--chip-type="info"--}}
				               {{--@chip-error="chipErrorCb"--}}
				               {{--@chip-add="chipAddCb"--}}
				               {{--@chip-added="chipAddedCb"--}}
				               {{--@chips-changed="chipsChangedCb"--}}
				               {{--@chip-delete="chipDeleteCb"--}}
				               {{--@chip-deleted="chipDeletedCb">--}}
				{{--</ns-input-chip>--}}
			{{--</div>--}}
			{{--<small id="" class="chip-hint">Lorem ipsum dolor set amed</small>--}}
		{{--</div>--}}


	</div>


</div>

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>

<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <title>Karma</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

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


                {{--inpu-chip-component--}}
                <div class="form-group">
                    <label for="input-chip-component-empty" style="display: block">Chippie Yah Yei</label>

                    <div id="input-chip-component-empty">
                        <input-chip></input-chip>
                    </div>

                    <small id="" class="chip-hint">Lorem ipsum dolor set amed</small>
                </div>

                <hr>

            <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>

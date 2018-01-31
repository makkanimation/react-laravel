<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel React application</title>
        <link href="{{url('css/app.css')}}" rel="stylesheet" type="text/css">
        <link href="{{url('css/dashboard.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
    <div id="root">Loading...</div>
        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html>
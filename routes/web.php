<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/whatever', function () {
	return view('whatever');
});


Route::get('/inputchip', function () {
	return view('inputchip');
});



Route::get('skills', function() {
	return ['Laravel', 'Vue', 'PHP', 'JS', 'Tooling'];
});
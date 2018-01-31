<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::post('recover', 'AuthController@recover');
Route::get('user/{id}', 'AuthController@user'); 
Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('logout', 'AuthController@logout');
    Route::get('test', function(){
        return response()->json(['foo'=>'bar']);
    });
	
	Route::get('users', 'AuthController@users'); 
	
	
	Route::get('products', 'ProductsController@index');
	 
	Route::get('product/{product}', 'ProductsController@show');
	 
	Route::post('product','ProductsController@store');
	 
	Route::put('product/{product}','ProductsController@update');
	 
	Route::delete('product/{product}', 'ProductsController@delete');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/**
** Basic Routes for a RESTful service:
**
** Route::get($uri, $callback);
** Route::post($uri, $callback);
** Route::put($uri, $callback);
** Route::delete($uri, $callback);
**
**/

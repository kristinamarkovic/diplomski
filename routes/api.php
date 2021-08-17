<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
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
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', 'App\Http\Controllers\AuthController@login');
    //bio je za register TestCoontroller koga treba izbrisati
    //trebalo bi srediti ovo u AuthController za Register, ima bug neki
    Route::post('/register', 'App\Http\Controllers\TestController@register');
    Route::post('/insert_income', 'App\Http\Controllers\IncomeController@store');
    // Route::get('/get_income/{user_id}/{year}', 'App\Http\Controllers\IncomeController@show')->where(["id" => "\d+"]);
    Route::get('/get_income_of_user/{id}', 'App\Http\Controllers\IncomeController@getInfo');
//    Route::post('/logout', [AuthController::class, 'logout']);
//    Route::post('/refresh', [AuthController::class, 'refresh']);
//    Route::get('/user-profile', [AuthController::class, 'userProfile']);
});

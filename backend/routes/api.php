<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\PointController;


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
/* Routes Companies*/
Route::apiResource('/companies', CompanyController::class);
/* Routes Clients Companies*/
Route::apiResource('companies.clients', ClientController::class);
/* Routes Clients Companies Points*/
Route::apiResource('companies.clients.points', PointController::class);


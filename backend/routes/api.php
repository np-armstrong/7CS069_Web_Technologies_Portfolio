<?php

use App\Http\Controllers\BikesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookingController;  //Import the BookingController

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('bookings', BookingController::class)->only([
    'index', 'show', 'store', 'update', 'destroy', 'search'
]);

Route::apiResource('bikes', BikesController::class)->only([
    'index'
]);

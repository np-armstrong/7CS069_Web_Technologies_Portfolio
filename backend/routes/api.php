<?php

use App\Http\Controllers\BikesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookingController;  //Import the BookingController
use App\Http\Controllers\UserAuthController;
use App\Http\Controllers\UserListingController;

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

Route::post('login', [UserAuthController::class, 'login']); //This route is not protected by the sanctum middleware
Route::post('register', [UserAuthController::class, 'register']); //This route is not protected by the sanctum middleware
Route::post('logout', [UserAuthController::class, 'logout'])->middleware('auth:sanctum'); //This route is protected by the sanctum middleware

Route::apiResource('bookings', BookingController::class)->only([
    'index', 'show', 'store', 'update', 'destroy'
])->middleware('auth:sanctum'); 

Route::get('userbookings/{search}', [BookingController::class, 'userbookings']);//->middleware('auth:sanctum'); //This route is protected by the sanctum middleware

Route::apiResource('userlistings', UserListingController::class)->only([
    'index', 'store', 'update', 'destroy'
]);

Route::apiResource('bikes', BikesController::class)->only([
    'index'
]);

Route::apiResource('user-listings', UserListingController::class)->only([
    'index', 'show', 'store', 'update', 'destroy'
]);

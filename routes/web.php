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

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\smartSoftGaming;

Route::post('ActivateSession', [smartSoftGaming::class, 'login']);
Route::get('{path}', [PageController::class, 'index'])->where('path', '.*')->middleware('referrer');

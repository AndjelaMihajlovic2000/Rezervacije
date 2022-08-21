<?php

use App\Http\Controllers\AdminPanelController;
use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\MestoController;
use App\Http\Controllers\RestoranController;
use App\Http\Controllers\RezervacijaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserRoleController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::resource('mesto', MestoController::class)->only(['index', 'show']);
Route::resource('restoran', RestoranController::class)->only(['index', 'show']);
Route::resource('rezervacija', RezervacijaController::class)->only(['index', 'show']);

Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::get('/profile', function (Request $request) {
        return auth()->user();
    });


    Route::get('moje-rezervacije', [RezervacijaController::class, 'mojeRezervacije']);
    Route::post('kreirajNalog', [AuthController::class, 'registerWithoutToken']);


    Route::resource('mesto', MestoController::class)->only(['store', 'update', 'destroy']);
    Route::resource('restoran', RestoranController::class)->only(['store', 'update', 'destroy']);
    Route::resource('rezervacija', RezervacijaController::class)->only(['index', 'show', 'store', 'update', 'destroy']);
    Route::resource('user-role', UserRoleController::class)->only(['index', 'show']);
    Route::resource('user', UserController::class)->only(['index', 'show', 'update', 'destroy']);

    Route::get('adminData', [AdminPanelController::class, 'adminPanelData']);
    Route::get('getReport', [AdminPanelController::class, 'kreirajIzvestaj']);
    Route::get('printRezervacija/{id}', [AdminPanelController::class, 'printRezervacija']);

    Route::post('logout', [AuthController::class, 'logout']);

});

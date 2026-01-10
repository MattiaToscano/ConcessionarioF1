<?php

use App\Http\Controllers\CarController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// Rotte pubbliche (non autenticate)
Route::prefix('v1')->group(function () {
    // Info API
    Route::get('/info', function () {
        return response()->json([
            'api' => 'Concessionario Formula 1',
            'version' => '1.0.0',
            'endpoints' => [
                'GET /api/v1/cars' => 'Lista auto disponibili',
                'GET /api/v1/cars/{id}' => 'Dettagli auto specifica',
                'POST /api/v1/auth/login' => 'Login utente',
                'POST /api/v1/auth/register' => 'Registrazione utente'
            ]
        ]);
    });

    // Rotte per auto F1 (pubbliche)
    Route::get('/cars', [CarController::class, 'index']);
    Route::get('/cars/{id}', [CarController::class, 'show']);
    
    // Rotte admin per gestione auto (per ora pubbliche)
    Route::post('/cars', [CarController::class, 'store']);
    Route::put('/cars/{id}', [CarController::class, 'update']);
    Route::delete('/cars/{id}', [CarController::class, 'destroy']);
    
    // Rotte admin per gestione auto (per ora pubbliche)
    Route::post('/cars', [CarController::class, 'store']);
    Route::put('/cars/{id}', [CarController::class, 'update']);
    Route::delete('/cars/{id}', [CarController::class, 'destroy']);
    
    // TODO: Rotte autenticazione
    // Route::post('/auth/register', [AuthController::class, 'register']);
    // Route::post('/auth/login', [AuthController::class, 'login']);
});

// Rotte protette (richiedono autenticazione)
Route::middleware('auth:sanctum')->prefix('v1')->group(function () {
    // Info utente autenticato
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    // TODO: Rotte protette
    // Route::post('/auth/logout', [AuthController::class, 'logout']);
    // Route::post('/cars/{car}/reserve', [ReservationController::class, 'store']);
    // Route::get('/reservations', [ReservationController::class, 'index']);
});
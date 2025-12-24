<?php

use Illuminate\Support\Facades\Route;

// Redirect alla documentazione API o frontend React
Route::get('/', function () {
    return response()->json([
        'message' => 'Concessionario Formula 1 API',
        'version' => '1.0.0',
        'documentation' => '/api/documentation',
        'frontend' => env('FRONTEND_URL', 'http://localhost:5173')
    ]);
});

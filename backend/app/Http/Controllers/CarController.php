<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    /**
     * Visualizzazione elenco di tutte le specifiche auto.
     */
    public function index()
    {
        $cars = Car::all();
        return response()->json($cars);
    }

    /**
     * Creazione nuova specifica auto in stock.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'year' => 'required|integer',
            'team' => 'required|string|max:255',
            'price' => 'required|string',
            'image' => 'nullable|string',
            'specs' => 'required|array',
            'hybrid' => 'required|array',
            'performance' => 'required|array',
            'chassis' => 'nullable|string',
            'suspension_front' => 'nullable|string',
            'suspension_rear' => 'nullable|string',
            'gearbox' => 'nullable|string',
            'weight' => 'nullable|integer',
            'drivers' => 'nullable|array',
            'victories' => 'nullable|integer',
            'podiums' => 'nullable|integer',
        ]);

        $car = Car::create($validated);
        return response()->json($car, 201);
    }

    /**
     * Specifica auto.
     */
    public function show(string $id)
    {
        $car = Car::findOrFail($id);
        return response()->json($car);
    }

    /**
     * Aggiornamento specifica auto in stock.
     */
    public function update(Request $request, string $id)
    {
        $car = Car::findOrFail($id);
        
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'year' => 'sometimes|integer',
            'team' => 'sometimes|string|max:255',
            'price' => 'sometimes|string',
            'image' => 'nullable|string',
            'specs' => 'sometimes|array',
            'hybrid' => 'sometimes|array',
            'performance' => 'sometimes|array',
            'chassis' => 'nullable|string',
            'suspension_front' => 'nullable|string',
            'suspension_rear' => 'nullable|string',
            'gearbox' => 'nullable|string',
            'weight' => 'nullable|integer',
            'drivers' => 'nullable|array',
            'victories' => 'nullable|integer',
            'podiums' => 'nullable|integer',
        ]);

        $car->update($validated);
        return response()->json($car);
    }

    /**
     * Rimozione specifica auto dallo stock.
     */
    public function destroy(string $id)
    {
        $car = Car::findOrFail($id);
        $car->delete();
        return response()->json(['message' => 'Car deleted successfully']);
    }
}
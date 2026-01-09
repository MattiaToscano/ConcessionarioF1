<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable = [
        'name',
        'year',
        'team',
        'price',
        'image',
        'specs',
        'hybrid',
        'performance',
        'chassis',
        'suspension_front',
        'suspension_rear',
        'gearbox',
        'weight',
        'drivers',
        'victories',
        'podiums'
    ];

    // Casting dei campi JSON
    protected $casts = [
        'specs' => 'array',
        'hybrid' => 'array',
        'performance' => 'array',
        'drivers' => 'array',
        'year' => 'integer',
        'victories' => 'integer',
        'podiums' => 'integer',
        'weight' => 'integer'
    ];
}

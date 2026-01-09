<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('year');
            $table->string('team');
            $table->string('price');
            $table->string('image')->nullable();

            // Specifiche tecniche in JSON
            $table->json('specs');

            // Sistema ibrido in JSON
            $table->json('hybrid');

            // Performance in JSON
            $table->json('performance');

            // Campi aggiuntiivi dettagliati monoposto
             $table->string('chassis')->nullable();
             $table->string('suspension_front')->nullable();
             $table->string('suspension_rear')->nullable();
             $table->string('gearbox')->nullable();
             $table->string('weight')->nullable();

            // Info aggiuntive
             $table->string('drivers')->nullable();
             $table->string('victories')->nullable();
             $table->string('podiums')->nullable();
               
            

                $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};

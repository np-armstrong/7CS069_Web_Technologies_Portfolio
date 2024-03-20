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
        Schema::create('user_listings', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('location');
            $table->string('make');
            $table->string('model');
            $table->integer('engine');
            $table->string('transmission');
            $table->string('image_url');
            $table->integer('day_rate');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_listings');
    }
};

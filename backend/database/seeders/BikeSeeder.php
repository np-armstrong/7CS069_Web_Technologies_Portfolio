<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BikeSeeder extends Seeder
{
    
    private $bikes = [
        [
            'make' => 'Honda',
            'model' => 'Zoomer-X',
            'engine' => '110',
            'transmission' => 'Automatic', 
            'image_url' => './assets/white-zoomer.webp',
            'day_rate' => 25,
        ],
        [
            'make' => 'Honda',
            'model' => 'Wave 110 S',
            'engine' => '110',
            'transmission' => 'Semi-Automatic',
            'image_url' => './assets/white-wave.webp',
            'day_rate' => 30,
        ],
        [
            'make' => 'KTM',
            'model' => '390 Duke',
            'engine' => '390',
            'transmission' => 'Manual',
            'image_url' => './assets/black-duke.webp',
            'day_rate' => 85,
        ],
        [
            'make' => 'Honda',
            'model' => 'CBR1000RR',
            'engine' => '1000',
            'transmission' => 'Manual',
            'image_url' => './assets/black-cbr.webp',
            'day_rate' => 100,
        ],
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->bikes as $bike) {
            \App\Models\Bike::factory()->create($bike);
        }
    }
}

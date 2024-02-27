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
            'image_url' => 'https://www.ncxhonda.com/motorcycles/storage/app/uploads/360/zoomer-x/004.jpg',
            'day_rate' => 10,
        ],
        [
            'make' => 'Yamaha',
            'model' => 'Fino',
            'engine' => '125',
            'transmission' => 'Automatic',
            'image_url' => "https://yamahametro.com/wp-content/uploads/2023/10/FINOSPORTY1.jpg",
            'day_rate' => 15,
        ],
        [
            'make' => 'Suzuki',
            'model' => 'Smash',
            'engine' => '115',
            'transmission' => 'Semiautomatic',
            'image_url' => 'https://www.guanzongroup.com.ph/wp-content/uploads/2018/11/smash-drum-green.jpg',
            'day_rate' => 15,
        ],
        [
            'make' => 'Kawasaki',
            'model' => 'X450',
            'engine' => '450',
            'transmission' => 'Manual',
            'image_url' => 'https://www.procycles.com.au/cdn/shop/files/66e51562-0a76-43f8-bc10-d4ae1e6c4834.jpg?v=1688699521',
            'day_rate' => 45,
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

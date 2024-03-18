<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserListingSeeder extends Seeder
{
    private $bikes = [
        [   
            'username' => 'DannyBoy96',
            'make' => 'Honda',
            'model' => 'Zoomer-X',
            'engine' => '110',
            'transmission' => 'Automatic', 
            'image_url' => 'https://www.ncxhonda.com/motorcycles/storage/app/uploads/360/zoomer-x/009.jpg',
            'day_rate' => 25,
        ],
        [
            'username' => 'JohnDoe123',
            'make' => 'Honda',
            'model' => 'Wave 110 S',
            'engine' => '110',
            'transmission' => 'Semi-Automatic',
            'image_url' => 'https://yuhmak.vtexassets.com/arquivos/ids/185655-800-auto?v=638406683490070000&width=800&height=auto&aspect=true',
            'day_rate' => 30,
        ],
        [
            'username' => 'RubberDuck',
            'make' => 'KTM',
            'model' => '390 Duke',
            'engine' => '390',
            'transmission' => 'Manual',
            'image_url' => 'https://wmr1.com/cdn/shop/files/ktm-390-duke-1.jpg?v=1707410892&width=1080',
            'day_rate' => 85,
        ],

    ];
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->bikes as $bike) {
            \App\Models\UserListing::factory()->create($bike);
        }
    }
}

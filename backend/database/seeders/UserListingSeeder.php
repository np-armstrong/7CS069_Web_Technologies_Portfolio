<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserListingSeeder extends Seeder
{
    private $bikes = [
        [   
            'username' => 'DannyBoy96',
            'location' => 'London',
            'make' => 'Honda',
            'model' => 'Zoomer-X',
            'engine' => '110',
            'transmission' => 'Automatic', 
            'image_url' => './assets/used-zoomer.jpeg',
            'day_rate' => 25,
        ],
        [
            'username' => 'JohnDoe123',
            'location' => 'Manchester',
            'make' => 'Yamaha',
            'model' => 'YZ250F',
            'engine' => '250',
            'transmission' => 'Manual',
            'image_url' => './assets/yz250.jpeg',
            'day_rate' => 55,
        ],
        [
            'username' => 'DirtbikeDave',
            'location' => 'Birmingham',
            'make' => 'KTM',
            'model' => '390 Duke',
            'engine' => '390',
            'transmission' => 'Manual',
            'image_url' => './assets/kx250.png',
            'day_rate' => 70,
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

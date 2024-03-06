<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserListing extends Model
{
    use HasFactory;

    protected $fillable = [
        'username',
        'make',
        'model',
        'engine',
        'transmission', 
        'image_url',
        'day_rate',
    ];
}

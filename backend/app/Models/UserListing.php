<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserListing extends Model
{
    use HasFactory;

    protected $fillable = [
        'username',
        'location',
        'make',
        'model',
        'engine',
        'transmission', 
        'image_url',
        'day_rate',
    ];

    protected $hidden = [
        'updated_at',
    ];    

    // Define the relationship between the UserListing and the user model
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

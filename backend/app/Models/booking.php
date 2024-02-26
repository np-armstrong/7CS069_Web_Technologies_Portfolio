<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'username',
        'bike_id',
        'start_date',
        'end_date',
    ];

    // Define the relationship between the Booking and the Bike model
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

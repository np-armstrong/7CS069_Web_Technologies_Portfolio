<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'username',
        'make',
        'model',
        'start_date',
        'end_date',
        'day_rate'  //Using denormalisation to 
                    //store the day_rate/username/make/model 
                    //at the time of booking - The duplication of data, 
                    //requires no join to the bikes/user table when 
                    //displaying the booking
    ];

    protected $hidden = [
        'updated_at',   // This is hidden at the moment, though I could
                        // Use this data in my booking app to show 
                        //when an update is made. 
    ];

    // Define the relationship between the Booking and the user model
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

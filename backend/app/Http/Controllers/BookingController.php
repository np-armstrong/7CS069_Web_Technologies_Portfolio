<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookingRequest;
use App\Http\Requests\UpdateBookingRequest;
use App\Http\Resources\BookingCollection; //Import the BookingCollection
use App\Http\Resources\BookingResource;
use App\Models\Booking; //Import the booking model
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    public function index(Request $request)
    {   
        //Return a collection of bookings
        return new BookingCollection(Booking::all());
    }

    public function show(Request $request, Booking $booking) //Route model binding used to automatically inject the model instance
    {
        //Return a single booking
        return new BookingResource($booking);
    }

    public function store(StoreBookingRequest $request)
    {   

        //Validate the request
        $validated = $request->validated();
        //Create a new booking
        $booking = Booking::create($validated);

        //Return the booking along with a 201 status code
        return new BookingResource($booking);

    }

    public function update(UpdateBookingRequest $request, Booking $booking)
    {
        //Update the booking
        $validated = $request->validated();

        $booking->update($validated);

        return new BookingResource($booking);
    }

    public function destroy(Request $request, Booking $booking)
    {
        //Delete the booking
        $booking->delete();

        //Return a 204 status code
        return response()->noContent();

    }

    public function search(Request $request)
    {
        //Get the search term param
        
    }
}

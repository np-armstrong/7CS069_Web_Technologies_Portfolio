<?php

namespace App\Http\Controllers;

use App\Http\Resources\BikeCollection;
use App\Models\bike;
use Illuminate\Http\Request;

class BikesController extends Controller
{
    public function index(Request $request)
    {
        //Return a collection of bikes
        return new BikeCollection(bike::all());
    }
}

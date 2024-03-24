<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;


class UserAuthController extends Controller
{
    
    public function register (Request $request) {
        // Validate the request
        $fields = $request->validate([
            'username' => 'required|string|unique:users,username',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|min:8'
        ]);
        // Create the user
        $user = User::create([
            'username' => $fields['username'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password']) //Hash::make is used to hash the password https://laravel.com/docs/5.0/hashing
        ]);

        // Return the response
        return response()->json([
            'message' => 'User created successfully',   
        ]);  
    }

    public function login (Request $request) {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        // Check email 
        $user = User::where('email', $fields['email'])->first();
    
        // Check password
        if (!$user || !Hash::check($fields['password'], $user->password)) 
            return response([
                'message' => 'username or password is incorrect. Please try again.'
            ], 401); 
    

        $token = $user->createToken($user->username.'personalapptoken')->plainTextToken; 

        //Edited to only return the username for the creation of listings, viewing user listings/bookings 
        return response()->json([
            'username' => $user->username,
            'token' => $token
        ]);
    }

    public function logout () {

        auth()->user()->tokens()->delete(); //this is throwing an error but allowing it to exist allows the user to log out... I'm not sure why it's throwing an error...

        return response()->json([
            'message' => 'Logged out'
        ]);
    }
}

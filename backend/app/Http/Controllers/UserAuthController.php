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
            'password' => 'required|min:6'
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

        // Check username OR email (I wanted to adde the ability to sign in with username or email. It frustrates me when I forget a username...)
        $user = User::where('email', $fields['email'])->first();
        //->orWhere('username', $fields['username'])->first(); //This caused errors so removed it for now...

        // Check password
        if (!$user || !Hash::check($fields['password'], $user->password)) { //Hash::check is used to check the hashed password https://laravel.com/docs/5.0/hashing
            return response([
                'message' => 'username or password is incorrect. Please try again.'
            ], 401); //401 is the status code for unauthorized access
        }

        $token = $user->createToken($user->username.'myapptoken')->plainTextToken; 

        //Edited to only return the username for the creation of listings, viewing user listings/bookings 
        return response()->json([
            'username' => $user->username,
            'token' => $token
        ]);
    }

    public function logout () {

        // Revoke all tokens...
        //$request->
        auth()->user()->tokens()->delete(); //this is throwing an error but allowing it to exist allows the user to log out... I'm not sure why it's throwing an error...

        return response()->json([
            'message' => 'Logged out'
        ]);
    }
}
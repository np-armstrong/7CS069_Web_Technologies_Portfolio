<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserListingCollection;
use App\Http\Resources\UserListingResource;
use App\Models\User;
use App\Models\UserListing;
use Illuminate\Http\Request;

class UserListingController extends Controller
{
    function index()
    {
        return new UserListingCollection(UserListing::all());
    }

    function store(Request $request)
    {
        $validated = $request->validated(); 
        $listing = UserListing::create($validated);

        return new UserListingResource($listing);
    }

    function update(Request $request, UserListing $userListing)
    {
        $validated = $request->validated(); 
        $userListing->update($validated);

        return new UserListingResource($userListing);
    }

    function destroy(Request $request, UserListing $userListing)
    {
        $userListing->delete();

        return response()->noContent();
    }

    function userlistings($search){
        return UserListing::where("username", $search)->get(); 
    }
    
}

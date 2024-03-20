<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserListingRequest;
use App\Http\Requests\UpdateUserListingRequest;
use App\Http\Resources\UserListingCollection;
use App\Http\Resources\UserListingResource;
use App\Models\User;
use App\Models\UserListing;
use Illuminate\Http\Request;

class UserListingController extends Controller
{
    public function index()
    {
        return new UserListingCollection(UserListing::all());
    }

    public function show(Request $request, UserListing $userListing)
    {
        return new UserListingResource($userListing);
    }

    public function store(StoreUserListingRequest $request)
    {
        $validated = $request->validated(); 
        $listing = UserListing::create($validated);

        return new UserListingResource($listing);
    }

    public function update(UpdateUserListingRequest $request, UserListing $userListing)
    {
        $validated = $request->validated(); 
        $userListing->update($validated);

        return new UserListingResource($userListing);
    }

    public function destroy(Request $request, UserListing $userListing)
    {
        $userListing->delete();

        return response()->noContent();
    }

    public function userlistings($search){
        return UserListing::where("username", $search)->get(); 
    }
    
}

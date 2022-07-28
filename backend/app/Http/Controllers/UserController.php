<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\UserRole;
use App\Rules\PostojiUloga;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $users = User::all();
        $user_logged = auth()->user();
        $user_role = UserRole::find($user_logged->userRole);
        if ($user_role->slug != 'admin' || $user_role->can_manage != 1) {
            return response()->json(['success' => false, 'message' => 'You have not any permissions to do that!']);
        }
        return response()->json(['success' => true, 'users' => new UserCollection($users)]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user) {
        $user_logged = auth()->user();
        $user_role = UserRole::find($user_logged->userRole);
        if ($user_role->slug != 'admin' && $user_logged->id != $user->id) {
            return response()->json(['success' => false, 'message' => 'You have not any permissions to do that!']);
        }
        return response()->json(['success' => true, 'user' => new UserResource($user)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user) {

        $user_logged = auth()->user();
        $user_role = UserRole::find($user_logged->userRole);
        if ($user_role->slug != 'admin' && $user_logged->id != $user->id) {
            return response()->json(['success' => false, 'message' => 'You have not any permissions to do that!']);
        }
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255|unique:users,username,' . $user->id,
            'ime' => 'required|string|max:255',
            'prezime' => 'required|string|max:255',
            'datumRodjenja' => 'required|date',
            'adresa' => 'required|string|max:255',
            'password' => 'string|min:5',
            'userRole' => [new PostojiUloga()],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $user->username = $request->username;
        $user->ime = $request->ime;
        $user->prezime = $request->prezime;
        $user->datumRodjenja = $request->datumRodjenja;
        $user->adresa = $request->adresa;
        if ($user_role->slug === 'admin') {

            $user->userRole = intval($request->userRole);
        }
        $user->password = Hash::make($request->password);
        $user->save();


        return response()->json(['success' => true, 'message' => 'User successfully updated.', new UserResource($user)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user) {
        $currentUser = auth()->user();
        $userRole = UserRole::find($currentUser->userRole);
        if ($userRole->slug != 'admin' && $currentUser->id != $user->id) {
            return response()->json(['success' => false, 'message' => 'You have not any permissions to do that!']);
        }
        $user->delete();
        return response()->json(['success' => true, 'message' => 'User deleted successfully', 'user' => new UserResource($user)]);
    }
}

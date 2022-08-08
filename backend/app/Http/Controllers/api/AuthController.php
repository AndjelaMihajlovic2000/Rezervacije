<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserRoleResource;
use App\Models\User;
use App\Models\UserRole;
use App\Rules\PostojiUloga;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller {


    /**
     * @group Authentication
     *
     * Creating new account
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255|unique:users',
            'ime' => 'required|string|max:255',
            'prezime' => 'required|string|max:255',
            'datumRodjenja' => 'required|date',
            'adresa' => 'required|string|max:255',
            'password' => 'string|min:5'
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => strval($validator->errors())]);
        }

        $user_role_id = UserRole::where('slug', 'gost')->firstOrFail()->id;


        $user = User::create([
            'username' => $request->username,
            'ime' => $request->ime,
            'prezime' => $request->prezime,
            'datumRodjenja' => $request->datumRodjenja,
            'adresa' => $request->adresa,
            'userRole' => $user_role_id,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['message' => 'New user successfully created.', 'data' => $user, 'access_token' => $token,
            'token_type' => 'Bearer', 'success' => true, 'user_type' => 'gost', 'user_id' => $user->id]);
    }

    /**
     * @group Authentication
     *
     * Creating new account without getting access token
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */

    public function registerWithoutToken(Request $request) {

        $user_logged = auth()->user();
        $user_role = UserRole::find($user_logged->userRole);
        if ($user_role->slug != 'admin') {
            return response()->json(['success' => false, 'message' => 'You have not any permissions to do that!']);
        }
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255|unique:users',
            'ime' => 'required|string|max:255',
            'prezime' => 'required|string|max:255',
            'datumRodjenja' => 'required|date',
            'adresa' => 'required|string|max:255',
            'password' => 'string|min:5',
            'userRole' => ['integer', 'nullable', new PostojiUloga()],
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => strval($validator->errors())]);
        }


        $user = User::create([
            'username' => $request->username,
            'ime' => $request->ime,
            'prezime' => $request->prezime,
            'datumRodjenja' => $request->datumRodjenja,
            'adresa' => $request->adresa,
            'userRole' => $request->userRole,
            'password' => Hash::make($request->password)
        ]);


        return response()->json(['message' => 'New user successfully created.', 'data' => $user,
            'success' => true, 'user_id' => $user->id]);
    }

    /**
     * @group Authentication
     *
     * Login on application
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request) {

        if (!Auth::attempt($request->only('username', 'password'))) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = User::where('username', $request['username'])->firstOrFail();

        $userRole = DB::table('users')
            ->join('user_roles', 'users.userRole', '=', 'user_roles.id')
            ->select('user_roles.slug')
            ->where('users.id', '=', $user->id)
            ->get();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => 'Successfully logged in ' . $user->ime . " " . $user->prezime,
            'access_token' => $token, 'token_type' => 'Bearer', 'success' => true,
            'user_type' => $userRole, 'user_id' => $user->id]);

    }

    /**
     * @group Authentication
     *
     * Logout
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request) {
        auth()->user()->tokens()->delete();
        return response()->json(['message' => 'Successfully logged out', 'success' => true]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserRoleCollection;
use App\Http\Resources\UserRoleResource;
use App\Models\UserRole;
use Illuminate\Http\Request;

class UserRoleController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return new UserRoleCollection(UserRole::all());
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
     * @param \App\Models\UserRole $userRole
     * @return \Illuminate\Http\Response
     */
    public function show(UserRole $userRole) {
        return new UserRoleResource($userRole);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\UserRole $userRole
     * @return \Illuminate\Http\Response
     */
    public function edit(UserRole $userRole) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\UserRole $userRole
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserRole $userRole) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\UserRole $userRole
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserRole $userRole) {
        //
    }
}

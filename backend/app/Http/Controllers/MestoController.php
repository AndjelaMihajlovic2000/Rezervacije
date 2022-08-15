<?php

namespace App\Http\Controllers;

use App\Http\Resources\MestoCollection;
use App\Http\Resources\MestoResource;
use App\Models\Mesto;
use App\Models\Restoran;
use App\Models\UserRole;
use App\Rules\PostojiRestoran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MestoController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return new MestoCollection(Mesto::all());
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
        $currentUser = auth()->user();

        if (UserRole::find($currentUser->userRole)->slug != 'admin' && !UserRole::find($currentUser->userRole)->can_manage) {
            return response()->json(['success' => false, 'message' => 'You have not any permissions to do that!']);
        }

        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:255',
            'brojStolica' => 'required|string|max:255',
            'opis' => 'required|string|max:255',
            'restoranID' => [new PostojiRestoran()],

        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => strval($validator->errors())]);
        }

        $mesto = Mesto::create([
            'naziv' => $request->naziv,
            'brojStolica' => $request->brojStolica,
            'opis' => $request->opis,
            'dostupno' => 1,
            'restoranID' => $request->restoranID,
        ]);

        return response()->json(['success' => true, 'message' => 'Uspesno sacuvano mesto!', new MestoResource($mesto)]);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Mesto $mesto
     * @return \Illuminate\Http\Response
     */
    public function show(Mesto $mesto) {
        return new MestoResource($mesto);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Mesto $mesto
     * @return \Illuminate\Http\Response
     */
    public function edit(Mesto $mesto) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Mesto $mesto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Mesto $mesto) {
        $currentUser = auth()->user();
        if (UserRole::find($currentUser->userRole)->slug != 'admin' && !UserRole::find($currentUser->userRole)->can_manage) {
            return response()->json(['success' => false, 'message' => 'You have not any permissions to do that!']);
        }

        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:255',
            'brojStolica' => 'required|string|max:255',
            'opis' => 'required|string|max:255',
            'restoranID' => [new PostojiRestoran()],

        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => strval($validator->errors())]);
        }


        $mesto->naziv = $request->naziv;
        $mesto->brojStolica = $request->brojStolica;
        $mesto->opis = $request->opis;
        $mesto->restoranID = $request->restoranID;
        $mesto->save();

        return response()->json(['success' => true, 'message' => 'Uspesno azurirano mesto!', new MestoResource($mesto)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Mesto $mesto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mesto $mesto) {
        $currentUser = auth()->user();
        if (UserRole::find($currentUser->userRole)->slug != 'admin' && !UserRole::find($currentUser->userRole)->can_manage) {
            return response()->json(['success' => false, 'message' => 'You have not any permissions to do that!']);
        }

        $mesto->delete();
        return response()->json(['success' => true, 'message' => 'Uspesno obrisano mesto!', new MestoResource($mesto)]);
    }
}

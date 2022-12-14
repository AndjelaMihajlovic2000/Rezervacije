<?php

namespace App\Http\Controllers;

use App\Http\Resources\RestoranCollection;
use App\Http\Resources\RestoranResource;
use App\Models\Mesto;
use App\Models\Restoran;
use App\Models\UserRole;
use App\Rules\PostojiKorisnik;
use App\Rules\PostojiUloga;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RestoranController extends Controller {
    /**
     * Prikaz svih restorana u sistemu
     *@group Restoran
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return new RestoranCollection(Restoran::all());
    }


    public function create() {
        //
    }

    /**
     * Kreiranje novog restorana
     * @group Restoran
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {

        $currentUser = auth()->user();
        if (UserRole::find($currentUser->userRole)->slug != 'admin') {
            return response()->json(['success' => false, 'message' => 'You have not any permissions to do that!']);
        }

        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:255',
            'adresa' => 'required|string|max:255',
            'radnoVreme' => 'required|string|max:255',
            'telefon' => 'required|string',
            'email' => 'required|string|max:255',
            'brojZvezdica' => 'integer',
            'opis' => 'string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => strval($validator->errors())]);
        }

        $restoran = Restoran::create([
            'naziv' => $request->naziv,
            'adresa' => $request->adresa,
            'radnoVreme' => $request->radnoVreme,
            'telefon' => $request->telefon,
            'email' => $request->email,
            'brojZvezdica' => $request->brojZvezdica,
            'opis' => $request->opis,
            'userID' => $currentUser->id
        ]);

        return response()->json(['success' => true, 'message' => 'Uspesno sacuvan restoran!', new RestoranResource($restoran)]);
    }

    /**
     * Prikaz restorana
     *
     * @param \App\Models\Restoran $restoran
     * @return \Illuminate\Http\Response
     */
    public function show(Restoran $restoran) {
        $mesta = Mesto::all()->where('restoranID', '=', $restoran->id);
        return response()->json(['restoran' => $restoran, 'mesta' => $mesta]);
    }

    public function edit(Restoran $restoran) {
        //
    }

    /**
     * Azuriranje restorana
     * @group Restoran
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Restoran $restoran
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Restoran $restoran) {

        $currentUser = auth()->user();
        if (UserRole::find($currentUser->userRole)->slug != 'admin') {
            return response()->json(['success' => false, 'message' => 'You have not any permissions to do that!']);
        }

        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:255',
            'adresa' => 'required|string|max:255',
            'radnoVreme' => 'required|string|max:255',
            'telefon' => 'required|string',
            'email' => 'required|string|max:255',
            'brojZvezdica' => 'integer',
            'opis' => 'string|max:255'

        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => strval($validator->errors())]);
        }


        $restoran->naziv = $request->naziv;
        $restoran->adresa = $request->adresa;
        $restoran->radnoVreme = $request->radnoVreme;
        $restoran->telefon = $request->telefon;
        $restoran->email = $request->email;
        $restoran->brojZvezdica = $request->brojZvezdica;
        $restoran->opis = $request->opis;
        $restoran->save();


        return response()->json(['success' => true, 'message' => 'Uspesno azuriran restoran!', new RestoranResource($restoran)]);
    }

    /**
     * Brisanje restorana
     * @group Restoran
     *
     * @param \App\Models\Restoran $restoran
     * @return \Illuminate\Http\Response
     */
    public function destroy(Restoran $restoran) {

        $currentUser = auth()->user();
        if (UserRole::find($currentUser->userRole)->slug != 'admin') {
            return response()->json(['success' => false, 'message' => 'You have not any permissions to do that!']);
        }

        $restoran->delete();
        return response()->json(['success' => true, 'message' => 'Uspesno obrisan restoran!', new RestoranResource($restoran)]);

    }
}

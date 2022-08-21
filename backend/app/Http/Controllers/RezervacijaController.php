<?php

namespace App\Http\Controllers;

use App\Http\Resources\RezervacijaCollection;
use App\Http\Resources\RezervacijaResource;
use App\Models\Mesto;
use App\Models\Rezervacija;
use App\Models\UserRole;
use App\Rules\PostojiMesto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RezervacijaController extends Controller {
    /**
     * Prikaz svih restorana
     * @group Rezervacija
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return new RezervacijaCollection(Rezervacija::all());
    }

    public function create() {
        //
    }

    /**
     *Kreiranje rezervacije
     * @group Rezervacija
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $currentUser = auth()->user();

        $validator = Validator::make($request->all(), [
            'mestoID' => [new PostojiMesto()],
            'datumIVreme' => 'required|string',
            'komentar' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => strval($validator->errors())]);
        }

        $rezervacijeProvera = Rezervacija::where('datumIVreme', $request->datumIVreme)->where('mestoID', $request->mestoID)->get();

        if (count($rezervacijeProvera) > 0) {
            return response()->json(['success' => false, 'error' => "Neupesna rezervacija, mesto je vec rezervisano za uneti datum!"]);
        }

        $rezervacija = Rezervacija::create([
            'mestoID' => $request->mestoID,
            'userID' => $currentUser->id,
            'datumIVreme' => $request->datumIVreme,
            'komentar' => $request->komentar,
            'uspesno' => false,
        ]);

        return response()->json(['success' => true, 'message' => 'Uspesno sacuvana rezervacija!', new RezervacijaResource($rezervacija)]);
    }

    /**
     * Prikaz rezervacije
     *
     * @param \App\Models\Rezervacija $rezervacija
     * @return \Illuminate\Http\Response
     */
    public function show(Rezervacija $rezervacija) {
        return new RezervacijaResource($rezervacija);
    }

    /**
     * @group Rezervacija
     * Lista korisnikovih rezervacija
     * @return RezervacijaCollection
     */
    public function mojeRezervacije() {

        $currentUser = auth()->user();

        $rezervacije = Rezervacija::all()->where('userID', '=', $currentUser->id);
        return new RezervacijaCollection($rezervacije);

    }


    public function edit(Rezervacija $rezervacija) {
        //
    }


    public function update(Request $request, Rezervacija $rezervacija) {
        //
    }

    /**
     * Brisanje rezervacije
     * @group Rezervacija
     *
     * @param \App\Models\Rezervacija $rezervacija
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rezervacija $rezervacija) {

        $currentUser = auth()->user();
        if (UserRole::find($currentUser->userRole)->slug != 'admin' && $currentUser->id != $rezervacija->userID->id) {
            return response()->json(['success' => false, 'message' => 'You have not any permissions to do that!']);
        }

        $rezervacija->delete();
        return response()->json(['success' => true, 'message' => 'Uspesno obrisana rezervacija!', new RezervacijaResource($rezervacija)]);
    }
}

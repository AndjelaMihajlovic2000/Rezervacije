<?php

namespace App\Http\Controllers;

use App\Http\Resources\MestoResource;
use App\Models\Mesto;
use App\Models\Restoran;
use App\Models\Rezervacija;
use App\Models\User;
use FileService\FileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpOffice\PhpWord\PhpWord;

class AdminPanelController extends Controller {

    public function adminPanelData(Request $request) {

        $ukupanBrojRestorana = count(Restoran::all());
        $ukupanBrojMesta = count(Mesto::all());
        $ukupanBrojKorisnika = count(User::all());
        $ukupanBrojRezervacija = count(Rezervacija::all());
        $aktivniKorisnici = DB::table('personal_access_tokens')->count();

        $danasnjeRezervacije = count(Rezervacija::whereDate('created_at', date('Y-m-d'))->get());
        $rezervacijeStatistika[] = ['name' => 'Danas', 'uv' => $danasnjeRezervacije];

        for ($i = 1; $i < 6; $i++) {
            $yesterday = date("Y-m-d", strtotime("-$i days"));
            $brojRezervacijaTemp = count(Rezervacija::whereDate('created_at', $yesterday)->get());
            $rezervacijeStatistika[] = ['name' => $yesterday, 'uv' => $brojRezervacijaTemp];
        }


        $tip = $request->getContentType();

        if ($tip == 'xml') {
            return response()->xml([
                'brojRestorana' => $ukupanBrojRestorana,
                'brojSlobodnihMesta' => $ukupanBrojMesta - $danasnjeRezervacije,
                'brojZauzetihMesta' => $danasnjeRezervacije,
                'brojKorisnika' => $ukupanBrojKorisnika,
                'brojRezervacija' => $ukupanBrojRezervacija,
                'aktivniKorisnici' => $aktivniKorisnici,
                'grafikData' => [$rezervacijeStatistika]
            ]);
        }

        return response()->json([
            'brojRestorana' => $ukupanBrojRestorana,
            'brojSlobodnihMesta' => $ukupanBrojMesta - $danasnjeRezervacije,
            'brojZauzetihMesta' => $danasnjeRezervacije,
            'brojKorisnika' => $ukupanBrojKorisnika,
            'brojRezervacija' => $ukupanBrojRezervacija,
            'aktivniKorisnici' => $aktivniKorisnici,
            'grafikData' => [$rezervacijeStatistika]
        ]);

    }

    public function kreirajIzvestaj() {

        $ukupanBrojRestorana = count(Restoran::all());
        $ukupanBrojMesta = count(Mesto::all());
        $ukupanBrojKorisnika = count(User::all());
        $ukupanBrojRezervacija = count(Rezervacija::all());

        $rezervacijaPoKorisniku = $ukupanBrojRezervacija / $ukupanBrojKorisnika;


        $fileName = 'Izvestaj o radu restorana.docx';

        $dokument = new PhpWord();

        $section = $dokument->addSection();

        $section->addTitle('Izvestaj o radu restorana');
        $section->addText('');
        $section->addText('Ukupan broj restorana ' . $ukupanBrojRestorana);
        $section->addText('');
        $section->addText('Ukupan broj mesta ' . $ukupanBrojMesta);
        $section->addText('');
        $section->addText('Ukupan broj korisnika ' . $ukupanBrojKorisnika);
        $section->addText('');
        $section->addText('Ukupan broj rezervacija ' . $ukupanBrojRezervacija);
        $section->addText('');
        $section->addText('Prosecan korisnik rezervise mesto ' . round($rezervacijaPoKorisniku, 2) . ' puta');

        try {
            $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($dokument, 'Word2007');
            $objWriter->save($fileName);
            return response()->file($fileName);
        } catch (\PhpOffice\PhpWord\Exception\Exception $e) {

            return response()->json(['Nije moguce skinuti izvestaj']);
        }
    }

    public function printRezervacija(Request $request) {

        $rezervacija = Rezervacija::find($request->id);
        $mesto = Mesto::find($rezervacija->mestoID);
        $korisnik = User::find($rezervacija->userID);

        $fileName = 'Rezervacija.docx';

        $dokument = new PhpWord();

        $section = $dokument->addSection();

        $section->addTitle("Rezervacija - ".$korisnik->ime.' '.$korisnik->prezime);
        $section->addText("Sifra rezervacije: $rezervacija->id-$mesto->id-$korisnik->id");
        $section->addText("");
        $section->addText("Mesto: " .$mesto->naziv);
        $section->addText("Opis mesta: " .$mesto->opis);
        $section->addText("Vreme : " .$rezervacija->datumIVreme);
        $section->addText("Komentar : " .$rezervacija->komentar);

        try {
            $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($dokument, 'Word2007');
            $objWriter->save($fileName);
            return response()->file($fileName);
        } catch (\PhpOffice\PhpWord\Exception\Exception $e) {

            return response()->json(['Nije moguce skinuti rezervaciju']);
        }
    }

}

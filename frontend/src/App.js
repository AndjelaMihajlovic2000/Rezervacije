import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Pocetna from "./pages/Pocetna";
import Restoran from "./pages/Restoran";
import Admin from "./pages/Admin";
import ARestorani from "./pages/ARestorani";
import AMesta from "./pages/AMesta";
import AKorisnici from "./pages/AKorisnici";
import ARezervacije from "./pages/ARezervacije";
import UnosP from "./pages/UnosP";
import RestoranForm from "./components/admin/forme/RestoranForm";
import MestoForm from "./components/admin/forme/MestoForm";
import KorisnikForm from "./components/admin/forme/KorisnikForm";
import MojeRezervacije from "./pages/MojeRezervacije";
import Profil from "./pages/Profil";

function App() {
    return (
        <BrowserRouter className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Pocetna/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path='/restoran/:id' element={<Restoran/>}/>
                <Route path='/moje-rezervacije' element={<MojeRezervacije/>}/>
                <Route path='/profil/:id' element={<Profil/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/admin/restorani' element={<ARestorani/>}/>
                <Route path='/admin/mesta' element={<AMesta/>}/>
                <Route path='/admin/korisnici' element={<AKorisnici/>}/>
                <Route path='/admin/rezervacije' element={<ARezervacije/>}/>
                <Route path='/admin/unos/restoran' element={
                    <UnosP naslovStrane={"Unos restorana"}
                           forma={<RestoranForm/>}
                    />}/>
                <Route path='/admin/unos/restoran/:id' element={
                    <UnosP naslovStrane={"Unos restorana"}
                           forma={<RestoranForm/>}
                    />}/>
                <Route path='/admin/unos/mesto' element={
                    <UnosP naslovStrane={"Unos mesta"}
                           forma={<MestoForm/>}
                    />}/>
                <Route path='/admin/unos/mesto/:id' element={
                    <UnosP naslovStrane={"Unos mesta"}
                           forma={<MestoForm/>}
                    />}/>
                <Route path='/admin/unos/korisnik' element={
                    <UnosP naslovStrane={"Korisnicki nalog"}
                           forma={<KorisnikForm/>}
                    />}/>
                <Route path='/admin/unos/korisnik/:id' element={
                    <UnosP naslovStrane={"Korisnicki nalog"}
                           forma={<KorisnikForm/>}
                    />}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    );
}

export default App;

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

function App() {
    return (
        <BrowserRouter className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Pocetna/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path='/restoran/:id' element={<Restoran/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/admin/restorani' element={<ARestorani/>}/>
                <Route path='/admin/mesta' element={<AMesta/>}/>
                <Route path='/admin/korisnici' element={<AKorisnici/>}/>
                <Route path='/admin/rezervacije' element={<ARezervacije/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    );
}

export default App;

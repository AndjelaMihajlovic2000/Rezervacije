import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Pocetna from "./pages/Pocetna";
import Restoran from "./pages/Restoran";

function App() {
    return (
        <BrowserRouter className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Pocetna/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path='/restoran/:id' element={<Restoran/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    );
}

export default App;

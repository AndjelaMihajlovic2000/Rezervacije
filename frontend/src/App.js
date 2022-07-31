import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Login/>}/>

            </Routes>

            <Footer/>
        </BrowserRouter>
    );
}

export default App;

import React, {useState} from 'react';
import "../styles/page.css";
import "../styles/restoran.css";
import MestoCard from "../components/MestoCard";
import RezervacijaModal from "../components/RezervacijaModal";

function Restoran(props) {
    const stil = {width: "30%"};
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="page">
                <div className="pageContainer">

                    <div className="pageContainerHead container">
                        <div className="row d-flex justify-content-evenly">
                            <div className="col-4">
                                <h2>Restoran ime</h2>
                            </div>
                            <div className="card" style={stil}>
                                <div className="card-body">
                                    <h5 className="card-title">Light card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up
                                        the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="restoranPageContainerBody">
                        <div className="restoranPageHeaderContent">
                            <h3>Rezervisite mesto</h3>
                        </div>
                        <div className="restoranPageBodyContent">

                            <MestoCard setModalShow={setModalShow}/>
                            <MestoCard setModalShow={setModalShow}/>
                            <MestoCard setModalShow={setModalShow}/>
                            <MestoCard setModalShow={setModalShow}/>
                            <MestoCard setModalShow={setModalShow}/>
                            <MestoCard setModalShow={setModalShow}/>
                            <MestoCard setModalShow={setModalShow}/>
                            <MestoCard setModalShow={setModalShow}/>
                            <MestoCard setModalShow={setModalShow}/>
                            <MestoCard setModalShow={setModalShow}/>
                            <MestoCard setModalShow={setModalShow}/>
                            <MestoCard setModalShow={setModalShow}/>



                        </div>
                    </div>

                </div>
            </div>
            <RezervacijaModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Restoran;
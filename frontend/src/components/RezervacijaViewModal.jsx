import React from 'react';
import {Modal} from "react-bootstrap";

function RezervacijaViewModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h4>Rezervacija</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label htmlFor="mestoRezervacije" className="form-label">Mesto</label>
                <div className="input-group mb-3">
                    <input type="text" readOnly id="mestoRezervacije" className="form-control"
                           aria-label="Mesto"
                           value={props.rezervacija!==null?props.rezervacija.mestoID.naziv:""}
                    />
                </div>

                <label htmlFor="korisnikRezervacije" className="form-label">Korisnik</label>
                <div className="input-group mb-3">
                    <input type="text" readOnly id="korisnikRezervacije" className="form-control"
                           aria-label="Korisnik"
                           value={props.rezervacija!==null?props.rezervacija.userID.username:""}
                           name="userID"/>
                </div>

                <label htmlFor="datumRezervacije" className="form-label">Datum i vreme rezervacije</label>
                <div className="input-group mb-3">
                    <input type="datetime-local" className="form-control" id="datumRezervacije" readOnly
                           aria-describedby="basic-addon3"
                           value={props.rezervacija!==null?props.rezervacija.datumIVreme:""}
                           />
                </div>
                <label htmlFor="komentarRezervacije" className="form-label">Komentar</label>
                <div className="input-group mb-3">
                    <textarea id="komentarRezervacije" className="form-control" aria-label="Komentar" readOnly
                              value={props.rezervacija!==null?props.rezervacija.komentar:""}
                    />
                </div>

            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}

export default RezervacijaViewModal;
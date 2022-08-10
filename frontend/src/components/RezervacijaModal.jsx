import React from 'react';
import {Modal} from "react-bootstrap";

function RezervacijaModal(props) {
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
                    <input type="text" readOnly id="mestoRezervacije" className="form-control" aria-label="Mesto"/>
                </div>

                <label htmlFor="korisnikRezervacije" className="form-label">Korisnik</label>
                <div className="input-group mb-3">
                    <input type="text" readOnly id="korisnikRezervacije" className="form-control"
                           aria-label="Korisnik"/>
                </div>

                <label htmlFor="datumRezervacije" className="form-label">Unesite datum i vreme rezervacije</label>
                <div className="input-group mb-3">
                    <input type="datetime-local" className="form-control" id="datumRezervacije"
                           aria-describedby="basic-addon3"/>
                </div>
                <label htmlFor="komentarRezervacije" className="form-label">Unesite komentar</label>
                <div className="input-group mb-3">
                    <textarea id="komentarRezervacije" className="form-control" aria-label="Unesite komentar"/>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <button className="btn-99">
                    Rezervisi
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default RezervacijaModal;
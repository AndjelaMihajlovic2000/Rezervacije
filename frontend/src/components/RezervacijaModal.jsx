import React from 'react';
import {Modal} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

function RezervacijaModal(props) {

    const [rezervacijaInput, setRezervacijaInput] = useState({
        userID: window.sessionStorage.getItem('userID'),
        datumIVreme: "",
        komentar: ""
    });

    const handleInput = (e) => {
        e.persist();
        setRezervacijaInput({
            ...rezervacijaInput,
            [e.target.name]: e.target.value,
        });
        console.log(rezervacijaInput)
    };

    function kreirajRezervaciju() {
        axios.post('http://localhost:8000/api/rezervacija',
            {
                ...rezervacijaInput,
                mestoID: props.mesto.id
            }
            , {
                headers: {
                    'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token'),
                }
            })
            .then((res) => {
                console.log((res.data))

                console.log((res.data.message))
                if (!res.data.success) {
                    alert(res.data.error)
                } else {
                    alert(res.data.message)
                }

            }).catch((e) => {
        })
    }

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
                           value={props.mesto !== null ? props.mesto.naziv : ""}
                           onChange={handleInput}
                    />
                </div>

                <label htmlFor="korisnikRezervacije" className="form-label">Korisnik</label>
                <div className="input-group mb-3">
                    <input type="text" readOnly id="korisnikRezervacije" className="form-control"
                           aria-label="Korisnik" value={window.sessionStorage.getItem('userName')}
                           onChange={handleInput}
                           name="userID"/>
                </div>

                <label htmlFor="datumRezervacije" className="form-label">Unesite datum i vreme rezervacije</label>
                <div className="input-group mb-3">
                    <input type="date" className="form-control" id="datumRezervacije"
                           aria-describedby="basic-addon3"
                           onChange={handleInput}
                           name="datumIVreme"/>
                </div>
                <label htmlFor="komentarRezervacije" className="form-label">Unesite komentar</label>
                <div className="input-group mb-3">
                    <textarea id="komentarRezervacije" className="form-control" aria-label="Unesite komentar"
                              onChange={handleInput}
                              name="komentar"/>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <button className="btn-99" onClick={kreirajRezervaciju}>
                    Rezervisi
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default RezervacijaModal;
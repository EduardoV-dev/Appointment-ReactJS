import React, { Fragment, useState } from 'react';
import uniqid from 'uniqid';

const Form = ({ appointments, setAppointments }) => {

    // State for inputs
    const [input, setInput] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    });

    // State for errors
    const [error, setError] = useState(false);

    // Destructure input values

    const { pet, owner, date, time, symptoms } = input;

    const inputEntry = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const createAppointment = e => {
        e.preventDefault();

        // Validate info
        if (pet === '' || owner === '' || date === '' || time === '' || symptoms === '') {
            setError(true);
            return;
        }
        setError(false);

        input.id = uniqid();

        setAppointments([...appointments, input]);

        // Clear fields

        setInput({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptoms: ''
        });
    }

    return (
        <Fragment>
            <h1>Desde formulario</h1>
            {error ? <p className="alert alert-danger">Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={createAppointment}
            >
                <div className="form-group">
                    <label>Nombre Mascota</label>
                    <input
                        type="text"
                        name="pet"
                        placeholder="Nombre de la Mascota"
                        className="form-control"
                        value={pet}
                        onChange={inputEntry}
                    />
                </div>
                <div className="form-group">
                    <label>Nombre Dueño</label>
                    <input
                        type="text"
                        name="owner"
                        placeholder="Nombre del dueño"
                        className="form-control"
                        value={owner}
                        onChange={inputEntry}
                    />
                </div>
                <div className="form-group">
                    <label>Fecha</label>
                    <input
                        type="date"
                        name="date"
                        className="form-control"
                        value={date}
                        onChange={inputEntry}
                    />
                </div>
                <div className="form-group">
                    <label>Hora</label>
                    <input
                        type="time"
                        name="time"
                        placeholder="Nombre de la Mascota"
                        className="form-control"
                        value={time}
                        onChange={inputEntry}
                    />
                </div>
                <div className="form-group">
                    <label>Sintomas</label>
                    <textarea
                        name="symptoms"
                        className="form-control"
                        value={symptoms}
                        onChange={inputEntry}
                    ></textarea>
                </div>

                <button
                    className="btn btn-primary btn-block"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}


export default Form;
import React from 'react';

const Appointment = ({ appointment, appointments, setAppointments }) => {

    const {pet, owner, date, time, symptoms, id} = appointment;

    const deleteAppointment = id => {
        const newAppointments = appointments.filter(appointment => appointment.id !== id);
        setAppointments(newAppointments);
    }

    return (
        <div className="cita">
            <p>Mascota: <span>{pet}</span></p>
            <p>Dueño: <span>{owner}</span></p>
            <p>Fecha: <span>{date}</span></p>
            <p>Hora: <span>{time}</span></p>
            <p>Sintomas: <span>{symptoms}</span></p>

            <button
                className="btn btn-danger btn-block mt-4"
                onClick={() => deleteAppointment(id)}
            >Eliminar &times;</button>
        </div>
    );
}

export default Appointment;
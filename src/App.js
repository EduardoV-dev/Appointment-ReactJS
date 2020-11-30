import React, { useState, useEffect } from 'react';
import './index.css';
import Form from './Components/Form';
import Appointment from './Components/Appointment';

function App() {
  // State for appointments
  let existingAppointments = JSON.parse(localStorage.getItem('appointments'));

  if (!existingAppointments) {
    existingAppointments = [];
  }

  const [appointments, setAppointments] = useState(existingAppointments);

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  },  [appointments]);

  // Message for appointments in order to show if there's any
  const message = appointments.length === 0 ? "No Hay Citas" : "Administra tus Citas";

  return (
    <main className="container">
      <div className="row justify-content-between">
        <div className="col-12 col-md-5">
          <Form
            appointments={appointments}
            setAppointments={setAppointments}
          />
        </div>
        <div className="col-12 col-md-5">
          <h1>{message}</h1>
          <div className="appointments-container">
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                appointments={appointments}
                setAppointments={setAppointments}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

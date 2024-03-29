import React from 'react';
import { format } from 'date-fns';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots,price } = appointmentOption;
  return (
      <div className="card shadow-2xl">
          <div className="card-body text-center">
              <h2 className="text-3xl  font-bold text-center">{name}</h2>
              <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
              <p><span className='text-primary'>{slots.length}</span> {slots.length > 1 ? 'spaces' : 'space'} available</p>
              <p>Price : $<strong>{price}</strong> </p>
              <div className="card-actions justify-center">
                  <label
                      disabled={slots.length === 0}
                      htmlFor="booking-modal"
                      className="btn btn-primary text-white"
                      onClick={() => setTreatment(appointmentOption)}
                  >Book Appointment</label>
              </div>
          </div>
      </div>
  );
};

export default AppointmentOption;
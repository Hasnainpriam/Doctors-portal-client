import React, { useState } from 'react';
import AppoitmentBanner from '../AppointmentBanner/AppoitmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
      <div>
          <AppoitmentBanner
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
          ></AppoitmentBanner>
          <AvailableAppointments
              selectedDate={selectedDate}
          ></AvailableAppointments>
      </div>
  );
};

export default Appointment;
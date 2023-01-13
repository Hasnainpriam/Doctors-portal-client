import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';
import arrow from '../../../assets/arrow-down-svgrepo-com.svg'

const AvailableAppointments = ({ selectedDate }) => {

  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
      fetch('appointmentOptions.json')
          .then(res => res.json())
          .then(data => setAppointmentOptions(data))
  }, [])

  return (
      <section className='my-16'>
          <hr className='lg:my-12 sm:mb-2'/>
          <p className='text-center  font-bold'>Available Appointments on <span className='text-primary'>{format(selectedDate, 'PP')}</span> </p>
           <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 mx-5'>
              {
                  appointmentOptions.map(option => <AppointmentOption
                      key={option._id}
                      appointmentOption={option}
                      setTreatment={setTreatment}
                  ></AppointmentOption>)
              }
          </div>
          {
              treatment &&
              <BookingModal
                  selectedDate={selectedDate}
                  treatment={treatment}
                  setTreatment={setTreatment}
              ></BookingModal>
          }
      </section>
  );
};

export default AvailableAppointments;
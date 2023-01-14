import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {

    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    });
    if(isLoading){
        return (
            <div className="grid justify-items-center my-6 ">
              <button className="btn btn-lg btn-ghost loading ">loading</button>
            </div>
          )
    }
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
                  refetch={refetch}
              ></BookingModal>
          }
      </section>
  );
};

export default AvailableAppointments;
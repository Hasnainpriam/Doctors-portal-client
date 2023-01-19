import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const AllAppointments = () => {

  const today = new Date();

  const date = format(today, 'PP');

  console.log(date);

  const { data: bookingsToday = [], refetch, isLoading } = useQuery({
    queryKey: ['bookingsToday', date],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/bookingstoday?date=${date}`);
        const data = await res.json();
        return data
    }
});

if(isLoading){
  return <Loading></Loading>
}

  return (
    <div>
    <h2 className="text-4xl my-4">All Appointments Today : {bookingsToday?.length}</h2>
    <div className="overflow-x-auto">
              <table className="table w-full">
                  <thead>
                      <tr>
                          <th>Serial No.</th>
                          <th>Name</th>
                          <th>Treatment</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Payment</th>
                      </tr>
                  </thead>
                  <tbody>
                      {   
                          bookingsToday?.map((booking, i) => <tr key={booking._id}>
                              <th>{i+1}</th>
                              <td>{booking.patient}</td>
                              <td>{booking.treatment}</td>
                              <td>{booking.appointmentDate}</td>
                              <td>{booking.slot}</td>
                             <td>
                              {
                                !booking.paid && <Link
                                to={`/dashboard/payment/${booking._id}`}>
                                <button className='btn btn-sm btn-error'>Didn't Pay</button>
                            </Link> 
                               }
                               
                                {
                                    booking.price && booking.paid && <span className='text-green-600'>Paid</span>
                                }
                               
                            </td>
                              </tr>)
                      }
                  </tbody>
              </table>
          </div>



    </div>

  );
};

export default AllAppointments;
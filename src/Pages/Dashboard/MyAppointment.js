import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Loading/Loading';

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] ,isLoading } = useQuery({
      queryKey: ['bookings', user?.email],
      queryFn: async () => {
          const res = await fetch(url, {
              headers: {
                 authorization: `bearer ${localStorage.getItem('accessToken')}` 
              }
          });
          const data = await res.json();
          return data;
      }
  })

  if(isLoading){
    return <Loading></Loading>
}

  return (
      <div>
          <h3 className="text-4xl my-4">My Appointments</h3>
          <div className="overflow-x-auto">
              <table className="table w-full">
                  <thead>
                      <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Treatment</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Price</th>
                          <th>Payment</th>
                      </tr>
                  </thead>
                  <tbody>
                      {   
                          bookings?.map((booking, i) => <tr key={booking._id}>
                              <th>{i+1}</th>
                              <td>{booking.patient}</td>
                              <td>{booking.treatment}</td>
                              <td>{booking.appointmentDate}</td>
                              <td>{booking.slot}</td>
                              <td>$ {booking.price}</td>
                             <td>
                              {
                                booking.price && !booking.paid && <Link
                                to={`/dashboard/payment/${booking._id}`}>
                                <button className='btn btn-sm btn-primary'>Pay</button>
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

export default MyAppointment;
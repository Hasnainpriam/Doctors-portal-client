import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {

    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking;

    return (
        <div className='ml-4'>
        <h3 className="text-3xl my-2">Payment for {treatment}</h3>
        <p className="text-xl my-2">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
        <div className='w-96 my-12 my-2'>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    booking={booking}
                />
            </Elements>
        </div>
    </div>
    );
};

export default Payment;
import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Hospitals from '../Hospitals/Hospitals';
import InfoCards from '../InfoCards/InfoCards';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (

    <>
      <Banner></Banner>
      <InfoCards></InfoCards>   
      <Care></Care> 
      <Hospitals></Hospitals>
      <Testimonials></Testimonials>
    </>
      
  );
};

export default Home;
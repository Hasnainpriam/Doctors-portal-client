import React from 'react';
import clock from'../../../assets/clock.623246e126ee58a8d90f2460c08c0f6b.svg'
import marker from'../../../assets/marker.0bdab1635363afd723adbfe035c3358e.svg'
import phone from'../../../assets/phone.0b1c25f70938a97d59d5c7c1796f0b61.svg'
import InfoCard from './InfoCard'

const InfoCards = () => {
  const cardData = [
    {
        id: 1,
        name: 'Opening Hours',
        description: 'Open 9.00 am to 5.00pm everyday',
        icon: clock,
        bgClass: 'bg-indigo-400'
    },
    {
        id: 2,
        name: 'Our Locations',
        description: '9R4G+52X, Late Alhaj Zahur Ahmed Chowdhury Rd, Chattogram',
        icon: marker,
        bgClass: 'bg-indigo-500'
    },
    {
        id: 3,
        name: 'Contact Us',
        description: '+8801713-998199 ',
        icon: phone,
        bgClass: 'bg-indigo-400'
    },
]

return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-24 px-10 mt-32'>
        {
            cardData.map(card => <InfoCard
                key={card.id}
                card={card}
            ></InfoCard>)
        }
    </div>
);
};

export default InfoCards;
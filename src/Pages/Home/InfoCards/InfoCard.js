import React from 'react';

const InfoCard = ({card}) => {
  const { name, description, icon, bgClass } = card;
  return (
      <div className={`card lg:card-side shadow-xl text-white lg:px-8 py-2 mb-10 ${bgClass}`}>
          <figure>
              <img src={icon} alt="Movie" />
          </figure>
          <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
          </div>
      </div>
  );
};

export default InfoCard;
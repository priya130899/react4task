import React from 'react';
import backgroundImageOne from './images/bg-showcase-1.jpg';
import backgroundImageTwo from './images/bg-showcase-2.jpg';
import backgroundImageThree from './images/bg-showcase-3.jpg';

function Card({ data }) {
  const isEvenIndex = data.index % 2 === 0;

  let backgroundImage;

  if (data.image === "./images/bg-showcase-1.jpg") {
    backgroundImage = backgroundImageOne;
  } else if (data.image === "./images/bg-showcase-2.jpg") {
    backgroundImage = backgroundImageTwo;
  } else if (data.image === "./images/bg-showcase-3.jpg") {
    backgroundImage = backgroundImageThree;
  } else {
    // Handle other cases or set a default image
    backgroundImage = backgroundImageOne;
  }

  return (
    <div className="row g-0">
      <div className={`col-lg-6 ${isEvenIndex ? 'order-lg-2' : 'order-lg-1'} text-white showcase-img`} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className={`col-lg-6 ${isEvenIndex ? 'order-lg-1' : 'order-lg-2'} my-auto showcase-text`}>
        <h2>{data.title}</h2>
        <p className="lead mb-0">{data.about}</p>
      </div>
    </div>
  );
}

export default Card;

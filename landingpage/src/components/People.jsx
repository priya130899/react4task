import React from 'react'
import peopleImage from './images/testimonials-1.jpg';
import peopleImageone from './images/testimonials-2.jpg';
import peopleImagetwo from './images/testimonials-3.jpg';

function People({data}) {
    let backgroundImage;

    if (data.Peopleimage === "./images/testimonials-1.jpg") {
        backgroundImage = peopleImage;
    } else if (data.Peopleimage === "./images/testimonials-2.jpg") {
        backgroundImage = peopleImageone;
    } else if (data.Peopleimage === "./images/testimonials-3.jpg") {
        backgroundImage = peopleImagetwo;
    } else {
        // Handle other cases or set a default image
        backgroundImage = peopleImage;
    }
  return <> 
    <div class="col-lg-4">
        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3"  src={backgroundImage} alt="..." />
            <h5>{data.name}</h5>
            <p class="font-weight-light mb-0">{data.details}</p>
        </div>
    </div>
  </>
}

export default People
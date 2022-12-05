import React from 'react'
import "./testimonials.css"


const TestimonialSlides = (props) => {
  return (
    <div className='t-slide'>
        <img class='t-profile'
          src={props.profile} alt='profile pic'
        />
        <h5 className='t-name'>
          {props.name}
        </h5>
        <p>
            {props.description}
        </p>
    </div>
  )
}

export default TestimonialSlides
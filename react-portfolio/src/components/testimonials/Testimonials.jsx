import React from 'react'
import testimonialData from "./testimoialData";
import TestimonialSlides from './TestimonialSlides';
import "./testimonials.css"
import { Pagination } from 'swiper';
import { Swiper ,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = (props) => {
  return (
    <section id="testimonials">
      <h5>Reviwq from clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className='slide-container'
        modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          testimonialData.map((content)=>{
            return (<SwiperSlide><TestimonialSlides
              name={content.name}
              profile={content.profile}
              description={content.description}
            /></SwiperSlide>)
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
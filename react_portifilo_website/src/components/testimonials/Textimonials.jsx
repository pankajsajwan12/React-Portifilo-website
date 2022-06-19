import React from 'react'
import './testimonials.css'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image:'img1',
    name:'Rushikesh Yerme',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto, reiciendis consectetur in soluta dicta fuga ullam quod sapiente minima, laudantium, voluptatum error itaque similique veritatis ea tempora voluptatibus unde.'
  },
  {
    image:'img2',
    name:'Shivam shinde',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto, reiciendis consectetur in soluta dicta fuga ullam quod sapiente minima, laudantium, voluptatum error itaque similique veritatis ea tempora voluptatibus unde.'
  },
  {
    image:'img3',
    name:'Prathmesh Nerle',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto, reiciendis consectetur in soluta dicta fuga ullam quod sapiente minima, laudantium, voluptatum error itaque similique veritatis ea tempora voluptatibus unde.'
  },
  {
    image:'img4',
    name:'Shivaji zirpe',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto, reiciendis consectetur in soluta dicta fuga ullam quod sapiente minima, laudantium, voluptatum error itaque similique veritatis ea tempora voluptatibus unde.'
  },
  {
    image:'img5',
    name:'Sharad Yadav',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto, reiciendis consectetur in soluta dicta fuga ullam quod sapiente minima, laudantium, voluptatum error itaque similique veritatis ea tempora voluptatibus unde.'
  }
]

const Textimonials = () => {
  return (
    <section id="textimonials">
      <h5>Review from Deveplor Teammate</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        data.map(({ name, review},index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src="" alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          )
        })
      }   
      </Swiper>
    </section>
  )
}

export default Textimonials
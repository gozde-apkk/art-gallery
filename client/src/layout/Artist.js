


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../style/style.css'
const Artist = () => {
  return (
    <div className='artist-container'>
        <div className='artist-title'>
        <h1>The Artist</h1>
        </div>
        <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Artist

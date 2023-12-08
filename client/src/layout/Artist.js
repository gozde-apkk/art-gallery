


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {artists} from '../data/artist'
import 'swiper/css';
import '../style/style.css'
const Artist = () => {

  return (
    <div style={{
    
     height:"160rem",
     color:"white",

    }
    } className='artist-container'>
        <div className='artist-title'>
        <h1>THE ARTIST</h1>
        </div>
        <Swiper style={{
          border : "1px solid",
          width: "100%",
          height:"23rem"
        }}
        slidesPerView={5}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {artists.map((artist) => (
         <SwiperSlide key={artist.id}>
           <img src={artist.img} alt={artist.name} />
           <p>{artist.name}</p>
         </SwiperSlide>
       ))}
    
      </Swiper>
   
    </div>
  )
}

export default Artist

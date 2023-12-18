


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {artists} from '../data/artist'
import 'swiper/css';
import '../style/style.css'
const Artist = () => {

  return (
    <div style={{
     color:"white",

    }
    } className='flex h-full bg-black flex-col'>
        <div className='text-aliceblue  text-4xl flex justify-center m-10'>
        <h1>THE ARTIST</h1>
        </div>
        <Swiper style={{
          width: "100%",
          height:"23rem"
        }}
        slidesPerView={5}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {artists.map((artist) => (
         <SwiperSlide  className=' backdrop-blur-3xl' key={artist.id}>
          <div  style={{border: "40px solid #1a181861"}} className='w-full h-full '>
          <div className='flex items-end'>
          <img  className='w-[300px] mr-3 blur sticky shadow-lg shadow-red-500/50 ' src={artist.img} alt={artist.name} />
          <img  style={{width:"90px", height:"90px", left:"105px"}} className='w-3 absolute  h-5 mr-3 p-2 shadow-lg shadow-red-500/50 ' src={artist.img} alt={artist.name} />
          </div>
          <div style={{fontSize:"large", height:"58px" , transition: "background-color 0.5s", marginRight:"5px"}}>
          <p className='h-full mt-7'>{artist.name}</p>
          <button id='btn-1' className='w-40 text-white font-bold py-2 px-4 rounded'>+Follow</button>
          </div>
          </div>
         </SwiperSlide>
       ))}
    
      </Swiper>
   
    </div>
  )
}

export default Artist

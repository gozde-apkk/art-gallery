



import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HomeProductCard from './HomeProductCard';

const HomeProduct = () => {

    const responsive = {
        0 : {items : 1},
        720: {items : 3},
        1024 : {items : 5}
    }
    const items = [1,1,1,1,1,1,].map((item) => <HomeProductCard />)
  return (
    <div className='w-full p-1 h-[21rem]'>
       <div className='relative p-5'>
       <AliceCarousel
                items={items}
                responsive={responsive}
                disableButtonsControls
                autoPlay
                autoPlayInterval={5000}
                infinite
            />
            

            <Button variant="contained" className=" bg-black top-[113px] hover:bg-white ml-5 mt-40" sx={{position: "absolute", top: "30%", right: "0%", backgroundColor: "black", marginBottom: "7rem",transform: "translateX(-50%) rotate(90deg)", ":hover":{backgroundColor: "white"}}}>
              <KeyboardArrowRightIcon sx={{transform: "rotate(90deg)" , color: "white"}}/>
            </Button>
            <Button variant="contained" className=" bg-black top-[113px] hover:bg-white" sx={{position: "absolute", top: "30%", left: "0%", backgroundColor: "black", marginBottom: "7rem",transform: "translateX(50%) rotate(90deg)" }}>
              <KeyboardArrowLeftIcon sx={{transform: "rotate(90deg)" , color: "white", background: "black"}}/>
            </Button>
       </div>
    </div>
  )
}

export default HomeProduct

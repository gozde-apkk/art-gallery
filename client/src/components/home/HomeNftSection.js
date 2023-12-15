



import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from './HomeSectionCard'
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useState} from 'react'
import { nft_data } from '../../data/nftdata';

const HomeNftSection = () => {
   
  const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0 : {items : 1},
        720: {items : 3},
        1024 : {items : 5}
    }
    const slidePrev = () => setActiveIndex(activeIndex-1);
    const slideNext= () => setActiveIndex(activeIndex+1);

    const syncActiveIndex = ({item}) => setActiveIndex(item);
    const items = nft_data.map((item) => <HomeSectionCard props={item}/>)
  return (
    <div className='w-full p-1 h-[27rem] '>
       <div className='relative  h-[23rem] p-5'>
       <AliceCarousel
       className="relative"
                items={items}
                responsive={responsive}
                disableButtonsControls
              
                infinite
                disableDotsControls
                onSlideChange={syncActiveIndex}
                activeIndex={activeIndex}
            />
            

           {activeIndex !== items.length-5 && 
            <Button onClick={slideNext} variant="contained" className=" bg-black top-[113px] hover:bg-white ml-5 mt-40" sx={{position: "absolute", top: "30%", right: "0%", backgroundColor: "black", marginBottom: "7rem",transform: "translateX(-50%) rotate(90deg)", ":hover":{backgroundColor: "white"}}}>
            <KeyboardArrowRightIcon sx={{transform: "rotate(90deg)" , color: "white"}}/>
          </Button>}
            <Button variant="contained" className=" bg-black top-[113px] hover:bg-white" sx={{position: "absolute", top: "30%", left: "0%", backgroundColor: "black", marginBottom: "7rem",transform: "translateX(50%) rotate(90deg)" }}>
              <KeyboardArrowLeftIcon sx={{transform: "rotate(90deg)" , color: "white", background: "black"}}/>
            </Button>
       </div>
    </div>
  )
}

export default HomeNftSection

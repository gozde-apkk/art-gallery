import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState } from 'react';
import { mainCarouselData } from './MainCarouseData.js';



const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


const MainCarousel = () => {

     const items = mainCarouselData.map((item) => {
        return (
            <img key={item.id} className='cursor-pointer' role='presentation' src={item.img}/>
        )
     }
     );

    return (
        <section>
            <AliceCarousel
                mouseTracking
                keyboardNavigation
                items={items}
            />
        </section>
    );
};

export default MainCarousel;
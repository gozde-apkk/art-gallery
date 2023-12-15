




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';

const nft = [
  {id : 0, 
   img: "./product/nft1.jpg"
  },
  {id : 1, 
    img: "./product/nft1.jpg"
   },
   {id : 2, 
    img: "./product/nft1.jpg"
   },
   {id : 3, 
    img: "./product/nft1.jpg"
   },
   {id : 4, 
    img: "./product/nft1.jpg"
   },
   {id : 5, 
    img: "./product/nft1.jpg"
   }
]

const NftSwipper =  () =>  {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <Swiper
    className="bg-white w-full"
    onSwiper={setSwiperRef}
    slidesPerView={3}
    centeredSlides={true}
    spaceBetween={30}
    pagination={{
      type: 'fraction',
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    >
      {nft.map((item) => {
        <SwiperSlide>Slide 1</SwiperSlide>
      })}
      ...
    </Swiper>
  );
};

export default NftSwipper
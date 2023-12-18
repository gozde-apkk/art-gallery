import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";

import { useState } from "react";
import { nft_data } from "../../data/nft_data";
import { fake_data } from "../../data/fakedata";
import { canvas_data } from "../../data/canvas_data";
import { digital_data } from "../../data/digital_data";
import "./style.css"

const HomeNftSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };
  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
  }
  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
  }
  const items = [
    {
      id: 0,
      title: "NFT",
      items: nft_data.map((item) => (
        <HomeSectionCard key={item.id} props={item} />
      )),
    },
    {
      id: 1,
      title: "DIGITAL",
      items: digital_data.map((item) => <HomeSectionCard props={item} />),
    },
    {
      id: 2,
      title: "CANVAS",
      items: canvas_data.map((item) => <HomeSectionCard props={item} />),
    },
  ];

  return (
    <div className="w-full p-1 ">
      <div className="relative p-10">
        {items.map((item) => (
          <div className="my-10 h-26 " key={item.id}>
            <h1
              style={{ color: "crimson" }}
              className=" mb-6 text-center text-4xl"
            >
              {item.title}
            </h1>

            <div className="w-full h-full text-center text-white">
              <AliceCarousel
                className="relative w-1"
                items={item.items}
                
                responsive={responsive}
                disableDotsControls
              
              />
            </div>

            {/* {activeIndex < items.length - 1  && (
              <div className="w-full h-8 relative flex justify-around bottom-60">
                <Button
                 onClick={slidePrev}
                  variant="contained"
                  className=" bg-black  hover:bg-white"
                  sx={{
                    right : '20rem',
                    backgroundColor: "black",
                    transform: "translateX(-50%) rotate(90deg)",
                    ":hover": { backgroundColor: "white" ,  },
                  }}
                >
                  <KeyboardArrowRightIcon
                    sx={{ transform: "rotate(90deg)", color: "white" , ":hover": { color: "black" } }}
                  />
                </Button>

                <Button
                  variant="contained"
                  onClick={slideNext}
                  className=" bg-black hover:bg-white"
                  sx={{
                     left: '18rem',
                    backgroundColor: "black",
                    ":hover": { backgroundColor: "white" },
                    transform: "translateX(50%) rotate(90deg)",
                  }}
                >
                  <KeyboardArrowLeftIcon
                    sx={{
                      transform: "rotate(90deg)",
                      color: "white",
                      ":hover": { color: "black" },
                     
                    }}
                  />
                </Button>
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeNftSection;

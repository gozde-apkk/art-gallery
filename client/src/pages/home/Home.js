import React from "react";

import { Link } from "react-router-dom";
import "../../style/style.css";
import Artist from "../../layout/Artist";
import HomeNftSection from "../../components/home/HomeNftSection";
import Footer from "../../components/footer/Footer";
import HomeInfoBox from "../../customer/components/HomeInfoBox";

const Home = () => {
  return (
    <div className="w-full h-full text-white bg-black">
      <div className="flex-grow flex-1 mx-auto  my-5 w-full max-w-screen-xl ">
        <div className="py-20 md:px-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold px-2.5  tracking-tight text-gray-300 sm:text-6xl">
            Creavity is internal expression of{" "}
            <span
              style={{
                color: "crimson",
              }}
            >
              {" "}
              digital assets{" "}
            </span>
            .{" "}
          </h1>{" "}
          <div className="flex flex-col text-white sm:flex-row gap-4 mt-6">
            <Link href="/products" className="p-9 hover:text-crimson">
              Browse Trending{" "}
            </Link>{" "}
            <button> Our quality promise & rarr; </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className=" h-full w-full justify-center flex flex-col">
        <HomeNftSection />

        <Artist />
        <HomeInfoBox />
        <Footer />
      </div>{" "}
    </div>
  );
};

export default Home;
